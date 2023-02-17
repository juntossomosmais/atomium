import { Component, Event, EventEmitter, h, Prop } from '@stencil/core'

@Component({
  tag: 'at-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class AtButton {
  @Prop({ reflect: true }) color?: string
  @Prop({ reflect: true }) fill?: 'clear' | 'outline' | 'solid' = 'solid'
  @Prop({ reflect: true }) size?: 'small' | 'default' | 'large' = 'default'
  @Prop({ reflect: true }) disabled?: boolean
  @Prop() type?: 'submit' | 'reset' | 'button' = 'button'

  @Event() buttonClick: EventEmitter

  render() {
    const buttonClasses = {
      [`btn-${this.size}`]: !!this.size,
      [`btn-${this.fill}-${this.color}`]: !!this.color && !!this.fill,
    }

    return (
      <ion-button
        class={buttonClasses}
        disabled={this.disabled}
        onClick={() => this.buttonClick.emit()}
        type={this.type}
      >
        <slot name="button-text" />
      </ion-button>
    )
  }
}
