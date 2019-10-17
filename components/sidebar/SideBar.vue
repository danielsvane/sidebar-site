<template>
  <div id="sidebar">
    <Button icon="people">Groups</Button>
    <Button icon="person">Users</Button>
    <Button icon="settings">Settings</Button>
    <Button icon="home">Locations</Button>
    <Button icon="public">Gates</Button>
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

<style scoped>
#sidebar {
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
  background: #222;
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
