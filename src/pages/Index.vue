<template>
<q-page padding>
  <div>
  <div class="carousel">
    <q-carousel
     height="400px"
      animated
      v-model="slide"
      arrows
      infinite
      swipeable
      thumbnails-icon
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/parallax1.jpg"/>
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
  </div>
  <div class="row-card q-gutter-sm row q-pa-md no-wrap">
  <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
        <div class="text-subtitle2">Mahesh Nagar</div>
        <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="orange"
        readonly
      />
      </div>
      </q-card-section>
      </q-card>
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
        <div class="text-subtitle2">Mahesh Nagar</div>
        <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="orange"
        readonly
      />
      </div>
      </q-card-section>
      </q-card>
      <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
        <div class="text-subtitle2">Mahesh Nagar</div>
        <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="orange"
        readonly
      />
      </div>
      </q-card-section>
      </q-card>
      <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
        <div class="text-subtitle2">Mahesh Nagar</div>
        <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="orange"
        readonly
      />
      </div>
      </q-card-section>
      </q-card>
      <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
        <div class="text-subtitle2">Mahesh Nagar</div>
        <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="orange"
        readonly
      />
      </div >
      </q-card-section>
      </q-card>
      <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
        <div class="text-subtitle2">Mahesh Nagar</div>
        <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="orange"
        readonly
      />
      </div>
      </q-card-section>
      </q-card>
      <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
        <div class="text-subtitle2">Mahesh Nagar</div>
        <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="orange"
        readonly
      />
      </div>
      </q-card-section>
      </q-card>
      <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
        <div class="text-subtitle2">Mahesh Nagar</div>
        <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="orange"
        readonly
      />
      </div>
      </q-card-section>
      </q-card>
      <q-card inline class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
        <div class="text-subtitle2">Mahesh Nagar</div>
        <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="orange"
        readonly
      />
      </div>
      </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
<style lang="stylus" scoped>
.row-card
  overflow-y hidden
  overflow-x scroll
  white-space nowrap
  padding 10px
.custom-caption
  text-align center
  padding 12px
  color white
  background-color rgba(0, 0, 0, .3)
.carousel
  padding 10px
.my-card
  display inline-block
  background white
  color black
  padding 10px
  width 100%
  max-width 350px
  height 300px
.col1
 padding 15px 0px
</style>
<script>
export default {
  data () {
    return {
      ratingModel: 3,
      text: '',
      model: null,
      slide: 1
    }
  }
}
</script>
