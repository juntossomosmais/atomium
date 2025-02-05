export const MeterStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component:
          'Meters are visual representations of a quantity or an achievement. Their progress is determined by the actions of the user, not by the actions of the  system. This last point is what differentiates them from the progress bar.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['neutral', 'success', 'warning', 'danger'],
      defaultValue: { summary: 'neutral' },
      description:
        'The type of the Meter, the component will receive the color according to its type.',
    },
    size: {
      control: 'select',
      options: ['large', 'small'],
      defaultValue: { summary: 'large' },
      description:
        'The size of the Meter, the componente will receive the size according to its prop.',
    },
    title: {
      control: 'text',
      description: 'Top title of the Meter, at the top left of the component.',
    },
    centerTitle: {
      control: 'boolean',
      defaultValue: { summary: false },
      description: 'The prop to center the title.',
    },
    min: {
      control: 'number',
      description: 'Minimum value for progression calculation.',
    },
    max: {
      control: 'number',
      description: 'Max value for progression calculation.',
    },
    actual: {
      control: 'number',
      description: 'Actual value for progression calculation.',
    },
    content: {
      control: 'text',
      description:
        'This prop is a children, used to fill the slot of the component.',
    },
  },
}
