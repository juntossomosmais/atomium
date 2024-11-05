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
  private _eventsToShowClick = ['click']
  private _eventsToHideClick = []
  private _eventsToShowHover = ['mouseenter', 'focus']
  private _eventsToHideHover = ['mouseleave', 'blur']
  private _elementSelector: Element = null

  @Element() el: HTMLElement

  @State() open = false

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
  placementShouldUpdatePopperInstance(newPlacement: typeof this.placement) {
    this._popperInstance.setOptions((options) => ({
      ...options,
      placement: newPlacement,
    }))
    this._popperInstance.update()
  }

  @Prop() action: 'hover' | 'click' = 'hover'

  @Watch('action')
  updateEvents() {
    this.untachEvents()
    this.attachEvents()
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

  @Listen('click', { target: 'window' })
  onClickCheckOutside(event) {
    if (
      this.el.contains(event.target) ||
      this._elementSelector === event.target
    ) {
      return
    }

    this.hide()
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

  private addEventListeners = (
    events: string[],
    handler: EventListenerOrEventListenerObject
  ) => {
    events.forEach((event) =>
      this._elementSelector.addEventListener(event, handler)
    )
  }

  private removeEventListeners = (
    events: string[],
    handler: EventListenerOrEventListenerObject
  ) => {
    events.forEach((event) =>
      this._elementSelector.removeEventListener(event, handler)
    )
  }

  private attachEvents = () => {
    const isMobile = this.isMobile()

    if (this.action === 'click') {
      this.addEventListeners(this._eventsToShowClick, this.show)
      this.addEventListeners(this._eventsToHideClick, this.hide)
    } else {
      this.addEventListeners(this._eventsToShowHover, this.show)
      this.addEventListeners(this._eventsToHideHover, this.hide)

      if (isMobile) {
        this.addEventListeners(this._eventsToShowClick, this.show)
        this.removeEventListeners(this._eventsToShowHover, this.show)
        this.removeEventListeners(this._eventsToHideHover, this.hide)
      }
    }
  }

  private untachEvents = () => {
    const allEvents = this._eventsToShowClick.concat(
      this._eventsToHideClick,
      this._eventsToShowHover,
      this._eventsToHideHover
    )

    const uniqueEvents = Array.from(new Set(allEvents))

    this.removeEventListeners(uniqueEvents, this.show)
    this.removeEventListeners(uniqueEvents, this.hide)
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
    this._popperInstance.update()
  }

  render() {
    return (
      <Host
        style={{
          zIndex: this.open ? '1' : '-1',
        }}
        role={this.isMobile() ? 'dialog' : 'tooltip'}
      >
        <div
          data-placement={this.el.getAttribute('data-popper-placement')}
          data-hide={!this.open}
          data-show={this.open}
          class={{ 'atom-tooltip': true }}
        >
          <div class='atom-tooltip__content'>
            <slot />

            {(this.action === 'click' || this.isMobile()) && (
              <button
                class='atom-tooltip__action--close'
                aria-label='Fechar'
                onClick={this.hide}
              >
                <atom-icon icon='close'></atom-icon>
              </button>
            )}
          </div>

          <div class='atom-tooltip__arrow' aria-hidden data-popper-arrow />
        </div>
      </Host>
    )
  }
}
