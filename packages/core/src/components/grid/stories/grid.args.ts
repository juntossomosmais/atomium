import { withActions } from '@storybook/addon-actions/decorator'

import { Category } from '@atomium/storybook-utils/enums/table'

export const GridStoryArgs = {
  decorators: [withActions],
  parameters: {
    docs: {
      description: {
        component:
          'Wrapper of the [Ionic Grid](https://ionicframework.com/docs/api/grid) component.',
      },
    },
  },
  argTypes: {
    fixed: {
      description:
        'If `true`, the Grid will be fixed and will have a consistent width based on the screen size.',
      defaultValue: { summary: false },
      table: {
        category: Category.PROPERTIES,
      },
    },
    size: {
      description:
        'Columns can be set to specific sizes to take up a certain number out of the total number of columns, or resize their width based on the content, it accepts responsive values like `size-sm`, `size-md`, `size-lg`, `size-xl`',
      table: {
        category: Category.PROPERTIES,
      },
    },
    offset: {
      description:
        'Columns can be offset to the right by a certain number of columns, it accepts responsive values like `offset-sm`, `offset-md`, `offset-lg`, `offset-xl`',
      table: {
        category: Category.PROPERTIES,
      },
    },
    pull: {
      description:
        'Columns can be pulled to the left by a certain number of columns',
      table: {
        category: Category.PROPERTIES,
      },
    },
    push: {
      description:
        'Columns can be pushed to the right by a certain number of columns',
      table: {
        category: Category.PROPERTIES,
      },
    },
    '--grid-gap': {
      description:
        'Defines the space between the elements in a row of the Grid system. For screens below `medium` size, the gap value will be `var(--spacing-xsmall)`.',
      defaultValue: { summary: 'var(--spacing-base)' },
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--grid-columns': {
      description: 'Defines the number of columns of the Grid system.',
      defaultValue: { summary: '12' },
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
  },
}

export const GridCSS = `
  .col > div {
    box-shadow:
      0px 2px 1px -1px var(--color-neutral-light-3),
      0px 1px 2px 0px var(--color-neutral-light-4),
      0px 1px 3px 0px var(--color-neutral-light-4);
    border-radius: var(--border-radius);
    color: var(--color-neutral-light-2);
    padding: var(--spacing-xsmall);
    text-align: center;
  }
`
