import { newSpecPage } from '@stencil/core/testing'
import { AtomCol } from './col'

describe('AtomCol', () => {
  it('should set size prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `
      <atom-col size="12">
        <span>1</span>
        <span>2</span>
      </atom-col>
      `,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
    <atom-col size="12" style="flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%); max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%);">
      <mock:shadow-root>
        <slot></slot>
      </mock:shadow-root>
      <span>1</span>
      <span>2</span>
    </atom-col>
    `)
  })

  it('should set offset prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col offset="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-col offset="12" style="margin-left: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%);">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        1
      </atom-col>
    `)
  })

  it('should set size and offset prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col size="12" offset="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-col offset="12" size="12" style="margin-left: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%); flex: 0 0 calc(calc(12 / var(--ion-grid-columns, 12)) * 100%); width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%); max-width: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%);">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        1
      </atom-col>
    `)
  })

  it('should set size-sm prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col size-sm="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-col size-sm="12">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        1
      </atom-col>
    `)
  })

  it('should set offset-sm prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col offset-sm="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-col offset-sm="12">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        1
      </atom-col>
    `)
  })

  it('should set pull prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col pull="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-col pull="12" style="right: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%);">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        1
      </atom-col>
    `)
  })

  it('should set push prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col push="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-col push="12" style="left: calc(calc(12 / var(--ion-grid-columns, 12)) * 100%);">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        1
      </atom-col>
    `)
  })
})
