import { Category } from '@atomium/storybook-utils/enums/table'

export const BreadcrumbStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component:
          'Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component.',
      },
    },
  },
  argTypes: {
    items: {
      description:
        'This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.',
      table: {
        category: Category.PROPERTIES,
      },
    },
  },
}
