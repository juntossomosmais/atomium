import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class AtomAlert {
  @Prop() color?: 'info' | 'success' | 'warning' | 'danger' | 'neutral' =
    'neutral'
  @Prop() icon?: string
  @Prop() messageTitle?: string
  @Prop() messageText?: string
  @Prop() close = false

  render(): JSX.Element {
    return (
      <Host role="alert">
        <div
          class={{
            [`atom-alert`]: true,
            [`atom-color--${this.color}`]: true,
          }}
        >
          {this.icon && (
            <atom-icon
              class={{
                [`atom-icon`]: true,
              }}
              icon={this.icon}
            ></atom-icon>
          )}
          <div class="atom-body">
            {this.messageTitle && <p class="atom-title">{this.messageTitle}</p>}
            {this.messageText && <p class="atom-message">{this.messageText}</p>}
          </div>
          <slot></slot>
          <div class="atom-actions">
            <slot name="actions"></slot>
          </div>
          {this.close && (
            <button class="atom-close" aria-label="Close">
              <atom-icon icon="close"></atom-icon>
            </button>
          )}
        </div>
      </Host>
    )
  }
}
