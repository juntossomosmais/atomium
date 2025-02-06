import { Component, Element, Host, Prop, Watch, h } from '@stencil/core'

import { TooltipController } from '../../utils/tooltip'

@Component({
  tag: 'atom-rich-tooltip',
  styleUrl: 'tag.scss',
  shadow: true,
})
export class AtomRichTooltip {
  private tooltipController: TooltipController

  @Element() el: HTMLElement

  @Prop() element: string
  @Prop() placement: string = 'top'
  @Prop() action: 'hover' | 'click' = 'hover'

  @Watch('placement')
  updatePlacement(newPlacement: string) {
    this.tooltipController.updatePlacement(newPlacement)
  }

  @Watch('action')
  updateEvents(newAction: 'hover' | 'click') {
    this.tooltipController.updateAction(newAction)
  }

  componentWillLoad() {
    this.tooltipController = new TooltipController(
      this.el,
      this.element,
      this.placement,
      this.action
    )
    this.tooltipController.init()
  }

  disconnectedCallback() {
    this.tooltipController.destroy()
  }

  render() {
    return (
      <Host role='tooltip'>
        <div class='atom-rich-tooltip'>
          <slot />
        </div>
      </Host>
    )
  }
}
