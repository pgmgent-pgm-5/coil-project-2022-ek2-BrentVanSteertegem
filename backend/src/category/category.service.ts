import { Injectable } from '@nestjs/common'
import { CreateCategoryInput } from './dto/create-category.input'
// import { UpdateCategoryInput } from './dto/update-category.input'
import { Category } from './entities/category.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class categoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const category = this.categoryRepository.create(createCategoryInput)
    return this.categoryRepository.save(category)
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find()
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} category`
  // }

  // update(id: number, updateCategoryInput: UpdateCategoryInput) {
  //   return `This action updates a #${id} category`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} category`
  // }
}
