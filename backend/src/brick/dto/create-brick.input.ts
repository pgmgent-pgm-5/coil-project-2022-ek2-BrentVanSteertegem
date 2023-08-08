import { Field, InputType, Float, Int } from '@nestjs/graphql'
import { Column } from 'typeorm'

@InputType()
export class CreateBrickInput {
  @Column()
  @Field(() => String)
  name: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description?: string

  @Column()
  @Field(() => Float)
  price: number

  @Column()
  @Field(() => String)
  color: string

  @Column()
  @Field(() => Int)
  quantity: number

  @Column()
  @Field(() => Int)
  categoryId?: number

  @Column()
  @Field(() => [String])
  images: string[]

  @Column({ nullable: true })
  @Field(() => [Int], { nullable: true })
  variationIds?: number[]
}
