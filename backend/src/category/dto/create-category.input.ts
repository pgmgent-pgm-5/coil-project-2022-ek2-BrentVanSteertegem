import { InputType, Field, Int } from '@nestjs/graphql'
import { Column } from 'typeorm'

@InputType()
export class CreateCategoryInput {
  @Column()
  @Field(() => String)
  name: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description?: string

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  mainCategoryId?: number
}
