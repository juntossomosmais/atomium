import { Mode, TextFieldTypes } from '@ionic/core'
import { JSX as IonTypes } from '@ionic/core/dist/types/components'
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
  tag: 'atom-input',
  styleUrl: 'input.scss',
  shadow: true,
})
export class AtomInput {
  @Element() element!: HTMLElement

  @Prop() label?: string
  @Prop() placeholder?: string
  @Prop() color?: 'primary' | 'secondary' | 'danger' | 'success' = 'secondary'
  @Prop() labelPlacement?: 'stacked' | 'floating' = 'floating'
  @Prop({ mutable: true, reflect: true }) value?: IonTypes.IonInput['value']
  @Prop() helperText?: string
  @Prop() errorText?: string
  @Prop() hasError = false
  @Prop({ mutable: true }) type: TextFieldTypes = 'text'
  @Prop() counter = false
  @Prop() name?: string
  @Prop() minlength?: number
  @Prop() maxlength?: number
  @Prop() disabled = false
  @Prop() required = false
  @Prop() mode: Mode = 'md'
  @Prop() fill: 'solid' | 'outline' = 'solid'
  @Prop() max?: string | number
  @Prop() min?: string | number
  @Prop() step?: string
  @Prop() autofocus = false
  @Prop() pattern?: string
  @Prop() multiple = false
  @Prop() autocomplete?: 'on' | 'off' = 'off'
  @Prop() shape: 'round' | undefined = 'round'
  @Prop() readonly = false
  @Prop() clearOnEdit = false
  @Prop() clearInput = false
  @Prop() icon?: string
  @Prop() passwordToggle = false
  @Prop() inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'

  @Event() atomFocus!: EventEmitter<void>
  @Event() atomBlur!: EventEmitter<void>
  @Event() atomChange!: EventEmitter<string>
  @Event() atomInput!: EventEmitter<string>

  private _inputEl!: HTMLIonInputElement

  get inputEl(): HTMLIonInputElement {
    return this._inputEl
  }

  set inputEl(value: HTMLIonInputElement) {
    this._inputEl = value
  }

  @Method()
  async setFocus() {
    await this.inputEl.setFocus()
  }

  @Method()
  async setInputEl(inputEl: HTMLIonInputElement) {
    this._inputEl = inputEl
  }

  @Method() async getInputElement() {
    return this.inputEl.getInputElement()
  }

  componentDidLoad() {
    this.inputEl.addEventListener('ionChange', this.handleChange)
    this.inputEl.addEventListener('ionInput', this.handleInput)
    this.inputEl.addEventListener('ionBlur', this.handleBlur)
    this.inputEl.addEventListener('ionFocus', this.handleFocus)
  }

  disconnectedCallback() {
    this.inputEl.removeEventListener('ionChange', this.handleChange)
    this.inputEl.removeEventListener('ionInput', this.handleInput)
    this.inputEl.removeEventListener('ionBlur', this.handleBlur)
    this.inputEl.removeEventListener('ionFocus', this.handleFocus)
  }

  private handleChange: IonTypes.IonInput['onIonChange'] = (event) => {
    const value = event.target.value
    this.value = value
    this.atomChange.emit(String(value))
  }

  private handleInput: IonTypes.IonInput['onIonInput'] = (event) => {
    const value = event.target.value
    this.value = value
    this.atomInput.emit(String(value))
  }

  private handleBlur = () => {
    this.inputEl.removeEventListener('ionBlur', this.handleBlur)
    this.atomBlur.emit()
  }

  private handleFocus = () => {
    this.inputEl.removeEventListener('ionFocus', this.handleFocus)
    this.atomFocus.emit()
  }

  render(): JSX.Element {
    return (
      <Host>
        <ion-input
          ref={(el) => (this.inputEl = el as HTMLIonInputElement)}
          class={{
            'atom-input': true,
            'ion-invalid ion-touched': this.hasError,
            'has-icon': !!this.icon,
            'has-readonly': this.readonly,
          }}
          autocomplete={this.autocomplete}
          autofocus={this.autofocus}
          clearInput={this.clearInput}
          clearOnEdit={this.clearOnEdit}
          color={this.color}
          disabled={this.disabled}
          errorText={this.errorText}
          fill={this.fill}
          helperText={this.helperText}
          inputmode={this.inputmode}
          label={this.label}
          labelPlacement={this.labelPlacement}
          max={this.max}
          maxlength={this.maxlength}
          min={this.min}
          minlength={this.minlength}
          mode={this.mode}
          multiple={this.multiple}
          name={this.name}
          pattern={this.pattern}
          placeholder={this.placeholder}
          readonly={this.readonly}
          required={this.required}
          shape={this.shape}
          step={this.step}
          type={this.type}
          value={this.value}
          onIonChange={this.handleChange}
          onIonInput={this.handleInput}
          onIonBlur={this.handleBlur}
          onIonFocus={this.handleFocus}
        />
        {this.icon && (
          <atom-icon
            class={{
              [`atom-icon`]: true,
              [`atom-color--${this.color}`]: true,
            }}
            icon={this.icon}
          ></atom-icon>
        )}
        {this.passwordToggle && (
          <atom-icon
            class={{
              [`atom-password-icon`]: true,
              [`atom-color--${this.color}`]: true,
            }}
            icon={this.type === 'password' ? 'eye' : 'eye-off'}
            onClick={() => {
              this.type = this.type === 'password' ? 'text' : 'password'
            }}
          ></atom-icon>
        )}
      </Host>
    )
  }
}
