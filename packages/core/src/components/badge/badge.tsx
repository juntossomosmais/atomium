import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class AtomBadge {
  @Prop() type:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'neutral'
    | 'dark' = 'primary'

  render() {
    return (
      <ion-badge color={this.type} class="atom-badge">
        <slot />
      </ion-badge>
    )
  }
}
