import { gql } from 'apollo-boost'

export const GET_ASSETS = gql`{
  assets {
    id
    brand
    model
  }
}`

export const CREATE_ASSET = gql`mutation ($brand: String!, $model: String!) {
  addAsset(brand: $brand, model: $model) {
    id
    brand
    model
  }
}`

export const ASSET_ADDED = gql`subscription {
  assetAdded {
    id
    brand
    model
  }
}`
