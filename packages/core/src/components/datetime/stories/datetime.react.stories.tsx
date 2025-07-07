import { AtomCol, AtomDatetime, AtomGrid } from '@juntossomosmais/atomium/react'
import { Meta } from '@storybook/react'

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
  render: (args) => (
    <AtomDatetime
      cancelText={args.cancelText}
      clearText={args.clearText}
      disabled={args.disabled}
      doneText={args.doneText}
      hour-cycle={args.hourCycle}
      locale={args.locale}
      max={args.max}
      min={args.min}
      multiple={args.multiple}
      name={args.name}
      presentation={args.presentation}
      readonly={args.readonly}
      showClearButton={args.showClearButton}
      showDefaultButtons={args.showDefaultButtons}
      showDefaultTimeLabel={args.showDefaultTimeLabel}
      showDefaultTitle={args.showDefaultTitle}
      size={args.size}
      useButton={args.useButton}
      value={args.value}
    >
      <span slot='time-label'>{args.timeLabel}</span>
      <span slot='title'>{args.title}</span>
    </AtomDatetime>
  ),
  args: {
    ...DatetimeComponentArgs,
  },
}

export const AdvancedDateConstraints = {
  render: (args) => <AtomDatetime isDateEnabled={args.isDateEnabled} />,
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

export const HighlightingSpecificDatesArray = {
  render: (args) => (
    <AtomDatetime
      highlightedDates={args.highlightedDates}
      value={'2025-01-01' as any}
    />
  ),
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
  render: (args) => <AtomDatetime highlightedDates={args.highlightedDates} />,
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

export const WithMultipleDates = {
  render: () => <AtomDatetime multiple={true} />,
}

export const UsingRangeMode = {
  render: () => <AtomDatetime rangeMode={true} />,
}

export const RangeModeWithDefaultDates = {
  render: () => (
    <AtomDatetime
      rangeMode={true}
      value={['2025-01-15', '2025-01-20'] as any}
    />
  ),
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
  render: () => (
    <AtomDatetime
      rangeMode={true}
      useButton={true}
      label='Selecionar período'
      datetimeId='datetime-range-with-button'
      cancelText='Cancelar'
      clearText='Limpar'
      doneText='Confirmar'
      locale='pt-BR'
      value={['2025-02-01', '2025-02-07'] as any}
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'This example shows the Datetime component in range mode with button interface and default dates (February 1-7, 2025).',
      },
    },
  },
}

export const RangeModeWeekExample = {
  render: () => (
    <AtomDatetime
      rangeMode={true}
      value={['2025-03-10', '2025-03-16'] as any}
      presentation='date'
    />
  ),
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
  render: () => (
    <AtomDatetime
      rangeMode={true}
      value={['2025-04-01', '2025-04-30'] as any}
      presentation='date'
    />
  ),
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
  render: () => (
    <AtomDatetime
      rangeMode={true}
      min='2025-01-01'
      max='2025-12-31'
      value={['2025-06-01', '2025-08-31'] as any}
      useButton={true}
      label='Selecionar período de verão'
      datetimeId='datetime-range-constrained'
      cancelText='Cancelar'
      clearText='Limpar'
      doneText='Confirmar'
      locale='pt-BR'
    />
  ),
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
  render: () => (
    <AtomGrid>
      <AtomCol size='8'>
        <AtomDatetime
          useButton={true}
          label='Selecione uma data'
          datetimeId='datetime-with-button-date'
          presentation='date'
        />
      </AtomCol>
      <AtomCol size='8'>
        <AtomDatetime
          useButton={true}
          label='Selecione uma hora'
          datetimeId='datetime-with-button-time'
          presentation='time'
        />
      </AtomCol>
      <AtomCol size='8'>
        <AtomDatetime
          useButton={true}
          label='Selecione um mês e ano'
          datetimeId='datetime-with-button-year-month'
          presentation='month-year'
          formatOptions={{ date: { month: 'long', year: 'numeric' } }}
        />
      </AtomCol>
      <AtomCol size='8'>
        <AtomDatetime
          useButton={true}
          label='Selecione uma data'
          datetimeId='datetime-with-custom-date-format'
          presentation='date'
        >
          <span slot='date-target'>Custom-Date</span>
        </AtomDatetime>
      </AtomCol>
    </AtomGrid>
  ),
}
