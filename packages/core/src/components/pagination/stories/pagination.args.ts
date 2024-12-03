import { Category } from '@atomium/storybook-utils/enums/table'

export const PaginationStoryArgs = {
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    page: {
      control: 'number',
      description: 'The current page.',
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
