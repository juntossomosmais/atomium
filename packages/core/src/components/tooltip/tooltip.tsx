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
  private _eventsToShow = ['mouseenter', 'focus', 'click']
  private _eventsToHide = ['mouseleave', 'blur', 'click']
  private _elementSelector: Element = null

  @Element() el: HTMLElement

  @State() open = false

  /**
   * Determines which element should listen to open tooltip.
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
    const isMobile = this.isMobile()

    this._eventsToShow
      .filter((event) =>
        isMobile ? event === 'click' || event === 'focus' : event !== 'click'
      )
      .forEach((event) => {
        this._elementSelector.addEventListener(event, this.show)
      })

    if (isMobile) {
      this._elementSelector.removeEventListener('mouseenter', this.show)
      this._elementSelector.removeEventListener('mouseleave', this.hide)
    }

    this._eventsToHide
      .filter((event) => (isMobile ? event === 'blur' : event !== 'click'))
      .forEach((event) => {
        this._elementSelector.addEventListener(event, this.hide)
      })
  }

  connectedCallback() {
    const selector = document.getElementById(this.element)
    const isMobile = this.isMobile()

    this._elementSelector = selector

    this._eventsToShow
      .filter((event) =>
        isMobile ? event === 'click' || event === 'focus' : event !== 'click'
      )
      .forEach((event) => {
        selector.addEventListener(event, this.show)
      })

    this._eventsToHide
      .filter((event) => (isMobile ? event === 'blur' : event !== 'click'))
      .forEach((event) => {
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
    this._eventsToShow.forEach((event) => {
      this._elementSelector.removeEventListener(event, this.show)
    })

    this._eventsToHide.forEach((event) => {
      this._elementSelector.removeEventListener(event, this.hide)
    })

    this._popperInstance.destroy()
  }

  private isMobile() {
    return window.matchMedia('(max-width: 768px)').matches
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
      <Host class={{ 'atom-tooltip': true, open: this.open }} role='tooltip'>
        <div class='atom-tooltip__content'>
          <slot />

          <button aria-label='Fechar' onClick={this.hide}>
            <atom-icon icon='close'></atom-icon>
          </button>
        </div>

        <div class='atom-tooltip__arrow' aria-hidden data-popper-arrow />
      </Host>
    )
  }
}
