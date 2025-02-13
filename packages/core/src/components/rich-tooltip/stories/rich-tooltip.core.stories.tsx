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
    <div style="height: 300px; display: flex; align-items: center;">
      <atom-button
        fill="solid"
        size="large"
        id="${buttonText}"
        aria-describedby="atom-rich-tooltip"
      >
        ${buttonText}
      </atom-button>
      <atom-rich-tooltip
        id="atom-rich-tooltip"
        placement="${args.placement}"
        element="${buttonText}"
        title="${args.title}"
        action="${args.action}"
        action-text="${args.actionText}"
        button-action="${args.buttonAction}"
        open="${args.open}"
      >
        ${args.text}
      </atom-rich-tooltip>
    </div>
  `
}

export const Hover: StoryObj = {
  render: (args) => createRichTooltip(args, 'Hover'),
  args: {
    ...RichTooltipComponentArgs,
    placement: 'top',
    open: false,
  },
}

export const Click: StoryObj = {
  render: (args) => createRichTooltip(args, 'Click'),
  args: {
    ...RichTooltipComponentArgs,
    placement: 'right',
    action: 'click',
    open: false,
  },
}

export const Opened: StoryObj = {
  render: (args) => createRichTooltip(args, 'Opened'),
  args: {
    ...RichTooltipComponentArgs,
    placement: 'left',
    action: 'click',
    open: true,
  },
}
