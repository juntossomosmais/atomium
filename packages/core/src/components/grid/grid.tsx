import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'ato-grid',
  shadow: false,
})
export class AtoGrid {
  @Prop() fixed?: boolean

  render() {
    return (
      <ion-grid fixed={this.fixed}>
        <slot />
      </ion-grid>
    )
  }
}
