<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2 rounded-borders">
    <q-header elevated reveal>
      <q-toolbar shrink class="glossy">
       <q-btn  class="d-btn" icon="home" flat @click="home"/>
        <q-toolbar-title shrink>
        <q-avatar font-size="82px">
          <img src="https://mythengaa.com/images/logo_thenga.png">
        </q-avatar>
          Mythengaa
        </q-toolbar-title>
        <q-btn class="d-btn" icon-right="img:https://image.flaticon.com/icons/svg/262/262611.svg" flat label="Categories">
        <q-menu
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <q-list style="min-width: 100px">
        <q-expansion-item
          :header-inset-level="0"
          expand-separator
          icon="img:https://image.flaticon.com/icons/svg/327/327131.svg"
          label="Schools"
          default-closed
        >

          <q-expansion-item @click="subcategory1" switch-toggle-side dense-toggle label="Sub-category 1" :header-inset-level="0" :content-inset-level="0">
          </q-expansion-item>

          <q-expansion-item  switch-toggle-side dense-toggle label="Sub-category 2" :header-inset-level="0" :content-inset-level="0">
          </q-expansion-item>

        </q-expansion-item>
        <q-expansion-item :header-inset-level="0" :content-inset-level="0" expand-separator icon="img:https://image.flaticon.com/icons/svg/328/328062.svg" label="Legal">
        </q-expansion-item>
          </q-list>
          </q-menu>
      </q-btn>
        <div class="search-bar">
        <q-input dense bg-color="white" standout hide-bottom-space v-model="text" input-class="text-right" class="q-ml-md" style="max-width: 700px">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
        </div>
    <q-btn color="blue" icon="search"/>
        <div class="d-btn">
        <q-btn no-focus class="d-btn" icon="img:https://image.flaticon.com/icons/svg/484/484167.svg" icon-right="img:https://image.flaticon.com/icons/svg/118/118738.svg" flat label="Location">
        <q-menu
          transition-show="jump-down"
          transition-hide="jump-up"
          cover anchor="top middle"
        >
          <q-list style="min-width: 200px">
            <q-item clickable>
              <q-item-section>Jaipur</q-item-section>
            </q-item>
            <q-item dense clickable>
              <q-item-section>Ajmer</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Other</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      </div>
        <q-space />
        <q-separator dark vertical />
        <div class="d-btn">
        <q-btn no-focus class="d-btn" icon-right="img:https://image.flaticon.com/icons/svg/118/118738.svg" flat label="More">
        <q-menu
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <q-list style="min-width: 200px">
            <q-item clickable>
              <q-item-section avatar>
          <q-icon name="img:https://image.flaticon.com/icons/svg/126/126472.svg" />
        </q-item-section>
              <q-item-section>My Account</q-item-section>
            </q-item>
            <q-item dense clickable>
            <q-item-section avatar>
          <q-icon name="img:https://image.flaticon.com/icons/svg/33/33308.svg" />
        </q-item-section>
              <q-item-section>Sign Up/Login</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
            <q-item-section avatar>
          <q-icon name="img:https://image.flaticon.com/icons/svg/25/25694.svg" />
        </q-item-section>
              <q-item-section>About Us</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
      <div class ="row-search row justify-around">
      <div class="q-pa-md text-white">
      <div class="column2 col">
      <q-icon size="200px" name="img:https://mythengaa.com/images/logo_thengaa.png" />
    </div>
    </div>
    <div class="q-pa-md text-white">
    <div class="column2 col">
    <q-list dark style="width: 218px">
      <q-item>
        <q-item-section><div style="font-size: 24px">MENU</div></q-item-section>
      </q-item>
      <q-separator dark inset color ="orange"/>
      <q-item dense clickable v-ripple style="height: 10px" nowrap @click="home">
        <q-item-section>
          <q-item-label>Home</q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense clickable v-ripple>
        <q-item-section>
          <q-item-label>About</q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense clickable v-ripple>
        <q-item-section>
          <q-item-label>Services</q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense clickable>
        <q-item-section>
          <q-item-label>Contact</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  </div>
  <div class="q-pa-md text-white">
    <div class="column2 col">
    <q-list dark style="width: 218px">
      <q-item>
        <q-item-section><div style="font-size: 24px">GENERAL</div></q-item-section>
      </q-item>
      <q-separator dark inset color ="orange"/>
      <q-item dense clickable v-ripple style="height: 10px" nowrap>
        <q-item-section>
          <q-item-label>Terms of Use</q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense clickable v-ripple>
        <q-item-section>
          <q-item-label>Refund Policies</q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense clickable v-ripple>
        <q-item-section>
          <q-item-label>Get Listed</q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense clickable>
        <q-item-section>
          <q-item-label>User Aggrement</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  </div>
  <div class="q-pa-md text-white">
    <div class="column2 col">
    <q-list dark style="max-width: 350px">
      <q-item>
        <q-item-section><div style="font-size: 24px">Stay Connected</div></q-item-section>
      </q-item>
      <q-separator spaced dark inset color ="orange"/>
    </q-list>
    <div class="q-pa-md q-gutter-sm">
    <q-btn round color="white" icon="img:https://image.flaticon.com/icons/svg/733/733614.svg" />
    <q-btn round color="white" icon="img:https://image.flaticon.com/icons/svg/747/747374.svg" />
    <q-btn round color="white" icon="img:https://image.flaticon.com/icons/svg/12/12194.svg" />
    </div>
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
      <div class="q-pa-md" style="max-width: 500px">
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
        type="text"
        v-model="password"
        label="Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <div class="row">
        <q-btn label="Login" @click="logincheck" color="primary"/>
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
      category: null,
      options: [
        'Seller', 'Customer'],
      name: null,
      age: null,
      accept: false,
      username: null,
      password: null
    }
  },
  methods: {
    logincheck () {
      if (this.username === 'skull' && this.password === '123') {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'Account verified'
        })
      } else {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'Your accound doesnt exist'
        })
      }
    },
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
      this.username = null
      this.password = null
      this.name = null
      this.age = null
      this.category = null
      this.accept = false
    },
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
  padding 10px 0px
  width 700px
.row-search
  background-color #252525
  padding 10px 50px
.column
  text-align centre
.d-btn
  color black
  background-color primary
.d-btn:hover
  color black
  background-color primary
.form
  background-color white
  padding 20px 20px
</style>
