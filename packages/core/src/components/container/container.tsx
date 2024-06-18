import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-container',
  styleUrl: 'container.scss',
  shadow: true,
})
export class AtomContainer {
  @Prop() hasPadding = true

  render() {
    return (
      <Host class={{ 'has-padding': this.hasPadding }}>
        <slot></slot>
      </Host>
    )
  }
}
