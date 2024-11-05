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
  @Prop({ mutable: true }) color: 'primary' | 'secondary' | 'white' = 'primary'
  @Prop({ mutable: true }) disabled?: boolean
  @Prop({ mutable: true }) download?: string
  @Prop({ mutable: true }) expand?: 'block'
  @Prop({ mutable: true }) fill:
    | 'clear'
    | 'outline'
    | 'outline-filled'
    | 'solid' = 'solid'
  @Prop({ mutable: true }) shape?: 'round' | 'circle' = 'round'
  @Prop({ mutable: true }) href?: string
  @Prop({ mutable: true }) loading?: boolean
  @Prop({ mutable: true }) mode: Mode = 'md'
  @Prop({ mutable: true }) rel?: string
  @Prop({ mutable: true }) size: 'small' | 'default' | 'large' = 'default'
  @Prop({ mutable: true }) target?: string
  @Prop({ mutable: true }) type: 'submit' | 'reset' | 'button' = 'button'

  @Event() click: EventEmitter

  @Element() element: HTMLElement

  private formFunctions = {
    reset: 'reset',
    submit: 'requestSubmit',
  }

  private get isLink() {
    return this.href || this.download || this.target
  }

  private handleClick = (event) => {
    if (this.isLink) return

    event.preventDefault()
    event.stopPropagation()

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
            [`is-outline-filled`]: this.fill === 'outline-filled',
          }}
          color={this.disabled && !this.loading ? 'medium' : this.color}
          fill={this.fill === 'outline-filled' ? 'default' : this.fill}
          size={this.size}
          expand={this.expand}
          shape='round'
          disabled={this.disabled || this.loading}
          type={this.type}
          mode={this.mode}
          href={this.href}
          rel={this.rel}
          target={this.target}
          download={this.download}
          onClick={this.handleClick.bind(this)}
          part='button'
        >
          {this.loading && (
            <span class='loading'>
              <ion-spinner
                color={this.fill === 'solid' ? 'light' : this.color}
              />
            </span>
          )}
          <span class='slot'>
            <slot />
          </span>
        </ion-button>
      </Host>
    )
  }
}
