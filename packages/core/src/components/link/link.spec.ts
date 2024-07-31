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
        <span class="atom-link" color="primary">
           <slot></slot>
         </span>
        </mock:shadow-root>
        styled link
      </atom-link>
    `)
  })

  it('should render a span element with secondary color', async () => {
    const page = await newSpecPage({
      components: [AtomLink],
      html: `<atom-link color="secondary">styled link</atom-link>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-link color="secondary">
        <mock:shadow-root>
        <span class="atom-link" color="secondary">
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
        <button class="atom-link__button">
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

  it('should render a clicable button but not emit click event when loading', async () => {
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
})
