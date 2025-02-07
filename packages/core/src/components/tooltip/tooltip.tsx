import { Component, Element, Host, Prop, Watch, h } from '@stencil/core'

import { TooltipController } from '../../utils/tooltip'

@Component({
  tag: 'atom-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class AtomTooltip {
  private tooltipController: TooltipController

  @Element() el: HTMLElement

  @Prop({ mutable: true }) open = false
  @Prop() element: string
  @Prop() placement:
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'left' = 'top'
  @Prop() action: 'hover' | 'click' = 'hover'

  @Watch('placement')
  updatePlacement(
    newPlacement:
      | 'auto'
      | 'auto-start'
      | 'auto-end'
      | 'top'
      | 'top-start'
      | 'top-end'
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'right'
      | 'left' = 'top'
  ) {
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
        <div class='atom-tooltip'>
          <slot />
        </div>
      </Host>
    )
  }
}
