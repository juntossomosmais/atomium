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
  Host,
  Method,
  Prop,
  State,
  h,
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
    date: Intl.DateTimeFormatOptions
    time: Intl.DateTimeFormatOptions
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

  get datetimeEl(): HTMLIonDatetimeElement {
    return this._datetimeEl
  }

  set datetimeEl(value: HTMLIonDatetimeElement) {
    this._datetimeEl = value
  }

  @Method()
  async setValue(value) {
    if (this.datetimeEl) {
      this.datetimeEl.value = value
    }
  }

  private handleBlur = () => {
    this.atomBlur.emit()
  }

  private handleFocus = () => {
    this.atomFocus.emit()
  }

  private handleCancel = () => {
    this.atomCancel.emit()
  }

  private calculateDateRange(dates: string[]): string[] {
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

  private handleRangeMode(dates: string[]) {
    if (dates.length === 2) {
      this.selectedDates = this.calculateDateRange(dates)
    } else if (dates.length === 1) {
      this.selectedDates =
        this.selectedDates.length === 2
          ? dates
          : this.selectedDates.concat(dates)
    } else {
      this.selectedDates = []
    }

    this.atomChange.emit(this.selectedDates)
  }

  private handleDateChange = (event) => {
    const dates = event.detail.value || []

    if (this.rangeMode) {
      this.handleRangeMode(dates)
    } else {
      this.atomChange.emit(event.detail.value)
    }
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
              ></ion-datetime-button>
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
