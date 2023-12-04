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

import { IconProps } from '../../icons'

@Component({
  tag: 'atom-input',
  styleUrl: 'input.scss',
  scoped: true,
})
export class AtomInput {
  @Element() element!: HTMLElement

  @Prop() autocomplete?: 'on' | 'off' = 'off'
  @Prop() autofocus = false
  @Prop() clearInput = false
  @Prop() clearOnEdit = false
  @Prop() color?: 'primary' | 'secondary' | 'danger' = 'secondary'
  @Prop() counter = false
  @Prop() counterFormatter?: (
    inputLength: number,
    maxLength: number
  ) => string | undefined
  @Prop() debounce: number
  @Prop() disabled = false
  @Prop() enterKeyHint:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send' = 'enter'
  @Prop() errorText?: string
  @Prop() fill: 'solid' | 'outline' = 'solid'
  @Prop() hasError = false
  @Prop() helperText?: string
  @Prop() icon?: IconProps
  @Prop() inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'

  @Prop() label?: string
  @Prop() labelPlacement?: 'stacked' | 'floating' = 'floating'
  @Prop() max?: string | number
  @Prop() maxlength?: number
  @Prop() min?: string | number
  @Prop() minlength?: number
  @Prop() mode: Mode = 'md'
  @Prop() multiple = false
  @Prop() name?: string
  @Prop() passwordToggle = false
  @Prop() pattern?: string
  @Prop() placeholder?: string
  @Prop() readonly = false
  @Prop() required = false
  @Prop() shape: 'round' | undefined = 'round'
  @Prop() step?: string
  @Prop({ mutable: true }) type: TextFieldTypes = 'text'
  @Prop({ mutable: true, reflect: true }) value?: IonTypes.IonInput['value']

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
          ref={(el) => (this.inputEl = el)}
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
          counter={this.counter}
          counterFormatter={this.counterFormatter}
          debounce={this.debounce}
          disabled={this.disabled}
          enterKeyHint={this.enterKeyHint}
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
        {this.passwordToggle && this.value && (
          <button
            class='atom-password-icon'
            type='button'
            onClick={() => {
              this.type = this.type === 'password' ? 'text' : 'password'
            }}
          >
            <atom-icon
              class={{
                [`atom-color--${this.color}`]: true,
              }}
              icon={this.type === 'password' ? 'eye-off' : 'eye'}
            ></atom-icon>
          </button>
        )}
      </Host>
    )
  }
}
