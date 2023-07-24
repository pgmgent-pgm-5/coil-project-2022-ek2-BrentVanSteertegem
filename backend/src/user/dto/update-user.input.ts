import { InputType, Field, Int } from '@nestjs/graphql'
import { Role } from '../../role.enum'
import { Column, PrimaryColumn } from 'typeorm'

@InputType()
export class UpdateUserInput {
  @PrimaryColumn()
  @Field(() => Int)
  id: number

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  firstName?: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  lastName?: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  email?: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  password?: string

  @Column({ nullable: true })
  @Field(() => Role, { nullable: true })
  role?: Role
}
