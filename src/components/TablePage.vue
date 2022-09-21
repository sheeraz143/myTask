<template>
   <div class="q-pa-md">
    <q-table
      class="my-sticky-header-column-table"
      title="Table Data"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :pagination="initPage"
      :loading="loading"
    >
    <template v-slot:loading>
      <q-inner-loading showing />
    </template>
    </q-table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
const rows = ref([])

const loading = ref(true)

onMounted(() => getData())

const getData = () =>
  axios
    .get('https://api.publicapis.org/entries', {
      criteria: {}
    })
    .then(({ data }) => {
      rows.value = data.entries
      loading.value = false
    })
    .catch((e) => console.log('root error', e))

const columns = [
  { name: 'API', label: 'API', field: 'API', align: 'center' },
  { name: 'Description', label: 'Description', field: 'Description', align: 'center' },
  { name: 'Auth', label: 'Auth', field: 'Auth', align: 'center' },
  { name: 'HTTPS', label: 'HTTPS', field: 'HTTPS', align: 'center' },
  { name: 'Cors', label: 'Cors', field: 'Cors', align: 'center' },
  { name: 'Link', label: 'Link', field: 'Link', align: 'center' },
  { name: 'Category', label: 'Category', field: 'Category', align: 'center' }
]

const initPage = {
  sortBy: 'desc',
  descending: false,
  page: 2,
  rowsPerPage: 15
}
</script>

<style >
.my-sticky-header-column-table {
  height: 600px; }
  .my-sticky-header-column-table td:first-child {
    background-color: #9d4d4d !important;
    font-weight: 500; }
  .my-sticky-header-column-table tr th {
    position: sticky;
    z-index: 2;
    background: #9d4d4d;
    color: #fff; }
  .my-sticky-header-column-table thead tr:last-child th {
    top: 48px;
    z-index: 3; }
  .my-sticky-header-column-table thead tr:first-child th {
    top: 0;
    z-index: 1; }
  .my-sticky-header-column-table tr:first-child th:first-child {
    z-index: 3; }
  .my-sticky-header-column-table td:first-child {
    z-index: 1; }
  .my-sticky-header-column-table td:first-child, .my-sticky-header-column-table th:first-child {
    position: sticky;
    left: 0;
    color: #fff; }

</style>
