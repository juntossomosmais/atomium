import { newSpecPage } from '@stencil/core/testing'
import { AtoCol } from './col'

describe('AtoCol', () => {
  it('should set size prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoCol],
      html: `<ato-col size="12">1</ato-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col size="12">1</ion-col>
    `)
  })

  it('should set offset prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoCol],
      html: `<ato-col offset="12">1</ato-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col offset="12">1</ion-col>
    `)
  })

  it('should set size and offset prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoCol],
      html: `<ato-col size="12" offset="12">1</ato-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col offset="12" size="12">1</ion-col>
    `)
  })

  it('should set size-sm prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoCol],
      html: `<ato-col size-sm="12">1</ato-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col size-sm="12" sizesm="12">1</ion-col>
    `)
  })

  it('should set offset-sm prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoCol],
      html: `<ato-col offset-sm="12">1</ato-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col offset-sm="12" offsetsm="12">1</ion-col>
    `)
  })

  it('should set pull prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoCol],
      html: `<ato-col pull="12">1</ato-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col pull="12">1</ion-col>
    `)
  })

  it('should set push prop correctly', async () => {
    const page = await newSpecPage({
      components: [AtoCol],
      html: `<ato-col push="12">1</ato-col>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ion-col push="12">1</ion-col>
    `)
  })
})
