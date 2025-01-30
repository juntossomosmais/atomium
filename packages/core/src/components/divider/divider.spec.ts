import { newSpecPage } from '@stencil/core/testing'

import { AtomDivider } from './divider'

describe('atom-divider', () => {
  it('should render with default prop horizontal', async () => {
    const page = await newSpecPage({
      components: [AtomDivider],
      html: `<atom-divider type='horizontal'/>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-divider type='horizontal'>
        <mock:shadow-root>
          <div aria-hidden="" class="atom-divider horizontal"></div>
        </mock:shadow-root>
      </atom-divider>
    `)
  })
})

it('should render with prop vertical', async () => {
  const page = await newSpecPage({
    components: [AtomDivider],
    html: `<atom-divider type='vertical'/>`,
  })

  await page.waitForChanges()

  expect(page.root).toEqualHtml(`
      <atom-divider type='vertical'>
        <mock:shadow-root>
          <div aria-hidden="" class="atom-divider vertical"></div>
        </mock:shadow-root>
      </atom-divider>
  `)
})
