import { Category } from '@atomium/storybook-utils/enums/table'
import DocumentationTemplate from '@atomium/storybook-utils/templates/DocumentationWithoutStories.mdx'
import { withActions } from '@storybook/addon-actions/decorator'

export const ModalStoryArgs = {
  parameters: {
    actions: {
      handles: [
        'atomCloseClick',
        'atomDidDismiss',
        'atomDidPresent',
        'atomPrimaryClick',
        'atomSecondaryClick',
      ],
    },
    docs: {
      description: {
        component:
          'Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities.',
      },
      page: DocumentationTemplate,
    },
  },
  decorators: [withActions],
  argTypes: {
    trigger: {
      description: 'The id of the element that will trigger the modal',
      table: {
        category: Category.PROPERTIES,
      },
    },
    hasDivider: {
      control: 'boolean',
      description: 'if true, a divider will be added on the header and footer',
      defaultValue: false,
      table: {
        category: Category.PROPERTIES,
      },
    },
    hasFooter: {
      control: 'boolean',
      description: 'If false, the footer will not be rendered. Default is true',
      table: {
        category: Category.PROPERTIES,
      },
    },
    headerTitle: {
      control: 'text',
      description: 'The title of the modal',
      table: {
        category: Category.PROPERTIES,
      },
    },
    primaryText: {
      control: 'text',
      description: 'Text of the primary button',
      table: {
        category: Category.PROPERTIES,
      },
    },
    secondaryText: {
      control: 'text',
      description: 'Text of the secondary button',
      table: {
        category: Category.PROPERTIES,
      },
    },
    alertType: {
      control: 'select',
      options: ['alert', 'error'],
      description: 'Type of alert icon. Available options: alert, error',
      table: {
        category: Category.PROPERTIES,
      },
    },
    progress: {
      control: 'number',
      description: "Percentage of the progress bar's width",
      table: {
        category: Category.PROPERTIES,
      },
    },
    isOpen: {
      control: 'boolean',
      description: 'If true, the modal will be opened. Default is false',
      table: {
        category: Category.PROPERTIES,
      },
      defaultValue: false,
    },
    disableSecondary: {
      control: 'boolean',
      description:
        'If true, the secondary button will be disabled. Default is false',
      table: {
        category: Category.PROPERTIES,
      },
    },
    disablePrimary: {
      control: 'boolean',
      description:
        'If true, the primary button will be disabled. Default is false',
      table: {
        category: Category.PROPERTIES,
      },
    },
    atomCloseClick: {
      action: 'atomCloseClick',
      description:
        'Event emitted when the close button is clicked. The event callback recieve ion-modal custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomDidDismiss: {
      action: 'atomDidDismiss',
      description:
        'Event emitted after the modal has dismissed. The event callback recieve ion-modal custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomDidPresent: {
      action: 'atomDidPresent',
      description:
        'Event emitted after the modal has presented. The event callback recieve ion-modal custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomPrimaryClick: {
      action: 'atomPrimaryClick',
      description:
        'Event emitted when the primary button is clicked. The event callback recieve ion-modal custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomSecondaryClick: {
      action: 'atomSecondaryClick',
      description:
        'Event emitted when the secondary button is clicked. The event callback recieve ion-modal custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    default: {
      name: '',
      description:
        'The default slot is where the content of the modal will be rendered',
      table: {
        category: Category.SLOTS,
      },
    },
    header: {
      name: 'header',
      description:
        'The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set',
      table: {
        category: Category.SLOTS,
      },
    },
  },
}

export const ModalComponentArgs = {
  primaryText: 'Primary',
  secondaryText: 'Secondary',
  hasDivider: false,
  disableSecondary: false,
  disablePrimary: false,
  isOpen: false,
}
