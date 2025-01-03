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
  h,
} from '@stencil/core'

@Component({
  tag: 'atom-datetime',
  styleUrl: 'datetime.scss',
  scoped: true,
})
export class AtomDatetime {
  @Element() element!: HTMLElement

  @Prop() buttonLabel?: string
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

  @Event() atomFocus!: EventEmitter<void>
  @Event() atomBlur!: EventEmitter<void>
  @Event() atomChange!: EventEmitter<string>
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

  private handleChange = (event: DatetimeChangeEventDetail) => {
    const value: DatetimeChangeEventDetail = event

    this.value = value
    this.atomChange.emit(String(value.value))
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
        multiple={this.multiple}
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
        value={this.value}
        onIonChange={this.handleChange}
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
            <div class='atom-datetime-item'>
              <ion-datetime-button
                class='atom-datetime-button'
                color='secondary'
                datetime={this.datetimeId}
                disabled={this.disabled}
                mode='md'
              ></ion-datetime-button>
              <ion-label class='atom-datetime-label' position='stacked'>
                {this.buttonLabel}
              </ion-label>
              <atom-icon
                class='atom-icon'
                icon={
                  this.presentation === 'time'
                    ? 'clock-outline'
                    : 'calendar-today'
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
