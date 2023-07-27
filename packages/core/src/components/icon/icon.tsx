import { Color } from '@ionic/core'
import { Component, Host, Prop, h } from '@stencil/core'

import { IconProps } from '../../icons'

const CDN_URL = 'https://cdn.juntossomosmais.com.br/atomium/icons'

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
