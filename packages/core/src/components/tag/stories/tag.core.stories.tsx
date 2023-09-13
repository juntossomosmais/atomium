import { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

import { TagStoryArgs } from './tag.args'

export default {
  title: 'Components/Tag',
  ...TagStoryArgs,
} as Meta

const createTag = (args) => {
  return html`
    <atom-tag type="${args.type}" icon="${args.icon}"> ${args.label} </atom-tag>
  `
}

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