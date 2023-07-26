import Factory from './Factory'
import { Category } from '../../category/entities/category.entity'
import { appDataSource } from '../Seed'

class CategoryFactory extends Factory {
  categories: Map<string, string[]>

  constructor() {
    super()
    this.categories = new Map()
    this.categories.set(null, ['Bricks', 'Plates', 'Minifigs', 'Other'])
    this.categories.set('Bricks', [
      '1x1',
      '1x2',
      '1x3',
      '1x4',
      '1x6',
      '1x7',
      '1x8',
      '2x2',
      '2x3',
      '2x4',
      '2x5',
      '2x6',
      '2x7',
      '2x8',
      'Other',
    ])
    this.categories.set('Plates', [
      '1x1',
      '1x2',
      '1x3',
      '1x4',
      '1x6',
      '1x7',
      '1x8',
      '2x2',
      '2x3',
      '2x4',
      '2x5',
      '2x6',
      '2x7',
      '2x8',
      'Other',
    ])
    this.categories.set('Minifigs', [
      'Hat',
      'Head',
      'Torso',
      'Legs',
      'Back',
      'Tools',
    ])
    this.categories.set('Other', [
      'Animals',
      'Plants',
      'Windows',
      'Doors',
      'Wheels',
      'Tires',
      'Other',
    ])
  }

  // make one record
  async make() {
    await this.makeMany()
  }

  // make many records
  async makeMany() {
    const categoryRepository = appDataSource.getRepository(Category)
    this.categories.forEach(async (categories, main) => {
      const mainCategory =
        main == null
          ? null
          : await categoryRepository.findOne({ where: { name: main } })
      if (categories && categories.length > 0) {
        categories.forEach(async (category) => {
          const record = await this.insert(category, mainCategory)
          this.inserted.push(record)
        })
      }
    })
  }

  async insert(name, mainCategory) {
    const repo = appDataSource.getRepository(Category)

    // check if record exists
    let record = await repo.findOne({ where: { name, mainCategory } })
    if (record) return record

    // if record does not exist, create it
    record = await repo.save({ name, mainCategory })
    return record
  }
}

export default new CategoryFactory()
