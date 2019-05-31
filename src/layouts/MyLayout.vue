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
        <q-toolbar-title>
          Mythengaa
        </q-toolbar-title>

        <q-separator />
        <div class="q-pa-md" style="max-width: 300px">
        <q-input dark borderless standout="bg-secondary text-white" padding v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
        </div>
         <div class="q-pa-md" style="max-width: 300px">
        <q-select rounded outlined v-model="model" :options="options" label="Location" />
        <q-space />
        </div>
        <q-separator dark vertical />
      <q-btn stretch flat label="Sign Up/Login" />
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
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Sign Up/Login
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
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

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Categories
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    <q-page-container>
      <router-view />
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

<style>
</style>
