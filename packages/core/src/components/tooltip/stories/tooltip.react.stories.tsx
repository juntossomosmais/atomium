import {
  AtomButton,
  AtomIcon,
  AtomTooltip,
} from '@juntossomosmais/atomium/react'
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
      fill='clear'
      id={args.element}
      aria-describedby='atomium-tooltip'
    >
      <AtomIcon size='large' icon='information-outline' />
    </AtomButton>

    <AtomTooltip id='atomium-tooltip' element={args.element}>
      Hello world!
    </AtomTooltip>
  </>
)

export const Default: StoryObj = {
  render: (args) => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
  },
}
