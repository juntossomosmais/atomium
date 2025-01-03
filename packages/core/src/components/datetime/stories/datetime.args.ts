import { Category } from '@atomium/storybook-utils/enums/table'
import { withActions } from '@storybook/addon-actions/decorator'

export const DatetimeStoryArgs = {
  parameters: {
    docs: {
      description: {
        component:
          'Wrapper of Ionic Datetime component. Read the [Ionic documentation](https://ionicframework.com/docs/api/datetime) for more information about the available properties and possibilities.',
      },
    },
    actions: {
      handles: [
        'atomChange',
        'atomFocus',
        'atomBlur',
        'atomCancel',
        'atom-change',
        'atom-focus',
        'atom-blur',
        'atom-cancel',
      ],
    },
  },
  decorators: [withActions],
  argTypes: {
    buttonLabel: {
      control: 'string',
      description: 'The text of label when `useButton` prop is true.',
    },
    cancelText: {
      control: 'text',
      description: 'The text to display on the cancel button.',
    },
    clearText: {
      control: 'text',
      description: 'The text to display on the clear button.',
    },
    datetimeId: {
      control: 'text',
      defaultValue: { summary: 'datetime' },
      description: 'The id of the datetime.',
    },
    dayValues: {
      control: 'text',
      description: 'The days that should be shown.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the user cannot interact with the datetime.',
    },
    doneText: {
      control: 'text',
      description: 'The text to display on the done button.',
    },
    formatOptions: {
      control: 'object',
      description: 'The options to pass to the Intl.DateTimeFormat object.',
      defaultValue: {
        summary:
          '{ date: { month: "2-digit", day: "2-digit", year: "numeric" }, time: { hour: "2-digit", minute: "2-digit" } }',
      },
      table: {
        type: {
          summary: 'Intl.DateTimeFormatOptions',
        },
      },
    },
    highlightedDates: {
      control: 'function',
      description:
        'Used to apply custom text and background colors to specific dates.',
      table: {
        type: {
          summary:
            '[{ date: string; textColor: string; backgroundColor: string; }] | (date: string) => { color: string; backgroundColor: string; }',
        },
      },
    },
    hourCycle: {
      control: 'select',
      defaultValue: 'h23',
      options: ['h12', 'h23'],
      description: 'The hour cycle of the datetime.',
    },
    hourValues: {
      control: 'text',
      description: 'The hours that should be shown.',
    },
    isDateEnabled: {
      control: 'function',
      description:
        'A function that receives a date string and returns a boolean indicating if the date is enabled.',
      table: {
        type: {
          summary: '(dateString: string) => boolean',
        },
      },
    },
    locale: {
      control: 'text',
      defaultValue: 'pt-BR',
      description: 'The locale to use for the datetime.',
    },
    max: {
      control: 'text',
      description: 'The maximum datetime allowed.',
    },
    min: {
      control: 'text',
      description: 'The minimum datetime allowed.',
    },
    minuteValues: {
      control: 'text',
      description: 'The minutes that should be shown.',
    },
    monthValues: {
      control: 'text',
      description: 'The months that should be shown.',
    },
    multiple: {
      control: 'boolean',
      description: 'If true, the datetime allows multiple values.',
    },
    name: {
      control: 'text',
      description:
        'The name of the control, which is submitted with the form data.',
    },
    presentation: {
      control: 'select',
      defaultValue: { summary: 'date' },
      options: ['date', 'time', 'month-year', 'month', 'year'],
      description: 'The presentation of the datetime.',
    },
    readonly: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      description: 'If true, the datetime is readonly.',
    },
    showClearButton: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      description: 'If true, the clear button is shown.',
    },
    showDefaultButtons: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      description: 'If true, the default buttons are shown.',
    },
    showDefaultTimeLabel: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      description: 'If true, the default time label is shown.',
    },
    showDefaultTitle: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      description: 'If true, the default title is shown.',
    },
    size: {
      control: 'select',
      defaultValue: { summary: 'fixed' },
      options: ['fixed', 'cover'],
      description:
        'If cover, the datetime will expand to cover the full width of its container. If fixed, the datetime will have a fixed width.',
    },
    title: {
      control: 'text',
      description:
        'The title of the datetime. If not provided, the title will be hidden.',
      table: {
        category: Category.SLOTS,
      },
    },
    timeLabel: {
      control: 'text',
      description:
        'The time label of the datetime. If not provided, the time label will be hidden.',
      table: {
        category: Category.SLOTS,
      },
    },
    useButton: {
      control: 'boolean',
      description: 'If true, the datetime uses a button.',
    },
    value: {
      control: 'text',
      description: 'The value of the datetime.',
    },
    yearValues: {
      control: 'text',
      description: 'The years that should be shown.',
    },
  },
}

export const DatetimeComponentArgs = {
  cancelText: 'Cancelar',
  clearText: 'Limpar',
  dayValues: undefined,
  disabled: false,
  doneText: 'Confirmar',
  hourCycle: 'h23',
  hourValues: undefined,
  locale: 'pt-BR',
  max: undefined,
  min: undefined,
  minuteValues: undefined,
  monthValues: undefined,
  multiple: false,
  name: 'datetime',
  presentation: 'date',
  readonly: false,
  showClearButton: false,
  showDefaultButtons: false,
  showDefaultTimeLabel: false,
  showDefaultTitle: false,
  size: 'fixed',
  useButton: false,
  value: undefined,
  yearValues: undefined,
}
