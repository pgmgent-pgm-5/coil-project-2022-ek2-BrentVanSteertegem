import { gql } from '@apollo/client'

export const GET_ORDERS = gql`
  query getOrders {
    getOrders {
      id
      firstName
      lastName
      email
      street
      houseNumber
      zipCode
      city
      shippingMethod
      total
      items
    }
  }
`
