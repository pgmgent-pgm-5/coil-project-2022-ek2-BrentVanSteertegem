import { Field, Float, Int, ObjectType } from '@nestjs/graphql'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ShippingMethod } from '../../shippingMethods.enum'

@Entity()
@ObjectType()
export class Order {
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
  street: string

  @Column()
  @Field(() => String)
  houseNumber: string

  @Column()
  @Field(() => String)
  zipCode: string

  @Column()
  @Field(() => String)
  city: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  billingFirstName?: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  billingLastName?: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  billingStreet?: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  billingHouseNumber?: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  billingZipCode?: string

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  billingCity?: string

  @Column()
  @Field(() => ShippingMethod)
  shippingMethod: ShippingMethod

  @Column('decimal', { precision: 5, scale: 2 })
  @Field(() => Float)
  shippingPrice: number

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  promoCode?: string

  @Column()
  @Field(() => String)
  cardNumber: string

  @Column()
  @Field(() => Int)
  cardExpirationMonth: number

  @Column()
  @Field(() => Int)
  cardExpirationYear: number

  @Column()
  @Field(() => String)
  cardSecurityCode: string

  @Column('decimal', { precision: 5, scale: 2 })
  @Field(() => Float)
  total: number

  @Column('text', { array: true })
  @Field(() => [String])
  items: string[]
}
