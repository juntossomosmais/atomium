import { Mode } from '@ionic/core'
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core'

@Component({
  tag: 'atom-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class AtomButton {
  @Prop() color: 'primary' | 'secondary' = 'primary'
  @Prop() disabled?: boolean
  @Prop() download?: string
  @Prop() expand?: 'block'
  @Prop() fill: 'clear' | 'outline' | 'solid' = 'solid'
  @Prop() shape?: 'round' | 'circle' = 'round'
  @Prop() href?: string
  @Prop() loading?: boolean
  @Prop() mode: Mode = 'md'
  @Prop() rel?: string
  @Prop() size: 'small' | 'default' | 'large' = 'default'
  @Prop() target?: string
  @Prop() type: 'submit' | 'reset' | 'button' = 'button'

  @Event() click: EventEmitter

  @Element() element: HTMLElement

  formFunctions = {
    reset: 'reset',
    submit: 'requestSubmit',
  }

  private handleClick = (event) => {
    event.preventDefault()

    if (this.loading || this.disabled) return
    if (this.type === 'button') {
      return this.click.emit(event)
    } else {
      const form = this.element.closest('form')
      if (form) {
        return form[this.formFunctions[this.type]]()
      }
    }
  }

  render() {
    return (
      <Host
        class={{
          [`expand-${this.expand}`]: !!this.expand,
          [`is-disabled`]: this.disabled,
        }}
      >
        <ion-button
          class={{
            [`atom-button`]: true,
            [`is-loading`]: this.loading,
            [`is-circle`]: this.shape === 'circle',
          }}
          color={this.disabled && !this.loading ? 'medium' : this.color}
          fill={this.fill}
          size={this.size}
          expand={this.expand}
          shape="round"
          disabled={this.disabled || this.loading}
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
