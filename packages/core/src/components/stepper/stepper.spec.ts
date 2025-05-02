import { newSpecPage } from '@stencil/core/testing'

import * as screens from '../../utils/screens'

import { AtomStepper } from './stepper'

describe('atom-stepper', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [AtomStepper],
      html: `<atom-stepper steps='[{"title":"Step 1","completed":false},{"title":"Step 2","completed":false}]' active-step="0" role="stepper"></atom-stepper>`,
    })

    expect(page.root).toEqualHtml(`
      <atom-stepper active-step="0" role="stepper" steps='[{"title":"Step 1","completed":false},{"title":"Step 2","completed":false}]'>
        <mock:shadow-root>
          <ul class="atom-stepper">
            <li class="step active">
              <div class="number">1</div>
              <span class="title">Step 1</span>
            </li>
            <li class="step disabled">
              <div class="number">2</div>
              <span class="title">Step 2</span>
            </li>
          </ul>
        </mock:shadow-root>
      </atom-stepper>
    `)
  })
  it('should render completed steps', async () => {
    const page = await newSpecPage({
      components: [AtomStepper],
      html: `<atom-stepper steps='[{"title":"Step 1","completed":true},{"title":"Step 2","completed":false}]' active-step="1" role="stepper"></atom-stepper>`,
    })

    expect(page.root).toEqualHtml(`
      <atom-stepper active-step="1" role="stepper" steps='[{"title":"Step 1","completed":true},{"title":"Step 2","completed":false}]'>
        <mock:shadow-root>
          <ul class="atom-stepper">
            <li class="completed last step">
              <div class="number">
                <atom-icon icon="check" color="white" size="16"></atom-icon>
              </div>
              <span class="title">Step 1</span>
            </li>
            <li class="step active">
              <div class="number">2</div>
              <span class="title">Step 2</span>
            </li>
          </ul>
        </mock:shadow-root>
      </atom-stepper>
    `)
  })

  it('should disable unrendered steps', async () => {
    const page = await newSpecPage({
      components: [AtomStepper],
      html: `<atom-stepper steps='[{"title":"Step 1","completed":false},{"title":"Step 2","completed":false}]' active-step="0" role="stepper" disabled-unrendered-step="true"></atom-stepper>`,
    })

    expect(page.root).toEqualHtml(`
      <atom-stepper active-step="0" role="stepper" steps='[{"title":"Step 1","completed":false},{"title":"Step 2","completed":false}]' disabled-unrendered-step="true">
        <mock:shadow-root>
          <ul class="atom-stepper">
            <li class="step active">
              <div class="number">1</div>
              <span class="title">Step 1</span>
            </li>
            <li class="step disabled">
              <div class="number">2</div>
              <span class="title">Step 2</span>
            </li>
          </ul>
        </mock:shadow-root>
      </atom-stepper>
    `)
  })
})

it('should render mobile view', async () => {
  jest.spyOn(screens, 'isMaxTablet').mockReturnValue(true)

  const page = await newSpecPage({
    components: [AtomStepper],
    html: `<atom-stepper steps='[{"title":"Step 1","completed":false}]' active-step="0" role="stepper" step-title="Mobile Step"></atom-stepper>`,
  })

  expect(page.root).toEqualHtml(`
    <atom-stepper active-step="0" role="stepper" steps='[{"title":"Step 1","completed":false}]' step-title="Mobile Step">
      <mock:shadow-root>
        <div>
          <div class="atom-stepper-mobile">
            <div class="number">1</div>
            <div>
              <div>Mobile Step</div>
              <span class="title">Step 1</span>
            </div>
          </div>
        </div>
      </mock:shadow-root>
    </atom-stepper>
  `)
})
