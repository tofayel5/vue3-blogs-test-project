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
                <template #actions="data">
                  <div class="flex">
                    <button type="button" class="btn btn-success bh-mr-2" @click="onClickEditPost(data.value.id)">Edit</button>
                    <button type="button" class="btn btn-danger" @click="deletePost(data.value.id)">Delete</button>
                  </div>
                </template>
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
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Post from "@/api/Post.js";
const store = useStore()
const router = useRouter()

// data section
const cols = ref([
  { field: 'id', title: 'ID', isUnique: true, width: '1px' },
  { field: 'title', title: 'Post Title' },
  { field: 'description', title: 'Description' },
  { field: 'actions', title: 'Actions' }
]);

// computed property section
const posts = computed(() => store.getters.getPosts);
console.log('tagList: ', posts)

// hooks section
onMounted(() => {
  getPosts()
});

// function section
function onClickEditPost(id) {
  console.log('onClickEditPost: ', id)
  router.push({ name: 'EditPost', params:{id: id}})
}
function getPosts() {
  store.dispatch('getPosts', 1)
}
function deletePost(id) {
  console.log('deletePost: ', id)
  Post.postDelete(id).then(res => {
    console.log('res: ', res);
    getPosts()
  })
}

</script>
<style lang="scss" scoped>
</style>