import { Color, Mode } from '@ionic/core'
import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core'

@Component({
  tag: 'ato-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class AtoSelect {
  @Element() selectEl!: HTMLIonSelectElement

  @Prop({ reflect: true }) name: string
  @Prop({ reflect: true }) interface?: 'popover' | 'action-sheet' = 'popover'
  @Prop({ reflect: true }) placeholder: string
  @Prop() cancelText?: string
  @Prop() okText?: string
  @Prop() disabled?: boolean
  @Prop() multiple?: boolean
  @Prop() size?: 'small' | 'large'
  @Prop({ reflect: true }) color: Color = 'primary'
  @Prop({ reflect: true }) mode: Mode = 'md'
  @Prop() overlayDismiss?: boolean

  @Prop() labelText?: string
  @Prop() labelPosition?: 'fixed' | 'stacked' = 'stacked'

  @Prop({ mutable: true }) options: Array<{
    value: string
    selected?: boolean
    disabled?: boolean
  }> = []

  @Event() atoBlur!: EventEmitter<void>
  @Event() atoCancel!: EventEmitter<void>
  @Event({ bubbles: true, composed: true }) atoChange!: EventEmitter<string>
  @Event() atoDimiss!: EventEmitter<void>
  @Event() atoFocus!: EventEmitter<void>

  componentDidLoad() {
    this.selectEl.addEventListener('ionChange', this.handleChange)
    this.selectEl.addEventListener('ionBlur', this.handleBlur)
    this.selectEl.addEventListener('ionFocus', this.handleFocus)
  }

  disconnectedCallback() {
    this.selectEl.removeEventListener('ionChange', this.handleChange)
    this.selectEl.removeEventListener('ionBlur', this.handleBlur)
    this.selectEl.removeEventListener('ionFocus', this.handleFocus)
  }

  private handleChange = (event: CustomEvent<{ value: string }>) => {
    this.atoChange.emit(event.detail.value)
  }

  private handleCancel = () => {
    this.selectEl.removeEventListener('ionCancel', this.handleCancel)
    this.atoCancel.emit()
  }

  private handleBlur = () => {
    this.selectEl.removeEventListener('ionBlur', this.handleBlur)
    this.atoBlur.emit()
  }

  private handleFocus = () => {
    this.selectEl.removeEventListener('ionFocus', this.handleBlur)
    this.atoFocus.emit()
  }

  private handleDimiss = () => {
    this.selectEl.removeEventListener('ionDimiss', this.handleDimiss)
    this.atoDimiss.emit()
  }

  render(): JSX.Element {
    return (
      <ion-item>
        {this.labelText && (
          <ion-label color={this.color} position={this.labelPosition}>
            {this.labelText}
          </ion-label>
        )}
        <ion-select
          name={this.name}
          interface={this.interface}
          placeholder={this.placeholder}
          cancel-text={this.cancelText}
          ok-text={this.okText}
          disabled={this.disabled}
          multiple={this.multiple}
          color={this.color}
          mode={this.mode}
          overlay-dismiss={this.overlayDismiss}
          ionChange={this.handleChange}
          ionCancel={this.handleCancel}
          ionDismiss={this.handleDimiss}
          ionBlur={this.handleBlur}
          ionFocus={this.handleFocus}
        >
          {this.options.map((option) => (
            <ion-select-option
              value={option.value}
              disabled={option.disabled}
              selected={option.selected}
            >
              {option.value}
            </ion-select-option>
          ))}
        </ion-select>
      </ion-item>
    )
  }
}
