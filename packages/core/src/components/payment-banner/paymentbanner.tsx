import { Component, Host, Prop, h } from '@stencil/core'

import { IconProps } from '../../icons'

@Component({
  tag: 'atom-payment-banner',
  styleUrl: 'payment-banner.scss',
  shadow: true,
})
export class AtomPaymentBanner {
  @Prop() label: string
  @Prop() icon: IconProps

  render() {
    return (
      <Host>
        {this.icon}
        <slot />
        <atom-button>Alterar preferências</atom-button>
      </Host>
    )
  }
}
