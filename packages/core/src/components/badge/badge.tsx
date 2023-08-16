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
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light'
    | 'dark' = 'primary'

  render() {
    return (
      <Host>
        <ion-badge color={this.type} class="atom-badge">
          <slot></slot>
        </ion-badge>
      </Host>
    )
  }
}
