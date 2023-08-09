import { gql } from '@apollo/client'

export const GET_BRICKS = gql`
  query getBricks {
    getBricks {
      id
      name
      description
      color
      quantity
      price
      images
      category {
        id
        name
        mainCategory {
          id
          name
        }
      }
    }
  }
`
