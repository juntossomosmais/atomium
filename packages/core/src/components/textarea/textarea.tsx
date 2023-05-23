import { Mode } from '@ionic/core'
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
  tag: 'atom-textarea',
  styleUrl: 'textarea.scss',
  shadow: true,
})
export class AtomTextarea {
  @Element() element!: HTMLElement

  @Prop() autocomplete?: 'on' | 'off' = 'off'
  @Prop() autofocus = false
  @Prop() autoGrow = false
  @Prop() clearOnEdit = false
  @Prop() color?: 'primary' | 'secondary' | 'danger' = 'secondary'
  @Prop() cols?: number
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
  @Prop() icon?: string
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
  @Prop() maxlength?: number
  @Prop() minlength?: number
  @Prop() mode: Mode = 'md'
  @Prop() name?: string
  @Prop() pattern?: string
  @Prop() placeholder?: string
  @Prop() readonly = false
  @Prop() required = false
  @Prop() rows = 4
  @Prop() shape: 'round' | undefined = 'round'
  @Prop() step?: string
  @Prop({ mutable: true, reflect: true }) value?: IonTypes.IonTextarea['value']
  @Prop() wrap?: 'hard' | 'soft' | 'off'

  @Event() atomFocus!: EventEmitter<void>
  @Event() atomBlur!: EventEmitter<void>
  @Event() atomChange!: EventEmitter<string>
  @Event() atomInput!: EventEmitter<string>

  private _textareaEl!: HTMLIonTextareaElement

  get textareaEl(): HTMLIonTextareaElement {
    return this._textareaEl
  }

  set textareaEl(value: HTMLIonTextareaElement) {
    this._textareaEl = value
  }

  @Method()
  async setFocus() {
    await this.textareaEl.setFocus()
  }

  @Method()
  async setInputEl(textareaEl: HTMLIonTextareaElement) {
    this._textareaEl = textareaEl
  }

  @Method() async getInputElement() {
    return this.textareaEl.getInputElement()
  }

  componentDidLoad() {
    this.textareaEl.addEventListener('ionChange', this.handleChange)
    this.textareaEl.addEventListener('ionInput', this.handleInput)
    this.textareaEl.addEventListener('ionBlur', this.handleBlur)
    this.textareaEl.addEventListener('ionFocus', this.handleFocus)
  }

  disconnectedCallback() {
    this.textareaEl.removeEventListener('ionChange', this.handleChange)
    this.textareaEl.removeEventListener('ionInput', this.handleInput)
    this.textareaEl.removeEventListener('ionBlur', this.handleBlur)
    this.textareaEl.removeEventListener('ionFocus', this.handleFocus)
  }

  private handleChange: IonTypes.IonTextarea['onIonChange'] = (event) => {
    const value = event.target.value
    this.value = value
    this.atomChange.emit(String(value))
  }

  private handleInput: IonTypes.IonTextarea['onIonInput'] = (event) => {
    const value = event.target.value
    this.value = value
    this.atomInput.emit(String(value))
  }

  private handleBlur = () => {
    this.textareaEl.removeEventListener('ionBlur', this.handleBlur)
    this.atomBlur.emit()
  }

  private handleFocus = () => {
    this.textareaEl.removeEventListener('ionFocus', this.handleFocus)
    this.atomFocus.emit()
  }

  render(): JSX.Element {
    return (
      <Host>
        <ion-textarea
          ref={(el) =>
            (this.textareaEl = el as unknown as HTMLIonTextareaElement)
          }
          class={{
            'atom-textarea': true,
            'ion-invalid ion-touched': this.hasError,
            'has-icon': !!this.icon,
            'has-readonly': this.readonly,
          }}
          autoGrow={this.autoGrow}
          autofocus={this.autofocus}
          clearOnEdit={this.clearOnEdit}
          cols={this.cols}
          color={this.color}
          counter={this.counter}
          counterFormatter={this.counterFormatter}
          disabled={this.disabled}
          debounce={this.debounce}
          enterKeyHint={this.enterKeyHint}
          errorText={this.errorText}
          fill={this.fill}
          helperText={this.helperText}
          inputmode={this.inputmode}
          label={this.label}
          labelPlacement={this.labelPlacement}
          maxlength={this.maxlength}
          minlength={this.minlength}
          mode={this.mode}
          name={this.name}
          placeholder={this.placeholder}
          readonly={this.readonly}
          rows={this.rows}
          required={this.required}
          shape={this.shape}
          value={this.value}
          wrap={this.wrap}
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
      </Host>
    )
  }
}
