import { DataSource } from 'typeorm'
import DatabaseSeeder from './DatabaseSeeder'
import CategoryFactory from './factories/Category.factory'
import BrickFactory from './factories/Brick.factory'
import UserFactory from './factories/User.factory'
import Orderfactory from './factories/Orderfactory'

export const appDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
  synchronize: true,
})

const seed = async () => {
  await appDataSource.initialize()

  // New instance of db seeder
  const dbSeeder = new DatabaseSeeder(appDataSource)

  let totalRecords = []

  // Seed users
  await dbSeeder.run(UserFactory).then((records) => {
    console.log(`${records.length} seeded in db`)
    console.log(records)
    totalRecords = [...totalRecords, ...records]
  })

  // Seed categories
  await dbSeeder.run(CategoryFactory).then((records) => {
    console.log(`${records.length} seeded in db`)
    console.log(records)
    totalRecords = [...totalRecords, ...records]
  })

  // Seed bricks
  await dbSeeder.run(BrickFactory).then((records) => {
    console.log(`${records.length} seeded in db`)
    console.log(records)
    totalRecords = [...totalRecords, ...records]
  })

  // Seed orders
  await dbSeeder.run(Orderfactory).then((records) => {
    console.log(`${records.length} seeded in db`)
    console.log(records)
    totalRecords = [...totalRecords, ...records]
  })
}

seed()
