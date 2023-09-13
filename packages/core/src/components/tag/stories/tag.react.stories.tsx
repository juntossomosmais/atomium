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
    label: 'Em Andamento',
  },
}

export const WarningWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'warning',
    label: 'Em Andamento',
    icon: 'timer-outline',
  },
}

export const Dark: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'dark',
    label: 'Mais Resgatados',
  },
}

export const DarkWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'dark',
    label: 'Mais Resgatados',
    icon: 'wallet-giftcard',
  },
}

export const Light: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'light',
    label: 'Mais Pontos',
  },
}

export const LightWithIcon: StoryObj = {
  render: (args) => createTag(args),
  args: {
    type: 'light',
    label: 'Mais Pontos',
    icon: 'plus-thick',
  },
}
