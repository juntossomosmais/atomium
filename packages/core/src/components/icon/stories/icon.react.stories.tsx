import { h } from '@stencil/core'
import { Meta, StoryObj } from '@storybook/react'

import { AtomIcon } from '@juntossomosmais/atomium/react'

import { IconComponentArgs, IconStoryArgs } from './icon.args'

export default {
  title: 'Components/Icon',
  component: AtomIcon,
  ...IconStoryArgs,
} as Meta

const createIcon = (args) => (
  <AtomIcon icon={args.icon} color={args.color} size={args.size} />
)

export const Default: StoryObj = {
  render: (args) => createIcon(args),
  args: {
    ...IconComponentArgs,
  },
}
