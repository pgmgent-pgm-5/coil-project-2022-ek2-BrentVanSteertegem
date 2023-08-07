import { Inject, Injectable, forwardRef } from '@nestjs/common'
import { CreateBrickInput } from './dto/create-brick.input'
import { UpdateBrickInput } from './dto/update-brick.input'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Brick } from './entities/brick.entity'
import { CategoryService } from 'src/category/category.service'

@Injectable()
export class BrickService {
  constructor(
    @InjectRepository(Brick)
    private brickRepository: Repository<Brick>,
    @Inject(forwardRef(() => CategoryService))
    private categoryService: CategoryService,
  ) {}

  async create(createBrickInput: CreateBrickInput): Promise<Brick> {
    const category = await this.categoryService.findOneById(
      createBrickInput.categoryId,
    )
    const brick = this.brickRepository.create({
      name: createBrickInput.name,
      description: createBrickInput.description,
      price: createBrickInput.price,
      category: category,
      images: createBrickInput.images,
    })
    await this.brickRepository.save(brick)

    return this.brickRepository.findOne({
      where: { id: brick.id },
      relations: ['category'],
    })
  }

  findAll(): Promise<Brick[]> {
    console.log('method called')
    return this.brickRepository.find({
      relations: ['category'],
    })
  }

  findOne(id: number): Promise<Brick> {
    return this.brickRepository.findOne({
      where: { id: id },
      relations: ['category'],
    })
  }

  async update(updateBrickInput: UpdateBrickInput): Promise<Brick> {
    const category = await this.categoryService.findOneById(
      updateBrickInput.categoryId,
    )

    const brick = await this.brickRepository.save({
      id: updateBrickInput.id,
      name: updateBrickInput.name,
      description: updateBrickInput.description,
      price: updateBrickInput.price,
      category: category,
      images: updateBrickInput.images,
    })

    return this.brickRepository.findOne({
      where: { id: updateBrickInput.id },
      relations: ['category'],
    })
  }

  remove(id: number): Promise<Brick> {
    const brick = this.brickRepository.findOne({
      where: { id: id },
      relations: ['category'],
    })
    this.brickRepository.delete(id)
    return brick
  }
}
