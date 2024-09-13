<template>
  <div class="main">
    <component v-bind:is="layout"></component>
  </div>
</template>
<script setup>
import { computed } from "vue"
import { useStore } from "vuex"
import "@/assets/scss/app.scss"

const store = useStore()
console.log('store: ', store, store.getters.layout);
const layout = computed(() => {
  return store.getters.layout
});
console.log('layouts: ', layout);
</script>
<script>
// layouts
import appLayout from "@/layouts/AppLayout.vue"
import authLayout from "@/layouts/AuthLayout.vue"

export default {
  components: {
    app: appLayout,
    auth: authLayout
  },
  mounted() {
    console.log('route: ', this.$route)
  }
};
</script>
