import { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

import { BadgeStoryArgs } from './badge.args'

export default {
  title: 'Components/Badge',
  ...BadgeStoryArgs,
} as Meta

const createBadge = (args) => {
  return html` <atom-badge type="${args.type}"> ${args.label} </atom-badge> `
}

export const Primary: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    type: 'primary',
    label: 'Badge',
  },
}

export const Secondary: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'secondary',
  },
}

export const Tertiary: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'tertiary',
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

export const Light: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'light',
  },
}

export const Dark: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'dark',
  },
}
