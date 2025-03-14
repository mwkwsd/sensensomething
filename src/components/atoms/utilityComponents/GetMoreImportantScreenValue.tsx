const SIXTEEN_BY_NINE_RATIO = 16 / 9

export function getMoreImportantScreenValue(
  height: number,
  width: number
): 'width' | 'height' {
  return width / height > SIXTEEN_BY_NINE_RATIO ? 'height' : 'width'
}
