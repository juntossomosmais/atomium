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

  private parseLocalDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number)

    return new Date(year, month - 1, day)
  }

  private getRangeLabel(): string | null {
    if (!this.rangeMode || this.selectedDates.length < 2) return null

    const [start, end] = [
      this.selectedDates[0],
      this.selectedDates[this.selectedDates.length - 1],
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

    return <span slot='date-target'>{this.getRangeLabel()}</span>
  }

  private renderDatetime() {
    return (
      <ion-datetime
        id={this.datetimeId}
        class={{
          'datetime-range': this.rangeMode,
          'datetime-disabled': this.disabled,
        }}
        presentation={this.presentation}
        disabled={this.disabled}
        readonly={this.readonly}
        multiple={this.multiple}
        preferWheel={this.preferWheel}
        hourCycle={this.hourCycle}
        locale={this.locale}
        min={this.min}
        max={this.max}
        value={this.value as string}
        onIonChange={this.handleDateChange}
        onIonBlur={this.handleBlur}
        onIonFocus={this.handleFocus}
      >
        <div class='datetime-header'>
          <div class='datetime-title'>
            <slot name='title'>
              {this.showDefaultTitle ? 'Selecione uma data' : null}
            </slot>
          </div>
          <div class='datetime-buttons'>
            <ion-button slot='start' fill='clear' onClick={this.handleCancel}>
              {this.cancelText || 'Cancelar'}
            </ion-button>
            <ion-button slot='end' fill='clear' onClick={this.handleBlur}>
              {this.doneText || 'Concluído'}
            </ion-button>
          </div>
        </div>
        <div class='datetime-content'>
          <slot />
        </div>
        {this.showClearButton && !this.readonly ? (
          <div class='datetime-footer'>
            <ion-button
              expand='full'
              fill='clear'
              onClick={() => {
                this.value = undefined
                this.selectedDates = []
                this.atomChange.emit(this.selectedDates)
              }}
            >
              {this.clearText || 'Limpar'}
            </ion-button>
          </div>
        ) : null}
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
