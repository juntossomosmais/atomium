import { AtomLink } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'

import { LinkStoryArgs } from './link.args'

export default {
  title: 'Components/Link',
  component: AtomLink,
  ...LinkStoryArgs,
} as Meta

const createLink = (
  args,
  textExample = 'It should be used inside router components'
) => (
  <AtomLink color={args.color} type={args.type}>
    {textExample}
  </AtomLink>
)

export const Primary: StoryObj = {
  render: (args) => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
  },
}

export const Secondary: StoryObj = {
  render: (args) => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary',
  },
}

export const Button: StoryObj = {
  render: (args) =>
    createLink(args, 'It should be used to trigger user actions'),
  args: {
    ...Primary.args,
    type: 'button',
  },
}
