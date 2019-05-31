<template>
<q-page>
<div>
  <div class="q-pa-md">
    <q-carousel
     height="600px"
      animated
      v-model="slide"
      arrows
      navigation
      infinite
      thumbnails-icon
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/parallax2.jpg">

      <q-card-section>
        <div class="text-h6">Legal</div>
      </q-card-section>
    </q-card>
  </div>
  </div>
  </q-page>
</template>
<style lang="stylus" scoped>
.custom-caption
  text-align center
  padding 12px
  color white
  background-color rgba(0, 0, 0, .3)
.my-card
  width 100%
  max-width 250px
</style>
<script>
export default {
  data () {
    return {
      slide: 1,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
