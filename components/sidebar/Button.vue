<template>
  <div class="button">
    <i class="material-icons icon"> {{ icon }} </i>
    <div class="button-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['icon']
}
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  transition: background-color .3s;
}

.button-text {
  font-family: 'Roboto';
  color: #ccc;
  font-size: 0.8rem;
  font-weight: 300;
  text-transform: uppercase;
}

.button:hover {
  cursor: pointer;
  background-color: #333;
}

.button:hover .button-text {
  color: #ffffff;
}

.button:hover .icon {
  color: #ffffff;
}

.icon {
  font-size: 2rem;
  padding: 0 1rem 0 0;
}
</style>
