import { Mode } from '@ionic/core'
import { JSX as IonTypes } from '@ionic/core/dist/types/components'
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
} from '@stencil/core'

import { IconProps } from '../../icons'

@Component({
  tag: 'atom-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class AtomSelect {
  @Element() selectEl!: HTMLIonSelectElement

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
    tag?: { color: string; label: string }
  }> = []

  @Event() atomBlur!: EventEmitter<void>
  @Event() atomCancel!: EventEmitter<void>
  @Event() atomChange!: EventEmitter<string>
  @Event() atomDismiss!: EventEmitter<void>
  @Event() atomFocus!: EventEmitter<void>

  @Method()
  async setTagInSelectOptions() {
    /**
     * This method was necessary because the `ion-selection-option` loop does not allow customizations or custom components.
     * So, to be able to add custom elements such as a tag or a badge inside an option of the `select` field, when the select
     * is opened, the `onBlur` event triggers this method that performs a search for all `ion-item` elements (which is the
     * final element rendered to list options) and filters the ones that need to be changed.
     */

    const ionItemElements = document.querySelectorAll('ion-item')

    for (const itemElement of Array.from(ionItemElements)) {
      const optionText = itemElement.textContent?.trim()
      const optionWithTag = this.optionsWithTag[optionText]

      if (!optionWithTag) continue

      const { color, label } = optionWithTag.tag

      const optionElement =
        this.getElementByTag(itemElement, 'ion-radio') ||
        this.getElementByTag(itemElement, 'ion-checkbox')

      if (!optionElement?.shadowRoot) continue

      const optionShadowRoot = optionElement.shadowRoot
        .firstElementChild as HTMLElement

      if (!optionShadowRoot) continue

      const firstElementInOption =
        optionShadowRoot.firstElementChild as HTMLElement

      const tagElement = document.createElement('atom-tag')

      tagElement.setAttribute('color', color)
      tagElement.style.marginLeft = 'var(--spacing-xsmall)'
      tagElement.textContent = label
      tagElement.classList.add('atom-tag')

      optionShadowRoot.style.justifyContent = 'start'

      firstElementInOption.style.marginRight = '0'
      firstElementInOption.insertAdjacentElement('afterend', tagElement)
    }
  }

  getElementByTag(element, name) {
    return element.getElementsByTagName(name)[0] as HTMLElement
  }

  filterOptionsWithTag = (
    options: Array<{
      label?: string
      value?: string
      tag?: { label: string; color: string }
    }>
  ) => {
    return options?.reduce((optionsWithTag, option) => {
      if (option?.tag?.label) {
        const label = option.label || option.value

        if (label) {
          optionsWithTag[label] = option
        }
      }

      return optionsWithTag
    }, {})
  }

  optionsWithTag = {}

  componentWillLoad() {
    this.optionsWithTag = this.filterOptionsWithTag(this.options)
  }

  componentDidLoad() {
    this.selectEl.addEventListener('ionDismiss', this.handleDismiss)
    this.applyPointerEventsNone()
  }

  disconnectedCallback() {
    this.selectEl.removeEventListener('ionDismiss', this.handleDismiss)
  }

  /*
   * In some cases, individual elements inside `ion-select` are clickable, causing the popover to open with an incorrect size.
   * For example, clicking on the arrow icon can result in a very small options overlay, leading to a poor user experience.
   * This method is a workaround to fix this issue by adding `pointer-events: none` to elements inside the `ion-select`
   * that are not the `label` or `icon`, ensuring a consistent overlay size.
   */
  private applyPointerEventsNone() {
    const ionSelect = this.selectEl?.shadowRoot?.querySelector('ion-select')
    const selectWrapper =
      ionSelect?.shadowRoot?.querySelector('.select-wrapper')

    if (selectWrapper) {
      ;(selectWrapper as HTMLElement).style.pointerEvents = 'none'
    }
  }

  private readonly handleChange: IonTypes.IonSelect['onIonChange'] = (
    event
  ) => {
    this.value = event.detail.value
    this.atomChange.emit(this.value)
  }

  private readonly handleCancel = () => {
    this.selectEl.removeEventListener('ionCancel', this.handleCancel)
    this.atomCancel.emit()
  }

  private readonly handleBlur = () => {
    if (Object.values(this.optionsWithTag).length) this.setTagInSelectOptions()

    this.selectEl.removeEventListener('ionBlur', this.handleBlur)
    this.atomBlur.emit()
  }

  private readonly handleFocus = () => {
    this.selectEl.removeEventListener('ionFocus', this.handleBlur)
    this.atomFocus.emit()
  }

  private readonly handleDismiss = () => {
    this.selectEl.removeEventListener('ionDismiss', this.handleDismiss)
    this.atomDismiss.emit()
  }

  render() {
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
          color='secondary'
          mode={this.mode}
          value={this.value}
          tabindex={this.readonly && '-1'}
          aria-disabled={this.readonly}
          onIonChange={this.handleChange}
          onIonBlur={this.handleBlur}
          onIonFocus={this.handleFocus}
          onIonCancel={this.handleCancel}
          interfaceOptions={{
            cssClass: `atom-select__popover`,
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
          <atom-icon class='atom-icon' icon={this.icon}></atom-icon>
        )}
      </Host>
    )
  }
}
