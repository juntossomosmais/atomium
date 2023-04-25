import { newSpecPage } from '@stencil/core/testing'
import { AtomCol } from './col'

describe('AtomCol', () => {
  it('should set size prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col size="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col size="12">1</ion-col>
    `)
  })

  it('should set offset prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col offset="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col offset="12">1</ion-col>
    `)
  })

  it('should set size and offset prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col size="12" offset="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col offset="12" size="12">1</ion-col>
    `)
  })

  it('should set size-sm prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col size-sm="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col size-sm="12" sizesm="12">1</ion-col>
    `)
  })

  it('should set offset-sm prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col offset-sm="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col offset-sm="12" offsetsm="12">1</ion-col>
    `)
  })

  it('should set pull prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col pull="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col pull="12">1</ion-col>
    `)
  })

  it('should set push prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtomCol],
      html: `<atom-col push="12">1</atom-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col push="12">1</ion-col>
    `)
  })
})
