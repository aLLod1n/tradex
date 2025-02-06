<template>
  <dashboard-layout :dark="dark">
    <section class="authentication">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-8 col-xl-5">
            <div class="card border">
              <div class="card-body">
                <form action="verify-step-4.html">
                  <span
                    class="icon bg-success rounded-circle d-flex align-items-center justify-content-center m-auto fs-3 mb-4"
                    ><i class="fas fa-shield-alt"></i
                  ></span>
                  <h2 class="card-title">We are verifying your ID</h2>
                  <p>
                    Your identity is being verified. We will email you once your
                    verification has completed.
                  </p>
                  <i class="fa fa-spinner fa-spin fa-3x"></i>
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
  created() {
    setTimeout(() => {
      this.$router.push(this.dark ? "/verify-step-4-dark" : "/verify-step-4");
    }, 3000);
  },
  methods: {
    otpSubmit() {
      this.$router.push(this.dark ? "/otp-2-dark" : "/otp-2");
    },
  },
};
</script>
