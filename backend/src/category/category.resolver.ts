import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { categoryService } from './category.service'
import { CreateCategoryInput } from './dto/create-category.input'
import { Category } from './entities/category.entity'

@Resolver(() => Category)
export class categoryResolver {
  constructor(private readonly categoryService: categoryService) {}

  @Mutation(() => Category)
  create(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return this.categoryService.create(createCategoryInput)
  }

  @Query(() => [Category], { name: 'categories' })
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  @Query('categoryById')
  findOneById(@Args('id') id: number): Promise<Category> {
    return this.categoryService.findOneById(id)
  }

  @Query('categoryByName')
  findOne(@Args('name') name: string): Promise<Category> {
    return this.categoryService.findOneByName(name)
  }

  // @Mutation('updateCategory')
  // update(@Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput) {
  //   return this.categoryService.update(updateCategoryInput.id, updateCategoryInput)
  // }

  // @Mutation('removeCategory')
  // remove(@Args('id') id: number) {
  //   return this.categoryService.remove(id)
  // }
}
