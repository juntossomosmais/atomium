import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h,
} from '@stencil/core'

import { debounce } from '../../utils/debounce'

@Component({
  tag: 'atom-list-slider',
  styleUrl: 'list-slider.scss',
  shadow: true,
})
export class AtomListSlider {
  @Prop({ mutable: true }) hasNavigation = true
  @Prop({ mutable: true }) centralized: boolean
  @Prop({ mutable: true }) step: number = 1

  @State() currentIdx: number = 0
  @State() currentCentralized = false

  @Event() clickNext: EventEmitter
  @Event() clickPrev: EventEmitter

  @Element() element: HTMLElement

  itemWidth = 0
  touchStartX = 0
  touchEndX = 0
  isTouchMoved = false
  sliderGapValue = 0
  viewportWidth = 0
  maxTranslateX = 0

  sliderWrapper: HTMLElement
  sliderItems: NodeListOf<HTMLElement>
  nextButton: HTMLButtonElement
  prevButton: HTMLButtonElement

  get currentIndex() {
    return this.currentIdx
  }

  get currentTranslateX() {
    const translateX = this.sliderWrapper.style.transform

    if (!translateX) return 0

    const translateXValue = parseInt(translateX.replace('translateX(', ''))

    return translateXValue === 0 ? 0 : -translateXValue
  }

  set currentIndex(value: number) {
    this.currentIdx = value

    if (!this.sliderItems) return

    this.updateSliderPosition()

    const transitionendEvent = new CustomEvent('transitionend', {
      detail: { currentIndex: this.currentIndex },
    })

    window.dispatchEvent(transitionendEvent)
  }

  componentDidLoad() {
    this.sliderItems = this.element.querySelectorAll('atom-list-slider-item')
    this.sliderWrapper = this.element.shadowRoot.querySelector('.wrapper')
    this.viewportWidth = this.sliderWrapper.offsetWidth

    this.nextButton = this.element.shadowRoot.querySelector('.navigation--next')
    this.prevButton = this.element.shadowRoot.querySelector('.navigation--prev')

    this.sliderWrapper.addEventListener('touchstart', (event) =>
      this.handleTouchStart(event)
    )
    this.sliderWrapper.addEventListener('touchend', (event) =>
      this.handleTouchEnd(event)
    )
    this.sliderWrapper.addEventListener('touchmove', () =>
      this.handleTouchMove()
    )

    const sliderGap = getComputedStyle(this.element).getPropertyValue(
      '--slider-gap'
    )

    this.sliderGapValue = parseFloat(sliderGap)

    this.handleOnResize()
  }

  componentWillLoad() {
    this.currentCentralized = this.centralized
  }

  connectedCallback() {
    window.addEventListener('resize', this.handleOnResize)
  }

  disconnectedCallback() {
    if (!this.sliderWrapper) return

    this.sliderWrapper.removeEventListener('touchstart', this.handleTouchStart)
    this.sliderWrapper.removeEventListener('touchend', this.handleTouchEnd)
    this.sliderWrapper.removeEventListener('touchmove', this.handleTouchMove)
    window.removeEventListener('resize', this.handleOnResize)
  }

  handleOnResize() {
    if (!this.sliderWrapper) return

    const debouncedUpdateSliderPosition = debounce(() => {
      this.currentIdx = 0
      this.sliderWrapper.style.transform = `translateX(0)`
      this.handleMaxTranslateX()
      this.showOrHideNavigationButtons()
    }, 250)

    const resizeObserver = new ResizeObserver(debouncedUpdateSliderPosition)

    resizeObserver.observe(this.sliderWrapper)
  }

  handleNavigationClick(event: Event) {
    const button = event.currentTarget as HTMLButtonElement
    const isNext = button?.classList.contains('navigation--next')
    const isPrev = button?.classList.contains('navigation--prev')

    if (isNext) {
      this.clickNext.emit()
    } else if (isPrev) {
      this.clickPrev.emit()
    }

    const stepValue = Number(this.step) || 1

    const newIndex = this.currentIndex + (isNext ? stepValue : -stepValue)

    const isLastItemAndNext = isNext && newIndex >= this.sliderItems.length
    const isFirstItemAndPrev = !isNext && newIndex < 0

    if (isLastItemAndNext || isFirstItemAndPrev) return

    this.currentIndex = newIndex

    this.showOrHideNavigationButtons()
  }

