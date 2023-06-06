import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core'

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
  @Prop() actionText?: string
  @Prop() close = false

  @Event() atomClose: EventEmitter
  @Event() atomAction: EventEmitter

  private handleClose = () => {
    this.atomClose.emit()
  }

  private handleAction = () => {
    this.atomAction.emit()
  }

  render(): JSX.Element {
    return (
      <Host role="alert">
        <div
          class={{
            [`atom-alert`]: true,
            [`atom-color--${this.color}`]: true,
          }}
        >
          <div class="atom-body">
            {this.icon && (
              <atom-icon class="atom-icon" icon={this.icon}></atom-icon>
            )}
            <div class="atom-content">
              {this.messageTitle && (
                <p class="atom-title" innerHTML={this.messageTitle}></p>
              )}
              {this.messageText && (
                <p class="atom-message" innerHTML={this.messageText}></p>
              )}
              <slot></slot>
            </div>
          </div>
          {this.actionText && (
            <div class="atom-actions">
              <button
                class="atom-actions__button"
                type="button"
                onClick={this.handleAction}
              >
                {this.actionText}
              </button>
            </div>
          )}
          {this.close && (
            <button
              class="atom-close"
              aria-label="Close"
              onClick={this.handleClose}
              type="button"
            >
              <atom-icon icon="close"></atom-icon>
            </button>
          )}
        </div>
      </Host>
    )
  }
}
