import { newSpecPage } from '@stencil/core/testing'

import { AtomPaymentBanner } from './paymentbanner'

describe('atom-badge', () => {
  it('should render an ion-badge element', async () => {
    const page = await newSpecPage({
      components: [AtomPaymentBanner],
      html: `<atom-badge type='primary'>Badge</atom-badge>`,
    })

    await page.waitForChanges()

    const badgeEl = page.root?.shadowRoot?.querySelector('ion-badge')

    expect(badgeEl).toBeTruthy()
  })

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [AtomPaymentBanner],
      html: `<atom-badge type='primary'>Badge</atom-badge>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-badge type='primary'>
        <mock:shadow-root>
        <ion-badge color='primary' class="atom-badge">
          <slot></slot>
        </ion-badge>
        </mock:shadow-root>
        Badge
      </atom-badge>
    `)
  })

  it('should add "ion-color-secondary" class when type prop is secondary', async () => {
    const page = await newSpecPage({
      components: [AtomPaymentBanner],
      html: `<atom-badge type='secondary'>Badge</atom-badge>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-badge type='secondary'>
        <mock:shadow-root>
        <ion-badge color='secondary' class="atom-badge">
          <slot></slot>
        </ion-badge>
        </mock:shadow-root>
        Badge
      </atom-badge>
    `)
  })

  it('should add "ion-color-info" class when type prop is info', async () => {
    const page = await newSpecPage({
      components: [AtomPaymentBanner],
      html: `<atom-badge type='info'>Badge</atom-badge>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-badge type='info'>
        <mock:shadow-root>
        <ion-badge color='info' class="atom-badge">
          <slot></slot>
        </ion-badge>
        </mock:shadow-root>
        Badge
      </atom-badge>
    `)
  })

  it('should add "ion-color-success" class when type prop is success', async () => {
    const page = await newSpecPage({
      components: [AtomPaymentBanner],
      html: `<atom-badge type='success'>Badge</atom-badge>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-badge type='success'>
        <mock:shadow-root>
        <ion-badge color='success' class="atom-badge">
          <slot></slot>
        </ion-badge>
        </mock:shadow-root>
        Badge
      </atom-badge>
    `)
  })

  it('should add "ion-color-warning" class when type prop is warning', async () => {
    const page = await newSpecPage({
      components: [AtomPaymentBanner],
      html: `<atom-badge type='warning'>Badge</atom-badge>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-badge type='warning'>
        <mock:shadow-root>
        <ion-badge color='warning' class="atom-badge">
          <slot></slot>
        </ion-badge>
        </mock:shadow-root>
        Badge
      </atom-badge>
    `)
  })

  it('should add "ion-color-danger" class when type prop is danger', async () => {
    const page = await newSpecPage({
      components: [AtomPaymentBanner],
      html: `<atom-badge type='danger'>Badge</atom-badge>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-badge type='danger'>
        <mock:shadow-root>
        <ion-badge color='danger' class="atom-badge">
          <slot></slot>
        </ion-badge>
        </mock:shadow-root>
        Badge
      </atom-badge>
    `)
  })

  it('should add "ion-color-neutral" class when type prop is neutral', async () => {
    const page = await newSpecPage({
      components: [AtomPaymentBanner],
      html: `<atom-badge type='neutral'>Badge</atom-badge>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-badge type='neutral'>
        <mock:shadow-root>
        <ion-badge color='neutral' class="atom-badge">
          <slot></slot>
        </ion-badge>
        </mock:shadow-root>
        Badge
      </atom-badge>
    `)
  })

  it('should add "ion-color-dark" class when type prop is dark', async () => {
    const page = await newSpecPage({
      components: [AtomPaymentBanner],
      html: `<atom-badge type='dark'>Badge</atom-badge>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-badge type='dark'>
        <mock:shadow-root>
        <ion-badge color='dark' class="atom-badge">
          <slot></slot>
        </ion-badge>
        </mock:shadow-root>
        Badge
      </atom-badge>
    `)
  })
})
