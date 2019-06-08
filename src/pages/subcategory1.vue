<template>
<q-page padding>
<div class="page row">
<div class ="col">
<div class="text-h6">School/Sub-category 1</div>
<div class="q-pa-md" style="max-width: 350px">
    <q-list bordered padding class="rounded-borders text-secondary">
    <q-item-label header>Filters</q-item-label>

      <q-expansion-item
        expand-separator
        label="Location"
      >
      <q-item dense tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Jaipur</q-item-label>
        </q-item-section>
      </q-item>

      <q-item dense tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check2" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Ajmer</q-item-label>
        </q-item-section>
      </q-item>

      <q-item dense tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check3" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Other Location</q-item-label>
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
<div class="searchcard q-pa-md row items-start q-gutter-md justify-around">
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
          <q-item-label>Student Corner</q-item-label>
        </q-item-section>
      </q-item>
        <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/148/148845.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Mahesh Nagar</q-item-label>
          <q-item-label caption>Subhead</q-item-label>
        </q-item-section>
      </q-item>
       <q-item>
      <q-item-section avatar>
          <q-avatar>
            <img src="https://image.flaticon.com/icons/svg/13/13936.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>1234567890</q-item-label>
        </q-item-section>
      </q-item>
      </q-card-section>
    </q-card>
<q-card class="my-card" @click="studentcorner">
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
<q-card class="my-card" @click="studentcorner">
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
.col
 max-height 200px
 padding 10px 10px
.searchcard
 padding 10px 35px
.my-card
 max-width 400px
</style>
