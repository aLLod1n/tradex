<template>
  <auth-layout :dark="dark">
    <section class="authentication">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-6 col-xl-5">
            <div class="text-center my-5">
              <router-link to="/demo"
                ><img src="../../assets/images/logo.png" loading="lazy" alt="…"
              /></router-link>
            </div>
            <div class="card border">
              <h2 class="h3 fw-semi-bold border-bottom text-center p-4">
                Locked
              </h2>
              <div class="card-body text-start">
                <ValidationObserver v-slot="{ passes }">
                  <form
                    class="row needs-validation"
                    novalidate=""
                    @submit.prevent="passes(onsubmit)"
                  >
                    <ValidationProvider
                      tag="div"
                      rules="required"
                      name="password"
                      v-slot="{ errors }"
                      class="input-group-form mb-4"
                    >
                      <label>Enter Password</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        name="password"
                        v-model="password"
                      />
                      <div class="invalid-feedback d-block">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                    <div>
                      <button class="btn btn-success w-100" type="submit">
                        Unlock
                      </button>
                    </div>
                  </form>
                </ValidationObserver>
                <div class="text-center mt-3">
                  <h3 class="fw-semi-bold h6">
                    <router-link
                      :to="dark ? 'reset-dark' : 'reset'"
                      class=" text-primary-hover"
                      :class="dark ? 'text-white' : 'text-dark-400'"
                      >Not Maria Pascle?</router-link
                    >
                  </h3>
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
  props: { dark: Boolean },
  components: { AuthLayout, ValidationObserver, ValidationProvider },
  methods: {
    formSubmit() {
      this.$router.push(this.dark ? "/dark" : "/");
    },
  },
  data() {
    return {
      password: "",
    };
  },
};
</script>
