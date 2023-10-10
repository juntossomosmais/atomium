import { Component, Host, Prop, h } from '@stencil/core'

import { IconProps } from '../../icons'

@Component({
  tag: 'atom-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class AtomTooltip {
  @Prop() action: 'click' | 'hover'
  @Prop() element: string

  render() {
    return (
      <Host>
        <ion-popover
          showBackdrop={false}
          // mode='md'
          trigger={this.element}
          triggerAction={this.action}
          // class='atom-tooltip'
        >
          Hello world
        </ion-popover>
      </Host>
    )
  }
}
