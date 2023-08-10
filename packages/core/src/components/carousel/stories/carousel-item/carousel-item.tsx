import { Component, Host, Prop, h } from '@stencil/core'
@Component({
  tag: 'atom-carousel-item',
  shadow: true,
})
/*
This component is only need for the react wrappers.
Anything added here will be ignored once the carousel.tsx does the hard work.
If you need more info please read the ADR 0013
*/
export class AtomCarouselItem {
  @Prop({ mutable: true })
  lazy?: boolean
  render() {
    return (
      <Host>
        <swiper-slide lazy={this.lazy}>
          <slot />
        </swiper-slide>
      </Host>
    )
  }
}
