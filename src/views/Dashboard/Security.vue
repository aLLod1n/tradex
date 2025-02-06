<template>
  <setting-layout :dark="dark" :active="4" :active_="3">
    <div class="card border-0">
      <div class="card-header border-bottom mb-4 p-0 pb-3">
        <h3 class="fw-semi-bold card-title">Security</h3>
      </div>
      <div class="card-body p-0">
        <div class="row align-items-center">
          <div class="col-12 col-sm-6 col-xl-4">
            <div class="p-3 border border-gray-light rounded mb-3 mb-sm-0">
              <img
                src="../../assets/images/id.png"
                loading="lazy"
                alt="…"
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <h3 class="fw-semi-bold">Maria Pascle</h3>
            <p class="text-gray mb-1 mt-3">ID: 0024 5687 2254 3698</p>
            <p class="text-gray mb-1">
              Status: <span class="fw-bold">Verified</span>
            </p>
            <router-link
              :to="dark ? 'verify-step-2-dark' : 'verify-step-2'"
              class="btn btn-primary btb-md mt-3"
              >New ID</router-link
            >
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="mt-5 pt-4 border-top border-gray-light ">
              <h3 class="fw-semi-bold card-title mb-3">Email Address</h3>
              <form @submit.prevent="otpSubmit">
                <div class="form-row align-items-center">
                  <div class="form-group col-xl-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="hello@example.com"
                    />
                    <button class="btn btn-primary mt-4">Add</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="d-flex align-items-center flex-wrap">
            <p class="m-2">
              <span class="border rounded-circle px-2 py-1 me-2"
                ><i class="fas fa-envelope text-primary"></i></span
              ><a
                href="mailto:hello@example.com"
                class="fs-6 text-gray fw-semi-bold"
                >hello@example.com</a
              >
            </p>
            <div class="d-flex align-items-center fw-medium fs-6 m-2">
              <span
                :class="bg"
                class=" rounded-circle p-1 d-flex align-items-center me-3"
                ><i class="la la-check text-white"></i></span
              ><a href="#!" class="text-primary">Verified</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="mt-5 pt-4 border-top border-gray-light">
            <h3 class="fw-semi-bold card-title mb-3">Add Phone Number</h3>
            <form @submit.prevent="otpSubmit">
              <div class="form-row align-items-center">
                <div class="form-group col-xl-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="+1 2335 2458 "
                  />
                  <button class="btn btn-primary mt-4">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12">
          <div class="d-flex align-items-center flex-wrap">
            <p class="m-2">
              <span class="border rounded-circle px-2 py-1 me-2"
                ><i class="fas fa-phone-alt text-primary"></i
              ></span>
              <a href="tel:+1235842659" class="fs-6 text-gray fw-semi-bold"
                >tel:+1235842659</a
              >
            </p>
            <div class="d-flex align-items-center fw-medium fs-6 m-2">
              <span
                :class="bg"
                class=" rounded-circle p-1 d-flex align-items-center me-3"
                ><i class="la la-check text-white"></i
              ></span>
              <a href="#!" class="text-primary">Verified</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </setting-layout>
</template>

<script>
import SettingLayout from "../../components/Dashboard/SettingLayout.vue";
export default {
  components: {
    SettingLayout,
  },
  props: {
    dark: Boolean,
  },
  data() {
    return {
      bg: this.dark ? "bg-white" : "bg-primary",
    };
  },
  methods: {
    otpSubmit() {
      this.$router.push(this.dark ? "/otp-2-dark" : "/otp-2");
    },
  },
};
</script>