  handleMaxTranslateX() {
    let totalWidth = 0

    this.viewportWidth = this.sliderWrapper.offsetWidth

    Array.from(this.sliderItems).forEach((item, index) => {
      totalWidth += item.offsetWidth
      if (index !== this.sliderItems.length - 1) {
        totalWidth += this.sliderGapValue
      }
    })

    if (this.centralized === true) {
      this.currentCentralized = totalWidth <= this.viewportWidth
    }

    this.maxTranslateX = totalWidth - this.viewportWidth
  }

  showOrHideNavigationButtons() {
    const hasButtons = this.nextButton && this.prevButton

    if (!hasButtons) return

    const isAtEnd = this.currentTranslateX >= this.maxTranslateX
    const isAtStart = this.currentTranslateX === 0

    this.nextButton.setAttribute('aria-disabled', String(isAtEnd))
    this.prevButton.setAttribute('aria-disabled', String(isAtStart))
  }

  updateSliderPosition() {
    if (!this.sliderItems || !this.sliderWrapper) return

    const totalWidth = Array.from(this.sliderItems).reduce(
      (total, item, index) => {
        let itemTotal = total + item.offsetWidth

        if (index !== this.sliderItems.length - 1) {
          itemTotal += this.sliderGapValue
        }

        return itemTotal
      },
      0
    )

    const totalPrevWidth = Array.from(this.sliderItems)
      .slice(0, this.currentIdx)
      .reduce((total, item, index) => {
        let itemTotal = total + item.offsetWidth

        if (index !== this.currentIdx - 1) {
          itemTotal += this.sliderGapValue
        }

        return itemTotal
      }, 0)

    const translateX = Math.min(totalPrevWidth, totalWidth - this.viewportWidth)

    this.sliderWrapper.style.transform = `translateX(-${translateX}px)`
  }

  handleTouchStart = (event: TouchEvent) => {
    this.isTouchMoved = false
    this.touchStartX = event.touches[0].clientX
  }

  handleTouchEnd = (event: TouchEvent) => {
    this.touchEndX = event.changedTouches[0].clientX
    this.handleSwipe()
  }

  handleTouchMove = () => {
    this.isTouchMoved = true
  }

  handleSwipe = () => {
    if (!this.isTouchMoved) return

    const lastIndex = this.sliderItems.length - 1
    const isSwipeLeft = this.touchEndX < this.touchStartX

    this.currentIndex = isSwipeLeft
      ? Math.min(this.currentIndex + this.step, lastIndex)
      : Math.max(this.currentIndex - this.step, 0)
  }

  render() {
    return (
      <Host>
        <div class='atom-list-slider' role='region' aria-label='Carousel'>
          <button
            class='navigation navigation--prev'
            role='button'
            aria-label='Previous'
            aria-disabled='true'
            onClick={(event) => this.handleNavigationClick(event)}
            style={{ display: !this.hasNavigation ? 'none' : '' }}
          >
            <atom-icon icon='chevron-left'></atom-icon>
          </button>

          <div class='sliders' aria-live='polite'>
            <div
              class={{
                [`wrapper`]: true,
                [`wrapper--centralized`]: this.currentCentralized,
              }}
              role='list'
            >
              <slot />
            </div>
          </div>

          <button
            class='navigation navigation--next'
            role='button'
            aria-label='Next'
            aria-disabled='true'
            onClick={(event) => this.handleNavigationClick(event)}
            style={{ display: !this.hasNavigation ? 'none' : '' }}
          >
            <atom-icon icon='chevron-right'></atom-icon>
          </button>
        </div>
      </Host>
    )
  }
}
