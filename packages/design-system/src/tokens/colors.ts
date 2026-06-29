export const colors = {
  black: '#111111',
  offWhite: '#F7F6F3',
  lightGray: '#E7E7E5',
  olive: '#5A5F43',
  terracotta: '#BC6F4E',
  white: '#FFFFFF',
} as const

export type ColorToken = keyof typeof colors
