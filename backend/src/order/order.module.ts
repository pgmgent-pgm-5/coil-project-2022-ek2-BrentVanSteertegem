import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderResolver } from './orderresolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Order } from './entities/order.entity'
@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  exports: [OrderService],
  providers: [OrderResolver, OrderService],
})
export class OrderModule {}
