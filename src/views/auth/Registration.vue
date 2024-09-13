<template>
  <div class="form auth-boxed">
    <div class="form-container outer">
      {{ item }}
      <div class="form-form">
        <div class="form-form-wrap">
          <div class="form-container">
            <div class="form-content">
              <h1 class="">Registration</h1>
              <form class="text-start">
                <div class="form">
                  <!-- User Name Field -->
                  <div id="username-field" class="field-wrapper input">
                    <label for="username-field">User Name</label>
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
                        class="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input v-model="item.name" type="text" class="form-control" placeholder="User Name" />
                  </div>
                  <!-- Email Field -->
                  <div id="email-field" class="field-wrapper input">
                    <label for="email-field">Email</label>
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
                    <input v-model="item.email" type="email" class="form-control" placeholder="Email" />
                  </div>
                  <!-- Password Field -->
                  <div id="password-field" class="field-wrapper input">
                    <div class="d-flex justify-content-between">
                      <label for="password-field">Password</label>
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
                    <input v-model="item.password" type="text" class="form-control" placeholder="Password" />
                  </div>
                  <!-- Confirm Password Field -->
                  <div id="confirm-password-field" class="field-wrapper input">
                    <div class="d-flex justify-content-between">
                      <label for="confirm-password-field">Confirm Password</label>
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
                    <input v-model="item.password_confirmation" type="text" class="form-control" placeholder="Confirm Password" />
                  </div>

                  <div class="d-sm-flex justify-content-between">
                    <div class="field-wrapper" style="width: 100%">
                      <button type="button" class="btn btn-primary" @click="createUser()">Confirm Registration</button>
                    </div>
                  </div>
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
import Auth from '@/api/Auth'
import { reactive } from "vue"


const item = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
});
function resetItem() {
  item.name = ''
  item.email = ''
  item.password = ''
  item.password_confirmation = ''
}
function createUser() {
  if (false) {

  } else {
    Auth.register(item).then(res => {
      console.log('res: ', res);
      resetItem()
    })
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/pages/auth.scss";
</style>
