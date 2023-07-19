import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './entities/user.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

@Controller('user')
export class userController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getCategories(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get('id=:id')
  getuserById(@Param('id') id: number): Promise<User> {
    return this.userService.findOneById(id)
  }

  @Get(':email')
  getuserByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.findOneByEmail(email)
  }

  @Post()
  postuser(@Body() req: CreateUserInput): Promise<User> {
    return this.userService.create(req)
  }

  @Put(':id')
  updateuser(
    @Body() req: UpdateUserInput,
    @Param('id') id: number,
  ): Promise<User> {
    return this.userService.update({
      id: id,
      ...req,
    })
  }

  @Delete(':id')
  deleteuser(@Param('id') id: number): Promise<User> {
    return this.userService.remove(id)
  }
}
