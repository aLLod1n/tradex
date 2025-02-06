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
                  <h2 class="card-title">Identity Verified</h2>
                  <p>
                    Congrats! your identity has been successfully verified and
                    your investment limit has been increased.
                  </p>
                  <button type="submit" class="btn btn-success btn-lg">
                    Continue
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
  components: {
    DashboardLayout,
  },
  props: {
    dark: Boolean,
  },

  methods: {
    onsubmit() {
      this.$router.push(this.dark ? "/add-debit-card-dark" : "/add-debit-card");
    },
  },
};
</script>
