import { AtomButton, AtomRichTooltip } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import {
  RichTooltipComponentArgs,
  RichTooltipStoryArgs,
} from './rich-tooltip.args'

export default {
  title: 'Components/Rich Tooltip',
  ...RichTooltipStoryArgs,
} as Meta

const createTooltip = (args, buttonText = 'Hover') => (
  <>
    <AtomButton
      fill='solid'
      size='large'
      id={args.element}
      aria-describedby='atom-rich-tooltip'
    >
      {buttonText}
    </AtomButton>

    <AtomRichTooltip
      id='atom-tooltip'
      placement={args.placement}
      element={args.element}
      action={args.action}
    >
      <div>{args.text}</div>
    </AtomRichTooltip>
  </>
)

export const Hover: StoryObj = {
  render: (args) => createTooltip(args),
  args: {
    ...RichTooltipComponentArgs,
    element: 'hover',
  },
}

export const Click: StoryObj = {
  render: (args) => createTooltip(args, 'Click'),
  args: {
    ...RichTooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
  },
}

export const Opened: StoryObj = {
  render: (args) => createTooltip(args, 'Opened'),
  args: {
    ...RichTooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true,
  },
}
