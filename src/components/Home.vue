<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" view="hHr LpR lFf">
    <q-toolbar slot="header">
      <!-- opens drawer below-->
      <button class="hide-on-drawer-visible" @click="$refs.layout.toggleLeft()">
        <q-icon name="menu"></q-icon>
      </button>

      <q-toolbar-title>
        echroma
      </q-toolbar-title>
    </q-toolbar>

    <!-- Left Side Panel -->
    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-list-header>Menu</q-list-header>
        
        <q-item @click="newPainting()">
          <q-item-side icon="add_to_photos" />
          <q-item-main label="New Painting" sublabel="Start evolving a new painting!" />
        </q-item>

      </q-list>
    </div>

    <router-view />
  </q-layout>
</template>

<script>
  import Home from './Home'
  export default Home
</script>

<style>
</style>
