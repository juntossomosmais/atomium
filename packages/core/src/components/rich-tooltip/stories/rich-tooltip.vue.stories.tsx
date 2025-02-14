import { AtomButton, RichAtomTooltip } from '@juntossomosmais/atomium/react'
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

const createRichTooltip = (args, buttonText = 'Hover') => (
  <>
    <AtomButton
      fill='solid'
      size='large'
      id={buttonText}
      aria-describedby='atom-rich-tooltip'
    >
      {buttonText}
    </AtomButton>

    <RichAtomTooltip
      id='atom-rich-tooltip'
      placement={args.placement}
      element={buttonText}
      label={args.label}
      action={args.action}
      actionText={args.actionText}
      open={args.open}
    >
      {args.text}
    </RichAtomTooltip>
  </>
)

export const Hover: StoryObj = {
  render: (args) => createRichTooltip(args, 'Hover'),
  args: {
    ...RichTooltipComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false,
  },
}

export const Click: StoryObj = {
  render: (args) => createRichTooltip(args, 'Click'),
  args: {
    ...RichTooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false,
  },
}

export const Opened: StoryObj = {
  render: (args) => createRichTooltip(args, 'Opened'),
  args: {
    ...RichTooltipComponentArgs,
    element: 'opened',
    placement: 'left',
    action: 'click',
    open: true,
  },
}
