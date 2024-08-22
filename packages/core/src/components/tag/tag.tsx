import { Component, Host, Prop, h } from '@stencil/core'

import { IconProps } from '../../icons'

@Component({
  tag: 'atom-tag',
  styleUrl: 'tag.scss',
  shadow: true,
})
export class AtomTag {
  @Prop() color: 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
  @Prop() icon?: IconProps
  @Prop() customBackgroundColor?: string
  @Prop() customTextColor?: string

  getColor(color: string) {
    const colorFromCssVar = getComputedStyle(
      document.documentElement
    ).getPropertyValue(color)

    if (colorFromCssVar.length > 0) return colorFromCssVar

    return color
  }

  render() {
    return (
      <Host>
        <ion-badge
          color={this.color}
          style={{
            backgroundColor: this.getColor(this.customBackgroundColor),
            color: this.getColor(this.customTextColor),
          }}
          part='tag'
          class='atom-tag'
        >
          {this.icon && (
            <atom-icon class='atom-icon' icon={this.icon}></atom-icon>
          )}
          <slot />
        </ion-badge>
      </Host>
    )
  }
}
