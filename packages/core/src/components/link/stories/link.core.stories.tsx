import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { LinkStoryArgs } from './link.args'

export default {
  title: 'Components/Link',
  ...LinkStoryArgs,
} as Meta

const createLink = (
  args,
  textExample = 'It should be used inside router components'
) => {
  return html`
    <atom-link type="${args.type}" color="${args.color}">
      ${textExample}
    </atom-link>
  `
}

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
