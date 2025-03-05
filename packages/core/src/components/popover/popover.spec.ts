import { newSpecPage } from '@stencil/core/testing'

import { AtomPopover } from './popover'

describe('AtomPopover', () => {
  const createTooltip = (
    id: string,
    action: AtomPopover['action'] = 'hover',
    open = false
  ) => `
      <button id="${id}" aria-describedby="${id}--tooltip">Hover</button>
      <atom-popover id="${id}--tooltip" element="${id}" open="${open}" action="${action}" label="Test Title" actiontext="Click me">Tooltip content</atom-popover>
    `

  it('should render correctly', async () => {
    const page = await newSpecPage({
      components: [AtomPopover],
      html: createTooltip('test-element'),
    })

    expect(page.root).toEqualHtml(`
      <atom-popover id="test-element--tooltip" element="test-element" open="false" action="hover" label="Test Title" actiontext="Click me" role="tooltip">
        <mock:shadow-root>
          <atom-tooltip element="test-element" placement="top" action="hover">
            <div>
              <h1 class="title">Test Title</h1>
              <p class="text">
                <slot></slot>
              </p>
            </div>
          </atom-tooltip>
        </mock:shadow-root>
        Tooltip content
      </atom-popover>
    `)
  })

  it('should not display action text when action is hover', async () => {
    const page = await newSpecPage({
      components: [AtomPopover],
      html: createTooltip('test-element', 'hover'),
    })

    expect(page.root?.shadowRoot?.querySelector('.action')).toBeNull()
  })
})
