import { newSpecPage } from '@stencil/core/testing'

import { IconProps } from '../../icons'
import { AtomTag } from './tag'

const setup = async (color: AtomTag['type'], icon?: IconProps) => {
  const currentIcon = icon && `icon=${icon}`

  const page = await newSpecPage({
    components: [AtomTag],
    html: `<atom-tag type=${color} ${currentIcon}>Tag</atom-tag>`,
  })

  await page.waitForChanges()

  return page.root?.shadowRoot
}

describe('atom-tag', () => {
  it('should render atom-tag', async () => {
    const tagLabel = 'Tag Test Label'
    const page = await newSpecPage({
      components: [AtomTag],
      html: `<atom-tag type='success'>${tagLabel}</atom-tag>`,
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
    const mockedType: AtomTag['type'] = 'success'
    const atomTag = await setup(mockedType)
    expect(atomTag)
      .toEqualHtml(`<ion-badge class="atom-tag" color=${mockedType}>
    <slot></slot>
  </ion-badge>`)
  })
  it('should render atom-tag danger', async () => {
    const mockedType: AtomTag['type'] = 'danger'
    const atomTag = await setup(mockedType)
    expect(atomTag)
      .toEqualHtml(`<ion-badge class="atom-tag" color=${mockedType}>
    <slot></slot>
  </ion-badge>`)
  })
  it('should render atom-tag warning', async () => {
    const mockedType: AtomTag['type'] = 'warning'
    const atomTag = await setup(mockedType)
    expect(atomTag)
      .toEqualHtml(`<ion-badge class="atom-tag" color=${mockedType}>
    <slot></slot>
  </ion-badge>`)
  })
  it('should render atom-tag dark', async () => {
    const mockedType: AtomTag['type'] = 'dark'
    const atomTag = await setup(mockedType)
    expect(atomTag)
      .toEqualHtml(`<ion-badge class="atom-tag" color=${mockedType}>
    <slot></slot>
  </ion-badge>`)
  })
  it('should render atom-tag light', async () => {
    const mockedType: AtomTag['type'] = 'light'
    const atomTag = await setup(mockedType)
    expect(atomTag)
      .toEqualHtml(`<ion-badge class="atom-tag" color=${mockedType}>
    <slot></slot>
  </ion-badge>`)
  })
  it('should render atom-tag neutral', async () => {
    const mockedType: AtomTag['type'] = 'neutral'
    const atomTag = await setup(mockedType)
    expect(atomTag)
      .toEqualHtml(`<ion-badge class="atom-tag" color=${mockedType}>
    <slot></slot>
  </ion-badge>`)
  })
})
