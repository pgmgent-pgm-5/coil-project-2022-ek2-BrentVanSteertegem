import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Field, ObjectType, Int } from '@nestjs/graphql'

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field(() => String)
  name: string

  @ManyToOne(() => Category, (category) => category.mainCategory, {
    onDelete: 'CASCADE',
  })
  @Field(() => Category, { nullable: true })
  mainCategory: Category
}