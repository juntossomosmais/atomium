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
  @Prop() disabled?: boolean
  @Prop() required?: boolean
  @Prop({ reflect: true }) color: Color = 'primary'
  @Prop() mode: Mode = 'md'
  @Prop() expandable?: boolean
  @Prop({ reflect: true }) fill: 'default' | 'solid' | 'outline' = 'default'
  @Prop() size?: 'small' | 'default' | 'large' = 'default'
  @Prop() autofocus?: boolean
  @Prop() clearInput?: boolean
  @Prop() pattern?: string
  @Prop() readonly?: boolean
  @Prop() spellcheck?: boolean
  @Prop() autocapitalize?: 'words' | 'characters' | 'sentences' | 'none'
  @Prop() autocomplete?: 'on' | 'off'
  @Prop() accept?: string
  @Prop() multiple?: boolean
  @Prop() clearOnEdit?: boolean
  @Prop() debounce?: number
  @Prop() clearIcon?: string
  @Prop() icon?: string
  @Prop() iconRight?: string
  @Prop() inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'

  @Prop() labelPosition?: 'fixed' | 'stacked' | 'floating'
  @Prop() labelText?: string

  @Event() atoFocus!: EventEmitter<void>
  @Event() atoBlur!: EventEmitter<void>
  @Event({ bubbles: true, composed: true }) atoChange!: EventEmitter<string>

  componentDidLoad() {
    this.inputEl.addEventListener('ionChange', this.handleChange)
    this.inputEl.addEventListener('ionBlur', this.handleBlur)
    this.inputEl.addEventListener('ionFocus', this.handleFocus)
  }

  disconnectedCallback() {
    this.inputEl.removeEventListener('ionChange', this.handleChange)
    this.inputEl.removeEventListener('ionBlur', this.handleBlur)
    this.inputEl.removeEventListener('ionFocus', this.handleFocus)
  }

  handleChange = (event: any) => {
    this.atoChange.emit(event.detail)
  }

  handleBlur = () => {
    this.inputEl.removeEventListener('ionBlur', this.handleBlur)
    this.atoBlur.emit()
  }

  handleFocus = () => {
    this.inputEl.removeEventListener('ionFocus', this.handleFocus)
    this.atoFocus.emit()
  }

  render(): JSX.Element {
    return (
      <ion-item fill={this.fill}>
        {this.labelText && (
          <ion-label color={this.color} position={this.labelPosition}>
            {this.labelText}
          </ion-label>
        )}
        <ion-input
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
          expandable={this.expandable}
          fill={this.fill}
          size={this.size}
          icon={this.icon}
          iconRight={this.iconRight}
          autofocus={this.autofocus}
          clearInput={this.clearInput}
          pattern={this.pattern}
          readonly={this.readonly}
          spellcheck={this.spellcheck}
          autocapitalize={this.autocapitalize}
          autocomplete={this.autocomplete}
          inputmode={this.inputmode}
          accept={this.accept}
          multiple={this.multiple}
          clear-on-edit={this.clearOnEdit}
          debounce={this.debounce}
          clear-icon={this.clearIcon}
          ionChange={this.handleChange}
          ionFocus={this.handleFocus}
          ionBlur={this.handleBlur}
        />
      </ion-item>
    )
  }
}
