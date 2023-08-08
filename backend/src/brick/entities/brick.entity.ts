import { Field, Float, Int, ObjectType } from '@nestjs/graphql'
import { Category } from 'src/category/entities/category.entity'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm'

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

  @Column()
  @Field(() => String)
  color: string

  @Column()
  @Field(() => Int)
  quantity: number

  @ManyToOne(() => Category, (category) => category.bricks, {
    onDelete: 'CASCADE',
  })
  @Field(() => Category)
  category: Category

  @Column('text', { array: true })
  @Field(() => [String])
  images: string[]

  @ManyToMany(() => Brick)
  @JoinTable()
  @Field(() => [Brick])
  variations: Brick[]
}
