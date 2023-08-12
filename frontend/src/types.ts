export enum Color {
  'Red',
  'Green',
  'Blue',
  'Yellow',
  'Black',
  'White',
  'Grey',
}

export type Category = {
  id: number
  name: string
  mainCategory: Category | null
}

export type Brick = {
  id: number
  name: string
  description: string
  price: number
  color: string
  quantity: number
  category: Category
  images: string[]
  variations: Brick[]
}

export type CartItem = {
  item: Brick
  amount: number
}
