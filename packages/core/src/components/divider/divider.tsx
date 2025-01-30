import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'atom-divider',
  styleUrl: 'divider.scss',
  shadow: true,
})
export class AtomDivider {
  @Prop() type: 'horizontal' | 'vertical' = 'horizontal'

  render() {
    return <div data-type={this.type} class='atom-divider' />
  }
}
