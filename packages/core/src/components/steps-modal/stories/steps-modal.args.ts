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
          'Wrapper of Atom Modal component which implements steps logic. Read the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs) for more information.',
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
    currentStep: {
      control: 'number',
      description: 'The index of the step that will be displayed',
      defaultValue: { summary: 0 },
      table: {
        category: Category.PROPERTIES,
      },
    },
    stepsTitles: {
      control: 'string',
      description: 'An string with the titles of the steps separated by commas',
      table: {
        category: Category.PROPERTIES,
      },
    },
    isOpen: {
      control: 'boolean',
      description: 'If true, the modal will be displayed',
      defaultValue: { summary: false },
      table: {
        category: Category.PROPERTIES,
      },
    },
    steps: {
      control: 'number',
      description:
        'The number of steps that the modal will have. OBS: It needs to be the same number of steps-titles',
      table: {
        category: Category.PROPERTIES,
      },
    },
    atomCancel: {
      action: 'atomCancel',
      description:
        'Event emitted when the secondary button is clicked and the current step is 0. The event callback recieve ion-modal custom component as a param.',
      table: {
        category: Category.EVENTS,
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
    atomFinish: {
      action: 'atomFinish',
      description:
        'Event emitted when the primary button is clicked on the last step. The event callback recieve ion-modal custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomNextStep: {
      action: 'atomNextStep',
      description:
        'Event emitted when the primary button is clicked. The event callback recieve ion-modal custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomPreviousStep: {
      action: 'atomPreviousStep',
      description:
        'Event emitted when the secondary button is clicked. The event callback recieve ion-modal custom component as a param.',
      table: {
        category: Category.EVENTS,
      },
    },
    step_x: {
      name: 'step-x',
      description:
        'The slot where the content of the step x will be rendered. Obs: x is the index of the step',
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
  isOpen: false,
}
