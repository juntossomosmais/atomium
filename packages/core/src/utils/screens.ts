// `matchMedia` is unavailable during server-side hydration (Node),
// so fall back to the desktop variant there.
const matchesMedia = (query: string) => {
  if (typeof globalThis !== 'undefined' && 'matchMedia' in globalThis) {
    return globalThis.matchMedia(query).matches
  }

  return false
}

export const isMobile = () => matchesMedia('(max-width: 768px)')

export const isMaxTablet = () => matchesMedia('(max-width: 991px)')
