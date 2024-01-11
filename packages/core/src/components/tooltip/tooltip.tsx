import { createPopper } from '@popperjs/core'
import { Component, Element, Host, Prop, State, Watch, h } from '@stencil/core'

@Component({
  tag: 'atom-tooltip',
  styleUrl: 'tooltip.scss',
})
export class AtomTooltip {
  private _popperInstance: ReturnType<typeof createPopper> = null
  private _eventsToShow = ['mouseenter', 'focus']
  private _eventsToHide = ['mouseleave', 'blur']

  @Element() el: HTMLElement

  @State() open: boolean = false

  @Prop() element: string
  @Prop() placement:
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'left' = 'top'

  @Watch('placement')
  placementChanged(newPlacement: typeof this.placement) {
    this._popperInstance.setOptions((options) => ({
      ...options,
      placement: newPlacement,
    }))

    this._popperInstance.update()
  }

  getSelector() {
    return document.getElementById(this.element)
  }

  show = () => {
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

  hide = () => {
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

    this._eventsToShow.forEach((event) => {
      selector.addEventListener(event, this.show)
    })

    this._eventsToHide.forEach((event) => {
      selector.addEventListener(event, this.hide)
    })

    this._popperInstance = createPopper(selector, this.el, {
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 4],
          },
        },
        {
          name: 'arrow',
          options: {
            padding: 16,
          },
        },
      ],
    })
  }

  disconnectedCallback() {
    const selector = this.getSelector()

    this._eventsToShow.forEach((event) => {
      selector.removeEventListener(event, this.show)
    })

    this._eventsToHide.forEach((event) => {
      selector.removeEventListener(event, this.hide)
    })

    this._popperInstance.destroy()
  }

  render() {
    return (
      <Host class={{ 'atom-tooltip': true, open: this.open }} role='tooltip'>
        <slot />
        <div class='atom-tooltip__arrow' aria-hidden data-popper-arrow />
      </Host>
    )
  }
}
