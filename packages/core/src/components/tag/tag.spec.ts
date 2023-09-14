import { newSpecPage } from '@stencil/core/testing'

import { IconProps } from '../../icons'
import { AtomTag } from './tag'

const setup = async (
  color?: AtomTag['color'],
  icon?: IconProps,
  backgroundColor?: string,
  textColor?: string
) => {
  const currentIcon = icon && `icon=${icon}`
  const customBackgroundColor =
    backgroundColor && `custom-background-color=${backgroundColor}`
  const customTextColor = textColor && `custom-text-color=${textColor}`

  const page = await newSpecPage({
    components: [AtomTag],
    html: `<atom-tag color=${color} ${currentIcon} ${customTextColor} ${customBackgroundColor}>Tag</atom-tag>`,
  })

  await page.waitForChanges()

  return page.root?.shadowRoot
}

describe('atom-tag', () => {
  it.only('should render atom-tag with success color', async () => {
    const tagLabel = 'Tag Test Label'
    const mockedColor = 'success'
    const page = await newSpecPage({
      components: [AtomTag],
      html: `<atom-tag color="${mockedColor}">${tagLabel}</atom-tag>`,
    })

    await page.waitForChanges()

    const atomTag = page.root
    const colorExists = atomTag?.shadowRoot?.innerHTML
      .split(' ')
      .find((el) => el === `color="${mockedColor}"`)
    expect(colorExists).toBeTruthy()
    const atomTagLabel = page.root?.innerHTML
    expect(atomTag?.nodeName.toLocaleLowerCase()).toBe('atom-tag')
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

  it('should render atom-tag with custom colors', async () => {
    const mockedBackgroundColor = '#a006fa'
    const mockedTextColor = '#00ff95'

    const customColors = `background-color: ${mockedBackgroundColor}; color: ${mockedTextColor};`

    const atomTag = await setup(
      undefined,
      undefined,
      mockedBackgroundColor,
      mockedTextColor
    )

    const customColorsExists = atomTag?.innerHTML.includes(
      `style="${customColors}"`
    )
    expect(customColorsExists).toBeTruthy()
  })
})
