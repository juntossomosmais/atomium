import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { BadgeStoryArgs } from './stepper.args'

export default {
  title: 'Components/Stepper',
  ...BadgeStoryArgs,
} as Meta

const createStepper = (args) => {
  return html` <atom-stepper .steps="${args.steps}"></atom-stepper>`
}

export const Primary: StoryObj = {
  render: (args) => createStepper(args),
  args: {
    steps: [
      { title: 'Step 1', completed: true },
      { title: 'Step 2', completed: true },
      { title: 'Step 3', completed: false, actual: true },
      { title: 'Step 4', completed: false, disabled: true },
    ],
  },
}
