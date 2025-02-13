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
      id={buttonText}
      aria-describedby='atom-rich-tooltip'
    >
      {buttonText}
    </AtomButton>

    <AtomRichTooltip
      id='atom-rich-tooltip'
      placement={args.placement}
      element={buttonText}
      title={args.title}
      action={args.action}
      actionText={args.actiontext}
      open={args.open}
    >
      {args.text}
    </AtomRichTooltip>
  </>
)

export const Click: StoryObj = {
  render: (args) => createTooltip(args, 'Click'),
  args: {
    ...RichTooltipComponentArgs,
    placement: 'top',
    action: 'click',
    open: false,
  },
}
