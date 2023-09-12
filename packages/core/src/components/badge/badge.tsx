import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class AtomBadge {
  @Prop() type:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'neutral'
    | 'dark' = 'primary'

  render() {
    return (
      <Host>
        <ion-badge color={this.type} class='atom-badge'>
          <slot />
        </ion-badge>
      </Host>
    )
  }
}
