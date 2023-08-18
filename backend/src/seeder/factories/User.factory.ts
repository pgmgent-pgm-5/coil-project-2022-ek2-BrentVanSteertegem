import Factory from './Factory'
import { appDataSource } from '../Seed'
import { CreateUserInput } from '../../user/dto/create-user.input'
import { User } from '../../user/entities/user.entity'
import { Role } from '../../role.enum'
import * as bcrypt from 'bcrypt'
import { faker } from '@faker-js/faker'

class UserFactory extends Factory {
  users: CreateUserInput[]

  constructor() {
    super()
    this.users = []
  }

  generateUsers = async (amount: number) => {
    const users = [
      {
        firstName: 'John',
        lastName: 'Delaware',
        email: 'jd@gmail.com',
        password: 'jd123',
        role: Role.ADMIN,
      },
    ]

    for (let i = 0; i < amount; i++) {
      const firstName = faker.person.firstName()
      const lastName = faker.person.lastName()
      const roles = Object.values(Role)
      const role = roles[Math.floor(Math.random() * roles.length)]

      users.push({
        firstName: firstName,
        lastName: lastName,
        email: faker.internet.email({
          firstName: firstName,
          lastName: lastName,
        }),
        password: faker.internet.password(),
        role: role,
      })
    }

    return users
  }

  // make one record
  async make() {
    await this.makeMany()
  }

  // make many records
  async makeMany() {
    this.users = await this.generateUsers(46)
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
