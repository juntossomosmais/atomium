import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'atom-list-slider-item',
  styleUrl: 'list-slider-item.scss',
  shadow: true,
})
export class AtomListSliderItem {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
