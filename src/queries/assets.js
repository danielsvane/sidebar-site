import { gql } from 'apollo-boost'

export const GET_ASSETS = gql`{
  assets {
    brand
    model
  }
}`

export const CREATE_ASSET = gql`mutation {
  addAsset(brand: String, model: String) {
    brand
    model
  }
}`
