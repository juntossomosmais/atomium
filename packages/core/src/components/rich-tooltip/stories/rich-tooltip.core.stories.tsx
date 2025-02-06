import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { RichTooltipStoryArgs } from './rich-tooltip.args'

export default {
  title: 'Components/Rich Tooltip',
  ...RichTooltipStoryArgs,
} as Meta

const createRichTooltip = (args) => {
  return html` <atom-button
      fill="solid"
      size="large"
      id="${args.element}"
      aria-describedby="atom-tooltip"
    >
      Hover
    </atom-button>

    <atom-rich-tooltip
      id="atom-tooltip"
      placement="${args.placement}"
      element="${args.element}"
      action="${args.action}"
      open="${args.open}"
    >
      ${args.text}
    </atom-rich-tooltip>`
}

export const Primary: StoryObj = {
  render: (args) => createRichTooltip(args),
  args: {
    type: 'primary',
    label: 'Alou',
  },
}

export const Secondary: StoryObj = {
  render: (args) => createRichTooltip(args),
  args: {
    ...Primary.args,
    type: 'secondary',
  },
}
