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
