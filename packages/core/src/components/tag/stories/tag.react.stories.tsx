import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AtomTag } from '@juntossomosmais/atomium/react'

import { TagStoryArgs } from './tag.args'

export default {
  title: 'Components/Tag',
  component: AtomTag,
  ...TagStoryArgs,
} as Meta

const createTag = (args) => <AtomTag color={args.color}>{args.label}</AtomTag>

export const Success: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'success',
    label: 'Promotion',
  },
}

export const SuccessWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'success',
    label: 'Promotion',
    icon: 'tag',
  },
}

export const Danger: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'danger',
    label: 'Canceled',
  },
}

export const DangerWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'danger',
    label: 'Canceled',
    icon: 'close-circle-outline',
  },
}

export const Warning: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'warning',
    label: 'In Progress',
  },
}

export const WarningWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'warning',
    label: 'In Progress',
    icon: 'timer-outline',
  },
}

export const Dark: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'dark',
    label: 'Most rescued',
  },
}

export const DarkWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'dark',
    label: 'Most rescued',
    icon: 'wallet-giftcard',
  },
}

export const Light: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'light',
    label: 'More Points',
  },
}

export const LightWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'light',
    label: 'More Points',
    icon: 'plus-thick',
  },
}
