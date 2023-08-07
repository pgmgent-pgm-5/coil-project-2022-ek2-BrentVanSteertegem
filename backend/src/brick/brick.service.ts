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

    const variations = await Promise.all(
      createBrickInput.variationIds.map(async (variation) => {
        return await this.brickRepository.findOne({
          where: { id: variation },
          relations: ['category', 'variations'],
        })
      }),
    )

    const brick = this.brickRepository.create({
      name: createBrickInput.name,
      description: createBrickInput.description,
      price: createBrickInput.price,
      category: category,
      images: createBrickInput.images,
      variations: variations,
    })
    await this.brickRepository.save(brick)

    return this.brickRepository.findOne({
      where: { id: brick.id },
      relations: ['category', 'variations'],
    })
  }

  findAll(): Promise<Brick[]> {
    return this.brickRepository.find({
      relations: ['category', 'variations'],
    })
  }

  findOne(id: number): Promise<Brick> {
    return this.brickRepository.findOne({
      where: { id: id },
      relations: ['category', 'variations'],
    })
  }

  async update(updateBrickInput: UpdateBrickInput): Promise<Brick> {
    const category = await this.categoryService.findOneById(
      updateBrickInput.categoryId,
    )

    const variations = await Promise.all(
      updateBrickInput.variationIds.map(async (variation) => {
        return await this.brickRepository.findOne({
          where: { id: variation },
          relations: ['category', 'variations'],
        })
      }),
    )

    const brick = await this.brickRepository.save({
      id: updateBrickInput.id,
      name: updateBrickInput.name,
      description: updateBrickInput.description,
      price: updateBrickInput.price,
      category: category,
      images: updateBrickInput.images,
      variations: variations,
    })

    return this.brickRepository.findOne({
      where: { id: updateBrickInput.id },
      relations: ['category', 'variations'],
    })
  }

  remove(id: number): Promise<Brick> {
    const brick = this.brickRepository.findOne({
      where: { id: id },
      relations: ['category', 'variations'],
    })
    this.brickRepository.delete(id)
    return brick
  }
}
