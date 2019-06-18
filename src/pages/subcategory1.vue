<template>
<q-page padding class="page">
<div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/" />
      <q-breadcrumbs-el label="Schools" icon="img:https://image.flaticon.com/icons/svg/327/327131.svg" to="/start/pick-quasar-flavour" />
      <q-breadcrumbs-el label="Sub-category-1" icon="navigation" to="/vue-components/breadcrumbs" />
    </q-breadcrumbs>
  </div>
<div class="row justify-around">
<div class ="col-2 filter">
<div class="q-pa-md">
    <q-list bordered padding class="rounded-borders text-secondary">
    <q-item-label class ="my-font" header>Filters</q-item-label>

      <q-expansion-item
        expand-separator
        label="Location"
      >
      <q-item dense tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Jaipur</q-item-label>
        </q-item-section>
      </q-item>

      <q-item dense tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check2" />
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Ajmer</q-item-label>
        </q-item-section>
      </q-item>

      <q-item dense tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check3" />
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Other Location</q-item-label>
        </q-item-section>
      </q-item>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        label="Filter 1"
      >
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        label="Filter 2"
      >
      </q-expansion-item>
    </q-list>
  </div>
  </div>
  <div class="col">
<div class="searchcard q-pa-md row items-start q-gutter-md justify-center wrap">
<q-card class="my-card" @click="studentcorner">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
      <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://www.flaticon.com/premium-icon/icons/svg/666/666201.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Student Corner</q-item-label>
        </q-item-section>
      </q-item>
        <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/148/148845.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Mahesh Nagar</q-item-label>
          <q-item-label class ="my-font" caption>Subhead</q-item-label>
        </q-item-section>
      </q-item>
       <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/13/13936.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">1234567890</q-item-label>
        </q-item-section>
      </q-item>
      </q-card-section>
    </q-card>
<q-card class="my-card" @click="studentcorner">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
      <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://www.flaticon.com/premium-icon/icons/svg/666/666201.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Student Corner</q-item-label>
        </q-item-section>
      </q-item>
        <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/148/148845.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Mahesh Nagar</q-item-label>
          <q-item-label class ="my-font" caption>Subhead</q-item-label>
        </q-item-section>
      </q-item>
       <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/13/13936.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">1234567890</q-item-label>
        </q-item-section>
      </q-item>
      </q-card-section>
    </q-card>
<q-card class="my-card" @click="studentcorner">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
      <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://www.flaticon.com/premium-icon/icons/svg/666/666201.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Student Corner</q-item-label>
        </q-item-section>
      </q-item>
        <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/148/148845.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Mahesh Nagar</q-item-label>
          <q-item-label class ="my-font" caption>Subhead</q-item-label>
        </q-item-section>
      </q-item>
       <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/13/13936.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">1234567890</q-item-label>
        </q-item-section>
      </q-item>
      </q-card-section>
    </q-card>
    <q-card class="my-card" @click="studentcorner">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
      <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://www.flaticon.com/premium-icon/icons/svg/666/666201.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Student Corner</q-item-label>
        </q-item-section>
      </q-item>
        <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/148/148845.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Mahesh Nagar</q-item-label>
          <q-item-label class ="my-font" caption>Subhead</q-item-label>
        </q-item-section>
      </q-item>
       <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/13/13936.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">1234567890</q-item-label>
        </q-item-section>
      </q-item>
      </q-card-section>
    </q-card>
    <q-card class="my-card" @click="studentcorner">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
      <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://www.flaticon.com/premium-icon/icons/svg/666/666201.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Student Corner</q-item-label>
        </q-item-section>
      </q-item>
        <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/148/148845.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Mahesh Nagar</q-item-label>
          <q-item-label class ="my-font" caption>Subhead</q-item-label>
        </q-item-section>
      </q-item>
       <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/13/13936.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">1234567890</q-item-label>
        </q-item-section>
      </q-item>
      </q-card-section>
    </q-card><q-card class="my-card" @click="studentcorner">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
      <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://www.flaticon.com/premium-icon/icons/svg/666/666201.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Student Corner</q-item-label>
        </q-item-section>
      </q-item>
        <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/148/148845.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">Mahesh Nagar</q-item-label>
          <q-item-label class ="my-font" caption>Subhead</q-item-label>
        </q-item-section>
      </q-item>
       <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/13/13936.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class ="my-font">1234567890</q-item-label>
        </q-item-section>
      </q-item>
      </q-card-section>
    </q-card>
</div>
</div>
</div>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      ratingModel: 3,
      check1: true,
      check2: false,
      check3: false
    }
  },

  methods: {
    studentcorner () {
      this.$router.push('/studentcorner')
    }
  }
}
</script>
<style lang="stylus" scoped>
.page
  max-width 1600px
  align center
  padding 0px 30px
  padding-bottom 20px
  margin 0 auto
.col
 padding 10px 10px
.searchcard
 padding 10px 35px
.my-card
 max-width 250px
.filter
 padding 40px 0px
</style>
