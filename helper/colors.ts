export function brightness(col: string, amt: number): string {
  let usePound = false

  if (col[0] == '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  let r = (num >> 16) + amt

  r = r > 255 ? 255 : r < 0 ? 0 : r

  let b = ((num >> 8) & 0x00ff) + amt

  b = b > 255 ? 255 : b < 0 ? 0 : b

  let g = (num & 0x0000ff) + amt

  g = g > 255 ? 255 : g < 0 ? 0 : g

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export function hexAToRGBA(hex: string) {
  let r: string | number = 0,
    g: string | number = 0,
    b: string | number = 0,
    a: string | number = 1

  if (hex.length == 5) {
    r = '0x' + hex[1] + hex[1]
    g = '0x' + hex[2] + hex[2]
    b = '0x' + hex[3] + hex[3]
    a = '0x' + hex[4] + hex[4]
  } else if (hex.length == 9) {
    r = '0x' + hex[1] + hex[2]
    g = '0x' + hex[3] + hex[4]
    b = '0x' + hex[5] + hex[6]
    a = '0x' + hex[7] + hex[8]
  }

  a = typeof a == 'number' ? a : parseInt(a)

  a = +(a / 255).toFixed(3)

  return 'rgba(' + +r + ',' + +g + ',' + +b + ',' + a + ')'
}
