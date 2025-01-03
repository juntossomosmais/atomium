import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { DatetimeComponentArgs, DatetimeStoryArgs } from './datetime.args'

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
        story:
          'This story shows how to use the `isDateEnabled` property to disable weekends using the following logic: `\nconst date = new Date(dateString);\nconst utcDay = date.getUTCDay();\nreturn utcDay !== 0 && utcDay !== 6;`',
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
        story:
          'This story shows how to use the `highlightedDates` property with an array to highlight specific dates.',
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
        story:
          'This story shows how to use the `highlightedDates` property with a callback function to highlight dates based on custom logic using the following logic: `\nconst date = new Date(dateString);\nconst day = date.getUTCDate();\nif (day % 5 === 0) {\n  return {\n    textColor: "#800080",\n    backgroundColor: "#ffc0cb",\n  };\n}\nreturn undefined;`',
      },
    },
  },
}

export const DatetimeButton: StoryObj = {
  render: () => html`
    <atom-grid>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          button-label="Selecione uma data"
          datetime-id="datetime-with-button-date"
          presentation="date"
        ></atom-datetime>
      </atom-col>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          button-label="Selecione uma hora"
          datetime-id="datetime-with-button-time"
          presentation="time"
        ></atom-datetime>
      </atom-col>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          button-label="Selecione um mês e ano"
          datetime-id="datetime-with-button-year-month"
          presentation="month-year"
          .formatOptions="${{ date: { month: 'long', year: 'numeric' } }}"
        ></atom-datetime>
      </atom-col>
    </atom-grid>
  `,
}
