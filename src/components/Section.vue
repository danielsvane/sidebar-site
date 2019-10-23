<template>
  <div class="section">
    <div class="header" @click="$emit('update:expanded', !expanded)">
      <i class="material-icons icon"> {{ icon }}</i>
      <div class="title">
        {{ title }}
      </div>
    </div>
    <div class="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

//

export default {
  props: {
    title: String,
    icon: String,
    expanded: {
      type: Boolean,
      default: true
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.wrapper {
  box-shadow: 0 -5px 5px -5px #111, 0 5px 5px -5px #111;
  /* box-shadow: 0px 0px 5px rgba(0,0,0,0.5); */
}
</style>
