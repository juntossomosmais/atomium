import { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

import { ModalComponentArgs, ModalStoryArgs } from './modal.args'

export default {
  title: 'Components/Modal',
  ...ModalStoryArgs,
} as Meta

const createModal = (args) => {
  return html`
    <div>
      <atom-button id="${args.trigger}">open modal</atom-button>
      <atom-modal
        alert-type="${args.alertType}"
        has-divider="${args.hasDivider}"
        primary-button-text="${args.primaryButtonText}"
        secondary-button-text="${args.secondaryButtonText}"
        trigger=${args.trigger}
        progress="${args.progress}"
        has-footer="${args.hasFooter}"
        header-title="${args.headerTitle}"
        disable-secondary-button="${args.disableSecondaryButton}"
        disable-primary-button="${args.disablePrimaryButton}"
        is-open="${args.isOpen}"
        id="${args.id}"
        can-dismiss="${args.canDismiss}"
      >
        <div slot="header">Custom Header</div>
        <p>Modal Content</p>
      </<atom-modal>
    </div>

     <script>
     ;(function () {
      // for automated test section
      const modal = document.querySelector('#automated-test-modal')

      if(modal) {
        modal.metaData = ${JSON.stringify(args.metaData || {})}
      }

      })()
      </script>
  `
}

export const Default: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal',
  },
}

export const Divided: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
    trigger: 'open-modal-1',
  },
}

export const Progress: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
    trigger: 'open-modal-2',
  },
}

export const Alert: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
    trigger: 'open-modal-3',
  },
}

export const ErrorModal: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
    trigger: 'open-modal-4',
  },
}

export const HeaderTitle: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
    trigger: 'open-modal-5',
  },
}

export const AutomatedTest: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    metaData: {
      primaryButtonTestId: 'primary-btn',
      secondaryButtonTestId: 'secondary-btn',
      closeButtonTestId: 'close-btn',
    },
    trigger: 'open-modal-6',
    id: 'automated-test-modal',
  },
}
