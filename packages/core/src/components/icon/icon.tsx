import { Color } from '@ionic/core'
import { Component, Host, Prop, h } from '@stencil/core'

import { IconProps } from '../../icons'

// @note: this is a temporary solution using sandbox until we have a proper CDN for our icons
const CDN_URL = 'https://d2kfdqa8kiizgt.cloudfront.net/atomium/icons'

@Component({
  tag: 'atom-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class AtomIcon {
  @Prop() color?: Color
  @Prop() icon?: IconProps
  @Prop() size?: 'small' | 'large'

  render(): JSX.Element {
    return (
      <Host aria-hidden="true">
        <ion-icon
          icon={`${CDN_URL}/${this.icon}.svg`}
          color={this.color}
          size={this.size}
        />
      </Host>
    )
  }
}
