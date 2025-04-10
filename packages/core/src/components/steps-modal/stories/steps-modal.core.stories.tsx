import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { ModalComponentArgs, ModalStoryArgs } from './steps-modal.args'

export default {
  title: 'Components/Steps Modal',
  ...ModalStoryArgs,
} as Meta

const createModal = (args) => {
  return html`
    <div>
      <atom-button id="${args.trigger}">Open Modal</atom-button>
      <atom-steps-modal
        steps="3"
        trigger="${args.trigger}"
        steps-titles="${args.stepsTitles}"
        current-step="${args.currentStep}"
        close-on-finish="${args.closeOnFinish}"
        primary-button-texts-by-step="${args.primaryButtonTextsByStep}"
        secondary-button-texts-by-step="${args.secondaryButtonTextsByStep}"
        is-open="${args.isOpen}"
        custom-initial-step="${args.customInitialStep}
        meta-data="${args.metaData}"
      >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </atom-steps-modal>
      <script>
    </div>
  `
}

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
