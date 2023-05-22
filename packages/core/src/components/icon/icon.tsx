import { Color } from '@ionic/core'
import { Component, Host, Prop, h } from '@stencil/core'

const CDN_URL = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/svg'

@Component({
  tag: 'atom-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class AtomIcon {
  @Prop() color?: Color
  @Prop() icon?: string
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
