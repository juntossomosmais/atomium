import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { AtomChip } from '@juntossomosmais/atomium/react'

import { ChipComponentArgs, ChipStoryArgs } from './chip.args'

export default {
  title: 'Components/Chip',
  components: [AtomChip],
  ...ChipStoryArgs,
} as Meta

const createChip = (args) => (
  <AtomChip
    color={args.color}
    disabled={args.disabled}
    activated={args.activated}
    focus={args.focus}
    mode={args.mode}
    icon={args.icon}
    close={args.close}
  >
    {args.label}
  </AtomChip>
)

export const Default: StoryObj = {
  render: (args) => createChip(args),
  args: {
    ...ChipComponentArgs,
  },
}

export const Disabled: StoryObj = {
  render: (args) => createChip(args),
  args: {
    ...ChipComponentArgs,
    disabled: true,
  },
}

export const Activated: StoryObj = {
  render: (args) => createChip(args),
  args: {
    ...ChipComponentArgs,
    activated: true,
  },
}

export const WithIcon: StoryObj = {
  render: (args) => createChip(args),
  args: {
    ...ChipComponentArgs,
    icon: 'check',
  },
}

export const WithClose: StoryObj = {
  render: (args) => createChip(args),
  args: {
    ...ChipComponentArgs,
    close: true,
  },
}
