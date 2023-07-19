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

  async create(createCategoryInput: CreateCategoryInput): Promise<Category> {
    const mainCategory = await this.categoryRepository.findOne({
      where: { id: createCategoryInput.mainCategoryId },
    })
    const category = this.categoryRepository.create({
      name: createCategoryInput.name,
      mainCategory: mainCategory,
    })
    return this.categoryRepository.save(category)
  }

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find({
      relations: ['mainCategory'],
    })
  }

  findOneById(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { id: id },
      relations: ['mainCategory'],
    })
  }

  findOneByName(name: string): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { name: name },
      relations: ['mainCategory'],
    })
  }

  // update(id: number, updateCategoryInput: UpdateCategoryInput) {
  //   return `This action updates a #${id} category`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} category`
  // }
}
