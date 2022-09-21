<template>
  <div>
    <q-layout view="lHh lpr lFf">
      <q-header class="bg">
        <q-toolbar>
        <q-toolbar-title>My App</q-toolbar-title>
        <q-tabs v-model="tab">
          <router-link to="table">
          <q-tab name="Table" label="Table" />
          </router-link>
          <router-link to="card">
          <q-tab name="Card" label="Card" />
          </router-link>
        </q-tabs>
        </q-toolbar>
      </q-header>

        <q-page class="main-container">
          <router-view></router-view>
        </q-page>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    return {
      tab: ref('Table')
    }
  }
}
</script>

<style scoped>
a {
  color: #ffffff;
  padding: 20px;
}
.main-container {
  margin-top: 100px;
}
.bg {
  background: #9d4d4d;
}
</style>
