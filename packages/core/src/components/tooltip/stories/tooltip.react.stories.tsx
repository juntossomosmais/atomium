import { AtomButton, AtomTooltip } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { TooltipComponentArgs, TooltipStoryArgs } from './tooltip.args'

export default {
  title: 'Components/Tooltip',
  ...TooltipStoryArgs,
} as Meta

const createTooltip = (args) => (
  <>
    <AtomButton
      fill='solid'
      size='large'
      id={args.element}
      aria-describedby='atom-tooltip'
    >
      Hover
    </AtomButton>

    <AtomTooltip id='atom-tooltip' element={args.element}>
      Tooltip
    </AtomTooltip>
  </>
)

export const Default: StoryObj = {
  render: (args) => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
  },
}
