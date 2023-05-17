import { Mode } from '@ionic/core'
import { JSX as IonTypes } from '@ionic/core/dist/types/components'

import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core'

@Component({
  tag: 'atom-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class AtomSelect {
  @Element() selectEl!: HTMLIonSelectElement

  @Prop() color?: 'primary' | 'secondary' | 'danger' = 'secondary'
  @Prop() name: string
  @Prop() placeholder: string
  @Prop() disabled?: boolean
  @Prop() multiple?: boolean
  @Prop() fill: 'solid' | 'outline' = 'solid'
  @Prop() mode: Mode = 'md'
  @Prop() label?: string
  @Prop() icon?: string
  @Prop() helperText?: string
  @Prop() errorText?: string
  @Prop() readonly?: boolean
  @Prop({ mutable: true, reflect: true }) value?: IonTypes.IonSelect['value']

  @Prop({ mutable: true }) options: Array<{
    id: string
    value: string
    selected?: boolean
    disabled?: boolean
  }> = []

  @Event() atomBlur!: EventEmitter<void>
  @Event() atomCancel!: EventEmitter<void>
  @Event() atomChange!: EventEmitter<string>
  @Event() atomDimiss!: EventEmitter<void>
  @Event() atomFocus!: EventEmitter<void>

  componentDidLoad() {
    this.selectEl.addEventListener('ionChange', this.handleChange)
    this.selectEl.addEventListener('ionBlur', this.handleBlur)
    this.selectEl.addEventListener('ionFocus', this.handleFocus)
    this.selectEl.addEventListener('ionCancel', this.handleCancel)
    this.selectEl.addEventListener('ionDimiss', this.handleDimiss)
  }

  disconnectedCallback() {
    this.selectEl.removeEventListener('ionChange', this.handleChange)
    this.selectEl.removeEventListener('ionBlur', this.handleBlur)
    this.selectEl.removeEventListener('ionFocus', this.handleFocus)
    this.selectEl.removeEventListener('ionCancel', this.handleCancel)
    this.selectEl.removeEventListener('ionDimiss', this.handleDimiss)
  }

  private handleChange: IonTypes.IonSelect['onIonChange'] = (event) => {
    this.value = event.detail.value
    this.atomChange.emit(this.value)
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
      <Host
        class={{
          'has-readonly': !!this.readonly,
        }}
      >
        <ion-select
          class={{
            'atom-select': true,
            'has-icon': !!this.icon,
            'has-error': !!this.errorText,
            'has-readonly': !!this.readonly,
          }}
          name={this.name}
          label={this.label}
          label-placement="stacked"
          interface="popover"
          shape="round"
          fill={this.fill}
          placeholder={this.placeholder}
          disabled={this.disabled}
          multiple={this.multiple}
          color={this.color}
          mode={this.mode}
          tabindex={this.readonly && '-1'}
          aria-disabled={this.readonly}
          onIonChange={this.handleChange}
          onIonBlur={this.handleBlur}
          onIonFocus={this.handleFocus}
          onIonCancel={this.handleCancel}
        >
          {this.options.map((option) => (
            <ion-select-option
              value={option.value}
              disabled={option.disabled}
              key={option.id}
            >
              {option.value}
            </ion-select-option>
          ))}
        </ion-select>
        {(this.helperText || this.errorText) && (
          <div class="select-bottom">
            {!this.errorText && (
              <div class="helper-text">{this.helperText}</div>
            )}
            {this.errorText && <div class="error-text">{this.errorText}</div>}
          </div>
        )}
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
