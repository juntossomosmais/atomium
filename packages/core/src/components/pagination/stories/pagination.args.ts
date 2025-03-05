import { Category } from '@atomium/storybook-utils/enums/table'

export const PaginationStoryArgs = {
  parameters: {
    docs: {
      description: {
        component:
          'A pagination component is an interface that allows users to navigate through large amounts of content that has been split into multiple pages',
      },
    },
  },
  argTypes: {
    page: {
      control: 'number',
      description: 'Current page.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    count: {
      control: 'number',
      description: 'Total pages.',
      table: {
        category: Category.PROPERTIES,
      },
    },
  },
}

export const PaginationComponentArgs = {
  page: 1,
  count: 10,
}
