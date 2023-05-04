import { Mode } from '@ionic/core'
import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class AtomButton {
  @Prop() color: 'primary' | 'secondary' = 'primary'
  @Prop() fill: 'clear' | 'outline' | 'solid' = 'solid'
  @Prop() size: 'small' | 'default' | 'large' = 'default'
  @Prop() expand?: 'block'
  @Prop() disabled?: boolean
  @Prop() type: 'submit' | 'reset' | 'button' = 'button'
  @Prop() mode: Mode = 'md'
  @Prop() loading?: boolean
  @Prop() href?: string
  @Prop() rel?: string
  @Prop() target?: string
  @Prop() download?: string

  @Event() atomClick: EventEmitter

  private handleClick = () => {
    this.atomClick.emit()
  }

  render() {
    return (
      <Host
        class={{
          [`expand-${this.expand}`]: !!this.expand,
        }}
      >
        <ion-button
          class={{
            [`atom-button`]: true,
            [`is-loading`]: this.loading,
          }}
          color={this.disabled && !this.loading ? 'medium' : this.color}
          fill={this.fill}
          size={this.size}
          expand={this.expand}
          shape={'round'}
          disabled={this.disabled}
          type={this.type}
          mode={this.mode}
          href={this.href}
          rel={this.rel}
          target={this.target}
          download={this.download}
          onClick={this.handleClick}
        >
          {this.loading && (
            <span class="loading">
              <ion-spinner
                color={this.fill === 'solid' ? 'light' : this.color}
              />
            </span>
          )}
          <span class="slot">
            <slot />
          </span>
        </ion-button>
      </Host>
    )
  }
}
