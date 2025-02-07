import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import {
  RichTooltipComponentArgs,
  RichTooltipStoryArgs,
} from './rich-tooltip.args'

export default {
  title: 'Components/Rich Tooltip',
  ...RichTooltipStoryArgs,
} as Meta

const createRichTooltip = (args, buttonText = 'hover') => {
  return html`
    <atom-button
      fill="solid"
      size="large"
      id="${args.element}"
      aria-describedby="atom-tooltip"
    >
      ${buttonText}
    </atom-button>

    <atom-rich-tooltip
      id="atom-tooltip"
      placement="${args.placement}"
      element="${args.element}"
      title="${args.title}"
      action="${args.action}"
      open="${args.open}"
    >
      ${args.text}
    </atom-rich-tooltip>
  `
}

export const Hover: StoryObj = {
  render: (args) => createRichTooltip(args, 'Hover'),
  args: {
    ...RichTooltipComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false,
  },
}
