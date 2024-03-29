import { Component, Event, EventEmitter, Prop, h } from '@stencil/core'

import { IconProps } from '../../icons'

@Component({
  tag: 'atom-chip',
  styleUrl: 'chip.scss',
  shadow: true,
})
export class AtomChip {
  @Prop() disabled = false
  @Prop() activated = false
  @Prop() outline = false
  @Prop() mode: 'ios' | 'md' = 'md'
  @Prop() icon?: IconProps
  @Prop() close = false

  @Event() atomClick: EventEmitter

  private handleClick = () => {
    this.atomClick.emit()
  }

  render() {
    return (
      <ion-chip
        class={{
          [`atom-chip`]: true,
          [`has-activated`]: this.activated,
        }}
        disabled={this.disabled}
        tabIndex={1}
        onClick={this.handleClick}
      >
        {this.icon && (
          <atom-icon
            class={{
              [`atom-icon`]: true,
            }}
            icon={this.icon}
          ></atom-icon>
        )}
        <slot />
        {this.close && (
          <atom-icon
            class={{
              [`atom-close`]: true,
            }}
            icon='close'
          ></atom-icon>
        )}
      </ion-chip>
    )
  }
}
