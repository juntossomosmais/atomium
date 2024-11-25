import { AtomSpinner } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SpinnerStoryArgs } from './spinner.args'

export default {
  title: 'Components/Spinner',
  component: AtomSpinner,
  ...SpinnerStoryArgs,
} as Meta

const createSpinner = (args) => (
  <AtomSpinner type={args.type} number={args.number} />
)

export const Primary: StoryObj = {
  render: (args) => createSpinner(args),
  args: {
    number: 40,
    type: 'primary',
  },
}

export const Secondary: StoryObj = {
  render: (args) => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'secondary',
  },
}

export const Dark: StoryObj = {
  render: (args) => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'dark',
  },
}
