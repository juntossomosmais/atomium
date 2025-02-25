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
  @Prop({ mutable: true }) size: 'default' | 'medium' | 'large' = 'default'
  @Prop({ mutable: true }) shape?: 'round' | 'rectangle' = 'round'
  render() {
    return (
      <Host>
        <ion-badge
          size={this.size}
          shape={this.shape}
          color={this.type}
          class='atom-badge'
        >
          <slot />
        </ion-badge>
      </Host>
    )
  }
}
