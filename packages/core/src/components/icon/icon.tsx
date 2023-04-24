import { Color } from '@ionic/core'
import { Component, Prop, h } from '@stencil/core'

const CDN_URL = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/svg'

@Component({
  tag: 'ato-icon',
  shadow: true,
})
export class AtoIcon {
  @Prop() icon?: string
  @Prop() color?: Color
  @Prop() size?: 'small' | 'large'

  render() {
    return (
      <ion-icon
        icon={`${CDN_URL}/${this.icon}.svg`}
        color={this.color}
        size={this.size}
      />
    )
  }
}
