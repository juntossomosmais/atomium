import { Component, Element, Host, Prop, h } from '@stencil/core'
@Component({
  tag: 'atom-carousel-item',
  shadow: false,
})

export class AtomCarouselItem {
  @Prop({ mutable: true })
  lazy?: boolean

  @Element() host!: HTMLElement

  // If you need more info please read the ADR 0013
  componentDidLoad() {
    const parentSwiperContainer = this.host.parentElement.querySelector('swiper-container')
    const swiperSlide =this.host.querySelector('swiper-slide')
    parentSwiperContainer.appendChild(swiperSlide.cloneNode(true))
    this.host.parentElement.removeChild(this.host)
  }
  render() {
    return (
      <Host>
        <swiper-slide lazy={this.lazy} class="atom-carousel-item">
          <slot />
        </swiper-slide>
      </Host>
    )
  }
}
