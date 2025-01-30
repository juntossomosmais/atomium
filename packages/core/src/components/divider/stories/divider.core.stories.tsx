import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { DividerStoryArgs } from './divider.args'

export default {
  title: 'Components/Divider',
  ...DividerStoryArgs,
} as Meta

const createDivider = (args) => {
  return args.type === 'up'
    ? html` <div style="height: 100px;">
        <atom-divider type="${args.type}" />
      </div>`
    : html`<atom-divider type="${args.type}" />`
}

export const Down: StoryObj = {
  render: (args) => createDivider(args),
  args: {
    type: 'down',
  },
}

export const Up: StoryObj = {
  render: (args) => createDivider(args),
  args: {
    type: 'up',
  },
}
