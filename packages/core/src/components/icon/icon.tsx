import { Color } from '@ionic/core'
import { Component, Host, Prop, State, Watch, h } from '@stencil/core'

import { IconProps } from '../../icons'

const CDN_URL = 'https://atomium.juntossomosmais.com.br/icons'

type Size = 'small' | 'large' | number

@Component({
  tag: 'atom-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class AtomIcon {
  @Prop() color?: Color
  @Prop() icon?: IconProps
  @Prop() size?: Size

  @State() validateSize?: string = ''
  @State() fontSize?: string = ''

  private updateSize(newSize: Size) {
    this.validateSize = ''
    this.fontSize = ''

    if (newSize === 'small' || newSize === 'large') {
      this.validateSize = newSize
    } else if (newSize > 0) {
      this.fontSize = `${newSize}px`
    }
  }

  @Watch('size')
  watchPropHandler(newSize: Size) {
    this.updateSize(newSize)
  }

  componentWillLoad() {
    this.updateSize(this.size)
  }

  render(): JSX.Element {
    return (
      <Host aria-hidden='true'>
        <ion-icon
          icon={`${CDN_URL}/${this.icon}.svg`}
          color={this.color}
          size={this.validateSize}
          style={{ fontSize: this.fontSize }}
        />
      </Host>
    )
  }
}
