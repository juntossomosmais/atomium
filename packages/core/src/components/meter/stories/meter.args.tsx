import { h } from '@stencil/core'

export const MeterStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component: 'Meter',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'danger'],
      defaultValue: { summary: 'neutral' },
      description: 'Meter',
    },
    size: {
      control: 'select',
      options: ['large', 'small'],
      defaultValue: { summary: 'large' },
      description: 'Meter',
    },
    title: {
      control: 'text',
      description: 'Meter',
    },
    min: {
      control: 'number',
      defaultValue: { summary: '0' },
      description: 'Meter',
    },
    max: {
      control: 'number',
      description: 'Meter',
    },
    actual: {
      control: 'number',
      defaultValue: { summary: '0' },
      description: 'Meter',
    },
    content: {
      control: 'text',
      description: 'Meter',
      defaultValue: () => <div>Valor atual: 0</div>,
    },
  },
}
