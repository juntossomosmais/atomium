import { AtomButton, AtomStepsModal } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ModalComponentArgs, ModalStoryArgs } from './steps-modal.args'

export default {
  title: 'Components/StepsModal',
  component: AtomStepsModal,
  ...ModalStoryArgs,
} as Meta

const createModal = (args) => (
  <div>
    <AtomButton id='open-modal-steps'>Open Modal</AtomButton>
    <AtomStepsModal
      steps={args.steps}
      trigger='open-modal-steps'
      steps-titles={args.stepsTitles}
    >
      <div slot='step-0'>Step 1 Content</div>
      <div slot='step-1'>Step 2 Content</div>
      <div slot='step-2'>Step 3 Content</div>
    </AtomStepsModal>
  </div>
)

export const Default: StoryObj = {
  render: (args) => createModal(args),
  args: {
    ...ModalComponentArgs,
  },
}
