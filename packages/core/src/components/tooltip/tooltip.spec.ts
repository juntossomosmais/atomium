import { newSpecPage } from '@stencil/core/testing'

import { AtomTooltip } from './tooltip'

describe('AtomTooltip', () => {
  const createTooltip = (
    id: string,
    action: AtomTooltip['action'] = 'hover',
    open = false
  ) => `
      <button id="${id}" aria-describedby="${id}--tooltip">Hover</button>
      <atom-tooltip id="${id}--tooltip" element="${id}" open="${open}" action="${action}" part="tooltip">John Doe</atom-tooltip>
    `

  const hoverTooltip = createTooltip('hover')

  it.each(['mouseenter', 'focus'])(
    'should open tooltip when %s target element',
    async (event) => {
      const page = await newSpecPage({
        components: [AtomTooltip],
        html: hoverTooltip,
      })

      expect(page.root).toEqualHtml(`
        <atom-tooltip action="hover" data-popper-placement="top" data-popper-reference-hidden element="hover" id="hover--tooltip" open="false" part="tooltip" style="z-index: -1; position: absolute; left: 0; top: auto; margin: 0; right: auto; bottom: 0; transform: translate(0px, 0px);">
          <mock:shadow-root>
            <div class="atom-tooltip" data-hide data-placement="bottom" part="tooltip">
              <div class="atom-tooltip__content">
                <slot></slot>
              </div>
              <div aria-hidden="" class="atom-tooltip__arrow" style="position: absolute;"></div>
            </div>
          </mock:shadow-root>
          John Doe
        </atom-tooltip>
      `)

      const element = page.body.querySelector('#hover')

      element?.dispatchEvent(new Event(event))

      await page.waitForChanges()

      expect(
        page.root?.shadowRoot?.querySelector('.atom-tooltip')
      ).toHaveAttribute('data-show')
    }
  )

  it.each(['mouseleave', 'blur'])(
    'should close tooltip when %s from target element',
    async (event) => {
      const page = await newSpecPage({
        components: [AtomTooltip],
        html: hoverTooltip,
      })

      const element = page.body.querySelector('#hover')

      element?.dispatchEvent(new Event('mouseenter'))

      await page.waitForChanges()

      element?.dispatchEvent(new Event(event))

      await page.waitForChanges()

      expect(
        page.root?.shadowRoot?.querySelector('.atom-tooltip')
      ).toHaveAttribute('data-hide')
    }
  )

  it('should attach events correctly when have two instances for component', async () => {
    const elements = [createTooltip('hover-1'), createTooltip('hover-2')]

    const page = await newSpecPage({
      components: [AtomTooltip],
      html: elements.join('\n'),
    })

    const element = page.body.querySelector('#hover-1')

    element?.dispatchEvent(new Event('mouseenter'))

    await page.waitForChanges()

    expect(
      page.body
        ?.querySelector('#hover-1--tooltip')
        ?.shadowRoot?.querySelector('.atom-tooltip')
    ).toHaveAttribute('data-show')
    expect(
      page.body
        ?.querySelector('#hover-2--tooltip')
        ?.shadowRoot?.querySelector('.atom-tooltip')
    ).toHaveAttribute('data-hide')
  })

  it('should untach events correctly when have two instances for component', async () => {
    const elements = [createTooltip('hover-1'), createTooltip('hover-2')]

    const page = await newSpecPage({
      components: [AtomTooltip],
      html: elements.join('\n'),
    })

    const element = page.body.querySelector('#hover-1')

    element?.dispatchEvent(new Event('mouseenter'))

    await page.waitForChanges()

    expect(
      page.body
        ?.querySelector('#hover-1--tooltip')
        ?.shadowRoot?.querySelector('.atom-tooltip')
    ).toHaveAttribute('data-show')

    const tooltipToBeRemoved = page.body?.querySelector('#hover-2--tooltip')

    tooltipToBeRemoved?.remove()

    await page.waitForChanges()

    expect(page.body?.querySelector('#hover-2--tooltip')).toBeNull()

    element?.dispatchEvent(new Event('mouseleave'))

    await page.waitForChanges()

    expect(
      page.body
        ?.querySelector('#hover-1--tooltip')
        ?.shadowRoot?.querySelector('.atom-tooltip')
    ).not.toHaveAttribute('data-show')

    expect(
      page.body
        ?.querySelector('#hover-1--tooltip')
        ?.shadowRoot?.querySelector('.atom-tooltip')
    ).toHaveAttribute('data-hide')
  })

  it('should untach events correctly when changes action', async () => {
    const page = await newSpecPage({
      components: [AtomTooltip],
      html: hoverTooltip,
    })

    const element = page.body.querySelector('#hover')

    page.body?.querySelector('#hover--tooltip')?.setAttribute('action', 'click')

    await page.waitForChanges()

    expect(
      page.body
        ?.querySelector('#hover--tooltip')
        ?.shadowRoot?.querySelector('.atom-tooltip')
    ).toHaveAttribute('data-hide')

    element?.dispatchEvent(new Event('click'))

    await page.waitForChanges()

    expect(
      page.body
        ?.querySelector('#hover--tooltip')
        ?.shadowRoot?.querySelector('.atom-tooltip')
    ).toHaveAttribute('data-show')

    element?.dispatchEvent(new Event('mouseleave'))

    await page.waitForChanges()

    expect(
      page.body
        ?.querySelector('#hover--tooltip')
        ?.shadowRoot?.querySelector('.atom-tooltip')
    ).toHaveAttribute('data-show')
  })

  it('should control open state', async () => {
    const page = await newSpecPage({
      components: [AtomTooltip],
      html: createTooltip('hover', 'hover', true),
    })

    expect(
      page.body
        ?.querySelector('#hover--tooltip')
        ?.shadowRoot?.querySelector('.atom-tooltip')
    ).toHaveAttribute('data-show')
  })
})
