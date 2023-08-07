import { Test, TestingModule } from '@nestjs/testing'
import { BrickResolver } from './brick.resolver'
import { BrickService } from './brick.service'

describe('BrickResolver', () => {
  let resolver: BrickResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrickResolver, BrickService],
    }).compile()

    resolver = module.get<BrickResolver>(BrickResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
