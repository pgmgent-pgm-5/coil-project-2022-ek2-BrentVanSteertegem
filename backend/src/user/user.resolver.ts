import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserService } from './user.service'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'
import { Public } from 'src/auth/auth.guard'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User, { name: 'createUser' })
  create(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(createUserInput)
  }

  @Public()
  @Query(() => [User], { name: 'getUsers' })
  findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Query(() => User, { name: 'getUserById' })
  findOneById(@Args('id') id: number): Promise<User> {
    return this.userService.findOneById(id)
  }

  @Query(() => User, { name: 'getUserByEmail' })
  findOneByEmail(@Args('email') email: string): Promise<User> {
    return this.userService.findOneByEmail(email)
  }

  @Mutation(() => User, { name: 'updateUser' })
  update(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.userService.update(updateUserInput)
  }

  @Mutation(() => User, { name: 'removeUser' })
  remove(@Args('id') id: number): Promise<User> {
    return this.userService.remove(id)
  }
}
