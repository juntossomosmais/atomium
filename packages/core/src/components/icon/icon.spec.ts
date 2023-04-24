import { newSpecPage } from '@stencil/core/testing'

import { AtoIcon, CDN_URL } from './icon'

describe('ato-icon', () => {
  it('should render ion-icon element', async () => {
    const page = await newSpecPage({
      components: [AtoIcon],
      html: `<ato-icon icon="heart" color="primary" size="large"></ato-icon>`,
    })

    if (!page?.root?.shadowRoot) {
      throw new Error('page.root is undefined')
    }

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ato-icon color="primary" icon="heart" size="large">
        <mock:shadow-root>
          <ion-icon color="primary" icon="${CDN_URL}/heart.svg" size="large"></ion-icon>
        </mock:shadow-root>
      </ato-icon>
    `)
  })
})
