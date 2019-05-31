<template>
<q-page padding>

<div>
  <div class="carousel">
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
  </div>
  <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">New to our Site</div>
        <div class="text-subtitle2">Register now</div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>
<style lang="stylus" scoped>
.carousel
  padding 10px
.my-card
  background black
  color white
  padding 10px
  width 100%
  max-width 250px
</style>
<script>
export default {
  data () {
    return {
      text: '',
      model: null,
      slide: 1
    }
  }
}
</script>
