import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { IconComponentArgs, IconStoryArgs } from './icon.args'

export default {
  title: 'Components/Icon',
  ...IconStoryArgs,
} as Meta

const createIcon = (args) => {
  return html`
    <atom-icon icon=${args.icon} color=${args.color} size=${args.size} />
  `
}

export const Default: StoryObj = {
  render: (args) => createIcon(args),
  args: {
    ...IconComponentArgs,
  },
}
