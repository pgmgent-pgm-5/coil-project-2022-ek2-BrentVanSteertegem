import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { OrderService } from './order.service'
import { CreateOrderInput } from './dto/create-order.input'
import { Order } from './entities/order.entity'
import { Public } from 'src/auth/auth.guard'

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Public()
  @Mutation(() => Order, { name: 'createOrder' })
  create(
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
  ): Promise<Order> {
    return this.orderService.create(createOrderInput)
  }

  @Public()
  @Query(() => [Order], { name: 'getOrders' })
  findAll(): Promise<Order[]> {
    return this.orderService.findAll()
  }

  @Public()
  @Query(() => Order, { name: 'getOrderById' })
  findOne(@Args('id') id: number): Promise<Order> {
    return this.orderService.findOne(id)
  }

  @Mutation(() => Order, { name: 'removeOrder' })
  remove(@Args('id') id: number): Promise<Order> {
    return this.orderService.remove(id)
  }
}
