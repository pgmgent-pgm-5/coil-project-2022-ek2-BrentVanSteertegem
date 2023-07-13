import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { categoryService } from './category/category.service'
import { Category } from './category/entities/category.entity'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly categoryService: categoryService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('categories')
  getCategories(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  @Post('category')
  postCategory(): Promise<Category> {
    return this.categoryService.create({ name: 'Bricks' })
  }
}
