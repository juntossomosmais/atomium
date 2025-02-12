import { newSpecPage } from '@stencil/core/testing'

import { AtomRichTooltip } from './rich-tooltip'

describe('AtomRichTooltip', () => {
  it('should render correctly', async () => {
    const page = await newSpecPage({
      components: [AtomRichTooltip],
      html: `<atom-rich-tooltip element="test-element" title="Test Title" actiontext="Click me">Tooltip content</atom-rich-tooltip>`,
    })

    expect(page.root).toEqualHtml(`
      <atom-rich-tooltip element="test-element" title="Test Title" actiontext="Click me" role="tooltip">
        <mock:shadow-root>
          <atom-tooltip element="test-element" placement="top" action="hover" class="rich-tooltip">
            <div class="rich-tooltip__content">
              <h1 class="title">Test Title</h1>
              <p class="text">
                <slot></slot>
              </p>
            </div>
          </atom-tooltip>
        </mock:shadow-root>
        Tooltip content
      </atom-rich-tooltip>
    `)
  })

  it('should display action text when action is click', async () => {
    const page = await newSpecPage({
      components: [AtomRichTooltip],
      html: `<atom-rich-tooltip element="test-element" title="Test Title" action="click" actiontext="Click me">Tooltip content</atom-rich-tooltip>`,
    })

    expect(page.root?.shadowRoot?.querySelector('.action')).not.toBeNull()
    expect(page.root?.shadowRoot?.querySelector('.action')?.textContent).toBe(
      'Click me'
    )
  })

  it('should not display action text when action is hover', async () => {
    const page = await newSpecPage({
      components: [AtomRichTooltip],
      html: `<atom-rich-tooltip element="test-element" title="Test Title" action="hover" actiontext="Click me">Tooltip content</atom-rich-tooltip>`,
    })

    expect(page.root?.shadowRoot?.querySelector('.action')).toBeNull()
  })
})
