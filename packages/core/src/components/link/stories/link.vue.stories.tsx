import { AtomLink } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { LinkStoryArgs } from './link.args'

const createLink = (
  args,
  textExample = 'It should be used inside router components'
) => ({
  components: { AtomLink },
  setup() {
    return { args }
  },
  template: `
    <AtomLink color=${args.color} type=${args.type}>
    ${textExample}
  </AtomLink>
  `,
})

export default {
  title: 'Components/Link',
  component: AtomLink,
  ...LinkStoryArgs,
} as Meta

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
