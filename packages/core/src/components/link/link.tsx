import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class AtomLink {
  @Prop() color: 'primary' | 'secondary' = 'primary'
  @Prop() type: 'anchor' | 'button' = 'anchor'
  @Prop() loading?: boolean = false

  @Event() click: EventEmitter

  private handleClick = (event: MouseEvent) => {
    if (this.loading) {
      return
    }

    event.preventDefault()
    event.stopPropagation()

    return this.click.emit(event)
  }

  render() {
    return (
      <Host>
        {this.type === 'anchor' ? (
          <span
            class={{
              [`atom-link`]: true,
              [`is-loading`]: this.loading,
            }}
            color={this.color}
          >
            <slot />
          </span>
        ) : (
          <button
            class={{
              [`atom-link__button`]: true,
              [`is-loading`]: this.loading,
            }}
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
