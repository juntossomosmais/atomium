import { newSpecPage } from '@stencil/core/testing'

import { AtomIcon, CDN_URL } from './icon'

describe('atom-icon', () => {
  it('should render ion-icon element', async () => {
    const page = await newSpecPage({
      components: [AtomIcon],
      html: `<atom-icon icon="heart" color="primary" size="large"></atom-icon>`,
    })

    if (!page?.root?.shadowRoot) {
      throw new Error('page.root is undefined')
    }

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-icon color="primary" icon="heart" size="large">
        <mock:shadow-root>
          <ion-icon color="primary" icon="${CDN_URL}/heart.svg" size="large"></ion-icon>
        </mock:shadow-root>
      </atom-icon>
    `)
  })
})
