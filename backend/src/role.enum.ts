import { registerEnumType } from '@nestjs/graphql'

export enum Role {
  ADMIN = 'admin',
  GUEST = 'guest',
}

registerEnumType(Role, {
  name: 'Role',
})
