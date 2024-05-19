export function getRandomElements(arr: any[], n: number) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, n)
}

export function idDecorate(objectsArray: object[], prefix: string = '') {
  return objectsArray.map((obj, index) => ({
    ...obj,
    id: `${prefix}${index + 1}`
  }))
}

export function generateSizes(from: number, to: number, startCm: number) {
  const resultArray = []
  let currentCm = startCm

  for (let num = from; num <= to; num++) {
    resultArray.push({ num, cm: currentCm, inStock: Math.random() >= 0.5 })
    currentCm += 0.5
  }

  return resultArray
}