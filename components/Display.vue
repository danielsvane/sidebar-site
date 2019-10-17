<template>
  <div class="display">
    <div class="display-title">
      {{ title }}
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.display {
  margin: 1rem;
}

.display-title {
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 300;
  line-height: 1.2rem;
  letter-spacing: 0.02rem;
  opacity: 0.8;
}

.body {
  font-weight: 300;
  letter-spacing: 0.02rem;
}
</style>
