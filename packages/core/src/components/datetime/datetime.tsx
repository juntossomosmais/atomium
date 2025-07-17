import {
  DatetimeChangeEventDetail,
  DatetimeCustomEvent,
  DatetimeHighlight,
  DatetimeHighlightCallback,
  DatetimePresentation,
} from '@ionic/core'
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core'

type TValue =
  | string
  | string[]
  | DatetimeCustomEvent
  | DatetimeChangeEventDetail

@Component({
  tag: 'atom-datetime',
  styleUrl: 'datetime.scss',
  scoped: true,
})
export class AtomDatetime {
  @Element() element!: HTMLElement

  @Prop() label?: string
  @Prop() cancelText?: string
  @Prop() clearText?: string
  @Prop() datetimeId = 'datetime'
  @Prop() dayValues?: number[] | string
  @Prop() disabled?: boolean
  @Prop() doneText?: string
  @Prop() formatOptions: {
    date?: Intl.DateTimeFormatOptions
    time?: Intl.DateTimeFormatOptions
  } = {
    date: {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    },
    time: {
      hour: '2-digit',
      minute: '2-digit',
    },
  }
  @Prop() highlightedDates?: DatetimeHighlight[] | DatetimeHighlightCallback
  @Prop() hourCycle: 'h12' | 'h23' = 'h23'
  @Prop() hourValues?: number[] | string
  @Prop() locale = 'pt-BR'
  @Prop() isDateEnabled?: (dateString: string) => boolean
  @Prop() max?: string
  @Prop() min?: string
  @Prop() minuteValues?: number[] | string
  @Prop() monthValues?: number[] | string
  @Prop() multiple?: boolean
  @Prop() name?: string
  @Prop() preferWheel = false
  @Prop() presentation?: DatetimePresentation = 'date'
  @Prop() rangeMode?: boolean
  @Prop() readonly?: boolean
  @Prop() showClearButton?: boolean
  @Prop() showDefaultButtons?: boolean
  @Prop() showDefaultTimeLabel = false
  @Prop() showDefaultTitle = false
  @Prop() useButton = false
  @Prop() size?: 'cover' | 'fixed' = 'fixed'
  @Prop({ mutable: true, reflect: true }) value?: TValue

  @Prop() yearValues?: number[] | string

  // Internal state to hold the *actual* dates selected/highlighted by ion-datetime
  @State() selectedDates: string[] | undefined = undefined

  // Internal state specifically for the `ion-datetime`'s `value` prop due to the workaround
  @State() private ionDatetimeValue: string[] | undefined = undefined

  @Event() atomFocus!: EventEmitter<void>
  @Event() atomBlur!: EventEmitter<void>
  @Event() atomChange!: EventEmitter<string | string[] | undefined>
  @Event() atomCancel!: EventEmitter<void>

  private _datetimeEl!: HTMLIonDatetimeElement

  get datetimeEl(): HTMLIonDatetimeElement {
    return this._datetimeEl
  }

  set datetimeEl(value: HTMLIonDatetimeElement) {
    this._datetimeEl = value
  }

  /**
   * Helper to normalize the incoming `value` prop into a string array.
   * This ensures `this.value` is consistently treated as an array internally.
   */
  private normalizeValue(val: TValue): string[] | undefined {
    if (!val) {
      return undefined
    }

    if (Array.isArray(val)) {
      return val as string[]
    }

    if (typeof val === 'string') {
      return [val]
    }

    if (typeof (val as DatetimeCustomEvent).detail?.value === 'string') {
      return [(val as DatetimeCustomEvent).detail.value as string]
    }

    if (Array.isArray((val as DatetimeCustomEvent).detail?.value)) {
      return (val as DatetimeCustomEvent).detail.value as string[]
    }

    return undefined
  }

