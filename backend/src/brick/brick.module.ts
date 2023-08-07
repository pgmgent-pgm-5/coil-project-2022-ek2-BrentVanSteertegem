import { Module, forwardRef } from '@nestjs/common'
import { BrickService } from './brick.service'
import { BrickResolver } from './brick.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Brick } from './entities/brick.entity'
import { CategoryModule } from 'src/category/category.module'
@Module({
  imports: [
    TypeOrmModule.forFeature([Brick]),
    forwardRef(() => CategoryModule),
  ],
  exports: [BrickService],
  providers: [BrickResolver, BrickService],
})
export class BrickModule {}
