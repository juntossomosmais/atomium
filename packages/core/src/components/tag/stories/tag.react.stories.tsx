import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AtomTag } from '@juntossomosmais/atomium/react'

import { TagStoryArgs } from './tag.args'

export default {
  title: 'Components/Tag',
  component: AtomTag,
  ...TagStoryArgs,
} as Meta

const createTag = (args) => (
  <AtomTag
    icon={args.icon}
    customBackgroundColor={args.customBackgroundColor}
    customTextColor={args.customTextColor}
    color={args.color}
  >
    {args.label}
  </AtomTag>
)

export const Success: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
  },
}

export const SuccessWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
    icon: 'tag',
  },
}

export const Danger: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
  },
}

export const DangerWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
    icon: 'close-circle-outline',
  },
}

export const Warning: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
  },
}

export const WarningWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
    icon: 'timer-outline',
  },
}

export const Dark: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
  },
}

export const DarkWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
    icon: 'wallet-giftcard',
  },
}

export const Light: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
  },
}

export const LightWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
    icon: 'plus-thick',
  },
}

export const CustomColor: StoryObj = {
  render: (args) => createTag(args),
  args: {
    label: 'Most Loved',
    icon: 'heart',
    customBackgroundColor: '#a006fa',
    customTextColor: '#00ff95',
  },
}
