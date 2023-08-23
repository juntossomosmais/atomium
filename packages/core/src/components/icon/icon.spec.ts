import { newSpecPage } from '@stencil/core/testing'

import { AtomIcon } from './icon'

const URL_MOCK = 'https://atomium.juntossomosmais.com.br/icons'

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
      <atom-icon aria-hidden="true" color="primary" icon="heart" size="large">
        <mock:shadow-root>
          <ion-icon color="primary" icon="${URL_MOCK}/heart.svg" size="large"></ion-icon>
        </mock:shadow-root>
      </atom-icon>
    `)
  })
})
