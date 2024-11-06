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
      page: DocumentationTemplate,
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
    disablePrimary: {
      control: 'boolean',
      description:
        'When true, the primary button is disabled. Note: this only applies to the last step.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    disableSecondary: {
      control: 'boolean',
      description:
        'When true, the secondary button is disabled. Note: this only applies to the first step.',
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
    step_x: {
      name: 'step-x',
      description:
        'The slot where the content for each step will be rendered, with x as the step index.',
      table: {
        category: Category.SLOTS,
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
  primaryText: 'Next',
  secondaryText: 'Previous',
}
