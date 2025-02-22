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
      options: ['horizontal', 'vertical'],
      defaultValue: { summary: 'horizontal' },
      description:
        'The type of the divider, will change your anatomy. The component can be used to separate content in two directions, vertical or horizontal.',
    },
  },
}
