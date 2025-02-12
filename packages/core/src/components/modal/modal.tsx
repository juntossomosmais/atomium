import {
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h,
} from '@stencil/core'

import { IconProps } from '../../icons'

type AlertType = Record<'alert' | 'error', { icon: IconProps; color: string }>

@Component({
  tag: 'atom-modal',
  styleUrl: 'modal.scss',
  scoped: true,
})
export class AtomModal {
  @Prop() idName?: string
  @Prop() trigger?: string
  @Prop() headerTitle = ''
  @Prop() primaryButtonText?: string
  @Prop() secondaryButtonText?: string
  @Prop() hasDivider = false
  @Prop() alertType?: 'alert' | 'error'
  @Prop() progress?: number
  @Prop() hasFooter = true
  @Prop() disablePrimaryButton = false
  @Prop() disableSecondaryButton = false
  @Prop({ mutable: true }) isOpen = false
  @Prop({ mutable: true }) canDismiss?: boolean

  @Event() atomCloseClick: EventEmitter
  @Event() atomDidDismiss: EventEmitter
  @Event() atomDidPresent: EventEmitter
  @Event() atomPrimaryClick: EventEmitter
  @Event() atomSecondaryClick: EventEmitter
  @Event() atomIsOpenChange: EventEmitter

  private modal: HTMLIonModalElement

  private readonly alertMap: AlertType = {
    alert: {
      icon: 'alert-outline',
      color: 'warning',
    },
    error: {
      icon: 'alert-circle-outline',
      color: 'error',
    },
  }

  @Watch('isOpen')
  handleIsOpenChange(newValue: boolean, oldValue: boolean) {
    if (newValue !== oldValue) {
      this.atomIsOpenChange.emit(newValue)
    }
  }

  private readonly handleDidDismiss = () => {
    this.atomDidDismiss.emit(this.modal)
  }

  private readonly handleDidPresent = () => {
    this.atomDidPresent.emit(this.modal)
  }

  private readonly handleCloseClick = async () => {
    this.atomCloseClick.emit(this.modal)
    this.modal.dismiss()
  }

  private readonly handleSecondaryClick = () => {
    this.atomSecondaryClick.emit(this.modal)
  }

  private readonly handlePrimaryClick = () => {
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
          id={this.idName}
          class={{
            'atom-modal': true,
            'atom-modal--progress': !!this.progress,
          }}
          onIonModalDidDismiss={this.handleDidDismiss}
          onDidDismiss={this.handleDidDismiss}
          onDidPresent={this.handleDidPresent}
          isOpen={this.isOpen}
          canDismiss={this.canDismiss}
          part='modal'
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
              color='secondary'
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
          {this.progress >= 0 ? (
            <ion-progress-bar value={this.progress} color='primary' />
          ) : null}
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
                disabled={this.disableSecondaryButton}
                fill='outline'
                class='atom-modal__btn-action atom-modal__btn-action--secondary'
                onClick={this.handleSecondaryClick}
              >
                {this.secondaryButtonText}
              </atom-button>
              <atom-button
                color='primary'
                disabled={this.disablePrimaryButton}
                class='atom-modal__btn-action atom-modal__btn-action--primary'
                onClick={this.handlePrimaryClick}
              >
                {this.primaryButtonText}
              </atom-button>
            </footer>
          )}
        </ion-modal>
      </Host>
    )
  }
}
