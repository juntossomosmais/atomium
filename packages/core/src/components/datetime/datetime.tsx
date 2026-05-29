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
  | undefined

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

  @State() selectedDates: string[] = []
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

  private filterEmptyStrings(arr: string[]): string[] | undefined {
    const filteredArray = arr.filter((item) => item?.trim() !== '')

    return filteredArray.length > 0 ? filteredArray : undefined
  }

  private handleStringValue(val: string): string[] | undefined {
    return val.trim() === '' ? undefined : [val]
  }

  private handleCustomEventValue(
    val: DatetimeCustomEvent
  ): string[] | undefined {
    const detailValue = val.detail?.value

    if (typeof detailValue === 'string') {
      return this.handleStringValue(detailValue)
    }

    if (Array.isArray(detailValue)) {
      return this.filterEmptyStrings(detailValue)
    }

    return undefined
  }

  private normalizeValue(val: TValue): string[] | undefined {
    if (!val) {
      return undefined
    }

    if (Array.isArray(val)) {
      return this.filterEmptyStrings(val)
    }

    if (typeof val === 'string') {
      return this.handleStringValue(val)
    }

    if (val && 'detail' in val && val.detail?.value !== undefined) {
      return this.handleCustomEventValue(val)
    }

    return undefined
  }

  componentWillLoad() {
    const normalizedValue = this.normalizeValue(this.value)

    if (this.rangeMode && normalizedValue) {
      this.selectedDates = this.calculateDateRange(normalizedValue)
    } else if (normalizedValue) {
      this.selectedDates = normalizedValue
    } else {
      this.selectedDates = []
    }

    // WORKAROUND: Ionic's ion-datetime can sometimes reset to a default year (e.g., 2021)
    // if its 'value' prop is set too early during component initialization or state updates.
    // Setting the value with a setTimeout(..., 0) allows the ion-datetime to fully render
    // before its value is programmatically applied, preventing this bug.
    setTimeout(() => {
      let valueToSet: string[] | undefined

      if (this.rangeMode) {
        valueToSet = [...this.selectedDates]
      } else {
        valueToSet =
          this.selectedDates.length > 0 ? [this.selectedDates[0]] : undefined
      }

      this.ionDatetimeValue = valueToSet
    }, 0)
  }

  @Watch('value')
  onValueChange(newValue: TValue) {
    const normalizedValue = this.normalizeValue(newValue)

    if (this.rangeMode && normalizedValue) {
      this.selectedDates = this.calculateDateRange(normalizedValue)
    } else if (normalizedValue) {
      this.selectedDates = normalizedValue
    } else {
      this.selectedDates = []
    }

    // WORKAROUND: See explanation in componentWillLoad. Applied on prop changes too.
    setTimeout(() => {
      let valueToSet: string[] | undefined

      if (this.rangeMode) {
        valueToSet = [...this.selectedDates]
      } else {
        valueToSet =
          this.selectedDates.length > 0 ? [this.selectedDates[0]] : undefined
      }

      this.ionDatetimeValue = valueToSet
    }, 0)
  }

  private handleRangeModeWithZeroDates() {
    this.selectedDates = []
  }

  private handleRangeModeWithOneDate(sortedDates: string[]) {
    this.selectedDates = sortedDates
  }

  private handleRangeModeWithTwoDates(sortedDates: string[]) {
    this.selectedDates = this.calculateDateRange(sortedDates)
  }

  private handleRangeModeWithMultipleDates(sortedDates: string[]) {
    const previousDates = new Set(this.selectedDates)
    const newDate = sortedDates.find((date) => !previousDates.has(date))

    if (newDate && this.selectedDates.length >= 2) {
      this.selectedDates = [newDate]
    } else {
      this.selectedDates = this.calculateDateRange([
        sortedDates[0],
        sortedDates[sortedDates.length - 1],
      ])
    }
  }

  private handleRangeMode(dates: string[]) {
    const sortedDates = [...dates].sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    )

    if (sortedDates.length === 0) {
      this.handleRangeModeWithZeroDates()
    } else if (sortedDates.length === 1) {
      this.handleRangeModeWithOneDate(sortedDates)
    } else if (sortedDates.length === 2) {
      this.handleRangeModeWithTwoDates(sortedDates)
    } else {
      this.handleRangeModeWithMultipleDates(sortedDates)
    }

    this.selectedDates = [...this.selectedDates]
    this.atomChange.emit(this.selectedDates)

    // WORKAROUND: See explanation in componentWillLoad. Applied after user range selection.
    setTimeout(() => {
      this.ionDatetimeValue = [...this.selectedDates]
    }, 0)
  }

  handleDateChange = (event: CustomEvent<DatetimeChangeEventDetail>) => {
    const rawValue = event.detail.value
    let dates: string[]

    if (Array.isArray(rawValue)) {
      dates = rawValue
    } else if (rawValue) {
      dates = [rawValue]
    } else {
      dates = []
    }

    if (this.rangeMode) {
      this.handleRangeMode(dates)

      return
    }

    // Fix: handle multiple mode (not range)
    if (this.multiple && !this.rangeMode) {
      this.selectedDates = dates
      this.atomChange.emit(this.selectedDates)

      // WORKAROUND: See explanation in componentWillLoad. Applied on prop changes too.
      setTimeout(() => {
        this.ionDatetimeValue = [...this.selectedDates]
      }, 0)

      return
    }

    const singleValue = dates.length > 0 ? dates[0] : undefined

    this.atomChange.emit(singleValue)

    // WORKAROUND: See explanation in componentWillLoad. Applied on prop changes too.
    setTimeout(() => {
      this.ionDatetimeValue = singleValue ? [singleValue] : undefined
    }, 0)
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

    let [start, end] = dates.map((dateStr) => this.parseLocalDate(dateStr))

    if (start.getTime() > end.getTime()) {
      ;[start, end] = [end, start]
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

  private parseLocalDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number)

    return new Date(year, month - 1, day)
  }

  private formatDateToISOString(date: Date): string {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  private getRangeLabel(): string | null {
    if (!this.rangeMode || this.selectedDates.length < 2) return null

    const sortedSelectedDates = [...this.selectedDates].sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    )
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

  private getDateTargetSlot() {
    if (!this.rangeMode) return <slot name='date-target' />

    if (this.selectedDates.length === 0) {
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
        max={this.max?.trim() || undefined}
        min={this.min?.trim() || undefined}
        minuteValues={this.minuteValues}
        monthValues={this.monthValues}
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
        value={
          this.multiple || this.rangeMode
            ? this.ionDatetimeValue
            : (this.ionDatetimeValue?.[0] ?? undefined)
        }
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

  private renderWithButton() {
    return (
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
    )
  }

  render() {
    if (this.useButton) {
      return <Host>{this.renderWithButton()}</Host>
    } else {
      return <Host>{this.renderDatetime()}</Host>
    }
  }
}
