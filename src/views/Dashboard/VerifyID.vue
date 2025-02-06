<template>
  <dashboard-layout :dark="dark">
    <section class="authentication">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-8 col-xl-5">
            <div class="card border">
              <div class="card-body">
                <form @submit.prevent="onsubmit">
                  <span
                    class="icon bg-success rounded-circle d-flex align-items-center justify-content-center m-auto fs-3 mb-4"
                    ><i class="fas fa-shield-alt"></i
                  ></span>
                  <h2 class="card-title">
                    Please verify your identity before adding your card
                  </h2>
                  <p>
                    Uploading your ID helps as ensure the safety and security of
                    your founds
                  </p>
                  <button type="submit" class="btn btn-success btn-lg">
                    Upload ID
                  </button>
                </form>
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
export default {
  components: { DashboardLayout },
  props: { dark: Boolean },

  methods: {
    onsubmit() {
      this.$router.push(this.dark ? "/verify-step-2-dark" : "/verify-step-2");
    },
  },
};
</script>
