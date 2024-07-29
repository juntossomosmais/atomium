export const LinkStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component:
          'Link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      defaultValue: { summary: 'primary' },
      description: 'The link color.',
    },
    type: {
      control: 'select',
      options: ['anchor', 'button'],
      defaultValue: { summary: 'anchor' },
      description:
        'The link type. Use anchor for navigation (combined with router-link or Link) and button for user actions.',
    },
  },
}
