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
  description?: string
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

export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
}

export type Order = {
  id: number
  firstName: string
  lastName: string
  email: string
  street: string
  houseNumber: string
  zipCode: string
  city: string
  billingFirstName: string
  billingLastName: string
  billingStreet: string
  billingHouseNumber: string
  billingZipCode: string
  billingCity: string
  shippingMethod: string
  shippingPrice: number
  total: number
  items: string[]
  cardNumber: string
  cardExpirationMonth: number
  cardExpirationYear: number
  cardSecurityCode: string
}
