import { Category } from '@atomium/storybook-utils/enums/table'
import { withActions } from '@storybook/addon-actions/decorator'

export const GridStoryArgs = {
  decorators: [withActions],
  parameters: {
    docs: {
      description: {
        component:
          'Wrapper of the [Ionic Grid](https://ionicframework.com/docs/api/grid) component. Read the Ionic documentation for more information about the available properties and possibilities.<br><br>In our custom implementation, we have simplified the Ionic grid system by introducing the `AtomGrid` component. This component acts as a wrapper for the grid, eliminating the need for using the `ion-row` component directly. Instead, we can directly use the `atom-grid` and `atom-col` components to create our grid layout. This approach streamlines the structure and usage of the grid system, making it more intuitive and efficient for developers.<br><br>The default number of columns in the grid is `16`, but this can be changed by setting the `--grid-columns` CSS custom property. The default gap between the columns is `var(--spacing-base)` and `var(--spacing-xs)` in small screens, but this can be changed by setting the `--grid-gap` CSS custom property.<br><br>You could check our default tokens values for the grid system in the [tokens/grid](/docs/tokens-grid--docs) section.',
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
    '--atom-grid-padding': {
      description:
        'Define padding on the grid can be set for all breakpoints and default for xs screens.',
      defaultValue: { summary: '0' },
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--atom-grid-padding-sm': {
      description: 'Define padding on small screens.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--atom-grid-padding-md': {
      description: 'Define padding on medium screens.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--atom-grid-padding-lg': {
      description: 'Define padding on large screens.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--atom-grid-padding-xlg': {
      description: 'Define padding on xlarge screens.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--atom-grid-padding-fhd': {
      description: 'Define padding on full hd screens.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--atom-grid-padding-2k': {
      description: 'Define padding on 2K screens.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--atom-grid-padding-4k': {
      description: 'Define padding on 4K screens.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
  },
}
