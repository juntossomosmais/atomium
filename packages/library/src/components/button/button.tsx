import { Color, Mode } from '@ionic/core'
import { Component, Event, EventEmitter, h, Prop } from '@stencil/core'

@Component({
  tag: 'ato-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class AtoButton {
  @Prop() color: Color = 'primary'
  @Prop() fill: 'clear' | 'outline' | 'solid' = 'solid'
  @Prop() size: 'small' | 'default' | 'large' = 'default'
  @Prop() shape: 'default' | 'round' = 'default'
  @Prop() disabled?: boolean
  @Prop() type: 'submit' | 'reset' | 'button' = 'button'
  @Prop() mode: Mode = 'md'

  @Event() atoClick: EventEmitter

  render() {
    const buttonClasses = {
      [`btn-${this.size}`]: !!this.size,
      [`btn-${this.fill}-${this.color}`]: !!this.color && !!this.fill,
    }

    return (
      <ion-button
        class={buttonClasses}
        fill={this.fill}
        shape={this.shape}
        disabled={this.disabled}
        onClick={() => this.atoClick.emit()}
        type={this.type}
      >
        <slot />
      </ion-button>
    )
  }
}
