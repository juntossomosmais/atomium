import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core'

import { IconProps } from '../../icons'

type AlertType = Record<'alert' | 'error', { icon: IconProps; color: string }>

@Component({
  tag: 'atom-modal',
  styleUrl: 'modal.scss',
  shadow: false,
  scoped: true,
})
export class AtomModal {
  @Prop() trigger?: string
  @Prop() headerTitle?: string = ''
  @Prop() primaryText?: string
  @Prop() secondaryText?: string
  @Prop() hasDivider?: boolean
  @Prop() alertType?: 'alert' | 'error'
  @Prop() progress?: number
  @Prop() hasFooter?: boolean = true

  @Event() atomCloseClick: EventEmitter
  @Event() atomDidDismiss: EventEmitter
  @Event() atomDidPresent: EventEmitter
  @Event() atomPrimaryClick: EventEmitter
  @Event() atomSecondaryClick: EventEmitter

  private modal: HTMLIonModalElement

  private alertMap: AlertType = {
    alert: {
      icon: 'alert-outline',
      color: 'warning',
    },
    error: {
      icon: 'alert-circle-outline',
      color: 'error',
    },
  }

  private handleDidDimiss = () => {
    this.atomDidDismiss.emit(this.modal)
  }

  private handleDidPresent = () => {
    this.atomDidPresent.emit(this.modal)
  }

  private handleCloseClick = () => {
    this.atomCloseClick.emit(this.modal)
    this.modal.dismiss()
  }

  private handleSecondaryClick = () => {
    this.atomSecondaryClick.emit(this.modal)
  }

  private handlePrimaryClick = () => {
    this.atomPrimaryClick.emit(this.modal)
  }

  render() {
    const iconType = this.alertMap[this.alertType]

    return (
      <Host>
        <ion-modal
          ref={(el) => (this.modal = el as HTMLIonModalElement)}
          trigger={this.trigger}
          class={{
            'atom-modal': true,
            'atom-modal--progress': !!this.progress,
          }}
          onDidDismiss={this.handleDidDimiss}
          onDidPresent={this.handleDidPresent}
        >
          <header class='atom-modal__header'>
            <div>
              {iconType && (
                <atom-icon
                  icon={iconType.icon}
                  class={`atom-modal__icon-type atom-modal__icon-type--${iconType.color}`}
                />
              )}
              {this.headerTitle ? (
                <h3 class='atom-modal__title'>{this.headerTitle}</h3>
              ) : (
                <slot name='header' />
              )}
            </div>
            <atom-button
              fill='clear'
              shape='circle'
              onClick={this.handleCloseClick}
              class='atom-modal__close'
            >
              <atom-icon
                icon='close'
                class='atom-modal__close-icon'
              ></atom-icon>
            </atom-button>
          </header>
          {!!this.progress && (
            <ion-progress-bar value={this.progress} color='primary' />
          )}
          <div
            class={{
              'atom-modal__content': true,
              'atom-modal__content--divided': this.hasDivider,
            }}
          >
            <slot />
          </div>
          {this.hasFooter && (
            <footer class='atom-modal__footer'>
              <atom-button
                color='secondary'
                class='atom-modal__btn-action atom-modal__btn-action--secondary'
                onClick={() => this.handleSecondaryClick()}
              >
                {this.secondaryText}
              </atom-button>
              <atom-button
                color='primary'
                class='atom-modal__btn-action atom-modal__btn-action--primary'
                onClick={() => this.handlePrimaryClick()}
              >
                {this.primaryText}
              </atom-button>
            </footer>
          )}
        </ion-modal>
      </Host>
    )
  }
}
