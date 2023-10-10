import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { TooltipComponentArgs, TooltipStoryArgs } from './tooltip.args'

export default {
  title: 'Components/Tooltip',
  ...TooltipStoryArgs,
} as Meta

const createTooltip = (args) => {
  return html`
    <div id="atomium-element">Atomium</div>
    <atom-tooltip element="${args.element}" action="${args.action}">
      Hello world!
    </atom-tooltip>
  `
}

export const Default: StoryObj = {
  render: (args) => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
  },
}
