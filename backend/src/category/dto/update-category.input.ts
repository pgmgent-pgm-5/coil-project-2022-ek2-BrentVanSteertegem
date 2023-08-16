import { InputType, Field, Int } from '@nestjs/graphql'
import { Column, PrimaryColumn } from 'typeorm'

@InputType()
export class UpdateCategoryInput {
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
  @Field(() => Int, { nullable: true })
  mainCategoryId?: number
}
