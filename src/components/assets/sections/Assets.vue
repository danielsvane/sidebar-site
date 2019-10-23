<template>
  <div>
    <div class="button" @click="createAsset">
      New asset
    </div>
    <div v-for="(asset, index) in assets" :key="index">
      {{ asset.brand }} - {{ asset.model }}
    </div>
  </div>
</template>

<script>
import { GET_ASSETS, CREATE_ASSET } from '@/queries/assets.js'

export default {
  apollo: {
    assets: GET_ASSETS
  },
  methods: {
    createAsset () {
      this.$apollo.mutate({
        mutation: CREATE_ASSET
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
</style>
