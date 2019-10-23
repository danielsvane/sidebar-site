<template>
  <div id="page">
    <SideBar></SideBar>

    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar/SideBar.vue'

export default {
  components: {
    SideBar
  }

}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Material+Icons&display=swap');

a {
  text-decoration: none;
}

#page {
  display: flex;
}

#container {
  position: absolute;
  padding-left: 63px;
  width: 100%;
  box-sizing: border-box;
}

.content {
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6rem;
  letter-spacing: 0.05rem;
  padding: 0;
  font-weight: 300;
  background: #ffffff;
}

body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: $dark;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

#menu {
  position: absolute;
  background: #4a4a4a;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.header {
  display: flex;
  align-items: center;
}

.header:hover {
  cursor: pointer;
}

.header:hover .title {
  color: #7bce04;
}

.header:hover .icon {
  color: #ffffff;
}

.header:not(:last-child) {
  border-bottom: 1px solid $dark;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: 100;
  padding: 0.8rem;
  color: white;
  transition: color 0.1s;
}

.icon {
  padding: 1rem;
  color: #ccc;
  font-size: 3rem;
  transition: color 0.1s;
}
</style>
