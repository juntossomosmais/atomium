import {
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h,
} from '@stencil/core'

import { IconProps } from '../../icons'

@Component({
  tag: 'atom-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class AtomAlert {
  @Prop() color?: 'info' | 'success' | 'warning' | 'danger' | 'neutral' =
    'neutral'
  @Prop() icon?: IconProps
  @Prop() messageTitle?: string
  @Prop() messageText?: string
  @Prop() actionText?: string
  @Prop() close = false

  @Event() atomClose: EventEmitter
  @Event() atomAction: EventEmitter

  private handleClose = () => {
    this.atomClose.emit()
    this.isAlertOpen = false
  }

  private handleAction = () => {
    this.atomAction.emit()
  }

  @State() isAlertOpen = true

  render() {
    return (
      <Host
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
        aria-hidden={!this.isAlertOpen && 'true'}
        class={{
          'is-close': !this.isAlertOpen,
        }}
      >
        {this.isAlertOpen && (
          <div
            class={{
              [`atom-alert`]: true,
              [`atom-color--${this.color}`]: true,
              [`has-close`]: this.close,
            }}
          >
            <div class='atom-body'>
              {this.icon && (
                <atom-icon class='atom-icon' icon={this.icon}></atom-icon>
              )}
              <div class='atom-content'>
                {this.messageTitle && (
                  <div class='atom-title' innerHTML={this.messageTitle}></div>
                )}
                {this.messageText && (
                  <div class='atom-message' innerHTML={this.messageText}></div>
                )}
              </div>
            </div>
            {this.actionText && (
              <div class='atom-actions'>
                <button
                  class='atom-actions__button'
                  type='button'
                  onClick={this.handleAction}
                >
                  {this.actionText}
                </button>
              </div>
            )}
            {this.close && (
              <button
                class='atom-close'
                aria-label='Close'
                onClick={this.handleClose}
                type='button'
              >
                <atom-icon icon='close'></atom-icon>
              </button>
            )}
          </div>
        )}
      </Host>
    )
  }
}
