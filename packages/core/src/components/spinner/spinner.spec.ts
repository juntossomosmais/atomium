import { newSpecPage } from '@stencil/core/testing'

import { AtomSpinner } from './spinner'

describe('atom-spinner', () => {
  it('renders correctly with default properties', async () => {
    const page = await newSpecPage({
      components: [AtomSpinner],
      html: `<atom-spinner></atom-spinner>`,
    })

    expect(page.root).toEqualHtml(`
      <atom-spinner>
        <mock:shadow-root>
          <div class='container'>
            <div class="atom-spinner__top-border" data-type="primary" style="--size: 40px;"></div>
            <div class="atom-spinner" data-type="primary" style="--size: 40px;"></div>
          </div>
        </mock:shadow-root>
      </atom-spinner>
    `)
  })

  it('renders correctly with custom size', async () => {
    const page = await newSpecPage({
      components: [AtomSpinner],
      html: `<atom-spinner size="50"></atom-spinner>`,
    })

    expect(page.root).toEqualHtml(`
      <atom-spinner size="50">
        <mock:shadow-root>
          <div class='container'>
            <div class="atom-spinner__top-border" data-type="primary" style="--size: 50px;"></div>
            <div class="atom-spinner" data-type="primary" style="--size: 50px;"></div>
          </div>
        </mock:shadow-root>
      </atom-spinner>
    `)
  })

  it('renders correctly with secondary type', async () => {
    const page = await newSpecPage({
      components: [AtomSpinner],
      html: `<atom-spinner type="secondary"></atom-spinner>`,
    })

    expect(page.root).toEqualHtml(`
      <atom-spinner type="secondary">
        <mock:shadow-root>
          <div class='container'>
            <div class="atom-spinner__top-border" data-type="secondary" style="--size: 40px;"></div>
            <div class="atom-spinner" data-type="secondary" style="--size: 40px;"></div>
          </div>
        </mock:shadow-root>
      </atom-spinner>
    `)
  })

  it('renders correctly with dark type', async () => {
    const page = await newSpecPage({
      components: [AtomSpinner],
      html: `<atom-spinner type="dark"></atom-spinner>`,
    })

    expect(page.root).toEqualHtml(`
      <atom-spinner type="dark">
        <mock:shadow-root>
          <div class='container'>
            <div class="atom-spinner__top-border" data-type="dark" style="--size: 40px;"></div>
            <div class="atom-spinner" data-type="dark" style="--size: 40px;"></div>
          </div>
        </mock:shadow-root>
      </atom-spinner>
    `)
  })
})
