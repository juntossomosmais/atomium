import { AtomBadge } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { BadgeStoryArgs } from './payment-banner.args'

export default {
  title: 'Components/Payment Banner',
  component: AtomBadge,
  ...BadgeStoryArgs,
} as Meta

const createBadge = (args) => (
  <AtomBadge color={args.color}>{args.label}</AtomBadge>
)

export const Primary: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    type: 'primary',
    label: 'Badge',
  },
}
