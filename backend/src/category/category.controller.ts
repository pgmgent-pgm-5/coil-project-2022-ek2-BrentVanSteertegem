import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common'
import { categoryService } from './category.service'
import { Category } from './entities/category.entity'
import { CreateCategoryInput } from './dto/create-category.input'
import { UpdateCategoryInput } from './dto/update-category.input'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: categoryService) {}

  @Get()
  getCategories(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  @Get('id=:id')
  getCategoryById(@Param('id') id: number): Promise<Category> {
    return this.categoryService.findOneById(id)
  }

  @Get(':name')
  getCategoryByName(@Param('name') name: string): Promise<Category> {
    return this.categoryService.findOneByName(name)
  }

  @Post()
  postCategory(@Body() req: CreateCategoryInput): Promise<Category> {
    return this.categoryService.create({
      name: req.name,
      mainCategoryId: req.mainCategoryId,
    })
  }

  @Put(':id')
  updateCategory(
    @Body() req: UpdateCategoryInput,
    @Param('id') id: number,
  ): Promise<Category> {
    return this.categoryService.update({
      id: id,
      name: req.name,
      mainCategoryId: req.mainCategoryId,
    })
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number): Promise<Category> {
    return this.categoryService.remove(id)
  }
}
