import Factory from './Factory'
import { Category } from '../../category/entities/category.entity'
import { CreateBrickInput } from '../../brick/dto/create-brick.input'
import { Brick } from '../../brick/entities/brick.entity'
import { appDataSource } from '../Seed'

class CategoryFactory extends Factory {
  bricks: Map<string, Partial<CreateBrickInput>[]>
  colors: string[] = [
    'Red',
    'Green',
    'Blue',
    'Yellow',
    'Black',
    'White',
    'Grey',
  ]

  constructor() {
    super()
    this.bricks = new Map()
    this.bricks.set('Bricks', [{ name: 'basic brick' }])
    this.bricks.set('Plates', [{ name: 'basic plate' }])
    this.bricks.set('Minifigs', [])
    this.bricks.set('Other', [])
  }

  // make one record
  async make() {
    await this.makeMany()
  }

  // make many records
  async makeMany() {
    const categoryRepository = appDataSource.getRepository(Category)
    this.bricks.forEach(async (bricks, mainCategory) => {
      const categories = await categoryRepository.find({
        where: {
          mainCategory: {
            name: mainCategory,
          },
        },
      })
      categories.forEach(async (category) => {
        if (category.name === 'Other') return
        switch (mainCategory) {
          case 'Bricks':
          case 'Plates':
            bricks.forEach(async (brick) => {
              const variations: Brick[] = []
              for (const color of this.colors) {
                const record = await this.insert({
                  name: `${color} ${category.name} ${brick.name}`,
                  description: `A ${color.toLocaleLowerCase()} ${category.name.toLocaleLowerCase()} ${
                    brick.name
                  }`,
                  color: color,
                  quantity: Math.round(Math.random() * 5000),
                  price: 0.1,
                  images: [
                    `${mainCategory.toLocaleLowerCase()}_${category.name.toLocaleLowerCase()}_${brick.name
                      .toLowerCase()
                      .split(' ')
                      .join('_')}_${color.toLocaleLowerCase()}.jpg`,
                  ],
                  category: category,
                  variations: variations,
                })
                variations.push(record)
                this.inserted.push(record)
              }
              this.updateVariations(variations)
            })
        }
      })
    })
  }

  async updateVariations(variations: Brick[]) {
    variations.forEach(async (variation) => {
      const repo = appDataSource.getRepository(Brick)
      const filteredVariations = variations.filter((v) => v.id !== variation.id)
      await repo.save({ id: variation.id, variations: filteredVariations })
    })
  }

  async insert(brick: Omit<Brick, 'id'>) {
    const repo = appDataSource.getRepository(Brick)

    // check if record exists
    let record = await repo.findOne({
      where: {
        name: brick.name,
        description: brick.description,
        color: brick.color,
      },
    })
    if (record) return record

    // if record does not exist, create it
    record = await repo.save(brick)
    return record
  }
}

export default new CategoryFactory()
