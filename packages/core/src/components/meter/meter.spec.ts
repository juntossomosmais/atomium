import { newSpecPage } from '@stencil/core/testing'

import * as screens from '../../utils/screens'

import { AtomMeter } from './meter'

describe('atom-meter', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [AtomMeter],
      html: `<atom-meter
        type="neutral"
        size="large"
        title=":fialho-dino:"
        min=1
        max=6
        actual=4
      ></atom-meter>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-meter type="neutral" size="large" actual="4" max="6" min="1" title=":fialho-dino:">
        <mock:shadow-root>
          <div class="container-text">
            <h1 class="title">
              :fialho-dino:
            </h1>
            <slot></slot>
          </div>
          <div class="atom-meter is-large">
            <div class="within is-neutral" style="width: 60%;"></div>
          </div>
        </mock:shadow-root>
      </atom-meter>
    `)
  })

  it('should render with centerTitle prop', async () => {
    const page = await newSpecPage({
      components: [AtomMeter],
      html: `<atom-meter has-center-title="true" title="Centered Title" min="1" max="6" actual="4"></atom-meter>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-meter has-center-title="true" title="Centered Title" min="1" max="6" actual="4">
        <mock:shadow-root>
          <div class="container-text has-center-title">
            <h1 class="title">Centered Title</h1>
          </div>
          <div class="atom-meter is-large">
            <div class="within is-neutral" style="width: 60%;"></div>
          </div>
        </mock:shadow-root>
      </atom-meter>
    `)
  })

  it('should render with size small prop', async () => {
    const page = await newSpecPage({
      components: [AtomMeter],
      html: `<atom-meter title=":wessel-quase-coringa:" min="1" max="6" actual="4" size="small"></atom-meter>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-meter title=":wessel-quase-coringa:" min="1" max="6" actual="4" size="small">
        <mock:shadow-root>
          <div class="container-text">
            <h1 class="title">:wessel-quase-coringa:</h1>
            <slot></slot>
          </div>
          <div class="atom-meter is-small">
            <div class="within is-neutral" style="width: 60%;"></div>
          </div>
        </mock:shadow-root>
      </atom-meter>
    `)
  })

  it('should render with children', async () => {
    const page = await newSpecPage({
      components: [AtomMeter],
      html: `<atom-meter title="test" min="1" max="6" actual="4">Children</atom-meter>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-meter title="test" min="1" max="6" actual="4">
        <mock:shadow-root>
          <div class="container-text">
            <h1 class="title">test</h1>
            <slot></slot>
          </div>
          <div class="atom-meter is-large">
            <div class="within is-neutral" style="width: 60%;"></div>
          </div>
        </mock:shadow-root>
        Children
      </atom-meter>
    `)
  })

  it('should render mobile children', async () => {
    jest.spyOn(screens, 'isMobile').mockReturnValue(true)

    const page = await newSpecPage({
      components: [AtomMeter],
      html: `<atom-meter title="test" min="1" max="6" actual="4">Children</atom-meter>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-meter title="test" min="1" max="6" actual="4">
        <mock:shadow-root>
          <div class="container-text">
            <h1 class="title">test</h1>
          </div>
          <div class="atom-meter is-large">
            <div class="within is-neutral" style="width: 60%;"></div>
          </div>
          <div class="container-text has-gap-top">
            <slot></slot>
          </div>
        </mock:shadow-root>
        Children
      </atom-meter>
    `)
  })
})
