import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { ModalComponentArgs, ModalStoryArgs } from './steps-modal.args'

export default {
  title: 'Components/StepsModal',
  ...ModalStoryArgs,
} as Meta

const createModal = () => {
  return html`
    <div>
      <atom-button id="open-modal-steps">Open Modal</atom-button>
      <atom-steps-modal
        steps="3"
        trigger="open-modal-steps"
        steps-titles="Step 1, Step 2, Step 3"
      >
        <div slot="step-0">Step 1 Content</div>
        <div slot="step-1">Step 2 Content</div>
        <div slot="step-2">Step 3 Content</div>
      </atom-steps-modal>
    </div>
  `
}

export const Default: StoryObj = {
  render: () => createModal(),
  args: {
    ...ModalComponentArgs,
  },
}
