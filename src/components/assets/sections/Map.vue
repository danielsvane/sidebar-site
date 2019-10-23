<template>
  <div id="mapbox">
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
// or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsc3ZhbmUiLCJhIjoiY2plNzZzb3RiMDkwdjJ3bXpyNTA4ZGc4dyJ9.m8wVa-i4jVuNxmLiu6uWrA'

export default {
  mounted () {
    const map = new mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [-74.50, 40],
      zoom: 9
    })

    console.log('mounted map')
    console.log()

    map.on('wheel', event => {
      if (event.originalEvent.ctrlKey) {
        return
      }
      if (event.originalEvent.metaKey) {
        return
      }
      if (event.originalEvent.altKey) {
        return
      }
      event.preventDefault()
    })
  }
}
</script>

<style scoped>
#mapbox {
  height: 400px;
  width: 100%;
}
</style>
