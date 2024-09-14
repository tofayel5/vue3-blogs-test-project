<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-end">
      <li class="page-item" :class="{disabled: resData.current_page <= 1}">
        <a class="page-link" href="#" @click.prevent="onchangePage(1)">First Page</a>
      </li>
      <li class="page-item" :class="{disabled: resData.current_page <= 1}">
        <a class="page-link" href="#" @click.prevent="onchangePage(resData.current_page -1)" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li class="page-item" v-for="(item, index) in pages" :key="index" :class="isCurrentPage(item) ? 'active' : ''">
        <a class="page-link" href="#" @click.prevent="onchangePage(item)">{{item}}</a></li>

      <li class="page-item" :class="{disabled: resData.current_page >= resData.last_page}">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="onchangePage(resData.current_page +1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
      <li class="page-item" :class="{disabled: resData.current_page >= resData.last_page}">
        <a class="page-link" href="#" @click.prevent="onchangePage(resData.last_page)">Last Page</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {computed} from "vue";
import { useStore } from 'vuex'
const store = useStore()
// data and props section
const props = defineProps({
  offset: {
    type: Number,
    default: 7
  },
  resData: {
    type: Object
  },
})
// computed property section
const pages = computed(() => {
  let pages = []
  let from = props.resData.current_page - Math.floor(props.offset / 2)
  if (from < 1) {
    from = 1
  }
  let to = from + props.offset - 1
  if (to > props.resData.last_page) {
    to = props.resData.last_page
  }
  while (from <= to) {
    pages.push(from)
    from++
  }
  return pages
})
// function section
function isCurrentPage(page) {
  return props.resData.current_page === page
}
function onchangePage(page) {
  console.log('onchangePage: ', page)
  store.commit('SET_SET_CURRENT_PAGE', page)
  store.dispatch('getPosts', page)
}
</script>

<style lang="scss" scoped>

</style>
