<template>
<q-page-container>
<q-page class="justify-center docs-btn page">
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
  <div class="row">
  <div class ="text-h6 my-font q-pa-md">Trending Services</div>
  <q-separator />
  <q-no-ssr>
      <swiper :options="swiperOption">
        <swiper-slide>
        <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
      </q-card-section>
      </q-card></swiper-slide>
        <swiper-slide>
        <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
      </q-card-section>
      </q-card>
      </swiper-slide>
        <swiper-slide>
        <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
      </q-card-section>
      </q-card></swiper-slide>
        <swiper-slide>
        <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Legal</div>
      </q-card-section>
      </q-card></swiper-slide>
        <swiper-slide>
        <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
      </q-card-section>
      </q-card></swiper-slide>
        <swiper-slide>
        <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Student Corner</div>
      </q-card-section>
      </q-card></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
</q-no-ssr>
</div>
  </q-page>
  </q-page-container>
</template>
<style lang="stylus" scoped>
.custom-caption
  text-align center
  padding 12px
  color white
  background-color rgba(0, 0, 0, .3)
.carousel
  padding 0px 10px
.my-card
  display inline-block
  background white
  color black
  padding 10px
  width 100%
  max-width 280px
  height 250px
.page
  max-width 1600px
  align center
  padding 0px 30px
  padding-bottom 20px
  margin 0 auto
.col1
 padding 15px 0px
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
<script>
export default {
  methods: {
    async subscribe () {
      const messaging = this.$firebase.messaging()
      const subscribeNotifications = this.$firebase.functions().httpsCallable('subscribeNotifications')
      try {
        await messaging.requestPermission()
        const token = await messaging.getToken()

        await subscribeNotifications({
          token,
          subscribe: true
        })
        this.isSubscribed = true
      } catch (error) {
        console.error('Unable to subscribe.', error)
      }
    }
  },
  data () {
    return {
      ratingModel: 3,
      text: '',
      model: null,
      slide: 1,
      swiperOption: {
        grabCursor: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
