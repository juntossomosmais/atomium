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
      options: ['horizontal', 'vertical'],
      defaultValue: { summary: 'horizontal' },
      description: 'Meter',
    },
    title: {
      control: 'text',
      description: 'Meter',
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      defaultValue: { summary: 'large' },
      description: 'Meter',
    },
    value: {
      control: 'text',
      defaultValue: { summary: 'Lesgo' },
      description: 'Meter',
    },
  },
}
