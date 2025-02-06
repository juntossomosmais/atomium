import { createPopper, Placement } from '@popperjs/core'

export class TooltipController {
  private _popperInstance: ReturnType<typeof createPopper> = null
  private readonly _eventsToShowClick = ['click']
  private readonly _eventsToHideClick = []
  private readonly _eventsToShowHover = ['mouseenter', 'focus']
  private readonly _eventsToHideHover = ['mouseleave', 'blur']
  private _elementSelector: HTMLElement = null
  private _arrowElement: HTMLElement = null

  constructor(
    private hostElement: HTMLElement,
    private elementId: string,
    private placement: Placement,
    private action: 'hover' | 'click'
  ) {}

  init() {
    const selector = document.getElementById(this.elementId)

    if (!selector) {
      return
    }

    this._elementSelector = selector

    this.attachEvents()

    this._popperInstance = createPopper(selector, this.hostElement, {
      placement: this.placement,
      modifiers: [{ name: 'offset', options: { offset: [0, 4] } }],
    })
  }

  updatePlacement(newPlacement: Placement) {
    this._popperInstance.setOptions((options) => ({
      ...options,
      placement: newPlacement,
    }))
    this._popperInstance.update()
  }

  updateAction(newAction: 'hover' | 'click') {
    this.detachEvents()
    this.action = newAction
    this.attachEvents()
  }

  destroy() {
    this.detachEvents()
    this._popperInstance.destroy()
  }

  private isMobile() {
    return window.matchMedia('(max-width: 768px)').matches
  }

  private attachEvents() {
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

  private detachEvents() {
    const allEvents = this._eventsToShowClick.concat(
      this._eventsToHideClick,
      this._eventsToShowHover,
      this._eventsToHideHover
    )

    this.removeEventListeners([...new Set(allEvents)], this.show)
    this.removeEventListeners([...new Set(allEvents)], this.hide)
  }

  private addEventListeners(events: string[], handler: EventListener) {
    events.forEach((event) =>
      this._elementSelector.addEventListener(event, handler)
    )
  }

  private removeEventListeners(events: string[], handler: EventListener) {
    events.forEach((event) =>
      this._elementSelector.removeEventListener(event, handler)
    )
  }

  private readonly show = () => {
    this.hostElement.setAttribute('data-show', 'true')

    this._popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }))

    this._popperInstance.update()
  }

  private readonly hide = () => {
    this.hostElement.setAttribute('data-show', 'false')

    this._popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
      ],
    }))

    this._popperInstance.update()
  }
}
