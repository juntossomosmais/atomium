import { AtomMeter } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { MeterStoryArgs } from './meter.args'

export default {
  title: 'Components/Meter',
  component: AtomMeter,
  ...MeterStoryArgs,
} as Meta

const createMeter = (args) => (
  <AtomMeter color={args.color}>{args.label}</AtomMeter>
)

export const Primary: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    type: 'primary',
    label: 'Meter',
  },
}

export const Secondary: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    ...Primary.args,
    type: 'secondary',
  },
}
