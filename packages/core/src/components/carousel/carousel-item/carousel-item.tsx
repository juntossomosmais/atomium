import { Component, Element, Host, h } from '@stencil/core'
@Component({
  tag: 'atom-carousel-item',
  shadow: false,
})
export class AtomCarouselItem {
  @Element() host!: HTMLElement

  componentDidLoad() {
    const parentSwiperContainer =
      this.host.parentElement.querySelector('swiper-container')
    const swiperSlide = this.host.querySelector('swiper-slide')
    parentSwiperContainer.appendChild(swiperSlide)
    this.host.parentElement.removeChild(this.host)
  }
  render() {
    return (
      <Host>
        <swiper-slide class="atom-carousel-item">
          <slot />
        </swiper-slide>
      </Host>
    )
  }
}
