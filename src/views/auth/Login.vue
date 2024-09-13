<template>
  <div class="form auth-boxed">
    <div class="form-container outer">
      <div class="form-form">
<!--        {{form}}-->
        <div class="form-form-wrap">
          <div class="form-container">
            <div class="form-content">
              <h1 class="">Sign In</h1>
              <form class="text-start">
                <div class="form">
                  <!-- Email Field -->
                  <div id="username-field" class="field-wrapper input">
                    <label for="email">Email</label>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-at-sign register"
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                    </svg>
                    <input v-model="form.email" type="text" class="form-control" placeholder="Email" />
                  </div>
                  <!-- Password Field -->
                  <div id="password-field" class="field-wrapper input mb-2">
                    <div class="d-flex justify-content-between">
                      <label for="password">Password</label>
                      <router-link to="" class="forgot-pass-link">Forgot Password?</router-link>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-lock"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <input v-model="form.password" type="password" class="form-control" placeholder="Password" />
                    <svg
                        @click="set_pwd_type"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        id="toggle-password"
                        class="feather feather-eye"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <div class="d-sm-flex justify-content-between">
                    <div class="field-wrapper" style="width: 100%">
                      <button type="button" @click="login()" class="btn btn-primary">Log In</button>
                    </div>
                  </div>
                  <p class="signup-link">Not registered ? <router-link to="">Create an account</router-link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useStore } from 'vuex'
// data binding
const form = reactive({
  email: 'osama.moh.almamari@gmail.com',
  password: '123456',
})

const store = useStore()
function login() {
  console.log('login: ', form);
  store.dispatch('login', this.form)
      .then(() => {
        this.$router.push({ path: '/'})
      })
      .catch(() => {
        // do something
      })
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/pages/auth.scss";
</style>
