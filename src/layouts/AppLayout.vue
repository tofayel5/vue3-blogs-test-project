<script setup>
import Header from "@/layouts/components/AppHeader.vue";
// import Sidebar from "@/layouts/components/AppSidebar.vue";
// import Footer from "@/layouts/components/AppFooter.vue";
import {useRoute} from "vue-router";
const route = useRoute()
</script>

<template>
  <div>
    <!--  BEGIN NAVBAR  -->
    <Header></Header>
    <!--  END NAVBAR  -->

    <!--  BEGIN MAIN CONTAINER  -->
    <div class="main-container" id="container">
      <!--  BEGIN SIDEBAR  -->
      <!--  @TODO-->
<!--      <Sidebar></Sidebar>-->
      <!--  END SIDEBAR  -->

      <!--  BEGIN CONTENT AREA  -->
      <div id="content" class="main-content">
        <router-view :key="route.fullPath" />

        <!-- BEGIN FOOTER -->
        <!--  @TODO-->
<!--        <Footer></Footer>-->
        <!-- END FOOTER -->
      </div>
      <!--  END CONTENT AREA  -->
    </div>
  </div>
</template>
