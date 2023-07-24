import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Field, ObjectType, Int } from '@nestjs/graphql'
import { Role } from '../../role.enum'

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field(() => String)
  firstName: string

  @Column()
  @Field(() => String)
  lastName: string

  @Column()
  @Field(() => String)
  email: string

  @Column()
  @Field(() => String)
  password: string

  @Column()
  @Field(() => Role)
  role: Role
}
