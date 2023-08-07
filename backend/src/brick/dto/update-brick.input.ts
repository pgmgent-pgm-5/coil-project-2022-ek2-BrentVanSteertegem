import { InputType, Field, Int, Float } from '@nestjs/graphql'
import { Column, PrimaryColumn } from 'typeorm'

@InputType()
export class UpdateBrickInput {
  @PrimaryColumn()
  @Field(() => Int)
  id: number

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  name?: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description?: string

  @Column({ nullable: true })
  @Field(() => Float, { nullable: true })
  price?: number

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  categoryId?: number

  @Column({ nullable: true })
  @Field(() => [String], { nullable: true })
  images?: string[]

  @Column({ nullable: true })
  @Field(() => [Int], { nullable: true })
  variationIds?: number[]
}
