import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'atom-grid',
  shadow: false,
})
export class AtomGrid {
  @Prop() fixed?: boolean

  render() {
    return (
      <ion-grid fixed={this.fixed}>
        <slot />
      </ion-grid>
    )
  }
}
