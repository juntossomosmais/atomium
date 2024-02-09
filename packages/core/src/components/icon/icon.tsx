import { Color } from '@ionic/core'
import { Component, Host, Prop, h } from '@stencil/core'

import { IconProps } from '../../icons'

const CDN_URL = 'https://atomium.juntossomosmais.com.br/icons'

@Component({
  tag: 'atom-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class AtomIcon {
  @Prop() color?: Color
  @Prop() icon?: IconProps
  @Prop() fontSize?: string
  @Prop() size?: 'small' | 'large'

  render(): JSX.Element {
    return (
      <Host aria-hidden='true'>
        <ion-icon
          icon={`${CDN_URL}/${this.icon}.svg`}
          color={this.color}
          size={this.size}
          style={{ fontSize: this.fontSize }}
        />
      </Host>
    )
  }
}
