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
      <atom-button id="open-modal-steps">Open Modal</atom-button>
      <atom-steps-modal
        steps="3"
        trigger="open-modal-steps"
        steps-titles="Step 1, Step 2, Step 3"
        current-step="${args.currentStep}"
        close-on-finish="${args.closeOnFinish}"
        primary-button-text="${args.primaryButtonText}"
        secondary-button-text="${args.secondaryButtonText}"
        is-open="${args.isOpen}"
      >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </atom-steps-modal>
    </div>
  `
}

export const Default: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
  },
}

export const CurrentStepAlreadySet: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2,
  },
}

export const CloseOnFinish: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true,
  },
}
