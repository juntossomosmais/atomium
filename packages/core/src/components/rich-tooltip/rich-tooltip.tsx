import { Component, Element, EventEmitter, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-rich-tooltip',
  styleUrl: 'rich-tooltip.scss',
  shadow: true,
})
export class AtomRichTooltip {
  @Element() el: HTMLElement

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
  @Prop() title?: string
  @Prop() actiontext: string
  @Prop() buttonaction: EventEmitter

  render() {
    return (
      <Host role='tooltip'>
        <atom-tooltip
          element={this.element}
          placement={this.placement}
          action={this.action}
          class='rich-tooltip'
        >
          <div class='rich-tooltip__content'>
            <h1 class='title'>{this.title}</h1>
            <p class='text'>
              <slot />
            </p>
            {this.action === 'click' && (
              <p class='action' onClick={() => this.buttonaction.emit()}>
                {this.actiontext}
              </p>
            )}
          </div>
        </atom-tooltip>
      </Host>
    )
  }
}
