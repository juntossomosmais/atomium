import { Component, Host, Prop, h } from '@stencil/core'
import { IconProps } from '../../icons'

@Component({
  tag: 'atom-tag',
  styleUrl: 'tag.scss',
  shadow: true,
})
export class AtomTag {
  @Prop() color: 'success' | 'danger' | 'warning' | 'dark' | 'light' | 'neutral'
  @Prop() icon?: IconProps

  render() {
    return (
      <Host>
        <ion-badge color={this.color} class='atom-tag'>
          {this.icon && (
            <atom-icon class='atom-icon' icon={this.icon}></atom-icon>
          )}
          <slot />
        </ion-badge>
      </Host>
    )
  }
}
