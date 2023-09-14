import { newSpecPage } from '@stencil/core/testing'

import { IconProps } from '../../icons'
import { AtomTag } from './tag'

const setup = async (color: AtomTag['color'], icon?: IconProps) => {
  const currentIcon = icon && `icon=${icon}`

  const page = await newSpecPage({
    components: [AtomTag],
    html: `<atom-tag color=${color} ${currentIcon}>Tag</atom-tag>`,
  })

  await page.waitForChanges()

  return page.root?.shadowRoot
}

describe('atom-tag', () => {
  it('should render atom-tag', async () => {
    const tagLabel = 'Tag Test Label'
    const page = await newSpecPage({
      components: [AtomTag],
      html: `<atom-tag color='success'>${tagLabel}</atom-tag>`,
    })

    await page.waitForChanges()

    const atomTag = page.root?.nodeName.toLocaleLowerCase()
    const atomTagLabel = page.root?.innerHTML
    expect(atomTag).toBe('atom-tag')
    expect(atomTagLabel).toBe(tagLabel)
  })

  it('should render atom-tag with icon', async () => {
    const mockedIcon = 'heart'
    const atomTag = await setup('success', mockedIcon)
    expect(atomTag).toEqualHtml(`<ion-badge class="atom-tag" color="success">
    <atom-icon class="atom-icon" icon=${mockedIcon}></atom-icon>
    <slot></slot>
  </ion-badge>`)
  })

  it('should render atom-tag success', async () => {
    const mockedColor: AtomTag['color'] = 'success'
    const atomTag = await setup(mockedColor)
    const colorExists = atomTag?.innerHTML
      .split(' ')
      .find((el) => el === `color="${mockedColor}"`)
    expect(colorExists).toBeTruthy()
  })

  it('should render atom-tag danger', async () => {
    const mockedColor: AtomTag['color'] = 'danger'
    const atomTag = await setup(mockedColor)
    const colorExists = atomTag?.innerHTML
      .split(' ')
      .find((el) => el === `color="${mockedColor}"`)
    expect(colorExists).toBeTruthy()
  })

  it('should render atom-tag warning', async () => {
    const mockedColor: AtomTag['color'] = 'warning'
    const atomTag = await setup(mockedColor)
    const colorExists = atomTag?.innerHTML
      .split(' ')
      .find((el) => el === `color="${mockedColor}"`)
    expect(colorExists).toBeTruthy()
  })

  it('should render atom-tag dark', async () => {
    const mockedColor: AtomTag['color'] = 'dark'
    const atomTag = await setup(mockedColor)
    const colorExists = atomTag?.innerHTML
      .split(' ')
      .find((el) => el === `color="${mockedColor}"`)
    expect(colorExists).toBeTruthy()
  })

  it('should render atom-tag light', async () => {
    const mockedColor: AtomTag['color'] = 'light'
    const atomTag = await setup(mockedColor)
    const colorExists = atomTag?.innerHTML
      .split(' ')
      .find((el) => el === `color="${mockedColor}"`)
    expect(colorExists).toBeTruthy()
  })

  it('should render atom-tag neutral', async () => {
    const mockedColor: AtomTag['color'] = 'neutral'
    const atomTag = await setup(mockedColor)
    const colorExists = atomTag?.innerHTML
      .split(' ')
      .find((el) => el === `color="${mockedColor}"`)
    expect(colorExists).toBeTruthy()
  })
})
