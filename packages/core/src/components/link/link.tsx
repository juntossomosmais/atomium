import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class AtomLink {
  @Prop() color: 'primary' | 'secondary' = 'secondary'
  @Prop() type: 'anchor' | 'button' = 'anchor'
  @Prop() loading?: boolean = false
  @Prop() size: 'small' | 'medium' | 'large' = 'medium'

  @Event() click: EventEmitter

  private readonly handleClick = (event: MouseEvent) => {
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
              [`atom-link--${this.size}`]: true,
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
              [`atom-link--${this.size}`]: true,
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
