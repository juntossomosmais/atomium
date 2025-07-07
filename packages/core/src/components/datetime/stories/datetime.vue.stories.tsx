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

export const RangeModeWithDefaultDates = {
  render: () => ({
    components: { AtomDatetime },
    data() {
      return {
        defaultDates: ['2025-01-15', '2025-01-20'],
      }
    },
    template: `
      <AtomDatetime rangeMode="true" :value="defaultDates" />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the Datetime component in range mode with default start and end dates pre-selected (January 15-20, 2025).',
      },
    },
  },
}

export const RangeModeWithDefaultDatesAndButton = {
  render: () => ({
    components: { AtomDatetime },
    data() {
      return {
        defaultDates: ['2025-02-01', '2025-02-07'],
      }
    },
    template: `
      <AtomDatetime
        rangeMode="true"
        useButton="true"
        label="Selecionar período"
        datetimeId="datetime-range-with-button"
        cancelText="Cancelar"
        clearText="Limpar"
        doneText="Confirmar"
        locale="pt-BR"
        :value="defaultDates"
      >
        <span slot="date-target">1 a 7 de fev de 2025</span>
      </AtomDatetime>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the Datetime component in range mode with button interface, default dates (February 1-7, 2025), and custom Portuguese text in the button.',
      },
    },
  },
}

export const RangeModeWeekExample = {
  render: () => ({
    components: { AtomDatetime },
    data() {
      return {
        weekDates: ['2025-03-10', '2025-03-16'],
      }
    },
    template: `
      <AtomDatetime
        rangeMode="true"
        :value="weekDates"
        presentation="date"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates a week selection (March 10-16, 2025) using range mode.',
      },
    },
  },
}

export const RangeModeMonthExample = {
  render: () => ({
    components: { AtomDatetime },
    data() {
      return {
        monthDates: ['2025-04-01', '2025-04-30'],
      }
    },
    template: `
      <AtomDatetime
        rangeMode="true"
        :value="monthDates"
        presentation="date"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This example shows a full month selection (April 2025) using range mode.',
      },
    },
  },
}

export const RangeModeWithMinMax = {
  render: () => ({
    components: { AtomDatetime },
    data() {
      return {
        summerDates: ['2025-06-01', '2025-08-31'],
      }
    },
    template: `
      <AtomDatetime
        rangeMode="true"
        min="2025-01-01"
        max="2025-12-31"
        :value="summerDates"
        useButton="true"
        label="Select summer period"
        datetimeId="datetime-range-constrained"
      />
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This example demonstrates range mode with min/max constraints and default summer period selection.',
      },
    },
  },
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
            presentation="date"
          >
            <span slot="date-target">Custom Date</span>
          </AtomDatetime>
        </AtomCol>
      </AtomGrid>
    `,
  }),
}

export const RangeModeCustomButtonText = {
  render: () => ({
    components: { AtomDatetime },
    data() {
      return {
        workDates: ['2025-07-07', '2025-07-13'],
      }
    },
    template: `
      <AtomDatetime
        rangeMode="true"
        useButton="true"
        label="Período de trabalho"
        datetimeId="datetime-range-custom-text"
        cancelText="Cancelar"
        clearText="Limpar"
        doneText="Confirmar"
        locale="pt-BR"
        :value="workDates"
      >
        <span slot="date-target">7 dias selecionados</span>
      </AtomDatetime>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'This example shows how to customize the button text to display "7 dias selecionados" instead of the default "7 days" text.',
      },
    },
  },
}
