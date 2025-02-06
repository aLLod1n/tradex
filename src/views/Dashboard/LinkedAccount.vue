<template>
  <setting-layout :dark="dark" :active="4" :active_="4">
    <div class="card border-0">
      <div class="card-header border-bottom mb-4 p-0 pb-3">
        <h3 class="fw-semi-bold card-title">Linked Account or Card</h3>
      </div>
      <div class="card-body p-0">
        <div class="form">
          <ul>
            <li class="mb-4">
              <div class="row g-4 g-md-0 align-items-center">
                <div class="col-12 col-md-9">
                  <div
                    class="card flex-row justify-content-between border rounded p-3"
                  >
                    <div class="d-flex align-items-center">
                      <span
                        :class="bg"
                        class="me-3 text-white rounded-circle d-flex align-items-center p-3 justify-content-center"
                        ><i class="fas fa-university"></i
                      ></span>
                      <div class="">
                        <h4 class="h6 fw-semi-bold mt-0 mb-1">
                          Bank of America
                        </h4>
                        <p class="">Bank ******5421</p>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center flex-column flex-sm-row"
                    >
                      <a href="#!" class="me-3"
                        ><i class="far fa-eye text-primary"></i
                      ></a>
                      <a href="#!" class="me-3"
                        ><i class="fas fa-pencil-alt text-primary"></i
                      ></a>
                      <a href="#!" class="me-3"
                        ><i class="far fa-trash-alt text-danger"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 ps-md-4">
                  <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center fw-medium fs-6">
                      <span
                        :class="bg"
                        class=" rounded-circle p-2 d-flex align-items-center me-3"
                        ><i class="la la-check text-white"></i></span
                      ><a href="#!" class="text-primary">Verified</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-4">
              <div class="row g-4 g-md-0 align-items-center">
                <div class="col-12 col-md-9">
                  <div
                    class="card flex-row justify-content-between border rounded p-3"
                  >
                    <div class="d-flex align-items-center">
                      <span
                        :class="bg"
                        class="me-3 text-white rounded-circle d-flex align-items-center p-3 justify-content-center"
                        ><i class="fab fa-cc-mastercard"></i
                      ></span>
                      <div>
                        <h4 class="h6 fw-semi-bold mt-0 mb-1">Master Card</h4>
                        <p class="">Credit Card ******5478</p>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center flex-column flex-sm-row"
                    >
                      <a href="#!" class="me-3"
                        ><i class="far fa-eye text-primary"></i
                      ></a>
                      <a href="#!" class="me-3"
                        ><i class="fas fa-pencil-alt text-primary"></i
                      ></a>
                      <a href="#!" class="me-3"
                        ><i class="far fa-trash-alt text-danger"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 ps-md-4">
                  <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center fw-medium fs-6">
                      <span
                        :class="bg"
                        class=" rounded-circle p-2 d-flex align-items-center me-3"
                        ><i class="la la-check text-white"></i></span
                      ><a href="#!" class="text-primary">Verified</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-4">
              <div class="row g-4 g-md-0 align-items-center">
                <div class="col-12 col-md-9">
                  <div
                    class="card flex-row justify-content-between border rounded p-3"
                  >
                    <div class="d-flex align-items-center">
                      <span
                        :class="bg"
                        class="me-3 text-white rounded-circle d-flex align-items-center p-3 justify-content-center"
                        ><i class="far fa-credit-card"></i
                      ></span>
                      <div>
                        <h4 class="h6 fw-semi-bold mt-0 mb-1">Debit Card</h4>
                        <p class="">Prepaid Card ******5478</p>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center flex-column flex-sm-row"
                    >
                      <a href="#!" class="me-3"
                        ><i class="far fa-eye text-primary"></i
                      ></a>
                      <a href="#!" class="me-3"
                        ><i class="fas fa-pencil-alt text-primary"></i
                      ></a>
                      <a href="#!" class="me-3"
                        ><i class="far fa-trash-alt text-danger"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 ps-md-4">
                  <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center fw-medium fs-6">
                      <span
                        :class="bg"
                        class=" rounded-circle p-2 d-flex align-items-center me-3"
                        ><i class="la la-close text-white"></i></span
                      ><a href="#!" class="text-primary">Not Verified</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-4">
              <div class="row g-4 g-md-0 align-items-center">
                <div class="col-12 col-md-9">
                  <div
                    class="card flex-row justify-content-between border rounded p-3"
                  >
                    <div class="d-flex align-items-center">
                      <span
                        :class="bg"
                        class="me-3 text-white rounded-circle d-flex align-items-center p-3 justify-content-center"
                        ><i class="fas fa-university"></i
                      ></span>
                      <div class="">
                        <h4 class="h6 fw-semi-bold mt-0 mb-1">
                          Bank of America
                        </h4>
                        <p class="">Bank *****5421</p>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center flex-column flex-sm-row"
                    >
                      <a href="#!" class="me-3"
                        ><i class="far fa-eye text-primary"></i
                      ></a>
                      <a href="#!" class="me-3"
                        ><i class="fas fa-pencil-alt text-primary"></i
                      ></a>
                      <a href="#!" class="me-3"
                        ><i class="far fa-trash-alt text-danger"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 ps-md-4">
                  <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center fw-medium fs-6">
                      <span
                        :class="bg"
                        class=" rounded-circle p-2 d-flex align-items-center me-3"
                        ><i class="la la-check text-white"></i></span
                      ><a href="#!" class="text-primary">Verified</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-4">
              <div class="row g-4 g-md-0 align-items-center">
                <div class="col-12 col-md-9">
                  <div
                    class="card flex-row justify-content-between border rounded p-3"
                  >
                    <div class="d-flex align-items-center">
                      <span
                        :class="bg"
                        class="me-3 text-white rounded-circle d-flex align-items-center p-3 justify-content-center"
                        ><i class="fab fa-cc-mastercard"></i
                      ></span>
                      <div>
                        <h4 class="h6 fw-semi-bold mt-0 mb-1">Master Card</h4>
                        <p class="">Credit Card ******5478</p>
                      </div>
                    </div>
                    <div
                      class="d-flex align-items-center flex-column flex-sm-row"
                    >
                      <a href="#!" class="me-3"
                        ><i class="far fa-eye text-primary"></i
                      ></a>
                      <a href="#!" class="me-3"
                        ><i class="fas fa-pencil-alt text-primary"></i
                      ></a>
                      <a href="#!" class="me-3"
                        ><i class="far fa-trash-alt text-danger"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-3 ps-md-4">
                  <div class="d-flex align-items-center">
                    <div class="d-flex align-items-center fw-medium fs-6">
                      <span
                        :class="bg"
                        class=" rounded-circle p-2 d-flex align-items-center me-3"
                        ><i class="la la-check text-white"></i></span
                      ><a href="#!" class="text-primary">Verified</a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <div class="d-grid gap-2 d-sm-block mt-5">
            <router-link
              :to="dark ?'/verify-step-5-dark' :'/verify-step-5'"
              class="btn btn-primary btn-lg me-sm-3"
              >Add Bank Account</router-link
            >
            <router-link :to="dark ?'/verify-step-1-dark':'/verify-step-1'" class="btn btn-success btn-lg"
              >Add Debit Account</router-link
            >
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
