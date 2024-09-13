<template>
  <div class="container">
    <div class="row mt-2">
      {{ item }}
      <div class="col-lg-12 col-12">
        <div class="card mb-4">
          <div class="card-header">
            New Product
          </div>
          <div class="card-body">
            <form>
              <div class="mb-1">
                <label for="title" class="form-label">Post Title</label>
                <input v-model="item.title" type="text" class="form-control" id="title" placeholder="Enter Post Title">
              </div>
              <div class="mb-1">
                <label for="description" class="form-label">Post Description</label>
                <textarea v-model="item.description" class="form-control" id="description" rows="5"></textarea>
              </div>
              <div class="mb-1">
                <label for="tags" class="form-label">Tags</label>
                <multiselect
                    v-model="item.tags"
                    :options="tagList"
                    :multiple="true"
                    :taggable="true"
                    :searchable="true"
                    placeholder="Select Tags"
                    label="name"
                    track-by="id"
                    @tag="addTag"
                ></multiselect>
              </div>
              <button type="button" class="btn btn-primary" @click="createPost()">Submit</button>
              <button type="button" class="btn btn-primary" @click="updatePost()">Update</button>
              <button type="button" class="btn btn-primary" @click="deletePost()">Delete</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Multiselect from "@suadelabs/vue3-multiselect";
import "@suadelabs/vue3-multiselect/dist/vue3-multiselect.css";
import Post from '@/api/Post'
import { onMounted, ref, computed } from "vue"
import { useStore } from 'vuex'
const store = useStore()

onMounted(() => {
  getTangs()
  getPost(141)
});

const item = ref({
  title: '',
  description: '',
  tags: []
});
const addTag = (newTag) => {
  item.value.tags.push(newTag);
};

const tagList = computed(() => store.getters.getTags);
console.log('tagList: ', tagList)
function getTangs() {
  store.dispatch('getTags')
}
function makePayload() {
  return{
    title: item.value.title,
    description: item.value.description,
    tags: item.value.tags.map(item => item.id)
  }
}
function getPost(id) {
  Post.postInfo(id).then(res => {
    console.log('post: ', res);
  }).catch(() => {
  })
}
function createPost() {
  const  payload = makePayload()
  console.log('makePayload: ', payload)
  Post.postAdd(payload).then(res => {
    console.log('res: ', res);
  })
}
function updatePost() {
  if (false) {

  } else {
    const payload = makePayload()
    console.log('makePayload: ', payload)
    Post.postUpdate(payload, 142).then(res => {
      console.log('res: ', res);
    })
  }
}
function deletePost() {
  if (false) {

  } else {
    const  payload = makePayload()
    console.log('makePayload: ', payload)
    Post.postDelete(142).then(res => {
      console.log('res: ', res);
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
