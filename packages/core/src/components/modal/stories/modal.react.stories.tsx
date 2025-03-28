import { AtomButton, AtomModal } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ModalComponentArgs, ModalStoryArgs } from './modal.args'

export default {
  title: 'Components/Modal',
  component: AtomModal,
  ...ModalStoryArgs,
} as Meta

const createModal = (args) => (
  <div>
    <AtomButton id={args.trigger}>Open Modal</AtomButton>
    <AtomModal
      alertType={args.alertType}
      hasDivider={args.hasDivider}
      primaryButtonText={args.primaryButtonText}
      secondaryButtonText={args.secondaryButtonText}
      trigger={args.trigger}
      progress={args.progress}
      disablePrimaryButton={args.disablePrimaryButton}
      disableSecondaryButton={args.disableSecondaryButton}
      isOpen={args.isOpen}
      canDismiss={args.canDismiss}
      id={args.id}
      metaData={args.metaData || {}}
    >
      <div slot='header'>Custom Header</div>
      <p>Modal Content</p>
    </AtomModal>
  </div>
)

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
    trigger: 'open-modal-2',
  },
}

export const Progress: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
    trigger: 'open-modal-3',
  },
}

export const Alert: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
    trigger: 'open-modal-4',
  },
}

export const ErrorModal: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
    trigger: 'open-modal-5',
  },
}

export const HeaderTitle: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
    trigger: 'open-modal-6',
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
    trigger: 'open-modal-7',
  },
}
