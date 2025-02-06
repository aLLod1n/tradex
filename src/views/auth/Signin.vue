<template>
  <auth-layout :dark="dark">
    <section class="authentication">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-lg-6 col-xl-5">
            <div class="text-center mb-5">
              <router-link to="demo"
                ><img src="../../assets/images/logo.png" loading="lazy" alt="…"
              /></router-link>
            </div>
            <div class="card border">
              <h2 class="h3 fw-semi-bold border-bottom text-center p-4">
                Sign in
              </h2>
              <div class="card-body text-start">
                <ValidationObserver v-slot="{ passes }" tag="div">
                  <form
                    @submit.prevent="passes(formSubmit)"
                    class="row needs-validation"
                    action="otp-1"
                    novalidate=""
                  >
                    <ValidationProvider
                      rules="required|email"
                      v-slot="{ errors }"
                      name="method"
                      class="input-group-form"
                      tag="div"
                    >
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control error"
                        placeholder="hello@example.com"
                        name="email"
                        v-model="email"
                        aria-invalid="true"
                      />
                      <!-- <label class="error" for="email">{{ errors[0] }}</label> -->
                      <div class="invalid-feedback d-block">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                    <ValidationProvider
                      rules="passwordFieldName|verify_password"
                      v-slot="{ errors }"
                      name="password"
                      class="input-group-form"
                      tag="div"
                    >
                      <label>Password</label>
                      <input
                        type="password"
                        class="form-control error"
                        placeholder="Password"
                        name="password"
                        v-model="password"
                        aria-invalid="true"
                      />
                      <div class="invalid-feedback d-block">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                    <div class="d-flex justify-content-between">
                      <div class="input-group-form mb-0">
                        <label class="toggle">
                          <input class="toggle-checkbox" type="checkbox" />
                          <span class="toggle-switch"></span>
                          <span class="toggle-label">Remember me</span>
                        </label>
                      </div>
                      <div class="input-group-form">
                        <router-link
                          class="text-primary"
                          :to="dark ? 'reset-dark' : 'reset'"
                          >Forgot Password?</router-link
                        >
                      </div>
                    </div>
                    <div>
                      <button type="submit" class="btn btn-primary w-100">
                        Sign in
                      </button>
                    </div>
                  </form>
                </ValidationObserver>
                <p class="mt-3">
                  Don't have an account?
                  <router-link
                    class="text-primary"
                    :to="dark ? 'signup-dark' : 'signup'"
                    >Sign up</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </auth-layout>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import AuthLayout from "../../components/AuthLayout";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    AuthLayout,
  },
  props: {
    dark: Boolean,
  },
  data() {
    return {
      email: "",
      password: "",
      checkbox: "",
    };
  },
  methods: {
    formSubmit() {
      this.$router.push(this.dark ? "/otp-1-dark" : "/otp-1");
    },
  },
};
</script>
