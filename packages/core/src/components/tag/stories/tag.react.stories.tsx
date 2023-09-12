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
    label: 'Promoção',
  },
}

export const SuccessWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'success',
    label: 'Promoção',
    icon: 'tag',
  },
}

export const Danger: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'danger',
    label: 'Cancelado',
  },
}

export const DangerWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'danger',
    label: 'Cancelado',
    icon: 'close-circle-outline',
  },
}

export const Warning: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'warning',
    label: 'Em andamento',
  },
}

export const WarningWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'warning',
    label: 'Em andamento',
    icon: 'timer-outline',
  },
}

export const Dark: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'dark',
    label: 'Mais resgatados',
  },
}

export const DarkWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'dark',
    label: 'Mais resgatados',
    icon: 'wallet-giftcard',
  },
}

export const Light: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'light',
    label: 'Mais pontos',
  },
}

export const LightWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'light',
    label: 'Mais pontos',
    icon: 'plus-thick',
  },
}
