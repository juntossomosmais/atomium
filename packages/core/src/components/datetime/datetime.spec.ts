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

    expect(page.root).toEqualHtml(`
      <atom-datetime label="${labelText}">
        <ion-datetime class="atom-datetime" color="secondary" hourcycle="h23" id="datetime" locale="pt-BR" mode="md" presentation="date" size="fixed"></ion-datetime>
      </atom-datetime>
    `)
  })

  it('should renders with a button when useButton is true', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime useButton="true"></atom-datetime>',
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-datetime usebutton="true">
        <ion-datetime class="atom-datetime" color="secondary" hourcycle="h23" id="datetime" locale="pt-BR" mode="md" presentation="date" size="fixed"></ion-datetime>
      </atom-datetime>
    `)
  })

  it('should emits atomChange with multiple dates when rangeMode is true', async () => {
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
        detail: { value: ['2022-01-01', '2022-01-02'] },
      })
    )

    expect(spy).toHaveBeenCalled()
    expect(spy.mock.calls[0][0].detail).toEqual(['2022-01-01', '2022-01-02'])
  })

  it('should start a new range when a new date is selected after a range', async () => {
    const page = await newSpecPage({
      components: [AtomDatetime],
      html: '<atom-datetime range-mode="true"></atom-datetime>',
    })

    const datetime = page.rootInstance
    const spy = jest.fn()

    page.root?.addEventListener('atomChange', spy)

    datetime.handleRangeMode(['2022-01-01', '2022-01-05'])
    await page.waitForChanges()

    datetime.handleRangeMode(['2022-01-10'])
    await page.waitForChanges()

    expect(spy).toHaveBeenCalledTimes(2)
    expect(spy.mock.calls[1][0].detail).toEqual([
      '2022-01-01',
      '2022-01-02',
      '2022-01-03',
      '2022-01-04',
      '2022-01-05',
      '2022-01-10',
    ])
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

    const datetime = page.root?.querySelector('ion-datetime')
    const spy = jest.fn()

    page.root?.addEventListener('atomCancel', spy)

    datetime?.dispatchEvent(new CustomEvent('ionCancel'))

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

    expect(page.root).toEqualHtml(`
      <atom-datetime>
        <div slot="date-target">
          Custom Date Target
        </div>
        <ion-datetime class="atom-datetime" color="secondary" hourcycle="h23" id="datetime" locale="pt-BR" mode="md" presentation="date" size="fixed"></ion-datetime>
      </atom-datetime>
    `)
  })
})
