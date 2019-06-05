<template>
<q-page>
<div class="toolbar">
<div class="q-pa-md q-gutter-y-sm">
    <q-toolbar class="text-primary">
      <q-toolbar-title shrink>
        Filters:
      </q-toolbar-title>
      <q-space />
      <q-btn flat round dense icon="more_vert" />
    </q-toolbar>
    <q-separator horizontal dense/>
</div>
</div>
<div class="searchcard row">
<div class="col">
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
<div class="col">
<q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Company 2</div>
        <div class="text-subtitle2">Description</div>
      </q-card-section>
    </q-card>
    </div>
<div class ="col">
<q-card class="mycard">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">
      <q-card-section>
        <div class="text-h6">Company 3</div>
        <div class="text-subtitle2">Description</div>
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
      ratingModel: 3
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
