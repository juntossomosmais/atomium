import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { SpinnerStoryArgs } from './spinner.args'

export default {
  title: 'Components/Spinner',
  ...SpinnerStoryArgs,
} as Meta

const createSpinner = (args) => {
  return html`<atom-spinner type="${args.type}" />`
}

export const Primary: StoryObj = {
  render: (args) => createSpinner(args),
  args: {
    type: 'primary',
  },
}

export const Secondary: StoryObj = {
  render: (args) => createSpinner(args),
  args: {
    type: 'secondary',
  },
}

export const Dark: StoryObj = {
  render: (args) => createSpinner(args),
  args: {
    type: 'dark',
  },
}
