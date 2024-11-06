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
      open="${args.open}"
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

export const Hover: StoryObj = {
  render: (args) => createTooltip(args, 'Hover'),
  args: {
    ...TooltipComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false,
  },
}

export const Click: StoryObj = {
  render: (args) => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false,
  },
}

export const Opened: StoryObj = {
  render: (args) => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true,
  },
}
