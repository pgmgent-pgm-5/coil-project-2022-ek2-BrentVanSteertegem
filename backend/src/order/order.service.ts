import { Injectable } from '@nestjs/common'
import { CreateOrderInput } from './dto/create-order.input'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Order } from './entities/order.entity'

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  create(createOrderInput: CreateOrderInput): Promise<Order> {
    const order = this.orderRepository.create(createOrderInput)
    return this.orderRepository.save(order)
  }

  findAll(): Promise<Order[]> {
    return this.orderRepository.find()
  }

  findOne(id: number): Promise<Order> {
    return this.orderRepository.findOne({
      where: { id: id },
    })
  }

  remove(id: number): Promise<Order> {
    const order = this.orderRepository.findOne({
      where: { id: id },
    })
    this.orderRepository.delete(id)
    return order
  }
}
