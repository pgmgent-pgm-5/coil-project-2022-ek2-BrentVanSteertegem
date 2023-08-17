import { registerEnumType } from '@nestjs/graphql'

export enum ShippingMethod {
  PICKUP = 'pickup',
  STANDARD = 'standard',
  NEXTDAY = 'nextday',
}

registerEnumType(ShippingMethod, {
  name: 'ShippingMethod',
})
