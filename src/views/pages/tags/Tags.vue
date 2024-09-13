<template>
  <div class="container">
    <div class="row mt-2">
      <div class="col-lg-12 col-12">
        <div class="card mb-4">
          <div class="card-header">
            Tags List
          </div>
          <div class="card-body">
            <div class="vue3-datatable sticky-table">
              <vue3-datatable :rows="tagList" :columns="cols" :totalRows="tagList?.length"
                              :sortable="true" :pageSize="20" :hasCheckbox="false" :stickyHeader="true" class="text-nowrap">
              </vue3-datatable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Vue3Datatable from '@bhplugin/vue3-datatable';
import { onMounted, ref, computed } from "vue"
import { useStore } from 'vuex'
const store = useStore()

// table columns
const cols = ref([
  { field: 'id', title: 'ID', isUnique: true, width: '1px' },
  { field: 'name', title: 'Name' },
  { field: 'slug', title: 'Slug' }
]);
const tagList = computed(() => store.getters.getTags);
console.log('tagList: ', tagList)
onMounted(() => {
  getTangs()
});
function getTangs() {
  store.dispatch('getTags')
}

</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/tables/table-basic.scss";
</style>
