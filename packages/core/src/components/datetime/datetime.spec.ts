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
    expect(spy.mock.calls[0][0].detail.value).toEqual('2022-01-01')
  })
})
