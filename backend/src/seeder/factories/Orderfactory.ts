import Factory from './Factory'
import { appDataSource } from '../Seed'
import { CreateOrderInput } from '../../order/dto/create-order.input'
import { Order } from '../../order/entities/order.entity'
import { ShippingMethod } from '../../shippingMethods.enum'

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
    this.setOrders()
    this.orders.forEach(async (order) => {
      const record = await this.insert(order)
      this.inserted.push(record)
    })
  }

  setOrders = () => {
    const brickRepository = appDataSource.getRepository('Brick')
    const bricks = brickRepository.find()

    this.orders.push({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      street: 'Main Street',
      houseNumber: '1',
      zipCode: '12345',
      city: 'Berlin',
      shippingMethod: ShippingMethod.STANDARD,
      shippingPrice: 4.99,
      cardNumber: '1234123412341234',
      cardExpirationMonth: 12,
      cardExpirationYear: 2023,
      cardSecurityCode: '123',
      total: 5.19,
      items: [JSON.stringify({ amount: 2, brick: bricks[0] })],
    })
  }

  async insert(order: CreateOrderInput) {
    const repo = appDataSource.getRepository(Order)

    // if record does not exist, create it
    const record = await repo.save(order)
    return record
  }
}

export default new OrderFactory()
