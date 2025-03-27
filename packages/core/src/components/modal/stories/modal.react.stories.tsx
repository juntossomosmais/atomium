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
    <AtomButton id='open-modal'>Open Modal</AtomButton>
    <AtomModal
      alertType={args.alertType}
      hasDivider={args.hasDivider}
      primaryButtonText={args.primaryButtonText}
      secondaryButtonText={args.secondaryButtonText}
      trigger='open-modal'
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
  },
}

export const Divided: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
  },
}

export const Progress: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
  },
}

export const Alert: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
  },
}

export const ErrorModal: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
  },
}

export const HeaderTitle: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
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
  },
}
