export enum CatalogItemStatus {
  stock = 'stock',
  no = 'no',
  order = 'order',
}

export interface ICatalogItem {
  id: string
  brand: string
  images: string[]
  price: number
  anotherColors: string[]
  desc: string
  sizes: { id: string, num: number, insoleCm: number }[]
  status: CatalogItemStatus
}