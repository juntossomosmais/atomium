import { newSpecPage } from '@stencil/core/testing'

import { AtomLink } from './link'

describe('atom-link', () => {
  it('should render a span element with secondary color - default mode', async () => {
    const page = await newSpecPage({
      components: [AtomLink],
      html: `<atom-link>styled link</atom-link>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-link>
        <mock:shadow-root>
        <span class="atom-link atom-link--medium" color="secondary">
           <slot></slot>
         </span>
        </mock:shadow-root>
        styled link
      </atom-link>
    `)
  })

  it('should render a span element with primary color', async () => {
    const page = await newSpecPage({
      components: [AtomLink],
      html: `<atom-link color="primary">styled link</atom-link>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-link color="primary">
        <mock:shadow-root>
        <span class="atom-link atom-link--medium" color="primary">
           <slot></slot>
         </span>
        </mock:shadow-root>
        styled link
      </atom-link>
    `)
  })

  it('should render a clickable button element with secondary color ', async () => {
    const page = await newSpecPage({
      components: [AtomLink],
      html: `<atom-link color="secondary" type="button">styled link</atom-link>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-link color="secondary" type="button">
        <mock:shadow-root>
        <button class="atom-link--medium atom-link__button">
          <span class="atom-link" color="secondary">
            <slot></slot>
          </span>
         </button>
        </mock:shadow-root>
        styled link
      </atom-link>
    `)

    const buttonEl = page.root?.shadowRoot?.querySelector('button')
    const clickEventSpy = jest.spyOn(page.rootInstance.click, 'emit')

    buttonEl?.click()

    expect(clickEventSpy).toHaveBeenCalled()
  })

  it('should render a unclicable button but not emit click event when loading', async () => {
    const page = await newSpecPage({
      components: [AtomLink],
      html: `<atom-link color="secondary" type="button" loading>styled link</atom-link>`,
    })

    await page.waitForChanges()

    const buttonEl = page.root?.shadowRoot?.querySelector('button')
    const clickEventSpy = jest.spyOn(page.rootInstance.click, 'emit')

    buttonEl?.click()

    expect(clickEventSpy).not.toHaveBeenCalled()
  })

  it('should render a spam element with small size css class', async () => {
    const page = await newSpecPage({
      components: [AtomLink],
      html: `<atom-link size="small">styled link</atom-link>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-link size="small">
        <mock:shadow-root>
        <span class="atom-link atom-link--small" color="secondary">
           <slot></slot>
         </span>
        </mock:shadow-root>
        styled link
      </atom-link>
    `)
  })
})
