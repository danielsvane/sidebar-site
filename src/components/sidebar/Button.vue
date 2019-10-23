<template>
  <router-link :to="to" :exact="exact">
    <div class="button">
      <i class="material-icons icon"> {{ icon }} </i>
      <div class="button-text">
        <slot></slot>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['icon', 'to', 'exact']
}
</script>

<style scoped>
.router-link-active .button-text {
  color: #7bce04;
}

.router-link-active .icon {
  color: #7bce04;
}

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
