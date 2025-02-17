import { newSpecPage } from '@stencil/core/testing'

import { AtomRichTooltip } from './rich-tooltip'

describe('AtomRichTooltip', () => {
  const createTooltip = (
    id: string,
    action: AtomRichTooltip['action'] = 'hover',
    open = false
  ) => `
      <button id="${id}" aria-describedby="${id}--tooltip">Hover</button>
      <atom-rich-tooltip id="${id}--tooltip" element="${id}" open="${open}" action="${action}" label="Test Title" actiontext="Click me">Tooltip content</atom-rich-tooltip>
    `

  it('should render correctly', async () => {
    const page = await newSpecPage({
      components: [AtomRichTooltip],
      html: createTooltip('test-element'),
    })

    expect(page.root).toEqualHtml(`
      <atom-rich-tooltip id="test-element--tooltip" element="test-element" open="false" action="hover" label="Test Title" actiontext="Click me" role="tooltip">
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

  it('should not display action text when action is hover', async () => {
    const page = await newSpecPage({
      components: [AtomRichTooltip],
      html: createTooltip('test-element', 'hover'),
    })

    expect(page.root?.shadowRoot?.querySelector('.action')).toBeNull()
  })
})
