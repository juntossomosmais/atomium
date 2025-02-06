export const RichTooltipStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'danger',
        'neutral',
        'dark',
      ],
      defaultValue: { summary: 'primary' },
      description:
        'The type of the badge, the component will receive the color according to its type.',
    },
    label: {
      control: 'text',
      description: 'The label of the badge',
    },
  },
}
