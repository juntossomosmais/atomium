import { Component, Host, Prop, State, Watch, h } from '@stencil/core'

import { IconProps } from '../../icons'

const CDN_URL = 'https://atomium.juntossomosmais.com.br/icons'

type Size = 'small' | 'large' | number
type ColorProps =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'medium'
  | 'dark'
  | 'white'

@Component({
  tag: 'atom-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class AtomIcon {
  @Prop() color?: ColorProps
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

  render() {
    return (
      <Host aria-hidden='true'>
        <ion-icon
          color={this.color}
          icon={`${CDN_URL}/${this.icon}.svg`}
          size={this.validateSize}
          style={{ fontSize: this.fontSize }}
        />
      </Host>
    )
  }
}
