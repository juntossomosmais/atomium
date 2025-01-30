export const DividerStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component:
          'The Divider is a thin line that helps separate and group content in the interface. This component can also be used to define rhythm and order.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['down', 'up'],
      defaultValue: { summary: 'down' },
      description:
        'The type of the divider, will change your anatomy. The component can be used to separate content in two directions, up or down.',
    },
  },
}
