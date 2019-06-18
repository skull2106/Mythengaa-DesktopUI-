<template>
<q-page>
<q-no-ssr>
      <swiper :options="swiperOption">
        <swiper-slide><q-card class="my-card">
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
      </q-card></swiper-slide>
        <swiper-slide><q-card class="my-card">
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
      </q-card></swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</q-no-ssr>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style scoped>
  .swiper-inner {
    width: 100%;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>
