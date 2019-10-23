<template>
  <div id="info">
    <img src="https://placeimg.com/640/480/tech">
    <div style="padding: 1rem;">
      <Display title="Brand">LED lampe</Display>
      <Display title="Model">Panasonic</Display>
      <Display title="Created">January 1st, 2019</Display>
      <Display title="Categories">Lights</Display>
      <Display title="Description"> {{ content }} </Display>
    </div>
  </div>
</template>

<script>
import Display from '../Display.vue'
import { LoremIpsum } from 'lorem-ipsum'

export default {
  components: {
    Display
  },
  computed: {
    content () {
      const lorem = new LoremIpsum({
        sentencesPerParagraph: {
          max: 3,
          min: 2
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      })

      return lorem.generateParagraphs(1)
    }
  }
}
</script>

<style scoped>
#info {
  display: flex;
}

img {
  margin: 0;
  padding: 0;
  display: block;
}
</style>
