import { AtomButton, AtomStepsModal } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { ModalComponentArgs, ModalStoryArgs } from './steps-modal.args'

export default {
  title: 'Components/Steps Modal',
  component: AtomStepsModal,
  ...ModalStoryArgs,
} as Meta

const createModal = (args) => (
  <div>
    <AtomButton id={args.trigger}>Open Modal</AtomButton>
    <AtomStepsModal
      steps={args.steps}
      trigger={args.trigger}
      steps-titles={args.stepsTitles}
      close-on-finish={args.closeOnFinish}
      primaryButtonTextsByStep={args.primaryButtonTextsByStep}
      secondaryButtonTextsByStep={args.secondaryButtonTextsByStep}
      metaData={args.metaData}
    >
      <div slot='step-1'>Step 1 Content</div>
      <div slot='step-2'>Step 2 Content</div>
      <div slot='step-3'>Step 3 Content</div>
    </AtomStepsModal>
  </div>
)

export const Default: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal-1',
  },
}

export const CurrentStepAlreadySet: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2,
    trigger: 'open-modal-2',
  },
}

export const CustomInitialStep: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    customInitialStep: 2,
    trigger: 'open-modal-3',
  },
}

export const CloseOnFinish: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true,
    trigger: 'open-modal-4',
  },
}

export const ProvidingMetaData: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    metaData: {
      primaryButtonTestId: 'primary-btn',
      secondaryButtonTestId: 'secondary-btn',
      closeButtonTestId: 'close-btn',
    },
    trigger: 'automated-test-modal',
  },
}
