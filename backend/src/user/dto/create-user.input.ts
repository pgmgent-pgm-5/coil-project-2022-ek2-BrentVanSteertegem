import { InputType, Field } from '@nestjs/graphql'
import { Role } from '../../role.enum'
import { Column } from 'typeorm'

@InputType()
export class CreateUserInput {
  @Column()
  @Field(() => String)
  firstName: string

  @Column()
  @Field(() => String)
  lasttName: string

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
