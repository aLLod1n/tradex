<template>
  <dashboard-layout :dark="dark">
    <section class="authentication">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-8 col-xl-5">
            <div class="card border">
              <h2 class="h3 fw-semi-bold border-bottom p-4">
                Link a bank account
              </h2>
              <div class="card-body text-start">
                <ValidationObserver v-slot="{ passes }" tag="div">
                  <form
                    class="row needs-validation"
                    action="verify-step-6.html"
                    @submit.prevent="passes(onsubmit)"
                  >
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="number"
                      tag="div"
                      class="input-group-form col-12"
                    >
                      <label class="me-sm-2">Routing number </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="25487"
                        name="number"
                        v-model="number"
                      />
                      <div class="invalid-feedback d-block">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="acc_number"
                      tag="div"
                      class="input-group-form col-12"
                    >
                      <label class="me-sm-2">Account number </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="36475"
                        name="acc_number"
                        v-model="acc_number"
                      />
                      <div class="invalid-feedback d-block">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="name"
                      tag="div"
                      class="input-group-form col-12"
                    >
                      <label class="me-sm-2">Fulll name </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Maria Pascle"
                        name="name"
                        v-model="name"
                      />
                      <div class="invalid-feedback d-block">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                    <div class="input-group-form col-12">
                      <img
                        src="../../assets/images/routing.png"
                        loading="lazy"
                        alt="…"
                        class="img-fluid"
                      />
                    </div>

                    <div class="d-grid gap-2 d-sm-block text-center col-12">
                      <router-link
                        :to="dark ? 'verify-step-5-dark' : 'verify-step-5'"
                        class="btn btn-primary btn-md me-sm-3"
                        >Back</router-link
                      >
                      <button type="submit" class="btn btn-success btn-md">
                        Save
                      </button>
                    </div>
                  </form>
                </ValidationObserver>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "../../components/Dashboard/DashboardLayout.vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  components: {
    DashboardLayout,
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    dark: Boolean,
  },
  data() {
    return {
      name: "",
      number: "",
      acc_number: "",
    };
  },
  methods: {
    onsubmit() {
      this.$router.push(this.dark ? "/verify-step-6-dark" : "/verify-step-6");
    },
  },
};
</script>
