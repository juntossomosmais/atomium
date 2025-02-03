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
      options: ['success', 'neutral', 'warning', 'danger'],
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
    value: {
      control: 'text',
      defaultValue: { summary: 'Lesgo' },
      description: 'Meter',
    },
  },
}
