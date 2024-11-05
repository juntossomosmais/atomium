import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { TooltipComponentArgs, TooltipStoryArgs } from './tooltip.args'

const createTooltip = (args, buttonText = 'hover') => {
  return html`
    <atom-button
      fill="solid"
      size="large"
      id="${args.element}"
      aria-describedby="atom-tooltip"
    >
      ${buttonText}
    </atom-button>

    <atom-tooltip
      id="atom-tooltip"
      placement="${args.placement}"
      element="${args.element}"
      action="${args.action}"
    >
      ${args.text}
    </atom-tooltip>
  `
}

export default {
  title: 'Components/Tooltip',
  component: 'atom-tooltip',
  ...TooltipStoryArgs,
} as Meta

export const Default: StoryObj = {
  render: (args) => createTooltip(args, 'Hover'),
  args: {
    ...TooltipComponentArgs,
    element: 'elementId',
    placement: 'top',
  },
}

export const Click: StoryObj = {
  render: (args) => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'elementId',
    placement: 'top',
    action: 'click',
  },
}
