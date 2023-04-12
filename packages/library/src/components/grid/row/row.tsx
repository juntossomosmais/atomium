import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'ato-row',
  styleUrl: 'row.scss',
  shadow: true,
})
export class AtoRow {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
