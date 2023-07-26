import 'dotenv/config'
import { DataSource } from 'typeorm'

export default class DatabaseSeeder {
  connection: DataSource

  constructor(connection) {
    this.connection = connection
  }

  async run(factory, amount = 20) {
    if (amount > 1) {
      await factory.makeMany(amount)
    } else {
      await factory.make(amount)
    }
    return factory.inserted
  }
}
