import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import {
  DatetimeComponentArgs,
  DatetimeExampleTexts,
  DatetimeStoryArgs,
} from './datetime.args'

export default {
  title: 'Components/Datetime',
  ...DatetimeStoryArgs,
} as Meta

export const Default: StoryObj = {
  render: (args) => html`
    <atom-datetime
      cancel-text="${args.cancelText}"
      clear-text="${args.clearText}"
      disabled="${args.disabled}"
      done-text="${args.doneText}"
      hour-cycle="${args.hourCycle}"
      locale="${args.locale}"
      max="${args.max}"
      min="${args.min}"
      multiple="${args.multiple}"
      name="${args.name}"
      presentation="${args.presentation}"
      readonly="${args.readonly}"
      show-clear-button="${args.showClearButton}"
      show-default-buttons="${args.showDefaultButtons}"
      show-default-time-label="${args.showDefaultTimeLabel}"
      show-default-title="${args.showDefaultTitle}"
      size="${args.size}"
      use-button="${args.useButton}"
      value="${args.value}"
    >
      <span slot="time-label">${args.timeLabel}</span>
      <span slot="title">${args.title}</span>
    </atom-datetime>
  `,
  args: {
    ...DatetimeComponentArgs,
  },
}

export const AdvancedDateConstraints: StoryObj = {
  render: (args) => html`
    <atom-datetime .isDateEnabled="${args.isDateEnabled}"></atom-datetime>
  `,
  args: {
    isDateEnabled: (dateString) => {
      const date = new Date(dateString)
      const utcDay = date.getUTCDay()

      return utcDay !== 0 && utcDay !== 6
    },
  },
  parameters: {
    docs: {
      description: {
        story: DatetimeExampleTexts.advancedDateConstraints,
      },
    },
  },
}

export const HighlightingSpecificDatesArray: StoryObj = {
  render: (args) => html`
    <atom-datetime
      .highlightedDates="${args.highlightedDates}"
      value="2025-01-01"
    ></atom-datetime>
  `,
  args: {
    highlightedDates: [
      {
        date: '2025-01-05',
        textColor: '#800080',
        backgroundColor: '#ffc0cb',
      },
      {
        date: '2025-01-10',
        textColor: '#09721b',
        backgroundColor: '#c8e5d0',
      },
      {
        date: '2025-01-23',
        textColor: 'rgb(68, 10, 184)',
        backgroundColor: 'rgb(211, 200, 229)',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: DatetimeExampleTexts.highlightingSpecificDatesArray,
      },
    },
  },
}

export const HighlightingSpecificDatesCallback: StoryObj = {
  render: (args) => html`
    <atom-datetime .highlightedDates="${args.highlightedDates}"></atom-datetime>
  `,
  args: {
    highlightedDates: (dateString) => {
      const date = new Date(dateString)
      const day = date.getUTCDate()

      if (day % 5 === 0) {
        return {
          textColor: '#800080',
          backgroundColor: '#ffc0cb',
        }
      }

      return undefined
    },
  },
  parameters: {
    docs: {
      description: {
        story: DatetimeExampleTexts.highlightingSpecificDatesCallback,
      },
    },
  },
}

export const WithMultipleDates: StoryObj = {
  render: () => html` <atom-datetime multiple></atom-datetime> `,
}

export const UsingRangeMode: StoryObj = {
  render: () => html` <atom-datetime range-mode></atom-datetime> `,
}

export const RangeModeWithDefaultDates: StoryObj = {
  render: () => html`
    <atom-datetime
      range-mode
      .value=${['2025-01-15', '2025-01-20']}
    ></atom-datetime>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the Datetime component in range mode with default start and end dates pre-selected (January 15-20, 2025).',
      },
    },
  },
}

export const RangeModeWithDefaultDatesAndButton: StoryObj = {
  render: () => html`
    <atom-datetime
      range-mode
      use-button="true"
      label="Selecionar período"
      datetime-id="datetime-range-with-button"
      cancel-text="Cancelar"
      clear-text="Limpar"
      done-text="Confirmar"
      locale="pt-BR"
      .value=${['2025-02-01', '2025-02-07']}
    ></atom-datetime>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the Datetime component in range mode with button interface, default dates (February 1-7, 2025), and custom Portuguese text in the button.',
      },
    },
  },
}

export const RangeModeWeekExample: StoryObj = {
  render: () => html`
    <atom-datetime
      range-mode
      .value=${['2025-03-10', '2025-03-16']}
      presentation="date"
    ></atom-datetime>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates a week selection (March 10-16, 2025) using range mode.',
      },
    },
  },
}

export const RangeModeMonthExample: StoryObj = {
  render: () => html`
    <atom-datetime
      range-mode
      .value=${['2025-04-01', '2025-04-30']}
      presentation="date"
    ></atom-datetime>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'This example shows a full month selection (April 2025) using range mode.',
      },
    },
  },
}

export const RangeModeWithMinMax: StoryObj = {
  render: () => html`
    <atom-datetime
      range-mode
      use-button="true"
      label="Selecionar período (min/max)"
      datetime-id="datetime-range-min-max"
      cancel-text="Cancelar"
      clear-text="Limpar"
      done-text="Confirmar"
      locale="pt-BR"
      min="2025-01-01"
      max="2025-12-31"
      .value=${['2025-01-15', '2025-01-20']}
    ></atom-datetime>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the Datetime component in range mode with min/max date restrictions.',
      },
    },
  },
}

export const UsingWithButton: StoryObj = {
  render: () => html`
    <atom-grid>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione uma data"
          datetime-id="datetime-with-button-date"
          presentation="date"
        ></atom-datetime>
      </atom-col>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione uma hora"
          datetime-id="datetime-with-button-time"
          presentation="time"
        ></atom-datetime>
      </atom-col>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione um mês e ano"
          datetime-id="datetime-with-button-year-month"
          presentation="month-year"
          .formatOptions="${{ date: { month: 'long', year: 'numeric' } }}"
        ></atom-datetime>
      </atom-col>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione uma data"
          datetime-id="datetime-with-custom-date-format"
          presentation="date"
        >
          <span slot="date-target">Custom Date</span>
        </atom-datetime>
      </atom-col>
    </atom-grid>
  `,
}
