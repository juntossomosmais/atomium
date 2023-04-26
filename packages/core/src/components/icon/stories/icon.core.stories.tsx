import { Meta, StoryObj } from '@storybook/html'

import { IconComponentArgs, IconStoryArgs } from './icon.args'

export default {
  title: 'Components/Icon',
  ...IconStoryArgs,
} as Meta

const createIcon = (args) => {
  return `
    <atom-icon
      icon=${args.icon}
      color=${args.color}
      size=${args.size}
    />
  `
}

export const Default: StoryObj = {
  render: (args) => createIcon(args),
  args: {
    ...IconComponentArgs,
  },
}
