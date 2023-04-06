import { Mode } from '@ionic/core'
import { Component, Event, EventEmitter, h, Prop } from '@stencil/core'

@Component({
  tag: 'ato-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class AtoButton {
  @Prop() color: 'primary' | 'secondary' = 'primary'
  @Prop() fill: 'clear' | 'outline' | 'solid' = 'solid'
  @Prop() size: 'small' | 'default' | 'large' = 'default'
  @Prop() expand?: 'block' | 'full'
  @Prop() shape?: 'round'
  @Prop() disabled?: boolean
  @Prop() type: 'submit' | 'reset' | 'button' = 'button'
  @Prop() mode: Mode = 'md'

  @Event() atoClick: EventEmitter

  private handleClick = () => {
    this.atoClick.emit()
  }

  render() {
    return (
      <ion-button
        color={this.color}
        fill={this.fill}
        shape={this.shape}
        disabled={this.disabled}
        type={this.type}
        onClick={this.handleClick}
      >
        <slot />
      </ion-button>
    )
  }
}
