import { newSpecPage } from '@stencil/core/testing'

import { AtomContainer } from './container'

describe('atom-container', () => {
  it('should render an atom-container element', async () => {
    const page = await newSpecPage({
      components: [AtomContainer],
      html: `<atom-container>Content</atom-container>`,
    })

    await page.waitForChanges()

    expect(page?.root).toEqualHtml(`
      <atom-container class="has-padding">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        Content
      </atom-container>
    `)
  })

  it('should render an atom-container element without padding', async () => {
    const page = await newSpecPage({
      components: [AtomContainer],
      html: `<atom-container has-padding="false">Content</atom-container>`,
    })

    await page.waitForChanges()

    expect(page?.root).toEqualHtml(`
      <atom-container has-padding="false">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
        Content
      </atom-container>
    `)
  })
})
