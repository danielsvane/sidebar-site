<template>
  <div>
    <div class="button" @click="createAsset">
      New asset
    </div>
    <div class="asset" v-for="(asset, index) in assets" :key="index" @click="removeAsset(asset.id)">
      <div :class="{ temporary: asset.id === -1 }">
        {{ asset.brand }} - {{ asset.model }}
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ASSETS, CREATE_ASSET, ASSET_ADDED, REMOVE_ASSET } from '@/queries/assets.js'

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
    removeAsset (id) {
      this.$apollo.mutate({
        mutation: REMOVE_ASSET,
        variables: { id },
        update: (store, { data: { removeAsset } }) => {
          console.log(id)
          const data = store.readQuery({ query: GET_ASSETS })
          store.writeQuery({
            query: GET_ASSETS,
            data: {
              assets: data.assets.filter(asset => asset.id !== id)
            }
          })
        }
      })
    },
    createAsset () {
      const asset = {
        brand: 'fuickckck',
        model: 'jksdfhsjkdfh',
        year: 1212
      }

      this.$apollo.mutate({
        mutation: CREATE_ASSET,
        variables: asset,
        update: (store, { data: { addAsset } }) => {
          const data = store.readQuery({ query: GET_ASSETS })
          if (data.assets.some(asset => asset.id === addAsset.id)) return
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

.asset:hover {
  background: #ccc;
}
</style>
