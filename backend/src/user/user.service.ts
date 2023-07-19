import { Injectable } from '@nestjs/common'
import { User } from './entities/user.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput)
    return this.userRepository.save(user)
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findOneById(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id: id },
    })
  }

  async update(updateUserInput: UpdateUserInput): Promise<User> {
    const { id, ...fieldsToUpdate } = updateUserInput
    const user = await this.userRepository.findOne({
      where: { id: id },
    })
    const updatedUser = this.userRepository.merge(user, fieldsToUpdate)
    return this.userRepository.save(updatedUser)
  }

  remove(id: number): Promise<User> {
    const user = this.userRepository.findOne({
      where: { id: id },
    })
    this.userRepository.delete(id)
    return user
  }
}
