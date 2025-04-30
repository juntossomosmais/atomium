import { AtomStepper } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { StepperStoryArgs } from './stepper.args'

export default {
  title: 'Components/Stepper',
  component: AtomStepper,
  ...StepperStoryArgs,
} as Meta

const createStepper = (args) => <AtomStepper steps={args.steps}></AtomStepper>

export const Primary: StoryObj = {
  render: (args) => createStepper(args),
  args: {
    steps: [
      { title: 'Step 1', completed: true },
      { title: 'Step 2', completed: true },
      { title: 'Step 3', completed: false, actual: true },
      { title: 'Step 4', completed: false, disabled: true },
      { title: 'Step 5', completed: false, disabled: true },
    ],
  },
}
