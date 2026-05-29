import { Meta, StoryObj } from '@storybook/web-components-vite'
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

const getLast30DaysRange = () => {
  const today = new Date()
  const thirtyDaysAgo = new Date()

  thirtyDaysAgo.setDate(today.getDate() - 30)
  const format = (d: Date) => d.toISOString().slice(0, 10)

  return [format(thirtyDaysAgo), format(today)]
}

const todayISO = new Date().toISOString().slice(0, 10)

export const RangeModeWithDefaultDates: StoryObj = {
  render: () => html`
    <atom-datetime range-mode .value=${getLast30DaysRange()}></atom-datetime>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the Datetime component in range mode with default start and end dates pre-selected (last 30 days).',
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
      .value=${getLast30DaysRange()}
    ></atom-datetime>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the Datetime component in range mode with button interface, default dates (last 30 days), and custom Portuguese text in the button.',
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
      max="${todayISO}"
      .value=${getLast30DaysRange()}
    ></atom-datetime>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the Datetime component in range mode with min/max date restrictions (last 30 days, max is today).',
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
