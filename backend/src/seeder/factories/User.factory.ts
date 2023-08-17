import Factory from './Factory'
import { appDataSource } from '../Seed'
import { CreateUserInput } from '../../user/dto/create-user.input'
import { User } from '../../user/entities/user.entity'
import { Role } from '../../role.enum'
import * as bcrypt from 'bcrypt'

class UserFactory extends Factory {
  users: CreateUserInput[]

  constructor() {
    super()
    this.users = [
      {
        firstName: 'John',
        lastName: 'Delaware',
        email: 'jd@gmail.com',
        password: 'jd123',
        role: Role.ADMIN,
      },
    ]
  }

  // make one record
  async make() {
    await this.makeMany()
  }

  // make many records
  async makeMany() {
    this.users.forEach(async (user) => {
      const record = await this.insert(user)
      this.inserted.push(record)
    })
  }

  async insert(user) {
    const repo = appDataSource.getRepository(User)

    // check if record exists
    let record = await repo.findOne({
      where: {
        email: user.email,
      },
    })
    if (record) return record

    // if record does not exist, create it
    record = await repo.save({
      ...user,
      password: await bcrypt.hash(user.password, 10),
    })
    return record
  }
}

export default new UserFactory()
