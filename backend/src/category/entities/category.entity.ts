import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { Field, ObjectType, Int } from '@nestjs/graphql'
import { Brick } from '../../brick/entities/brick.entity'

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field(() => String)
  name: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  description?: string

  @ManyToOne(() => Category, (category) => category.mainCategory, {
    onDelete: 'CASCADE',
  })
  @Field(() => Category, { nullable: true })
  mainCategory: Category

  @OneToMany(() => Brick, (brick) => brick.category, { nullable: true })
  @Field(() => [Brick], { nullable: true })
  bricks?: Brick[]
}
