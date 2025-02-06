<template>
  <auth-layout :dark="dark">
    <section class="authentication">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-6 col-xl-5">
            <div class="text-center my-5">
              <router-link to="demo"
                ><img src="../../assets/images/logo.png" loading="lazy" alt="…"
              /></router-link>
            </div>
            <div class="card border">
              <h2 class="h3 fw-semi-bold border-bottom text-center p-4">
                Reset password
              </h2>
              <div class="card-body text-start">
                <ValidationObserver v-slot="{ passes }">
                  <form
                    class="row needs-validation"
                    novalidate=""
                    @submit.prevent="passes(formSubmit)"
                  >
                    <ValidationProvider
                      rules="required|email"
                      v-slot="{ errors }"
                      name="method"
                      class="form-group"
                      tag="div"
                    >
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        v-model="email"
                        placeholder="hello@example.com"
                      />
                      <div class="invalid-feedback d-block">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                    <div>
                      <button type="submit" class="btn btn-primary w-100">
                        Reset
                      </button>
                    </div>
                  </form>
                </ValidationObserver>
                <div class="mt-3">
                  <p class="mb-1">Don't Received?</p>
                  <router-link
                    class="text-primary"
                    :to="dark ? 'reset-dark' : 'reset'"
                    >Resend
                  </router-link>
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
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  components: { AuthLayout, ValidationObserver, ValidationProvider },
  props: { dark: Boolean },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    formSubmit() {
      this.$router.push(this.dark ? "/signin-dark" : "/signin");
    },
  },
};
</script>
