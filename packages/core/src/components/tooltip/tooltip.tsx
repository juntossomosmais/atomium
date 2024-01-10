import { createPopper } from '@popperjs/core'
import { Component, Element, Host, Prop, State, h } from '@stencil/core'

@Component({
  tag: 'atom-tooltip',
  styleUrl: 'tooltip.scss',
})
export class AtomTooltip {
  private _selectorElement: Element = null
  private _popperInstance: ReturnType<typeof createPopper> = null
  private _eventsToShow = ['mouseenter', 'focus']
  private _eventsToHide = ['mouseleave', 'blur']

  @Element() el: HTMLElement

  @State() open: boolean = false

  @Prop() element: string

  getSelector() {
    return document.getElementById(this.element)
  }

  show() {
    this.open = true

    this._popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }))

    this._popperInstance.update()
  }

  hide() {
    this.open = false

    this._popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }))
  }

  attachEvents(element: Element) {
    this._eventsToShow.forEach((event) => {
      element.addEventListener(event, this.show.bind(this))
    })

    this._eventsToHide.forEach((event) => {
      element.addEventListener(event, this.hide.bind(this))
    })
  }

  untachEvents(element: Element) {
    this._eventsToShow.forEach((event) => {
      element.removeEventListener(event, this.show)
    })

    this._eventsToHide.forEach((event) => {
      element.removeEventListener(event, this.hide)
    })
  }

  connectedCallback() {
    const selector = this.getSelector()

    this._selectorElement = selector

    this.attachEvents(selector)
    this._popperInstance = createPopper(this._selectorElement, this.el)
  }

  disconnectedCallback() {
    this.untachEvents(this._selectorElement)
    this._popperInstance.destroy()
  }

  render() {
    return (
      <Host class={{ 'atom-tooltip': true, open: this.open }} role='tooltip'>
        <slot />
        <div class='atom-tooltip__arrow' data-popper-arrow />
      </Host>
    )
  }
}