  componentWillLoad() {
    const normalizedValue = this.normalizeValue(this.value)

    if (this.rangeMode && normalizedValue) {
      this.selectedDates = this.calculateDateRange(normalizedValue)
    } else {
      this.selectedDates = normalizedValue
    }

    // Set internal ionDatetimeValue for initial render with delay to avoid Ionic's bug with dynamic value updates
    setTimeout(() => {
      this.ionDatetimeValue = this.selectedDates
    }, 0)
  }

  @Watch('value')
  onValueChange(newValue: TValue) {
    // Keep `any` here if DatetimeCustomEvent type is strict
    const normalizedValue = this.normalizeValue(newValue)

    if (this.rangeMode && normalizedValue) {
      this.selectedDates = this.calculateDateRange(normalizedValue)
    } else {
      this.selectedDates = normalizedValue
    }

    // Always update the internalDatetimeValue after a tick, it's to avoid a Ionic's bug with dynamic value updates
    setTimeout(() => {
      this.ionDatetimeValue = this.selectedDates
    }, 0)
  }

  private handleRangeMode(dates: string[]) {
    // Ensure dates are sorted for consistent range calculation
    const sortedDates = [...dates].sort()

    if (sortedDates.length === 2) {
      this.selectedDates = this.calculateDateRange(sortedDates)
    } else if (sortedDates.length === 1) {
      // If only one date is selected in range mode, and we already had two,
      // reset to just the one. Otherwise, append.
      this.selectedDates =
        this.selectedDates && this.selectedDates.length === 2
          ? sortedDates
          : [...(this.selectedDates || []), ...sortedDates]
    } else {
      this.selectedDates = undefined
    }

    // Trigger re-render for button text update and emit change
    // Use a new array reference to ensure Stencil detects the change if contents are same but reference isn't
    this.selectedDates = this.selectedDates
      ? [...this.selectedDates]
      : undefined
    this.atomChange.emit(this.selectedDates)
  }

  private handleDateChange = (
    event: CustomEvent<DatetimeChangeEventDetail>
  ) => {
    // Normalize event.detail.value to always be an array for internal handling consistency
    const rawDates = Array.isArray(event.detail.value)
      ? (event.detail.value as string[])
      : [event.detail.value as string]

    if (this.rangeMode) {
      this.handleRangeMode(rawDates)
    } else {
      // For single date selection, emit the single string value or array of one
      this.atomChange.emit(rawDates.length > 0 ? rawDates[0] : undefined)
    }
  }

  private readonly handleBlur = () => {
    this.atomBlur.emit()
  }

  private readonly handleFocus = () => {
    this.atomFocus.emit()
  }

  private readonly handleCancel = () => {
    this.atomCancel.emit()
  }

  private calculateDateRange(dates: string[]): string[] {
    if (dates.length < 2) return dates

    // IMPORTANT: Use parseLocalDate to ensure dates are treated in local timezone
    let [start, end] = dates.map((dateStr) => this.parseLocalDate(dateStr))

    if (start.getTime() > end.getTime()) {
      [start, end] = [end, start]
    }

    const dayMilliseconds = 1000 * 60 * 60 * 24
    const daysDifference = Math.round(
      Math.abs((end.getTime() - start.getTime()) / dayMilliseconds)
    )

    const dateRange: string[] = []

    for (let i = 0; i <= daysDifference; i++) {
      const currentDate = new Date(start)

      currentDate.setDate(start.getDate() + i)
      dateRange.push(this.formatDateToISOString(currentDate))
    }

    return dateRange
  }

