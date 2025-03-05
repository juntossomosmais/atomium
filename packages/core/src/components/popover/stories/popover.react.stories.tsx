import { AtomButton, AtomPopover } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PopoverComponentArgs, PopoverStoryArgs } from './popover.args'

export default {
  title: 'Components/Popover',
  ...PopoverStoryArgs,
} as Meta

const createPopover = (args, buttonText = 'Hover') => (
  <>
    <AtomButton
      fill='solid'
      size='large'
      id={buttonText}
      aria-describedby='atom-popover'
    >
      {buttonText}
    </AtomButton>

    <AtomPopover
      id='atom-popover'
      placement={args.placement}
      element={buttonText}
      label={args.label}
      action={args.action}
      actionText={args.actionText}
      open={args.open}
    >
      {args.text}
    </AtomPopover>
  </>
)

export const Hover: StoryObj = {
  render: (args) => createPopover(args, 'Hover'),
  args: {
    ...PopoverComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false,
  },
}

export const Click: StoryObj = {
  render: (args) => createPopover(args, 'Click'),
  args: {
    ...PopoverComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false,
  },
}

export const Opened: StoryObj = {
  render: (args) => createPopover(args, 'Opened'),
  args: {
    ...PopoverComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true,
  },
}
