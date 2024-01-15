import { createPopper } from '@popperjs/core'
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core'

@Component({
  tag: 'atom-tooltip',
  styleUrl: 'tooltip.scss',
})
export class AtomTooltip {
  private _popperInstance: ReturnType<typeof createPopper> = null
  private _eventsToShow = ['mouseenter', 'focus']
  private _eventsToHide = ['mouseleave', 'blur']
  private _eventsToShowMobile = ['focus', 'click']
  private _eventsToHideMobile = ['blur']
  private _elementSelector: Element = null

  @Element() el: HTMLElement

  @State() open = false

  /**
   * Determines which element by a ID should listen to open tooltip.
   */
  @Prop() element: string

  /**
   * Determines the placement for attach tooltip.
   */
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
  placementShouldUpdatePopperInstance(newPlacement: typeof this.placement) {
    this._popperInstance.setOptions((options) => ({
      ...options,
      placement: newPlacement,
    }))

    this._popperInstance.update()
  }

  /**
   * Event is dispatched when:
   * 1. Mouse leave event in selector
   * 2. Click "Close" button when is mobile
   */
  @Event() atomClose: EventEmitter

  /**
   * Event is dispatched when:
   * 1. Mouse enter event in selector
   * 2. Click in element when is mobile
   */
  @Event() atomOpen: EventEmitter

  @Listen('resize', { target: 'window' })
  onResize() {
    this.attachEvents()
  }

  connectedCallback() {
    const selector = document.getElementById(this.element)

    this._elementSelector = selector

    this.attachEvents()

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
    this.untachEvents()

    this._popperInstance.destroy()
  }

  private isMobile() {
    return window.matchMedia('(max-width: 768px)').matches
  }

  private attachEvents = () => {
    const isMobile = this.isMobile()

    const eventsToShow = isMobile
      ? this._eventsToShowMobile
      : this._eventsToShow
    const eventsToHide = isMobile
      ? this._eventsToHideMobile
      : this._eventsToHide

    if (isMobile) {
      this._elementSelector.removeEventListener('mouseenter', this.show)
      this._elementSelector.removeEventListener('mouseleave', this.hide)
    }

    eventsToShow.forEach((event) => {
      this._elementSelector.addEventListener(event, this.show)
    })

    eventsToHide.forEach((event) => {
      this._elementSelector.addEventListener(event, this.hide)
    })
  }

  private untachEvents = () => {
    const allEvents = this._eventsToShow.concat(
      this._eventsToShowMobile,
      this._eventsToHide,
      this._eventsToHideMobile
    )

    allEvents
      .filter((event, index) => allEvents.indexOf(event) === index)
      .forEach((event) => {
        this._elementSelector.removeEventListener(event, this.show)
        this._elementSelector.removeEventListener(event, this.hide)
      })
  }

  private show = () => {
    this.open = true
    this.atomOpen.emit()

    this._popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }))
    this._popperInstance.update()
  }

  private hide = () => {
    this.open = false
    this.atomClose.emit()

    this._popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }))
  }

  render() {
    return (
      <Host role={this.isMobile() ? 'dialog' : 'tooltip'}>
        <div
          data-placement={this.placement}
          data-hide={!this.open}
          data-show={this.open}
          class={{ 'atom-tooltip': true }}
        >
          <div class='atom-tooltip__content'>
            <slot />

            <button
              class='atom-tooltip__action--close'
              aria-label='Fechar'
              onClick={this.hide}
            >
              <atom-icon icon='close'></atom-icon>
            </button>
          </div>

          <div class='atom-tooltip__arrow' aria-hidden data-popper-arrow />
        </div>
      </Host>
    )
  }
}
