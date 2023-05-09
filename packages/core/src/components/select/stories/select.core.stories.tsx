import { Meta, StoryObj } from '@storybook/web-components'

import { html } from 'lit'

import { SelectComponentArgs, SelectStoryArgs } from './select.args'

export default {
  title: 'Components/Select',
  ...SelectStoryArgs,
} as Meta

const createSelect = (args) => {
  return html`
    <atom-select
      name="select"
      placeholder="Select an option"
      interface=${args.interface}
      color=${args.color}
      mode=${args.mode}
      disabled=${args.disabled}
      multiple=${args.multiple}
      label=${args.label}
      label-placement=${args.labelPlacement}
    />

    <script>
      document.querySelector('atom-select').options = [
        { value: 'Red', disabled: false },
        { value: 'Green', disabled: false },
        { value: 'Blue', disabled: false },
        { value: 'Disabled example', selected: false, disabled: true },
      ]
    </script>
  `
}

export const Default: StoryObj = {
  render: (args) => createSelect(args),
  args: {
    ...SelectComponentArgs,
  },
}
