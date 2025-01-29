import { Component, h } from '@stencil/core'

@Component({
  tag: 'atom-divider',
  styleUrl: 'divider.scss',
  shadow: true,
})
export class AtomDivider {
  render() {
    return (
      <div class='atom-divider'>
        <slot></slot>
      </div>
    )
  }
}
