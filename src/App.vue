<script setup>
  import "./assets/scss/app.scss";
  import Login from "@/views/auth/Registration.vue";
</script>

<template>
  <login></login>
  <header>
    <div class="wrapper">
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
    </div>
  </header>
</template>

<style scoped>
</style>
