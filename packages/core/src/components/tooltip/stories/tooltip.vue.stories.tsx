import { AtomButton, AtomTooltip } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { TooltipComponentArgs, TooltipStoryArgs } from './tooltip.args'

export default {
  title: 'Components/Tooltip',
  ...TooltipStoryArgs,
} as Meta

const createTooltip = (args, buttonText = 'Hover') => ({
  components: { AtomTooltip, AtomButton },
  setup() {
    return { args }
  },
  template: `
   <AtomButton
      fill='solid'
      size='large'
      id="${args.element}"
      aria-describedby='atom-tooltip'
    >
      ${buttonText}
    </AtomButton>

    <AtomTooltip
      id='atom-tooltip'
      placement="${args.placement}"
      element="${args.element}"
      action="${args.action}"
      open="${args.open}"
    >
      <div>${args.text}</div>
    </AtomTooltip>
  `,
})

export const Hover: StoryObj = {
  render: (args) => createTooltip(args),
  args: {
    ...TooltipComponentArgs,
    element: 'hover',
  },
}

export const Click: StoryObj = {
  render: (args) => createTooltip(args, 'Click'),
  args: {
    ...TooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
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
