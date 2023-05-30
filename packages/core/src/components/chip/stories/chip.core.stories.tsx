import { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

import { ChipComponentArgs, ChipStoryArgs } from './chip.args'

export default {
  title: 'Components/Chip',
  ...ChipStoryArgs,
} as Meta

const createChip = (args) => {
  return html`
    <atom-chip
      color=${args.color}
      disabled=${args.disabled}
      activated=${args.activated}
      focus=${args.focus}
      mode=${args.mode}
      icon=${args.icon}
      close=${args.close}
    >
      ${args.label}
    </atom-chip>
  `
}

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
    icon: 'checkmark',
  },
}

export const WithClose: StoryObj = {
  render: (args) => createChip(args),
  args: {
    ...ChipComponentArgs,
    close: true,
  },
}
