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
  Method,
} from '@stencil/core'

import { IconProps } from '../../icons'

@Component({
  tag: 'atom-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class AtomSelect {
  @Element() selectEl!: HTMLIonSelectElement

  @Prop() color?: 'primary' | 'secondary' | 'danger' = 'secondary'
  @Prop() disabled?: boolean
  @Prop() errorText?: string
  @Prop() fill: 'solid' | 'outline' = 'solid'
  @Prop() helperText?: string
  @Prop() icon?: IconProps
  @Prop() label?: string
  @Prop() mode: Mode = 'md'
  @Prop() multiple?: boolean
  @Prop() name: string
  @Prop() placeholder: string
  @Prop() readonly?: boolean
  @Prop({ mutable: true, reflect: true }) value?: IonTypes.IonSelect['value']

  @Prop({ mutable: true }) options: Array<{
    id: string
    value: string
    label?: string
    selected?: boolean
    disabled?: boolean
    badge?: { type: string; label: string }
  }> = []

  @Event() atomBlur!: EventEmitter<void>
  @Event() atomCancel!: EventEmitter<void>
  @Event() atomChange!: EventEmitter<string>
  @Event() atomDismiss!: EventEmitter<void>
  @Event() atomFocus!: EventEmitter<void>

  @Method()
  setBadge() {
    const ionItemElements = document.querySelectorAll('ion-item')
    const optionsWithBadge = this.optionsWithBadge

    if (!ionItemElements || !optionsWithBadge) return

    ionItemElements?.forEach((itemElement) => {
      const elementText = itemElement.textContent?.trim()
      const optionWithBadge = optionsWithBadge[elementText]
      const sideElement =
        this.getSideElement(itemElement, 'ion-radio') ||
        this.getSideElement(itemElement, 'ion-checkbox')

      if (!optionWithBadge || !itemElement) return

      const badgeElement = document.createElement('atom-badge')
      const { type, label } = optionWithBadge.badge

      badgeElement.setAttribute('type', type)
      badgeElement.textContent = label
      badgeElement.classList.add('atom-badge')

      sideElement.style.width = 'fit-content'
      sideElement.style.marginRight = '4px'
      itemElement.appendChild(badgeElement)
    })
  }

  getSideElement(element, name) {
    return element.getElementsByTagName(name)[0] as HTMLElement
  }
  filterOptionsWithBadge = (
    options: Array<{
      label?: string
      value?: string
      badge?: { label: string; type: string }
    }>
  ) => {
    return options?.reduce((optionsWithBadge, option) => {
      if (option?.badge?.label) {
        const label = option.label || option.value

        if (label) {
          optionsWithBadge[label] = option
        }
      }

      return optionsWithBadge
    }, {})
  }

  optionsWithBadge = {}

  componentDidLoad() {
    this.selectEl.addEventListener('ionDismiss', this.handleDismiss)
  }

  componentWillLoad() {
    this.optionsWithBadge = this.filterOptionsWithBadge(this.options)
  }

  disconnectedCallback() {
    this.selectEl.removeEventListener('ionDismiss', this.handleDismiss)
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
    this.setBadge()

    this.selectEl.removeEventListener('ionBlur', this.handleBlur)
    this.atomBlur.emit()
  }

  private handleFocus = () => {
    this.selectEl.removeEventListener('ionFocus', this.handleBlur)
    this.atomFocus.emit()
  }

  private handleDismiss = () => {
    this.selectEl.removeEventListener('ionDismiss', this.handleDismiss)
    this.atomDismiss.emit()
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
          label-placement='stacked'
          interface='popover'
          shape='round'
          fill={this.fill}
          placeholder={this.placeholder}
          disabled={this.disabled}
          multiple={this.multiple}
          color={this.color}
          mode={this.mode}
          value={this.value}
          tabindex={this.readonly && '-1'}
          aria-disabled={this.readonly}
          onIonChange={this.handleChange}
          onIonBlur={this.handleBlur}
          onIonFocus={this.handleFocus}
          onIonCancel={this.handleCancel}
          interfaceOptions={{
            cssClass: `atom-select-color-${this.color}`,
          }}
        >
          {this.options.map((option) => (
            <ion-select-option
              value={option.value}
              disabled={option.disabled}
              key={option.id}
            >
              {option?.label || option.value}
            </ion-select-option>
          ))}
        </ion-select>
        {(this.helperText || this.errorText) && (
          <div class='select-bottom'>
            {!this.errorText && (
              <div class='helper-text'>{this.helperText}</div>
            )}
            {this.errorText && <div class='error-text'>{this.errorText}</div>}
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
