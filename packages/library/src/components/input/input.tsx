import { Color, Mode, TextFieldTypes } from '@ionic/core'
import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core'

@Component({
  tag: 'ato-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class AtoInput {
  @Element() inputEl!: HTMLInputElement

  @Prop({ reflect: true }) value: string
  @Prop({ reflect: true }) type: TextFieldTypes = 'text'
  @Prop() placeholder?: string
  @Prop() name?: string
  @Prop() minlength?: number
  @Prop() maxlength?: number
  @Prop() disabled = false
  @Prop() required = false
  @Prop({ reflect: true }) color: Color = 'primary'
  @Prop() mode: Mode = 'md'
  @Prop({ reflect: true }) fill: 'solid' | 'outline' = 'outline'
  @Prop() autofocus = false
  @Prop() pattern?: string
  @Prop() accept?: string
  @Prop() multiple = false
  @Prop() clearOnEdit = false
  @Prop() clearInput = false
  @Prop() inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search' = 'none'

  @Prop() labelPlacement?: 'fixed' | 'stacked' | 'floating' = 'floating'
  @Prop() label?: string

  @Event() atoFocus!: EventEmitter<void>
  @Event() atoBlur!: EventEmitter<void>
  @Event({ bubbles: true, composed: true }) atoChange!: EventEmitter<string>

  componentDidLoad() {
    this.inputEl.addEventListener('ionChange', this.handleChange)
    this.inputEl.addEventListener('ionInput', this.handleChange)
    this.inputEl.addEventListener('ionBlur', this.handleBlur)
    this.inputEl.addEventListener('ionFocus', this.handleFocus)
  }

  disconnectedCallback() {
    this.inputEl.removeEventListener('ionChange', this.handleChange)
    this.inputEl.removeEventListener('ionInput', this.handleChange)
    this.inputEl.removeEventListener('ionBlur', this.handleBlur)
    this.inputEl.removeEventListener('ionFocus', this.handleFocus)
  }

  private handleChange = (event: any) => {
    this.atoChange.emit(event.detail.value)
  }

  private handleBlur = () => {
    this.inputEl.removeEventListener('ionBlur', this.handleBlur)
    this.atoBlur.emit()
  }

  private handleFocus = () => {
    this.inputEl.removeEventListener('ionFocus', this.handleFocus)
    this.atoFocus.emit()
  }

  render(): JSX.Element {
    return (
      <ion-input
        label={this.label}
        labelPlacement={this.labelPlacement}
        value={this.value}
        type={this.type}
        placeholder={this.placeholder}
        name={this.name}
        minlength={this.minlength}
        maxlength={this.maxlength}
        disabled={this.disabled}
        required={this.required}
        color={this.color}
        mode={this.mode}
        fill={this.fill}
        autofocus={this.autofocus}
        pattern={this.pattern}
        inputmode={this.inputmode}
        multiple={this.multiple}
        clearInput={this.clearInput}
        clearOnEdit={this.clearOnEdit}
        onIonChange={this.handleChange}
        onIonInput={this.handleChange}
        onIonBlur={this.handleBlur}
        onIonFocus={this.handleFocus}
      />
    )
  }
}
