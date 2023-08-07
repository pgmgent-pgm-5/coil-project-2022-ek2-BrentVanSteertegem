// import { ObjectType, Field, Int } from '@nestjs/graphql'
// import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
// import { Brick } from './brick.entity'

// @Entity()
// @ObjectType()
// export class BrickBrickVariation {
//   @PrimaryColumn()
//   @Field(() => Int)
//   brickId: number

//   @PrimaryColumn()
//   @Field(() => Int)
//   brickVariationId: number

//   // @ManyToOne(() => Brick, (brick) => brick.variations, {
//   //   onDelete: 'NO ACTION',
//   //   onUpdate: 'NO ACTION',
//   // })
//   // @JoinColumn([{ referencedColumnName: 'id' }])
//   // brick: Brick

//   // @ManyToOne(() => Brick, (brick) => brick.variations, {
//   //   onDelete: 'NO ACTION',
//   //   onUpdate: 'NO ACTION',
//   // })
//   // @JoinColumn([{ referencedColumnName: 'id' }])
//   // brickVariation: Brick
// }
