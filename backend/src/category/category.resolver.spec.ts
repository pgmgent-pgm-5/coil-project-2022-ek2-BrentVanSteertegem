import { Test, TestingModule } from '@nestjs/testing'
import { categoryResolver } from './category.resolver'
import { categoryService } from './category.service'

describe('categoryResolver', () => {
  let resolver: categoryResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [categoryResolver, categoryService],
    }).compile()

    resolver = module.get<categoryResolver>(categoryResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})