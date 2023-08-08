import { gql } from '@apollo/client'

export const GET_BRICKS_BY_CATEGORY = gql`
  query getBricksByCategory($id: ID!) {
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
