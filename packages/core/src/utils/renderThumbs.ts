export function renderThumbs(
  current: number,
  total: number,
  urls: Array<string>,
  videoIcons: boolean
): string {
  const thumbs = []

  if (!urls.length) return ''

  for (let i = 0; i < total; i++) {
    const span = document.createElement('span')
    const img = document.createElement('img')

    img.src = urls[i]
    img.setAttribute('alt', `Slide ${i + 1}`)
    img.setAttribute('part', 'thumb-img')

    if (urls[i].includes('ytimg') && videoIcons) {
      const youtubeIcon = document.createElement('atom-icon')

      youtubeIcon.classList.add('youtube-icon')
      youtubeIcon.setAttribute('icon', 'youtube')
      youtubeIcon.setAttribute('part', 'thumb-youtube-icon')

      span.appendChild(youtubeIcon)
    }

    span.appendChild(img)

    span.classList.add('swiper-pagination-thumb', 'swiper-pagination-bullet')
    span.setAttribute('part', 'thumb')
    thumbs.push(span)
  }

  const activeThumb = thumbs[current - 1]

  activeThumb.classList.add(
    'swiper-pagination-thumb-active',
    'swiper-pagination-bullet-active'
  )
  activeThumb.setAttribute('part', 'thumb thumb-active')

  return thumbs.map((thumb) => thumb.outerHTML).join('')
}
