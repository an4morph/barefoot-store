export function getRandomElements(arr: any[], N: number = 1) {
  if (N === 1) return arr[Math.floor(Math.random() * arr.length)]

  const shuffledArray = [...arr].sort(() => Math.random() - 0.5)
  return shuffledArray.slice(0, N)
}

export function idDecorate(objectsArray: object[], prefix: string = '') {
  return objectsArray.map((obj, index) => ({
    ...obj,
    id: `${prefix}${index + 1}`
  }))
}

export function generateSizes(from: number, to: number, startCm: number) {
  const resultArray = []
  let insoleCm = startCm

  for (let num = from; num <= to; num++) {
    resultArray.push({ num, insoleCm, inStock: Math.random() >= 0.2 })
    insoleCm += 0.5
  }

  return resultArray
}

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomText(maxLength: number = 500) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  let result = '';
  
  for (let i = 0; i < maxLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
  }
  
  return result;
}

export const images = [
  'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=3098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

export const barefootBrands = [
  "Босоног",
  "Свободные Ступни",
  "Природный Шаг",
  "Земля Тропы",
  "Легкий След",
  "BareFeet",
  "FreeToes",
  "Nature Path",
  "Earth Stride",
  "Wild Soles",
  "Barefoot Bliss",
  "Freedom Steps",
  "Natural Walk",
  "Grounded Feet",
  "Pure Steps"
]