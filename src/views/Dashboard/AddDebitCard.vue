<template>
  <dashboard-layout :dark="dark">
    <section class="authentication">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-8 col-xl-5">
            <div class="card border">
              <h2 class="h3 fw-semi-bold border-bottom p-4">
                Link a debit card
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
                      name="name"
                      tag="div"
                      class="input-group-form col-12"
                    >
                      <label class="me-sm-2">Name on card </label>
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
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="number"
                      tag="div"
                      class="input-group-form col-12"
                    >
                      <label class="me-sm-2">Card number </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="5658 4258 6358 4756"
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
                      name="expiration"
                      tag="div"
                      class="input-group-form col-12 col-lg-4"
                    >
                      <label class="me-sm-2">Expiration </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="10/22"
                        name="expiration"
                        v-model="expiration"
                      />

                      <div class="invalid-feedback d-block">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="cvc"
                      tag="div"
                      class="input-group-form col-12 col-lg-4"
                    >
                      <label class="me-sm-2">CVC </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="125"
                        name="cvc"
                        v-model="cvc"
                      />

                      <div class="invalid-feedback d-block">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="code"
                      tag="div"
                      class="input-group-form col-12 col-lg-4"
                    >
                      <label class="me-sm-2">Postal code </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="2368"
                        name="code"
                        v-model="code"
                      />

                      <div class="invalid-feedback d-block">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                    <div class="text-center col-12">
                      <button type="submit" class="btn btn-success btn-lg">
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
      cvc: "",
      code: "",
      expiration: "",
    };
  },
  methods: {
    onsubmit() {
      this.$router.push(this.dark ? "/verify-step-6-dark" : "/verify-step-6");
    },
  },
};
</script>
