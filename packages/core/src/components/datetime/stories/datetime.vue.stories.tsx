import { AtomCol, AtomDatetime, AtomGrid } from '@juntossomosmais/atomium/vue'
import { Meta } from '@storybook/vue3'

import {
  DatetimeComponentArgs,
  DatetimeExampleTexts,
  DatetimeStoryArgs,
} from './datetime.args'

export default {
  title: 'Components/Datetime',
  ...DatetimeStoryArgs,
} as Meta

export const Default = {
  render: (args) => ({
    components: { AtomDatetime },
    setup() {
      return { args }
    },
    template: `
      <AtomDatetime
        cancelText="${args.cancelText}"
        clearText="${args.clearText}"
        disabled="${args.disabled}"
        doneText="${args.doneText}"
        hourCycle="${args.hourCycle}"
        locale="${args.locale}"
        max="${args.max}"
        min="${args.min}"
        multiple="${args.multiple}"
        name="${args.name}"
        presentation="${args.presentation}"
        readonly="${args.readonly}"
        showClearButton="${args.showClearButton}"
        showDefaultButtons="${args.showDefaultButtons}"
        showDefaultTimeLabel="${args.showDefaultTimeLabel}"
        showDefaultTitle="${args.showDefaultTitle}"
        size="${args.size}"
        useButton="${args.useButton}"
      >
        <span slot="time-label">{{ args.timeLabel }}</span>
        <span slot="title">{{ args.title }}</span>
      </AtomDatetime>
    `,
  }),
  args: {
    ...DatetimeComponentArgs,
  },
}

export const AdvancedDateConstraints = {
  render: () => ({
    components: { AtomDatetime },
    setup() {
      const isDateEnabled = (dateString) => {
        const date = new Date(dateString)
        const utcDay = date.getUTCDay()

        return utcDay !== 0 && utcDay !== 6
      }

      return { isDateEnabled }
    },
    template: `
      <AtomDatetime :isDateEnabled="isDateEnabled" />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: DatetimeExampleTexts.advancedDateConstraints,
      },
    },
  },
}

export const HighlightingSpecificDatesArray = {
  render: (args) => ({
    components: { AtomDatetime },
    setup() {
      return { args }
    },
    template: `
      <AtomDatetime
        highlightedDates="${args.highlightedDates}"
        value="2025-01-01"
      />
    `,
  }),
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

export const HighlightingSpecificDatesCallback = {
  render: () => ({
    components: { AtomDatetime },
    setup() {
      const highlightedDates = (dateString) => {
        const date = new Date(dateString)
        const day = date.getUTCDate()

        if (day % 5 === 0) {
          return {
            textColor: '#800080',
            backgroundColor: '#ffc0cb',
          }
        }

        return undefined
      }

      return { highlightedDates }
    },
    template: `
      <AtomDatetime
        :highlightedDates="highlightedDates"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: DatetimeExampleTexts.highlightingSpecificDatesCallback,
      },
    },
  },
}

export const WithMultipleDates = {
  render: () => ({
    components: { AtomDatetime },
    template: `
      <AtomDatetime multiple="true" />
    `,
  }),
}

export const UsingRangeMode = {
  render: () => ({
    components: { AtomDatetime },
    data() {
      return {
        selectedDates: [] as string[],
      }
    },
    template: `
      <AtomDatetime rangeMode="true" />
    `,
  }),
}

export const UsingWithButton = {
  render: (args) => ({
    components: { AtomDatetime, AtomCol, AtomGrid },
    setup() {
      return { args }
    },
    template: `
      <AtomGrid>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione uma data"
            datetimeId="datetime-with-button-date"
            presentation="date"
          />
        </AtomCol>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione uma hora"
            datetimeId="datetime-with-button-time"
            presentation="time"
          />
        </AtomCol>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione um mês e ano"
            datetimeId="datetime-with-button-year-month"
            presentation="month-year"
            formatOptions="${{ date: { month: 'long', year: 'numeric' } }}"
          />
        </AtomCol>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione uma data"
            datetimeId="datetime-with-button-date"
            presentation="date-time"
          >
            <span slot="date-target">Custom Date</span>
          </AtomDatetime>
        </AtomCol>
      </AtomGrid>
    `,
  }),
}
