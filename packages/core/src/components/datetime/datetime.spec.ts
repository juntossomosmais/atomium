import { newSpecPage } from '@stencil/core/testing'

import { AtomDatetime } from './datetime'

describe('AtomDatetime', () => {
  it('renders with all props', async () => {
    const labelText = 'Select a date'

    const page = await newSpecPage({
      components: [AtomDatetime],
      html: `<atom-datetime label="${labelText}"></atom-datetime>`,
    })

    await page.waitForChanges()

    expect(page.root).toMatchSnapshot()
  })

  it('should renders with a button when useButton is true', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime useButton="true"></atom-datetime>',
    })

    await page.waitForChanges()

    expect(page.root).toMatchSnapshot()
  })

  it('should emits atomChange with full date range when rangeMode is true', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime range-mode="true"></atom-datetime>',
    })

    await page.waitForChanges()

    const datetime = page.root?.querySelector('ion-datetime')
    const spy = jest.fn()

    page.root?.addEventListener('atomChange', spy)

    datetime?.dispatchEvent(
      new CustomEvent('ionChange', {
        detail: { value: ['2022-01-01', '2022-01-05'] },
      })
    )

    expect(spy).toHaveBeenCalled()
    expect(spy.mock.calls[0][0].detail).toEqual([
      '2022-01-01',
      '2022-01-02',
      '2022-01-03',
      '2022-01-04',
      '2022-01-05',
    ])
  })

  it('should calculate full range between start and end dates', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime range-mode="true"></atom-datetime>',
    })

    const datetime = page.rootInstance
    const spy = jest.fn()

    page.root?.addEventListener('atomChange', spy)

    // Test with a 5-day range
    datetime.handleRangeMode(['2022-01-01', '2022-01-05'])
    await page.waitForChanges()

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy.mock.calls[0][0].detail).toEqual([
      '2022-01-01',
      '2022-01-02',
      '2022-01-03',
      '2022-01-04',
      '2022-01-05',
    ])
  })

  it('should start a new selection when a single date is selected after a range', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime range-mode="true"></atom-datetime>',
    })

    const datetime = page.rootInstance
    const spy = jest.fn()

    page.root?.addEventListener('atomChange', spy)

    // First, select a range
    datetime.handleRangeMode(['2022-01-01', '2022-01-05'])
    await page.waitForChanges()

    // Then select a new single date (should start new selection)
    datetime.handleRangeMode(['2022-01-10'])
    await page.waitForChanges()

    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy.mock.calls[1][0].detail).toEqual(['2022-01-10'])
  })

  it('should emits atomChange with a single date when rangeMode is false', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime range-mode="false"></atom-datetime>',
    })

    await page.waitForChanges()

    const datetime = page.root?.querySelector('ion-datetime')
    const spy = jest.fn()

    page.root?.addEventListener('atomChange', spy)

    datetime?.dispatchEvent(
      new CustomEvent('ionChange', {
        detail: { value: '2022-01-01' },
      })
    )

    expect(spy).toHaveBeenCalled()
    expect(spy.mock.calls[0][0].detail).toEqual('2022-01-01')
  })

  it('should emits atomCancel when cancel button is clicked', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime></atom-datetime>',
    })

    await page.waitForChanges()

    const datetime = page.rootInstance
    const spy = jest.fn()

    page.root?.addEventListener('atomCancel', spy)

    // Directly call the handler to simulate cancel
    datetime.handleCancel()
    await page.waitForChanges()

    expect(spy).toHaveBeenCalled()
  })

  it('should emits atomFocus when datetime is focused', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime></atom-datetime>',
    })

    await page.waitForChanges()

    const datetime = page.root?.querySelector('ion-datetime')
    const spy = jest.fn()

    page.root?.addEventListener('atomFocus', spy)

    datetime?.dispatchEvent(new CustomEvent('ionFocus'))

    expect(spy).toHaveBeenCalled()
  })

  it('should emits atomBlur when datetime is blurred', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime></atom-datetime>',
    })

    await page.waitForChanges()

    const datetime = page.root?.querySelector('ion-datetime')
    const spy = jest.fn()

    page.root?.addEventListener('atomBlur', spy)

    datetime?.dispatchEvent(new CustomEvent('ionBlur'))

    expect(spy).toHaveBeenCalled()
  })

  it('should render custom dateTarget when dateTarget slot is used', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: `<atom-datetime>
        <div slot="date-target">Custom Date Target</div>
      </atom-datetime>`,
    })

    await page.waitForChanges()

    // Check that the custom slot content is present, regardless of hidden attribute
    const slotContent = page.root?.querySelector('[slot="date-target"]')

    expect(slotContent?.textContent).toContain('Custom Date Target')
  })

  it('should calculate correct date range for consecutive dates', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime range-mode="true"></atom-datetime>',
    })

    const datetime = page.rootInstance

    const result = datetime.calculateDateRange(['2022-01-01', '2022-01-03'])

    expect(result).toEqual(['2022-01-01', '2022-01-02', '2022-01-03'])
  })

  it('should calculate correct date range for reverse order dates', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime range-mode="true"></atom-datetime>',
    })

    const datetime = page.rootInstance

    const result = datetime.calculateDateRange(['2022-01-05', '2022-01-01'])

    expect(result).toEqual([
      '2022-01-05',
      '2022-01-04',
      '2022-01-03',
      '2022-01-02',
      '2022-01-01',
    ])
  })

  it('should handle single date in range calculation', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime range-mode="true"></atom-datetime>',
    })

    const datetime = page.rootInstance

    const result = datetime.calculateDateRange(['2022-01-01'])

    expect(result).toEqual(['2022-01-01'])
  })

  it('should handle same date range', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime range-mode="true"></atom-datetime>',
    })

    const datetime = page.rootInstance

    const result = datetime.calculateDateRange(['2022-01-01', '2022-01-01'])

    expect(result).toEqual(['2022-01-01'])
  })

  it('should initialize selectedDates from value prop in range mode', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime range-mode="true"></atom-datetime>',
    })

    const datetime = page.rootInstance

    // Set value and trigger componentWillLoad behavior
    datetime.value = ['2022-01-01', '2022-01-03']
    datetime.componentWillLoad()

    expect(datetime.selectedDates).toEqual([
      '2022-01-01',
      '2022-01-02',
      '2022-01-03',
    ])
  })

  describe('range mode button label', () => {
    it('shows "Selecionar data" when no date is selected', async () => {
      const page = await newSpecPage({
        components: [AtomDatetime],
        html: '<atom-datetime use-button="true" range-mode="true"></atom-datetime>',
      })

      await page.waitForChanges()
      const button = page.root?.querySelector('ion-datetime-button')

      expect(button?.textContent).toContain('Selecionar data')
    })

    it('shows the formatted date when one date is selected', async () => {
      const page = await newSpecPage({
        components: [AtomDatetime],
        html: '<atom-datetime use-button="true" range-mode="true"></atom-datetime>',
      })
      const datetime = page.rootInstance

      datetime.selectedDates = ['2025-07-10']
      await page.waitForChanges()
      const button = page.root?.querySelector('ion-datetime-button')

      expect(button?.textContent).toContain('10/07/2025')
    })

    it('shows the formatted range when two dates are selected', async () => {
      const page = await newSpecPage({
        components: [AtomDatetime],
        html: '<atom-datetime use-button="true" range-mode="true"></atom-datetime>',
      })
      const datetime = page.rootInstance

      datetime.selectedDates = ['2025-07-10', '2025-07-15']
      await page.waitForChanges()
      const button = page.root?.querySelector('ion-datetime-button')

      expect(button?.textContent).toContain('10/07/2025 - 15/07/2025')
    })
  })
})
