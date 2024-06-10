import { Component, Element, Host, Prop, State, h } from '@stencil/core'

import { debounce } from '../../utils/debouce'

@Component({
  tag: 'atom-list-slider',
  styleUrl: 'list-slider.scss',
  shadow: true,
})
export class AtomListSlider {
  @Prop() hasNavigation = true

  @State() currentIdx: number = 0

  @Element() element: HTMLElement

  itemWidth = 0
  touchStartX = 0
  touchEndX = 0
  sliderGapValue = 0
  viewportWidth = 0

  get currentIndex() {
    return this.currentIdx
  }

  set currentIndex(value: number) {
    this.currentIdx = value

    if (!this.sliderItems) return

    this.updateSliderPosition()
  }

  sliderWrapper: HTMLElement
  sliderItems: NodeListOf<HTMLElement>
  nextButton: HTMLButtonElement
  prevButton: HTMLButtonElement

  componentDidLoad() {
    this.sliderWrapper = this.element.shadowRoot.querySelector('.wrapper')
    this.sliderItems = this.element.querySelectorAll('atom-list-slider-item')
    this.viewportWidth = this.sliderWrapper.offsetWidth

    this.nextButton = this.element.shadowRoot.querySelector('.navigation--next')
    this.prevButton = this.element.shadowRoot.querySelector('.navigation--prev')

    this.sliderWrapper.addEventListener('touchstart', this.handleTouchStart)
    this.sliderWrapper.addEventListener('touchend', this.handleTouchEnd)

    const sliderGap = getComputedStyle(this.element).getPropertyValue(
      '--slider-gap'
    )

    this.sliderGapValue = parseFloat(sliderGap)

    this.showOrHideNavigationButtons()
    this.handleOnResize()
  }

  disconnectedCallback() {
    this.sliderWrapper.removeEventListener('touchstart', this.handleTouchStart)
    this.sliderWrapper.removeEventListener('touchend', this.handleTouchEnd)
  }

  handleOnResize() {
    const debouncedUpdateSliderPosition = debounce(() => {
      this.viewportWidth = this.sliderWrapper.offsetWidth
      this.currentIndex = this.currentIdx
    }, 250)

    const resizeObserver = new ResizeObserver(debouncedUpdateSliderPosition)

    resizeObserver.observe(this.sliderWrapper)
  }

  handleNavigationClick(event: Event) {
    const button = event.currentTarget as HTMLButtonElement
    const isNext = button?.classList.contains('navigation--next')

    const newIndex = this.currentIndex + (isNext ? 1 : -1)

    const isLastItemAndNext = isNext && newIndex >= this.sliderItems.length
    const isFirstItemAndPrev = !isNext && newIndex < 0

    if (isLastItemAndNext || isFirstItemAndPrev) return

    this.currentIndex = newIndex

    this.showOrHideNavigationButtons()
  }

  showOrHideNavigationButtons() {
    if (!this.nextButton || !this.prevButton) return

    let totalWidth = 0

    for (let i = 0; i <= this.currentIndex; i++) {
      totalWidth += this.sliderItems[i].offsetWidth
    }

    this.nextButton.classList.toggle(
      'disabled',
      totalWidth >= this.viewportWidth
    )

    this.prevButton.classList.toggle('disabled', this.currentIndex === 0)
  }

  updateSliderPosition() {
    const itemWidths = Array.from(this.sliderItems).map(
      (item) => item.offsetWidth
    )

    this.itemWidth = itemWidths.reduce((a, b) => a + b, 0) / itemWidths.length

    let totalWidth = 0

    Array.from(this.sliderItems).forEach((item, index) => {
      totalWidth += item.offsetWidth
      if (index !== this.sliderItems.length - 1) {
        totalWidth += this.sliderGapValue
      }
    })

    // Calculate the total width of all items before the current one
    let totalPrevWidth = 0

    for (let i = 0; i < this.currentIdx; i++) {
      totalPrevWidth += this.sliderItems[i].offsetWidth
      if (i !== this.currentIdx - 1) {
        totalPrevWidth += this.sliderGapValue
      }
    }

    // Calculate the translateX value
    const translateX = Math.min(totalPrevWidth, totalWidth - this.viewportWidth)

    // Update the slider position
    this.sliderWrapper.style.transform = `translateX(-${translateX}px)`
  }

  handleTouchStart = (event: TouchEvent) => {
    this.touchStartX = event.touches[0].clientX
  }

  handleTouchEnd = (event: TouchEvent) => {
    this.touchEndX = event.changedTouches[0].clientX
    this.handleSwipe()
  }

  handleSwipe = () => {
    const lastIndex = this.sliderItems.length - 1
    const isSwipeLeft = this.touchEndX < this.touchStartX

    this.currentIndex = isSwipeLeft
      ? Math.min(this.currentIndex + 1, lastIndex)
      : Math.max(this.currentIndex - 1, 0)

    this.showOrHideNavigationButtons()
  }

  render() {
    return (
      <Host>
        <div class='atom-list-slider' role='region' aria-label='Carousel'>
          <button
            class='navigation navigation--prev'
            role='button'
            aria-label='Previous'
            onClick={(event) => this.handleNavigationClick(event)}
          >
            <atom-icon icon='chevron-left'></atom-icon>
          </button>
          <div class='sliders'>
            <div class='wrapper' role='list'>
              <slot />
            </div>
          </div>
          <button
            class='navigation navigation--next'
            role='button'
            aria-label='Next'
            onClick={(event) => this.handleNavigationClick(event)}
          >
            <atom-icon icon='chevron-right'></atom-icon>
          </button>
        </div>
      </Host>
    )
  }
}
