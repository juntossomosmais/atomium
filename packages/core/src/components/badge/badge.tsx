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
    | 'success'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark'
    | 'purple' = 'primary'

  render() {
    return (
      <Host>
        <ion-badge color={this.type}>11</ion-badge>
      </Host>
    )
  }
}
