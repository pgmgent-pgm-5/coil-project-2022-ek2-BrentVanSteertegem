import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CategoryService } from './category.service'
import { CreateCategoryInput } from './dto/create-category.input'
import { UpdateCategoryInput } from './dto/update-category.input'
import { Category } from './entities/category.entity'

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category, { name: 'createCategory' })
  create(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return this.categoryService.create(createCategoryInput)
  }

  @Query(() => [Category], { name: 'getCategories' })
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  @Query('getCategoryById')
  findOneById(@Args('id') id: number): Promise<Category> {
    return this.categoryService.findOneById(id)
  }

  @Query('getCategoryByName')
  findOne(@Args('name') name: string): Promise<Category> {
    return this.categoryService.findOneByName(name)
  }

  @Mutation('updateCategory')
  update(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    return this.categoryService.update(updateCategoryInput)
  }

  @Mutation('removeCategory')
  remove(@Args('id') id: number): Promise<Category> {
    return this.categoryService.remove(id)
  }
}
