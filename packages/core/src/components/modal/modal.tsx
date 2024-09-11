import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core'

import { IconProps } from '../../icons'

type AlertType = Record<'alert' | 'error', { icon: IconProps; color: string }>

/* @todo it's needed to prevent a ionic error. In the version 8.0 it was fixed, remove it after the upgrade.
 *  https://github.com/ionic-team/ionic-framework/issues/23942
 */
const BACKDROP_NO_SCROLL = 'backdrop-no-scroll'

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
  @Prop() hasDivider?: boolean = false
  @Prop() alertType?: 'alert' | 'error'
  @Prop() progress?: number
  @Prop() hasFooter?: boolean = true
  @Prop() disablePrimary?: boolean = false
  @Prop() disableSecondary?: boolean = false

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

  componentDidLoad() {
    document.body.classList.remove(BACKDROP_NO_SCROLL)
  }

  private handleDidDimiss = () => {
    this.atomDidDismiss.emit(this.modal)
  }

  private handleDidPresent = () => {
    this.atomDidPresent.emit(this.modal)
  }

  private handleCloseClick = async () => {
    this.atomCloseClick.emit(this.modal)
    await this.modal.dismiss()
    document.body.classList.remove(BACKDROP_NO_SCROLL)
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
          aria-labelledby='atom-modal__header-title'
          aria-describedby='atom-modal__content'
          ref={(el) => (this.modal = el as HTMLIonModalElement)}
          trigger={this.trigger}
          class={{
            'atom-modal': true,
            'atom-modal--progress': !!this.progress,
          }}
          onIonModalDidDismiss={this.handleDidDimiss}
          onDidPresent={this.handleDidPresent}
        >
          <header part='header' class='atom-modal__header'>
            {iconType && (
              <atom-icon
                aria-hidden='true'
                icon={iconType.icon}
                class={`atom-modal__icon-type atom-modal__icon-type--${iconType.color}`}
              />
            )}
            <div id='atom-modal__header-title'>
              {this.headerTitle ? (
                <h1 class='atom-modal__title'>{this.headerTitle}</h1>
              ) : (
                <slot name='header' />
              )}
            </div>
            <atom-button
              fill='clear'
              shape='circle'
              onClick={this.handleCloseClick}
              aria-label='close'
              class='atom-modal__close'
            >
              <atom-icon
                icon='close'
                class='atom-modal__close-icon'
                aria-hidden='true'
              ></atom-icon>
            </atom-button>
          </header>
          {!!this.progress && (
            <ion-progress-bar value={this.progress} color='primary' />
          )}
          <div
            id='atom-modal__content'
            part='content'
            class={{
              'atom-modal__content': true,
              'atom-modal__content--divided': this.hasDivider,
            }}
          >
            <slot />
          </div>
          {this.hasFooter && (
            <footer part='footer' class='atom-modal__footer'>
              <atom-button
                color='secondary'
                disabled={this.disableSecondary}
                fill='outline'
                class='atom-modal__btn-action atom-modal__btn-action--secondary'
                onClick={this.handleSecondaryClick}
              >
                {this.secondaryText}
              </atom-button>
              <atom-button
                color='primary'
                disabled={this.disablePrimary}
                class='atom-modal__btn-action atom-modal__btn-action--primary'
                onClick={this.handlePrimaryClick}
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