import { AtomBadge } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { BadgeComponentArgs, BadgeStoryArgs } from './badge.args'

export default {
  title: 'Components/Badge',
  component: AtomBadge,
  ...BadgeStoryArgs,
} as Meta

const createBadge = (args) => (
  <AtomBadge
    color={args.color}
    shape={args.shape}
    size={args.size}
    type={args.type}
  >
    {args.label}
  </AtomBadge>
)

export const Primary: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...BadgeComponentArgs,
  },
}

export const Secondary: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'secondary',
  },
}

export const Success: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'success',
  },
}

export const Warning: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'warning',
  },
}

export const Danger: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'danger',
  },
}

export const Neutral: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'neutral',
  },
}

export const Dark: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'dark',
  },
}

export const Info: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'info',
  },
}

export const RectangleButton: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    size: 'default',
    shape: 'rectangle',
  },
}
