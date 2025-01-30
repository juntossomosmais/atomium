import { newSpecPage } from '@stencil/core/testing'

import { AtomDivider } from './divider'

describe('atom-divider', () => {
  it('should render with default prop down', async () => {
    const page = await newSpecPage({
      components: [AtomDivider],
      html: `<atom-divider type='down'/>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-divider type='down'>
        <mock:shadow-root>
          <div class="atom-divider" data-type="down"></div>
        </mock:shadow-root>
      </atom-divider>
    `)
  })
})

it('should render with prop up', async () => {
  const page = await newSpecPage({
    components: [AtomDivider],
    html: `<atom-divider type='up'/>`,
  })

  await page.waitForChanges()

  expect(page.root).toEqualHtml(`
      <atom-divider type='up'>
        <mock:shadow-root>
          <div class="atom-divider" data-type="up"></div>
        </mock:shadow-root>
      </atom-divider>
  `)
})
