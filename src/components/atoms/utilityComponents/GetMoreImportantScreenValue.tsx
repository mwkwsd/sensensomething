export function getMoreImportantScreenValue(
  height: number,
  width: number
): 'width' | 'height' {
  const sixteenByNineRatio = 16 / 9
  return width / height > sixteenByNineRatio ? 'height' : 'width'
}
