<template>
  <div>
    <div class="button" @click="createAsset">
      New asset
    </div>
    <div v-for="(asset, index) in assets" :key="index">
      <div :class="{ temporary: asset.id === -1 }">
        {{ asset.brand }} - {{ asset.model }}
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ASSETS, CREATE_ASSET, ASSET_ADDED } from '@/queries/assets.js'

// function mergedAssets (assets, newAsset) {
//   console.log('mergin')
//   console.log(assets, newAsset)
//   const exists = assets.some(asset => asset.id === newAsset.id)
//   if (exists) return assets
//   else return assets.concat(newAsset)
// }

export default {
  apollo: {
    assets: {
      query: GET_ASSETS,
      subscribeToMore: {
        document: ASSET_ADDED,
        updateQuery: (prev, { subscriptionData: { data: { assetAdded } } }) => {
          if (prev.assets.some(asset => asset.id === assetAdded.id)) return prev
          return {
            assets: [...prev.assets, assetAdded]
          }
        }
      }
    }
  },
  methods: {
    createAsset () {
      const asset = {
        brand: 'fuickckck',
        model: 'jksdfhsjkdfh'
      }

      this.$apollo.mutate({
        mutation: CREATE_ASSET,
        variables: asset,
        update: (store, { data: { addAsset } }) => {
          const data = store.readQuery({ query: GET_ASSETS })
          data.assets.push(addAsset)
          store.writeQuery({ query: GET_ASSETS, data })
        },
        optimisticResponse: {
          __typename: 'Mutation',
          addAsset: {
            __typename: 'Asset',
            id: -1,
            ...asset
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.5rem;
  margin: 0.5rem;
  background: $primary;
  display: inline-block;
  font-weight: 400;
}

.temporary {
  opacity: 0.5;
}
</style>