  /**
   * Parses a 'YYYY-MM-DD' string into a Date object set at midnight in the local timezone.
   */
  private parseLocalDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number)

    // Use new Date(year, monthIndex, day) to create a Date object in the local timezone
    // Note: month is 0-indexed for Date constructor
    return new Date(year, month - 1, day)
  }

  /**
   * Formats a Date object into a 'YYYY-MM-DD' string, ensuring local date.
   */
  private formatDateToISOString(date: Date): string {
    // Get local year, month, day
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  private getRangeLabel(): string | null {
    if (!this.rangeMode || !this.selectedDates || this.selectedDates.length < 2)
      return null

    // Ensure selectedDates are sorted to correctly pick start and end of range
    const sortedSelectedDates = [...this.selectedDates].sort()
    const [start, end] = [
      sortedSelectedDates[0],
      sortedSelectedDates[sortedSelectedDates.length - 1],
    ]

    const startDate = this.parseLocalDate(start)
    const endDate = this.parseLocalDate(end)

    const format = (date: Date) =>
      date.toLocaleDateString(this.locale || 'pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })

    return `${format(startDate)} - ${format(endDate)}`
  }

  private getDateTargetSlot(): React.ReactNode {
    if (!this.rangeMode) return <slot name='date-target' />

    if (!this.selectedDates || this.selectedDates.length === 0) {
      return <span slot='date-target'>Selecionar data</span>
    }

    if (this.selectedDates.length === 1) {
      const date = this.parseLocalDate(this.selectedDates[0])
      const formatted = date.toLocaleDateString(this.locale || 'pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })

      return <span slot='date-target'>{formatted}</span>
    }

    return (
      <span slot='date-target' class='custom-date-target'>
        {this.getRangeLabel()}
      </span>
    )
  }

  private renderDatetime() {
    return (
      <ion-datetime
        ref={(el) => (this.datetimeEl = el as HTMLIonDatetimeElement)}
        class='atom-datetime'
        color='secondary'
        cancelText={this.cancelText}
        clearText={this.clearText}
        dayValues={this.dayValues}
        disabled={this.disabled}
        doneText={this.doneText}
        formatOptions={this.formatOptions}
        highlightedDates={this.highlightedDates}
        hourCycle={this.hourCycle}
        hourValues={this.hourValues}
        id={this.datetimeId}
        isDateEnabled={this.isDateEnabled}
        locale={this.locale}
        max={this.max}
        min={this.min}
        multiple={this.multiple || this.rangeMode}
        mode='md'
        name={this.name}
        presentation={this.presentation}
        preferWheel={this.preferWheel}
        readonly={this.readonly}
        showClearButton={this.showClearButton}
        showDefaultButtons={this.showDefaultButtons}
        showDefaultTimeLabel={this.showDefaultTimeLabel}
        showDefaultTitle={this.showDefaultTitle}
        size={this.size}
        yearValues={this.yearValues}
        active-date={this.selectedDates?.[0]}
        value={this.ionDatetimeValue}
        onIonChange={this.handleDateChange}
        onIonCancel={this.handleCancel}
        onIonBlur={this.handleBlur}
        onIonFocus={this.handleFocus}
      >
        {this.showDefaultTimeLabel && (
          <span slot='time-label'>
            <slot name='time-label' />
          </span>
        )}
        {this.showDefaultTitle && (
          <span slot='title'>
            <slot name='title' />
          </span>
        )}
      </ion-datetime>
    )
  }

  render() {
    return (
      <Host>
        {this.useButton ? (
          <div>
            <div class='atom-item'>
              <ion-datetime-button
                class='atom-button'
                color='secondary'
                datetime={this.datetimeId}
                disabled={this.disabled}
                mode='md'
              >
                {this.getDateTargetSlot()}
                <slot name='time-target' />
              </ion-datetime-button>
              <span class='atom-label'>{this.label}</span>
              <atom-icon
                class='atom-icon'
                icon={
                  this.presentation === 'time'
                    ? 'clock-outline'
                    : 'calendar-today-outline'
                }
              />
            </div>
            <ion-popover
              keep-contents-mounted='true'
              show-backdrop='false'
              style={{ 'margin-top': '1px' }}
            >
              {this.renderDatetime()}
            </ion-popover>
          </div>
        ) : (
          this.renderDatetime()
        )}
      </Host>
    )
  }
}
