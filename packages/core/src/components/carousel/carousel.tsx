import { Component, Element, Host, Prop, State, h } from '@stencil/core'

@Component({
  tag: 'atom-carousel',
  styleUrl: 'carousel.scss',
  shadow: true,
})
export class AtomCarousel {
  @Prop({ mutable: true }) loop = false
  @Prop({ mutable: true }) autoplay: number
  @Prop({ mutable: true }) thumbnails: string[]
  @Prop({ mutable: true }) hasNavigation = true
  @Prop({ mutable: true }) hasPagination = true

  @State() currentIdx = 0

  @Element() element: HTMLElement

  touchStartX = 0
  touchEndX = 0

  get currentIndex() {
    return this.currentIdx
  }

  set currentIndex(value: number) {
    if (!this.carouselWrapper || !value) return

    this.currentIdx = value
    this.carouselWrapper.style.transform = `translateX(-${this.currentIndex * 100}%)`

    const transitionendEvent = new CustomEvent('transitionend', {
      detail: { currentIndex: this.currentIndex },
    })

    window.dispatchEvent(transitionendEvent)
  }

  carouselWrapper: HTMLElement
  carouselItems: NodeListOf<HTMLElement>
  nextButton: HTMLButtonElement
  prevButton: HTMLButtonElement
  autoplayIntervalId: NodeJS.Timeout

  componentWillLoad() {
    this.carouselItems = this.element.querySelectorAll('atom-carousel-item')

    if (this.carouselItems?.length <= 1) {
      this.loop = false
      this.hasNavigation = false
      this.hasPagination = false
    }

    if (this.autoplay) {
      this.loop = true
    }
  }

  componentDidLoad() {
    this.carouselWrapper =
      this.element.shadowRoot.querySelector('.carousel-wrapper')
    this.nextButton = this.element.shadowRoot.querySelector('.navigation--next')
    this.prevButton = this.element.shadowRoot.querySelector('.navigation--prev')

    this.carouselWrapper.addEventListener('touchstart', this.handleTouchStart)
    this.carouselWrapper.addEventListener('touchend', this.handleTouchEnd)

    if (this.autoplay) {
      this.carouselWrapper.addEventListener('mouseenter', this.stopAutoplay)
      this.carouselWrapper.addEventListener('mouseleave', this.restartAutoplay)
      this.startAutoplay()
    }

    this.showOrHideNavigationButtons()
  }

  disconnectedCallback() {
    this.carouselWrapper.removeEventListener(
      'touchstart',
      this.handleTouchStart
    )
    this.carouselWrapper.removeEventListener('touchend', this.handleTouchEnd)

    if (this.autoplay) {
      this.carouselWrapper.removeEventListener('mouseenter', this.stopAutoplay)
      this.carouselWrapper.removeEventListener(
        'mouseleave',
        this.restartAutoplay
      )
    }
  }

  componentWillUnmount() {
    clearInterval(this.autoplayIntervalId)
  }

  handleMoveToPaginationItem(index: number) {
    if (!this.carouselItems || !this.carouselItems[index]) return

    this.currentIndex = index

    this.showOrHideNavigationButtons()
  }

  handleNavigationClick(button: 'prev' | 'next') {
    const isNext = button === 'next'
    let newIndex = this.currentIndex + (isNext ? 1 : -1)

    const isLastItemAndNext =
      isNext && this.currentIndex === this.carouselItems.length - 1
    const isFirstItemAndPrev = !isNext && this.currentIndex === 0

    if (!this.loop && (isLastItemAndNext || isFirstItemAndPrev)) return

    if (this.loop) {
      newIndex =
        (newIndex + this.carouselItems.length) % this.carouselItems.length
    }

    this.currentIndex = newIndex
    this.showOrHideNavigationButtons()
  }

  showOrHideNavigationButtons() {
    const hasButtons = this.nextButton && this.prevButton

    if (!hasButtons || !this.hasNavigation || this.loop) return

    this.nextButton.setAttribute(
      'aria-disabled',
      String(this.currentIndex === this.carouselItems?.length - 1)
    )
    this.prevButton.setAttribute(
      'aria-disabled',
      String(this.currentIndex === 0)
    )
  }

  stopAutoplay = () => {
    if (this.autoplayIntervalId) {
      clearInterval(this.autoplayIntervalId)
      this.autoplayIntervalId = null
    }
  }

  restartAutoplay = () => {
    if (!this.autoplayIntervalId) {
      this.startAutoplay()
    }
  }

  startAutoplay() {
    if (this.autoplayIntervalId) {
      clearInterval(this.autoplayIntervalId)
    }

    this.autoplayIntervalId = setInterval(() => {
      this.handleNavigationClick('next')
    }, this.autoplay)
  }

  handleTouchStart = (event: TouchEvent) => {
    this.touchStartX = event.touches[0].clientX
  }

  handleTouchEnd = (event: TouchEvent) => {
    this.touchEndX = event.changedTouches[0].clientX
    this.handleSwipe()
  }

  handleSwipe = () => {
    const lastIndex = this.carouselItems.length - 1
    const isSwipeLeft = this.touchEndX < this.touchStartX

    this.currentIndex = isSwipeLeft
      ? Math.min(this.currentIndex + 1, lastIndex)
      : Math.max(this.currentIndex - 1, 0)

    this.showOrHideNavigationButtons()
  }

  render() {
    return (
      <Host>
        <div class='atom-carousel' role='region' aria-label='Carousel'>
          {this.hasNavigation && (
            <button
              class='carousel-navigation navigation--prev'
              role='button'
              aria-label='Previous'
              aria-disabled={this.loop ? 'false' : 'true'}
              onClick={() => this.handleNavigationClick('prev')}
            >
              <atom-icon icon='chevron-left'></atom-icon>
            </button>
          )}
          <div class='carousel-sliders'>
            <div class='carousel-wrapper' role='list'>
              <slot />
            </div>
          </div>
          {this.hasNavigation && (
            <button
              class='carousel-navigation navigation--next'
              role='button'
              aria-label='Next'
              onClick={() => this.handleNavigationClick('next')}
            >
              <atom-icon icon='chevron-right'></atom-icon>
            </button>
          )}
        </div>
        {this.hasPagination && (
          <div
            class='carousel-pagination'
            role='navigation'
            aria-label='Pagination'
          >
            {Array.from(this.carouselItems).map((_, index) => (
              <button
                class={`carousel-pagination__item ${index === this.currentIdx ? 'active' : ''} ${this.thumbnails?.length > 0 ? 'carousel-pagination--thumbnails' : 'carousel-pagination--bullets'}`}
                role='tab'
                aria-selected={index === this.currentIdx}
                aria-controls={`carousel-item-${index}`}
                onClick={() => this.handleMoveToPaginationItem(index)}
              >
                {this.thumbnails?.length > 0 ? (
                  <img
                    class='thumbnail'
                    src={this.thumbnails[index]}
                    alt={`${index + 1}`}
                    aria-hidden='true'
                  />
                ) : (
                  <span class='pagination-text'>{index + 1}</span>
                )}
              </button>
            ))}
          </div>
        )}
      </Host>
    )
  }
}
