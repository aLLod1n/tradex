<template>
  <auth-layout :dark="dark">
    <section class="authentication">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-6 col-xl-5">
            <div class="text-center mb-5">
              <router-link to="demo"
                ><img src="../../assets/images/logo.png" loading="lazy" alt="…"
              /></router-link>
            </div>
            <div class="card border">
              <div class="card-body text-start">
                <router-link
                  class="text-white mb-3"
                  :to="dark ? 'signin-dark' : 'signin'"
                  ><span><i class="fa fa-angle-left"></i></span>
                  Back</router-link
                >
                <div class="text-center mb-5">
                  <h2 class="h3 fw-semi-bold">OTP Verification</h2>
                  <p>We will send one time code on this number</p>
                </div>
                <form
                  class="row needs-validation"
                  @submit.prevent="formSubmit"
                  novalidate=""
                >
                  <div class="input-group-form">
                    <label>Your phone number</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text ps-4 pe-4 text-white h-100"
                          ><i class="fas fa-phone-alt"></i
                        ></span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="+1 12365480"
                      />
                    </div>
                  </div>
                  <div>
                    <button type="submit" class="btn btn-primary w-100">
                      Send
                    </button>
                  </div>
                </form>
                <div class="d-flex justify-content-between">
                  <p class="text-gray mb-0 mt-3">
                    Don't get code?
                    <router-link
                      class="text-primary"
                      :to="dark ? 'otp-1-dark' : 'otp-1'"
                      >Resend</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </auth-layout>
</template>

<script>
import AuthLayout from "../../components/AuthLayout.vue";

export default {
  props: { dark: Boolean },
  components: { AuthLayout },
  methods: {
    formSubmit() {
      this.$router.push(this.dark ? "/otp-2-dark" : "/otp-2");
    },
  },
};
</script>
