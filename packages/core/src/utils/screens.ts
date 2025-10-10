export const isMobile = () => {
  return window.matchMedia('(max-width: 768px)').matches
}

export const isMaxTablet = () => {
  return window.matchMedia('(max-width: 991px)').matches
}
