import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'atom-grid',
  shadow: true,
  styleUrl: 'grid.scss',
})
export class AtomGrid {
  @Prop() fixed?: boolean

  render() {
    return (
      <ion-grid fixed={this.fixed} class="atom-grid">
        <slot />
      </ion-grid>
    )
  }
}
