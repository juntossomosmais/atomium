import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'atom-rich-tooltip',
  styleUrl: 'tag.scss',
  shadow: true,
})
export class AtomRichTooltip {
  render() {
    return (
      <Host>
        <ion-popover></ion-popover>
      </Host>
    )
  }
}
