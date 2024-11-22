export const SpinnerStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component:
          'Spinners are inline block elements that usually appear near another element. Read the [Ionic documentation](https://ionicframework.com/docs/api/Spinner) for more information about this component.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'dark'],
      defaultValue: { summary: 'primary' },
      description:
        'The type of the Spinner, the component will receive the color according to its type.',
    },
    size: {
      control: 'text',
      defaultValue: { summary: 20 },
      description:
        'The type of the Spinner, the component will receive the color according to its type.',
    },
  },
}
