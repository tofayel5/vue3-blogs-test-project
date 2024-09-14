<template>
  <!--  BEGIN NAVBAR  -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tags">Tags</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/posts">Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/new-post">New Post</router-link>
          </li>
          <li class="float-end"><a class="nav-item" @click="logout()">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <!--  END NAVBAR  -->
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()

// function section
function logout() {
  store.dispatch('logout')
      .then(() => {
        router.push({ name: 'Login'})
      })
      .catch(() => {
        // do something
      })
}
</script>

<style lang="scss" scoped>
li a {
  text-decoration: none;
  padding: 5px;
}
</style>
