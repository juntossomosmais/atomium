import { newSpecPage } from '@stencil/core/testing'

import { AtomBadge } from './badge'

describe('atom-badge', () => {
  it('should render an ion-badge element correctly', async () => {
    const page = await newSpecPage({
      components: [AtomBadge],
      html: `<atom-badge type='primary'>Badge</atom-badge>`,
    })

    await page.waitForChanges()

    const badgeEl = page.root?.shadowRoot?.querySelector('ion-badge')

    expect(badgeEl).toBeTruthy()
  })

  it('should render badge element correctly', async () => {
    const page = await newSpecPage({
      components: [AtomBadge],
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
})
