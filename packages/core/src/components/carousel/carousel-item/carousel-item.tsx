import { Component, Element, Host, h } from '@stencil/core'

@Component({
  tag: 'atom-carousel-item',
  styleUrl: 'carousel-item.scss',
  shadow: true,
})
export class AtomCarouselItem {
  @Element() host!: HTMLElement

  render() {
    return (
      <Host>
        <div class='atom-carousel-item'>
          <slot />
        </div>
      </Host>
    )
  }
}
