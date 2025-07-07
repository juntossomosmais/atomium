import {
  DatetimeChangeEventDetail,
  DatetimeCustomEvent,
  DatetimeHighlight,
  DatetimeHighlightCallback,
  DatetimePresentation,
} from '@ionic/core'
import { JSX } from '@ionic/core/dist/types/components'
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
  @Prop({ mutable: true, reflect: true }) value?:
    | DatetimeCustomEvent
    | DatetimeChangeEventDetail
  @Prop() yearValues?: number[] | string

  @State() selectedDates: string[] = []

  @Event() atomFocus!: EventEmitter<void>
  @Event() atomBlur!: EventEmitter<void>
  @Event() atomChange!: EventEmitter<string | string[]>
  @Event() atomCancel!: EventEmitter<string>

  private _datetimeEl!: HTMLIonDatetimeElement

  componentWillLoad() {
    if (this.rangeMode && Array.isArray(this.value)) {
      this.selectedDates = this.calculateDateRange(this.value)
    }
  }

  componentDidLoad() {
    // Ensure the state is properly set after the component loads
    if (this.rangeMode && this.value && Array.isArray(this.value)) {
      this.selectedDates = this.calculateDateRange(this.value)
    }
  }

  @Watch('value')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onValueChange(newValue: any) {
    // Update selectedDates when value prop changes in range mode
    if (this.rangeMode && newValue) {
      if (Array.isArray(newValue)) {
        this.selectedDates = this.calculateDateRange(newValue)
      }
    }
  }

  private handleRangeMode(dates: string[]) {
    if (dates.length === 2) {
      // Calculate the full range between start and end dates
      this.selectedDates = [...this.calculateDateRange(dates)]
    } else if (dates.length === 1) {
      // If we previously had a range (more than 2 dates), start new selection
      // If we had 0 or 1 date, add to current selection
      this.selectedDates =
        this.selectedDates.length >= 2
          ? [...dates]
          : [...this.selectedDates, ...dates]
    } else {
      this.selectedDates = []
    }

    // Trigger re-render for button text update
    this.selectedDates = [...this.selectedDates]
    this.atomChange.emit(this.selectedDates)
  }

  private handleDateChange: JSX.IonDatetime['onIonChange'] = (event) => {
    const dates = Array.isArray(event.detail.value)
      ? event.detail.value
      : [event.detail.value]

    if (this.rangeMode) {
      this.handleRangeMode(dates)
    } else {
      this.atomChange.emit(event.detail.value)
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

    const [start, end] = dates.map((date) => new Date(date))

    const increment = start <= end ? 1 : -1
    const daysDifference = Math.abs(
      (end.getTime() - start.getTime()) / (1000 * 3600 * 24)
    )

    return Array.from({ length: daysDifference + 1 }, (_, i) => {
      const currentDate = new Date(start)

      currentDate.setDate(start.getDate() + i * increment)

      return currentDate.toISOString().split('T')[0]
    })
  }

  get datetimeEl(): HTMLIonDatetimeElement {
    return this._datetimeEl
  }

  set datetimeEl(value: HTMLIonDatetimeElement) {
    this._datetimeEl = value
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
        value={this.rangeMode ? this.selectedDates : this.value}
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
                <slot name='date-target' />
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
