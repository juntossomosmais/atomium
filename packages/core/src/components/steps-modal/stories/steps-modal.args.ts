import { Category } from '@atomium/storybook-utils/enums/table'
import { withActions } from '@storybook/addon-actions/decorator'

export const ModalStoryArgs = {
  parameters: {
    actions: {
      handles: [
        'atomCloseClick',
        'atomDidDismiss',
        'atomDidPresent',
        'atomNextStep',
        'atomPreviousStep',
        'atomCancel',
        'atomFinish',
      ],
    },
    docs: {
      description: {
        component:
          'A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs).',
      },
    },
  },
  decorators: [withActions],
  argTypes: {
    trigger: {
      description: 'The ID of the element that will trigger the modal.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    currentStep: {
      control: 'number',
      description: 'The index of the step currently being displayed.',
      defaultValue: { summary: 0 },
      table: {
        category: Category.PROPERTIES,
      },
    },
    stepsTitles: {
      control: 'string',
      description:
        'A string containing the titles of each step, separated by commas.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    isOpen: {
      control: 'boolean',
      description: 'When true, the modal is displayed.',
      defaultValue: { summary: false },
      table: {
        category: Category.PROPERTIES,
      },
    },
    disablePrimaryButton: {
      control: 'boolean',
      description:
        'This property is used to disable the primary button. When true the primary button wont be clickable.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    disableSecondaryButton: {
      control: 'boolean',
      description:
        'This property is used to disable the secondary button. When true the secondary button wont be clickable.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    steps: {
      control: 'number',
      description:
        'The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    closeOnFinish: {
      control: 'boolean',
      description:
        'When true, the modal will close automatically after the last step.',
      defaultValue: { summary: false },
      table: {
        category: Category.PROPERTIES,
      },
    },
    atomCancel: {
      action: 'atomCancel',
      description:
        'Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomCloseClick: {
      action: 'atomCloseClick',
      description:
        'Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomDidDismiss: {
      action: 'atomDidDismiss',
      description:
        'Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomDidPresent: {
      action: 'atomDidPresent',
      description:
        'Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomFinish: {
      action: 'atomFinish',
      description:
        'Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomNextStep: {
      action: 'atomNextStep',
      description:
        'Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomPreviousStep: {
      action: 'atomPreviousStep',
      description:
        'Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.',
      table: {
        category: Category.EVENTS,
      },
    },
    lockedInitialStep: {
      control: 'number',
      description:
        'Specifies the step index at which the modal will start. Users are restricted from navigating to steps before this index. Attempting to go back beyond this step will emit atom cancel event from the modal.',
      table: {
        category: Category.PROPERTIES,
      },
    },

    step_x: {
      name: 'step-x',
      description:
        'The slot where the content for each step will be rendered, with x as the step index.',
      table: {
        category: Category.SLOTS,
      },
    },
    metaData: {
      control: 'object',
      description:
        'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',
      table: {
        category: Category.PROPERTIES,
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
  },
}

export const ModalComponentArgs = {
  trigger: 'open-modal-steps',
  stepsTitles: 'Step 1, Step 2, Step 3',
  steps: 3,
  currentStep: 1,
  isOpen: false,
  closeOnFinish: false,
  primaryButtonTextsByStep: 'Continue, Continue, Finish',
  secondaryButtonTextsByStep: 'Close, Back, Back',
  lockedInitialStep: 1,
}
