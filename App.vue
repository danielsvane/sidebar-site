<template>
  <div id="page">
    <SideBar></SideBar>

    <div id="container">
      <transition name="fade">
        <div v-if="!expanded" id="menu">
          <div class="menu-container" :style="{'margin-top' : menuHeight}">

            <div v-for="(section, index) in sections" :key="index" class="header" :id="section.name + '-menu'" @click="scrollTo('#' + section.name, $event)">
              <i class="material-icons icon">{{ section.icon }}</i>
              <div class="title">
                {{ section.title }}
              </div>
            </div>

          </div>
        </div>
      </transition>
      <Section v-for="(section, index) in sections" :key="index"
        @click.native="menuTo(section.name + '-menu', $event, 0)"
        :id="section.name"
        :expanded.sync="expanded"
        :title="section.title"
        :icon="section.icon">
        <component :is="section.component"></component>
      </Section>
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar/SideBar.vue'
import Section from './components/Section.vue'
import VueScrollTo from 'vue-scrollto'
import Info from './components/sections/Info.vue'
import Position from './components/sections/Position.vue'
import Pairing from './components/sections/Pairing.vue'
import Service from './components/sections/Service.vue'
import './assets/css/nanolink.css'

export default {
  components: {
    Section,
    Info,
    Position,
    Pairing,
    Service,
    SideBar
  },
  data () {
    return {
      expanded: true,
      showMenu: false,
      y: 0,
      sections: [
        {
          title: 'Info',
          name: 'info',
          icon: 'subject',
          component: 'Info'
        },
        {
          title: 'Position',
          name: 'position',
          icon: 'public',
          component: 'Position'
        },
        {
          title: 'Pairing',
          name: 'pairing',
          icon: 'insert_link',
          component: 'Pairing'
        },
        {
          title: 'Service',
          name: 'service',
          icon: 'build',
          component: 'Service'
        }
      ]
    }
  },
  computed: {
    menuHeight () {
      // if (this.y > 0) return this.y + 'px'
      return '0px'
    }
  },
  methods: {
    menuTo (element, e, index) {
      const target = document.getElementById(element)
      const offset = target.getClientRects()[0].height

      const pos = e.target.getClientRects()[0]
      const top = pos.y
      const newY = top - offset * index
      this.y = newY
    },
    scrollTo (fuck, stuff) {
      console.log(stuff)
      this.expanded = true
      var options = {
        container: 'body',
        easing: 'ease-in-out',
        offset: 0,
        force: true,
        cancelable: true,
        onStart: function (element) {
          // scrolling started
        },
        onDone: function (element) {
          // scrolling is done
        },
        onCancel: function () {
          // scrolling has been interrupted
        },
        x: false,
        y: true
      }

      console.log('scrolling to')

      VueScrollTo.scrollTo(fuck, 500, options)
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Material+Icons&display=swap');

#page {
  display: flex;
}

#container {
  position: absolute;
  left: 63px;
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
  background: #222;
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
  border-bottom: 1px solid #313131;
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
