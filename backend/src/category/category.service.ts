import { Injectable } from '@nestjs/common'
import { CreateCategoryInput } from './dto/create-category.input'
import { UpdateCategoryInput } from './dto/update-category.input'
import { Category } from './entities/category.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class CategoryService {
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

  async update(updateCategoryInput: UpdateCategoryInput): Promise<Category> {
    const { id, mainCategoryId, ...fieldsToUpdate } = updateCategoryInput

    const mainCategory = await this.categoryRepository.findOne({
      where: { id: updateCategoryInput.mainCategoryId },
    })
    const category = await this.categoryRepository.findOne({
      where: { id: id },
      relations: ['mainCategory'],
    })
    const updatedCategory = this.categoryRepository.merge(category, {
      ...fieldsToUpdate,
      mainCategory,
    })

    return this.categoryRepository.save(updatedCategory)
  }

  remove(id: number): Promise<Category> {
    const category = this.categoryRepository.findOne({
      where: { id: id },
      relations: ['mainCategory'],
    })
    this.categoryRepository.delete(id)
    return category
  }
}
