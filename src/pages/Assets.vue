<template>
  <Page :sections="sections"></Page>
</template>

<script>
import Page from '@/components/Page'
import Map from '@/components/assets/sections/Map.vue'
import Assets from '@/components/assets/sections/Assets.vue'

export default {
  components: {
    Page
  },
  data () {
    return {
      sections: [
        {
          title: 'Map',
          name: 'map',
          icon: 'public',
          component: Map
        },
        {
          title: 'Assets',
          name: 'assets',
          icon: 'list',
          component: Assets
        }
      ]
    }
  }
}
</script>
