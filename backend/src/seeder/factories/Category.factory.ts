import Factory from './Factory'
import { Category } from '../../category/entities/category.entity'
import { appDataSource } from '../Seed'

class CategoryFactory extends Factory {
  categories: Map<string, { name: string; description?: string }[]>

  constructor() {
    super()
    this.categories = new Map()
    this.categories.set(null, [
      {
        name: 'Bricks',
        description:
          "Lego bricks are the most common pieces among most Lego sets. They come in many different sizes and in many different colors. Of course there are also some rather special types of bricks and yes, we do offer some of those as well. If you still haven't found what you're looking for, don't hesitate to contact us and we might be able to add to our assortiment of bricks.",
      },
      {
        name: 'Plates',
        description:
          "Lego plates pretty common pieces among most Lego sets. They come in many different sizes and in many different colors. Of course there are also some rather special types of plates and yes, we do offer some of those as well. If you still haven't found what you're looking for, don't hesitate to contact us and we might be able to add to our assortiment of lego plates.",
      },
      {
        name: 'Minifigs',
        description:
          "Lego minifigures (or minifigs for short) come in a lot of sets and can really make your scene come to live. Ofcourse they're simply fun to play with as well or they could be a type of collectible to some people. A minifig generally consists of a head piece, a torso piece (with 2 arms attached to the torso) and a leg piece. Many minifigs also come with some type of headgear or some tools and occasionnaly they come with some sort of backpack as well. We've got a large selection of minifig parts to offer you but if you still haven't found what you're looking for, don't hesitate to contact us and we might be able to add to our assortiment of minifig pieces.",
      },
      {
        name: 'Other',
        description:
          "In this category you can find every lego piece that isn't just lego brick, a lego plate or a minifig piece. \"What other types of lego pieces are there?\", you might ask yourself. Well, there's also wheels (and tires to put on them), there are plants and animals or just some good old windows and doors to put in your lego dreamhouse. Of course there many more sorts of items in this category but we can't keep summing up every piece lego has ever made. Just browse this category if you're curious what else we have to offer and if you still haven't found what you're looking for, don't hesitate to contact us and we might be able to add to our assortiment of minifig pieces.",
      },
    ])
    this.categories.set('Bricks', [
      { name: '1x1' },
      { name: '1x2' },
      { name: '1x3' },
      { name: '1x4' },
      { name: '1x5' },
      { name: '1x6' },
      { name: '1x7' },
      { name: '1x8' },
      { name: '2x2' },
      { name: '2x3' },
      { name: '2x4' },
      { name: '2x5' },
      { name: '2x6' },
      { name: '2x7' },
      { name: '2x8' },
      { name: 'Other' },
    ])
    this.categories.set('Plates', [
      { name: '1x1' },
      { name: '1x2' },
      { name: '1x3' },
      { name: '1x4' },
      { name: '1x5' },
      { name: '1x6' },
      { name: '1x7' },
      { name: '1x8' },
      { name: '2x2' },
      { name: '2x3' },
      { name: '2x4' },
      { name: '2x5' },
      { name: '2x6' },
      { name: '2x7' },
      { name: '2x8' },
      { name: 'Other' },
    ])
    this.categories.set('Minifigs', [
      { name: 'Hat' },
      { name: 'Head' },
      { name: 'Torso' },
      { name: 'Legs' },
      { name: 'Back' },
      { name: 'Tools' },
    ])
    this.categories.set('Other', [
      { name: 'Animals' },
      { name: 'Plants' },
      { name: 'Windows' },
      { name: 'Doors' },
      { name: 'Wheels' },
      { name: 'Tires' },
      { name: 'Other' },
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
        main !== null
          ? await categoryRepository.findOne({ where: { name: main } })
          : null
      if (categories && categories.length > 0) {
        categories.forEach(async (category) => {
          const record = await this.insert(category, mainCategory)
          this.inserted.push(record)
        })
      }
    })
  }

  async insert(category, mainCategory) {
    const repo = appDataSource.getRepository(Category)

    // check if record exists
    let record =
      mainCategory == null
        ? await repo.findOne({
            where: { name: category.name, mainCategory: null },
          })
        : await repo.findOne({
            where: {
              name: category.name,
              mainCategory: { id: mainCategory.id },
            },
            relations: ['mainCategory'],
          })
    if (record) {
      const updatedRecord = await repo.save({
        ...record,
        ...category,
      })
      return updatedRecord
    }

    // if record does not exist, create it
    record = await repo.save({ ...category, mainCategory })
    return record
  }
}

export default new CategoryFactory()
