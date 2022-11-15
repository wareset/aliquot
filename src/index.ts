function aliquot(number: number, div: number, sign?: number): number {
  let s = 1
  if (div < 0) div = -div
  if (number < 0) s = -1, number = -number
  const q = (number += div) % div; number -= q + div
  const n = s > 0 ? q >= div / 2 : q > div / 2
  if (n) number += div
  if (sign) {
    number += div * sign * s
    if (!q || s > 0 === (sign < 0 && !n || sign > 0 && n)) {
      number -= (sign > 0 ? div : -div) * s
    }
  }
  
  return number && number * s
}

export default aliquot
