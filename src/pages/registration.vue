<template>
<q-page>
<div class ="registration-form">
<div class="q-pa-md" style="max-width: 500px">

    <q-form
      position="center"
      @submit="onSubmit"
      @reset="onReset"
      class="form_1"
    >
      <q-input
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
        filled
        v-model="name"
        label="Your name *"
        hint="First Name and Last Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />
      <q-select
        filled
        outlined
        v-model="category"
        :options="options"
        label="Select what are you *"
        lazy-rules
        :rule="[val => val.length < 3 || 'Please select a choice']"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-sapce />
        <q-btn flat label="Already have an account?" />
      </div>
    </q-form>

  </div>
  </div>
</q-page>
</template>
<script>
export default {
  data () {
    return {
      category: null,
      options: [
        'Seller', 'Customer'],
      name: null,
      age: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.category = null
      this.accept = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.form_1
 border-style groove
 padding 20px 25px
 border-width 2px
 float centre
.registration-form
 float centre
 padding 15% 25% 20% 35%
</style>
