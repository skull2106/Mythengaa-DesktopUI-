<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated reveal>
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          @click="drawer = !drawer"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-avatar font-size="82px">
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
        </q-avatar>
        <q-toolbar-title shrink width="fit">
          Mythengaa
        </q-toolbar-title>
        <q-separator />
        <div class="search-bar">
        <q-input bg-color="white" dense standout v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
        </div>
        <q-seprator />
        <q-separator dark vertical />
        <div class="btn">
      <q-btn stretch flat label="Sign Up/Login" />
      </div>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"

        :width="200"
        :breakpoint="500"
        show-if-above
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
          <q-item  active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mail" />
              </q-item-section>

              <q-item-section>
                Sign Up/Login
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                My Account
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Advertise
              </q-item-section>
            </q-item>

            <q-separator />

            <q-expansion-item
        expand-separator
        icon="mail"
        label="Categories"
        default-closed
      >
        <q-expansion-item
          :header-inset-level="0"
          expand-separator
          icon="receipt"
          label="Category-1"
          default-closed
        >

          <q-expansion-item switch-toggle-side dense-toggle label="Sub-category 1" :header-inset-level="0" :content-inset-level="0">
          </q-expansion-item>

          <q-expansion-item  switch-toggle-side dense-toggle label="Sub-category 2" :header-inset-level="0" :content-inset-level="0">
          </q-expansion-item>

        </q-expansion-item>
        <q-expansion-item :header-inset-level="0" :content-inset-level="0" expand-separator icon="receipt" label="Category-2">
        </q-expansion-item>

      </q-expansion-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    <q-page-container>
      <router-view />
      <div class ="row-search justify-around">
      <div class="q-pa-md bg-grey-10 text-white">
      <div class="column search">
    <q-list dark bordered separator style="max-width: 318px">
      <q-item clickable v-ripple>
        <q-item-section>Footer Tasks</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Task1</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label overline>Task2</q-item-label>
          <q-item-label>Some Caption</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  </div>
  <div class="col3"> Property of Saurabh</div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      drawer: true,
      miniState: true,
      text: 'Search',
      leftDrawerOpen: this.$q.platform.is.desktop,
      model: null,
      options: [
        'Jaipur', 'Ajmer', 'Bewar', 'Jodhpur', 'Udaipur'
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus" scoped>
.search-bar
  padding 10px
.btn:hover
  background-color white
  text-align centre
  color black
.btn
  background-color primary
  text-align centre
  padding 14px 16px
  font-size 18px
  color white
.row-search
  background-color #252525
  padding 30px 30px
.col3
  text-align centre
</style>
