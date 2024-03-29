import { Component, Element, Host, h } from '@stencil/core'
@Component({
  tag: 'atom-carousel-item',
  styleUrl: 'carousel-item.scss',
  shadow: false,
})
export class AtomCarouselItem {
  @Element() host!: HTMLElement

  render() {
    return (
      <Host>
        <swiper-slide class='atom-carousel-item'>
          <slot />
        </swiper-slide>
      </Host>
    )
  }
}
