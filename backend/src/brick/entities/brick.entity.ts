import { Field, Float, Int, ObjectType } from '@nestjs/graphql'
import { Category } from 'src/category/entities/category.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

@Entity()
@ObjectType()
export class Brick {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field(() => String)
  name: string

  @Column()
  @Field(() => String)
  description: string

  @Column()
  @Field(() => Float)
  price: number

  @ManyToOne(() => Category, (category) => category.bricks, {
    onDelete: 'CASCADE',
  })
  @Field(() => Category)
  category: Category

  @Column('text', { array: true })
  @Field(() => [String])
  images: string[]
}
