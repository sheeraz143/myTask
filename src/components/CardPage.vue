<template>
  <q-input
    class="q-pa-md search-bar"
    v-model="valueSearch"
    outlined
    bordered
    placeholder="Search"
  >
  <template v-slot:append>
    <q-icon name="search" />
  </template>
  </q-input>
  <div class="q-pa-md flex flex-center row items-start q-gutter-md">
    <q-card class="my-card" flat bordered v-for="(item, index) in searchIndex" :key="item">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom text-subtitle2 text-left">
          {{ item.header }}
        </div>
      </q-img>
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ item.title }}</div>
        <div class="text-caption text-grey">
          {{ item.details }} </div>
      </q-card-section>
      <q-card-actions>
        <q-btn
          flat
          dense
          @click="deleteValue(index)"
        >Delete Card</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const valueSearch = ref('')
const items = ref([
  { header: 'Header1', title: 'Title1', details: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  ' },
  { header: 'Header2', title: 'Title2', details: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  ' },
  { header: 'Header3', title: 'Title3', details: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  ' },
  { header: 'Header4', title: 'Title4', details: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  ' },
  { header: 'Header5', title: 'Title5', details: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  ' },
  { header: 'Header6', title: 'Title6', details: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  ' },
  { header: 'header7', title: 'Title7', details: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  ' },
  { header: 'Header8', title: 'Title8', details: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  ' }
])
const searchIndex = computed(() => {
  return items.value
    .filter(
      ({ header, title, details }) => [header, title, details]
        .some(val => val.toLowerCase().includes(valueSearch.value))
    )
})
function deleteValue (index) {
  this.items.splice(index, 1)
}
</script>

<style scoped>
.my-card {
  width: 100%;
  width: 350px;
}
.search-bar{
    width: 400px;
    margin-left: 36px;
}
</style>
