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
    <a href="/nice-example">
      <atom-link type="${args.type}" color="${args.color}" loading="${args.loading}">
        ${textExample}
      </atom-link>
    </a>
  `
}

export const Primary: StoryObj = {
  render: (args) => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    loading: false,
  },
}

export const Secondary: StoryObj = {
  render: (args) => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary',
  },
}

export const Loading: StoryObj = {
  render: (args) => html`
    <a href="/nice-example">
      <atom-link type="${args.type}" color="${args.color}" loading>
        Loading...
      </atom-link>
    </a>
  `,
  args: {
    ...Primary.args,
  },
}

export const WithIcon: StoryObj = {
  render: (args) => html`
    <a href="/nice-example">
      <atom-link type="${args.type}" color="${args.color}">
        <span> Nice example with icon </span>
        <atom-icon icon="heart" />
      </atom-link>
    </a>
  `,
  args: {
    ...Primary.args,
    color: 'secondary',
  },
}

export const Button: StoryObj = {
  render: (args) => html`
    <atom-link type="${args.type}" color="${args.color}">
      It is a button! and can be used to trigger user actions
    </atom-link>
  `,
  args: {
    ...Primary.args,
    type: 'button',
  },
}
