import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { TooltipComponentArgs, TooltipStoryArgs } from './tooltip.args'

export default {
  title: 'Components/Tooltip',
  ...TooltipStoryArgs,
} as Meta

const createTooltip = (args) => {
  return html`
    <atom-button
      fill="clear"
      id="${args.element}"
      aria-describedby="atomium-tooltip"
    >
      <atom-icon size="large" icon="information-outline" />
    </atom-button>

    <atom-tooltip id="atomium-tooltip" element="${args.element}">
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
