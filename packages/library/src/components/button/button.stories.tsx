import { Meta } from '@storybook/html'
import { AtoButton } from 'atomium/dist/types'

import readme from './readme.md'

export default {
  title: 'Components/Button',
  parameters: {
    notes: readme,
    actions: {
      handles: ['atoClick'],
    },
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    fill: {
      control: {
        type: 'select',
        options: ['clear', 'outline', 'solid'],
      },
    },
    shape: {
      control: {
        type: 'select',
        options: ['clear', 'outline', 'solid'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['submit', 'reset', 'button'],
      },
    },
    mode: {
      control: {
        type: 'select',
        options: ['md', 'ios', 'md'],
      },
    },
  },
} as Meta

type argsButton = AtoButton & {
  label: string
}

export const Default = (args: argsButton) => `
  <ato-button
    color="${args.color}"
    fill="${args.fill}"
    shape="${args.shape}"
    size="${args.size}"
    disabled="${args.disabled}"
    type="${args.type}"
    mode="${args.mode}"
  >
    ${args.label}
  </ato-button>
`

Default.args = {
  label: 'Click me!',
  color: 'primary',
  fill: 'solid',
  size: 'default',
  disabled: false,
  type: 'button',
  mode: 'md',
}
