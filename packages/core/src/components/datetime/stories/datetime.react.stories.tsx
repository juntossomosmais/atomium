import { AtomCol, AtomDatetime, AtomGrid } from '@juntossomosmais/atomium/react'
import { Meta } from '@storybook/react'
import React from 'react'

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
    <AtomDatetime highlightedDates={args.highlightedDates} value='2025-01-01' />
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
          presentation='date-time'
        >
          <span slot="date-target">Custom-Date</span>
        </AtomDatetime>
      </AtomCol>
    </AtomGrid>
  ),
}
