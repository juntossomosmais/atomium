import { Category } from '@atomium/storybook-utils/enums/table'
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
    id: {
      control: 'text',
      description: 'The id of the modal',
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
    primaryButtonText: {
      control: 'text',
      description: 'Text of the primary button',
      table: {
        category: Category.PROPERTIES,
      },
    },
    secondaryButtonText: {
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
    disableSecondaryButton: {
      control: 'boolean',
      description:
        'If true, the secondary button will be disabled. Default is false',
      table: {
        category: Category.PROPERTIES,
      },
    },
    disablePrimaryButton: {
      control: 'boolean',
      description:
        'If true, the primary button will be disabled. Default is false',
      table: {
        category: Category.PROPERTIES,
      },
    },
    canDismiss: {
      control: 'boolean',
      description:
        'If true, the modal can be dismissed by clicking outside the modal. Default is true',
      table: {
        category: Category.PROPERTIES,
      },
    },
    atomCloseClick: {
      action: 'atomCloseClick',
      description:
        'Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomDidDismiss: {
      action: 'atomDidDismiss',
      description:
        'Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomDidPresent: {
      action: 'atomDidPresent',
      description:
        'Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomPrimaryClick: {
      action: 'atomPrimaryClick',
      description:
        'Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomSecondaryClick: {
      action: 'atomSecondaryClick',
      description:
        'Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.',
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
    '--atom-modal-zindex': {
      description:
        'The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.',
      defaultValue: { summary: '--zindex-1000' },
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--height': {
      description: 'Height of the modal.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--max-height': {
      description: 'Maximum height of the modal.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--max-width': {
      description: 'Maximum width of the modal.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--min-height': {
      description: 'Minimum height of the modal.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--min-width': {
      description: 'Minimum width of the modal.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--width': {
      description: 'Width of the modal.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    present: {
      description:
        'Method to present the modal overlay after it has been created.',
      table: {
        category: Category.METHODS,
      },
    },
    dismiss: {
      description: 'Method to close the modal after it has been presented.',
      table: {
        category: Category.METHODS,
      },
    },
    metaData: {
      control: 'object',
      description:
        'Object containing data-testid for modal actions such as primary and secondary buttons. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',
      table: {
        category: Category.PROPERTIES,
      },
    },
  },
}

export const ModalComponentArgs = {
  primaryButtonText: 'Primary',
  secondaryButtonText: 'Secondary',
  hasDivider: false,
  disableSecondaryButton: false,
  disablePrimaryButton: false,
  isOpen: false,
  canDismiss: true,
}
