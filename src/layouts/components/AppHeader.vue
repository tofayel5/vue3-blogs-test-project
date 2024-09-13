<template>
  <div>
    <!--  BEGIN NAVBAR  -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/tags">
                Tags
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/posts">
                Posts
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/new-post">
                New Post
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register">
                Registration
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!--  END NAVBAR  -->
  </div>
</template>

<script setup>

</script>
