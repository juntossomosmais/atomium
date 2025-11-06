import { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

import { PopoverComponentArgs, PopoverStoryArgs } from './popover.args'

export default {
  title: 'Components/Popover',
  ...PopoverStoryArgs,
} as Meta

const createPopover = (args, buttonText = 'hover') => {
  return html`
    <div style="height: 300px; display: flex; align-items: center;">
      <atom-button
        fill="solid"
        size="large"
        id="${buttonText}"
        aria-describedby="atom-popover"
      >
        ${buttonText}
      </atom-button>
      <atom-popover
        id="atom-popover"
        placement="${args.placement}"
        element="${buttonText}"
        label="${args.label}"
        action="${args.action}"
        action-text="${args.actionText}"
        open="${args.open}"
      >
        ${args.text}
      </atom-popover>
    </div>
  `
}

export const Hover: StoryObj = {
  render: (args) => createPopover(args, 'Hover'),
  args: {
    ...PopoverComponentArgs,
    placement: 'top',
    open: false,
  },
}

export const Click: StoryObj = {
  render: (args) => createPopover(args, 'Click'),
  args: {
    ...PopoverComponentArgs,
    placement: 'right',
    action: 'click',
    open: false,
  },
}

export const Opened: StoryObj = {
  render: (args) => createPopover(args, 'Opened'),
  args: {
    ...PopoverComponentArgs,
    placement: 'left',
    action: 'click',
    open: true,
  },
}
