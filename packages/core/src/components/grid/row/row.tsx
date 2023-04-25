import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'atom-row',
  styleUrl: 'row.scss',
  shadow: true,
})
export class AtomRow {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
