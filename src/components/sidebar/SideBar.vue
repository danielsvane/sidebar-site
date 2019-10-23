<template>
  <div id="sidebar">
    <Button icon="show_chart" to="/" exact>Dashboard</Button>
    <Button icon="public" to="/assets">Assets</Button>
    <Button icon="person" to="/users">Users</Button>
  </div>
</template>

<script>
import Button from './Button'

export default {
  components: {
    Button
  },
  data () {
    return {
      expanded: false
    }
  }
}
</script>

<style scoped lang="scss">
#sidebar {
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  background: $dark;
  width: 63px;
  overflow: hidden;
  transition: width .3s;
  position: fixed;
  z-index: 2;
  height: 100vh;
}

#sidebar:hover {
  width: 200px;
}

.open {
  width: 300px;
}
</style>
