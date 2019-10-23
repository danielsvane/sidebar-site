<template>
  <div class="page">
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
</template>

<script>
import Section from '@/components/Section.vue'
import VueScrollTo from 'vue-scrollto'

export default {
  props: ['sections'],
  components: {
    Section
  },
  data () {
    return {
      expanded: true,
      showMenu: false,
      y: 0
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
      // const target = document.getElementById(element)
      // const offset = target.getClientRects()[0].height

      // const pos = e.target.getClientRects()[0]
      // const top = pos.y
      // const newY = top - offset * index
      // this.y = newY
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

<style scoped>
.page {
  width: 100%;
}
</style>
