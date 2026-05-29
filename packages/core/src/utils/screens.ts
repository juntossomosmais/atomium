export const isMobile = () => {
  return globalThis.matchMedia('(max-width: 768px)').matches
}

export const isMaxTablet = () => {
  return globalThis.matchMedia('(max-width: 991px)').matches
}
