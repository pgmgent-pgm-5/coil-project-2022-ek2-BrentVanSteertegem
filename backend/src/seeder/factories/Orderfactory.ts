import Factory from './Factory'
import { appDataSource } from '../Seed'
import { CreateOrderInput } from '../../order/dto/create-order.input'
import { Order } from '../../order/entities/order.entity'
import { ShippingMethod } from '../../shippingMethods.enum'
import { faker } from '@faker-js/faker'

class OrderFactory extends Factory {
  orders: CreateOrderInput[]

  constructor() {
    super()
    this.orders = []
  }

  // make one record
  async make() {
    await this.makeMany()
  }

  // make many records
  async makeMany() {
    this.orders = await this.generateOrders(248)
    this.orders.forEach(async (order) => {
      const record = await this.insert(order)
      this.inserted.push(record)
    })
  }

  generateOrders = async (amount: number) => {
    const orders = []
    const brickRepository = appDataSource.getRepository('Brick')
    const bricks = await brickRepository.find()
    const shippingMethods = Object.values(ShippingMethod)

    for (let i = 0; i < amount; i++) {
      const firstName = faker.person.firstName()
      const lastName = faker.person.lastName()
      const shippingMethod =
        shippingMethods[Math.floor(Math.random() * shippingMethods.length)]
      const shippingPrice =
        shippingMethod === ShippingMethod.PICKUP
          ? 3.99
          : shippingMethod === ShippingMethod.STANDARD
          ? 4.99
          : 5.99

      let totalPrice = shippingPrice

      const amountOfCartItems = Math.floor(Math.random() * 6) + 1
      const cartItems = []
      const addedBrickIds = []
      for (let i = 0; i < amountOfCartItems; i++) {
        let brick = bricks[Math.floor(Math.random() * bricks.length)]
        while (addedBrickIds.includes(brick.id)) {
          brick = bricks[Math.floor(Math.random() * bricks.length)]
        }
        const amount = Math.floor(Math.random() * 4) + 1
        totalPrice += amount * brick.price
        cartItems.push(JSON.stringify({ amount: amount, brick: brick }))
      }

      orders.push({
        firstName: firstName,
        lastName: lastName,
        email: faker.internet.email({
          firstName: firstName,
          lastName: lastName,
        }),
        street: faker.location.street(),
        houseNumber: faker.location.buildingNumber(),
        zipCode: faker.location.zipCode(),
        city: faker.location.city(),
        shippingMethod: shippingMethod,
        shippingPrice: shippingPrice,
        cardNumber: `${faker.finance.creditCardNumber()}`,
        cardExpirationMonth: Math.floor(Math.random() * 12) + 1,
        cardExpirationYear: Math.floor(Math.random() * 4) + 2024,
        cardSecurityCode: `${faker.finance.creditCardCVV()}`,
        total: totalPrice,
        items: [JSON.stringify({ amount: 2, brick: bricks[0] })],
      })
    }

    return orders
  }

  async insert(order: CreateOrderInput) {
    const repo = appDataSource.getRepository(Order)

    // if record does not exist, create it
    const record = await repo.save(order)
    return record
  }
}

export default new OrderFactory()
