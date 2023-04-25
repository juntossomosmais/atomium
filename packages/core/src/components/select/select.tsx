import { Mode } from '@ionic/core'
import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core'

@Component({
  tag: 'atom-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class AtomSelect {
  @Element() selectEl!: HTMLIonSelectElement

  @Prop() color?: 'primary' | 'secondary'
  @Prop() name: string
  @Prop() interface?: 'popover' | 'action-sheet' = 'popover'
  @Prop() placeholder: string
  @Prop() cancelText?: string
  @Prop() okText?: string
  @Prop() disabled?: boolean
  @Prop() multiple?: boolean
  @Prop() size?: 'small' | 'large'
  @Prop() mode: Mode = 'md'
  @Prop() overlayDismiss?: boolean

  @Prop() label?: string
  @Prop() labelPlacement?: 'fixed' | 'stacked' = 'stacked'

  @Prop({ mutable: true }) options: Array<{
    value: string
    selected?: boolean
    disabled?: boolean
  }> = []

  @Event() atomBlur!: EventEmitter<void>
  @Event() atomCancel!: EventEmitter<void>
  @Event({ bubbles: true, composed: true }) atomChange!: EventEmitter<string>
  @Event() atomDimiss!: EventEmitter<void>
  @Event() atomFocus!: EventEmitter<void>

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
    this.atomChange.emit(event.detail.value)
  }

  private handleCancel = () => {
    this.selectEl.removeEventListener('ionCancel', this.handleCancel)
    this.atomCancel.emit()
  }

  private handleBlur = () => {
    this.selectEl.removeEventListener('ionBlur', this.handleBlur)
    this.atomBlur.emit()
  }

  private handleFocus = () => {
    this.selectEl.removeEventListener('ionFocus', this.handleBlur)
    this.atomFocus.emit()
  }

  private handleDimiss = () => {
    this.selectEl.removeEventListener('ionDimiss', this.handleDimiss)
    this.atomDimiss.emit()
  }

  render(): JSX.Element {
    return (
      <ion-item>
        <ion-select
          name={this.name}
          label={this.label}
          label-placement={this.labelPlacement}
          interface={this.interface}
          placeholder={this.placeholder}
          cancel-text={this.cancelText}
          ok-text={this.okText}
          disabled={this.disabled}
          multiple={this.multiple}
          color={this.color}
          mode={this.mode}
          overlay-dismiss={this.overlayDismiss}
          onIonChange={this.handleChange}
          onIonBlur={this.handleBlur}
          onIonFocus={this.handleFocus}
        >
          {this.options.map((option) => (
            <ion-select-option value={option.value} disabled={option.disabled}>
              {option.value}
            </ion-select-option>
          ))}
        </ion-select>
      </ion-item>
    )
  }
}
