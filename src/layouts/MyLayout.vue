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
          <img src="https://mythengaa.com/images/logo_thenga.png">
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
      <q-btn stretch flat class="d-btn" label="Sign Up/Login" @click="registration = true" />
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
          <q-item @click="home" active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Home
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple @click="login=true">
              <q-item-section avatar>
                <q-icon name="img:https://image.flaticon.com/icons/svg/60/60473.svg" />
              </q-item-section>

              <q-item-section>
                Sign Up/Login
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="img:https://image.flaticon.com/icons/svg/126/126486.svg" />
              </q-item-section>

              <q-item-section>
                My Account
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple >
              <q-item-section avatar>
                <q-icon name="img:https://image.flaticon.com/icons/svg/1289/1289376.svg" />
              </q-item-section>

              <q-item-section>
                Advertise
              </q-item-section>
            </q-item>

            <q-separator />

            <q-expansion-item
        expand-separator
        icon="img:https://image.flaticon.com/icons/svg/262/262611.svg"
        label="Categories"
        default-closed
      >
        <q-expansion-item
          :header-inset-level="0"
          expand-separator
          icon="img:https://image.flaticon.com/icons/svg/32/32213.svg"
          label="Category-1"
          default-closed
        >

          <q-expansion-item @click="subcategory1" switch-toggle-side dense-toggle label="Sub-category 1" :header-inset-level="0" :content-inset-level="0">
          </q-expansion-item>

          <q-expansion-item  switch-toggle-side dense-toggle label="Sub-category 2" :header-inset-level="0" :content-inset-level="0">
          </q-expansion-item>

        </q-expansion-item>
        <q-expansion-item :header-inset-level="0" :content-inset-level="0" expand-separator icon="img:https://image.flaticon.com/icons/svg/32/32213.svg" label="Category-2">
        </q-expansion-item>

      </q-expansion-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    <q-page-container>
      <router-view />
      <div class ="row-search row justify-around">
      <div class="q-pa-md bg-grey-10 text-white">
      <div class="column2">
      <q-img
      :src="url"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />
    </div>
    </div>
    <div class="q-pa-md bg-grey-10 text-white">
    <div class="column2">
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
  <div class="q-pa-md bg-grey-10 text-white">
      <div class="column2">
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
  <div class="q-pa-md bg-grey-10 text-white">
      <div class="column2">
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
  </div>
    </q-page-container>
    <q-dialog v-model="registration">
      <div class="q-pa-md" style="max-width: 500px">
      <div class="form">
      <div class="heading1">
      <q-avatar font-size="82px">
          <img src="https://mythengaa.com/images/logo_thenga.png">
        </q-avatar>
      Registration
      </div>
      <q-seprator dark horizontal/>
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
        <q-btn flat label="Already have an account?" @click="registration=false,login=true"/>
      </div>
    </q-form>

  </div>
  </div>
    </q-dialog>
    <q-dialog v-model="login">
      <div class="q-pa-md" style="max-width: 600px width: 100%">
      <div class="form">
      <div class="heading1">
      <q-avatar font-size="82px">
          <img src="https://mythengaa.com/images/logo_thenga.png">
        </q-avatar>
      Login
      </div>
      <q-seprator dark horizontal/>
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
        v-model="username"
        label="Email/Mobile"
        hint="Enter email or mob. no"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <div>
        <q-btn label="Login" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-space />
        <q-btn flat label="Don't have an account?" @click="registration=true,login=false"/>
      </div>
    </q-form>

  </div>
  </div>
    </q-dialog>
  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
      registration: true,
      login: false,
      drawer: true,
      miniState: true,
      text: 'Search',
      url: 'https://mythengaa.com/images/logo_thengaa.png',
      leftDrawerOpen: this.$q.platform.is.desktop,
      model: null,
      options: [
        'Jaipur', 'Ajmer', 'Bewar', 'Jodhpur', 'Udaipur'
      ]
    }
  },
  methods: {
    subcategory1 () {
      this.$router.push('/subcategory1')
    },
    home () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
.heading1
 padding 10px
 font-size 20px
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
  padding 10px 10px
.column
  text-align centre
.d-btn
  background-color primary
.d-btn:hover
  color black
  bg-color white
.form
  background-color white
  padding 20px 20px
.coloumn2
  padding 10px 10px
  width 100%
  color red
  max-width 350px
</style>
