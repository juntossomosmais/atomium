import { AtomButton, AtomRichTooltip } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import {
  RichTooltipComponentArgs,
  RichTooltipStoryArgs,
} from './rich-tooltip.args'

export default {
  title: 'Components/Rich Tooltip',
  ...RichTooltipStoryArgs,
} as Meta

const createTooltip = (args, buttonText = 'Hover') => ({
  components: { AtomButton, AtomRichTooltip },
  setup() {
    return { args, buttonText }
  },
  template: `
    <div>
      <AtomButton
        fill="solid"
        size="large"
        :id="args.element"
        aria-describedby="atom-tooltip"
      >
        {{ buttonText }}
      </AtomButton>

      <AtomRichTooltip
        id="atom-tooltip"
        :placement="args.placement"
        :element="args.element"
        :title="args.title"
        :action="args.action"
        :actionText="args.actiontext"
        :open="args.open"
      >
        {{ args.text }}
      </AtomRichTooltip>
    </div>
  `,
})

export const Hover: StoryObj = {
  render: (args) => createTooltip(args, 'Hover'),
  args: {
    ...RichTooltipComponentArgs,
    element: 'hover',
    placement: 'top',
    open: false,
  },
}

export const Click: StoryObj = {
  render: (args) => createTooltip(args, 'Click'),
  args: {
    ...RichTooltipComponentArgs,
    element: 'click',
    placement: 'top',
    action: 'click',
    open: false,
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
