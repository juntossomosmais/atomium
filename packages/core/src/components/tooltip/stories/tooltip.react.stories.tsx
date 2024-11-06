import { AtomButton, AtomTooltip } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TooltipComponentArgs, TooltipStoryArgs } from './tooltip.args'

export default {
  title: 'Components/Tooltip',
  ...TooltipStoryArgs,
} as Meta

const createTooltip = (args, buttonText = 'Hover') => (
  <>
    <AtomButton
      fill='solid'
      size='large'
      id={args.element}
      aria-describedby='atom-tooltip'
    >
      {buttonText}
    </AtomButton>

    <AtomTooltip
      id='atom-tooltip'
      placement={args.placement}
      element={args.element}
      action={args.action}
      open={args.open}
    >
      <div>{args.text}</div>
    </AtomTooltip>
  </>
)

export const Default: StoryObj = {
  render: (args) => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
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

export const Opened: StoryObj = {
  render: (args) => createTooltip(args, 'Opened'),
  args: {
    ...TooltipComponentArgs,
    element: 'elementId',
    placement: 'left',
    action: 'click',
    open: true,
  },
}
