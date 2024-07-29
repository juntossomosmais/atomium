import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class AtomLink {
  @Prop() color: 'primary' | 'secondary' = 'primary'
  @Prop() type: 'anchor' | 'button' = 'anchor'

  @Event() click: EventEmitter

  private handleClick = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    return this.click.emit(event)
  }

  render() {
    return (
      <Host>
        {this.type === 'anchor' ? (
          <span class='atom-link' color={this.color}>
            <slot />
          </span>
        ) : (
          <button
            class='atom-link__button'
            onClick={this.handleClick.bind(this)}
          >
            <span class='atom-link' color={this.color}>
              <slot />
            </span>
          </button>
        )}
      </Host>
    )
  }
}
