import { Color, Mode } from '@ionic/core'
import { Component, Event, EventEmitter, h, Prop } from '@stencil/core'

@Component({
  tag: 'ato-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class AtoButton {
  @Prop({ reflect: true }) color: Color = 'primary'
  @Prop({ reflect: true }) fill: 'clear' | 'outline' | 'solid' = 'solid'
  @Prop({ reflect: true }) size: 'small' | 'default' | 'large' = 'default'
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
        disabled={this.disabled}
        onClick={() => this.atoClick.emit()}
        type={this.type}
      >
        <slot />
      </ion-button>
    )
  }
}
