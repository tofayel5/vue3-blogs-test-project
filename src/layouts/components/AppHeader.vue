<template>
  <!--  BEGIN NAVBAR  -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand"  to="/">Blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tags">Tags</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/posts">Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/new-post">New Post</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout">Logout</a>
          </li>
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
.navbar-brand{
  text-decoration: none;
  padding: 5px;
  font-size: 1.2rem;
  color: rgb(0, 0, 0);
  font-weight: bold;
  cursor: pointer;
}

li a, a {
  text-decoration: none;
  padding: 5px;
  color: rgb(84, 84, 84);
  font-weight: bold;
  cursor: pointer;
}
li a:hover {
  color: rgb(0, 0, 0);

}
</style>
