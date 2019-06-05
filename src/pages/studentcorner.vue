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
  <div class="content">
<div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="description" label="Description" />
          <q-tab name="contact" label="Contact" />
          <q-tab name="review" label="Review" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="description">
            <div class="text-h6">Student Corner</div>
            All the description we want to add
          </q-tab-panel>

          <q-tab-panel name="contact">
            <div class="text-h6">Contact US</div>
            Their contact info
          </q-tab-panel>

          <q-tab-panel name="review">
            <div class="text-h6">Customer Reviews</div>
            All the customer reviews
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
  </div>
</q-page>
</template>
<style lang="stylus" scoped>
.content
 padding 0px 10px
 max-width 100%
 width 100%
</style>
<script>
export default {
  data () {
    return {
      tab: 'description',
      slide: 1
    }
  }
}
</script>
