import { Module } from '@nestjs/common'
import { categoryService } from './category.service'
import { categoryResolver } from './category.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from './entities/category.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  exports: [categoryService],
  providers: [categoryResolver, categoryService],
})
export class categoryModule {}
