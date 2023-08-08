import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { BrickService } from './brick.service'
import { CreateBrickInput } from './dto/create-brick.input'
import { UpdateBrickInput } from './dto/update-brick.input'
import { Brick } from './entities/brick.entity'
import { Public } from 'src/auth/auth.guard'

@Resolver(() => Brick)
export class BrickResolver {
  constructor(private readonly brickService: BrickService) {}

  @Mutation(() => Brick, { name: 'createBrick' })
  create(
    @Args('createBrickInput') createBrickInput: CreateBrickInput,
  ): Promise<Brick> {
    return this.brickService.create(createBrickInput)
  }

  @Public()
  @Query(() => [Brick], { name: 'getBricks' })
  findAll(): Promise<Brick[]> {
    return this.brickService.findAll()
  }

  @Public()
  @Query(() => Brick, { name: 'getBrickById' })
  findOne(@Args('id') id: number): Promise<Brick> {
    return this.brickService.findOne(id)
  }

  @Mutation(() => Brick, { name: 'updateBrick' })
  update(
    @Args('updateBrickInput') updateBrickInput: UpdateBrickInput,
  ): Promise<Brick> {
    return this.brickService.update(updateBrickInput)
  }

  @Mutation(() => Brick, { name: 'removeBrick' })
  remove(@Args('id') id: number): Promise<Brick> {
    return this.brickService.remove(id)
  }
}
