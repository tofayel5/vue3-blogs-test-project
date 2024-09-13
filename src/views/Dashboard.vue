<template>
  <div class="container">
    <div class="row mt-2">
<!--      {{posts}}-->
      <div class="col-lg-12 col-12">
        <div class="card mb-4">
          <div class="card-header">
            Post List
          </div>
          <div class="card-body">
            <div class="vue3-datatable sticky-table">
              <vue3-datatable v-if="posts.data" :rows="posts.data" :columns="cols" :totalRows="posts.data?.length" :pagination="false"
                              :sortable="true" :hasCheckbox="false" :stickyHeader="true" class="text-nowrap">
              </vue3-datatable>
            </div>
            <div class="mt-2">
              <pagination-component
                  v-if="posts.last_page > 1"
                  :res-data="posts"
                  :offset="7"
              ></pagination-component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Vue3Datatable from '@bhplugin/vue3-datatable'
import PaginationComponent from "@/components/PaginationComponent.vue"
import {computed, onMounted, ref} from "vue"
import { useStore } from 'vuex'
const store = useStore()

// table columns
const cols = ref([
  { field: 'id', title: 'ID', isUnique: true, width: '1px' },
  { field: 'title', title: 'Post Title' },
  { field: 'description', title: 'Description' }
]);
const posts = computed(() => store.getters.getPosts);
console.log('tagList: ', posts)
onMounted(() => {
  getPosts()
});
function getPosts() {
  store.dispatch('getPosts', 1)
}

</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/tables/table-basic.scss";
</style>
