<template>
  <q-layout view="hHh LpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-avatar font-size="82px">
          <img src="assets/logo_thenga.png" >
        </q-avatar>
        <q-toolbar-title>
        Mytheenga
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
        v-model="drawer"
        :width="200"
        :breakpoint="500"
        show-if-above
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">

            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>

           <q-separator v-if="menuItem.separator" />

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
    <q-page padding>
      <router-view />
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
       <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-fab
              icon="help"
              direction="up"
              color="accent"
            >
              <q-fab-action @click="onClick" color="primary" icon="person_add" />
              <q-fab-action @click="onClick" color="primary" icon="mail" />
            </q-fab>
          </q-page-sticky>
          </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]
export default {
  data () {
    return {
      drawer: true,
      menuList,
      left: true
    }
  }
}

</script>

<style lang="stylus" scoped>
.menu-list .q-item
  border-radius 0 32px 32px 0
</style>
