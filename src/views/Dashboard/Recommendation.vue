<template>
  <dashboard-layout :dark="dark">
    <section class="authentication">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-lg-7">
            <div class="card border">
              <h2 class="h3 fw-semi-bold border-bottom p-4">Add New Account</h2>
              <div class="card-body text-start d-sm-flex">
                <router-link
                  :to="dark ? 'add-bank-acc-dark' : 'add-bank-acc'"
                  class="mb-5 mb-sm-0 w-100 pe-sm-4"
                >
                  <div class="d-flex align-items-start">
                    <span class="me-3"><i class="fas fa-university"></i></span>
                    <div>
                      <h3 class="h5 fw-semi-bold mb-3 text-dark-400">
                        Bank account
                      </h3>
                      <p class="text-primary mb-3">
                        Use bank account to make purchase and sells. Prices are
                        locked today. Trades may take 4-5 days to process
                      </p>
                      <p class="mb-0 text-muted">
                        Recommended for invest large amount
                      </p>
                    </div>
                  </div>
                </router-link>
                <router-link
                  :to="dark ? 'add-debit-card-dark' : 'add-debit-card'"
                  class="w-100"
                >
                  <div class="d-flex align-items-start">
                    <span class="me-3"><i class="fa fa-credit-card"></i></span>
                    <div>
                      <h3 class="h5 fw-semi-bold mb-3 text-dark-400">
                        Debit card
                      </h3>
                      <p class="text-primary mb-3">
                        Use any visa or mastercard debit card to make small
                        investment. Add a bank or wallet to sell
                      </p>
                      <p class="mb-0 text-muted">
                        Recommended for invest small amount
                      </p>
                    </div>
                  </div>
                </router-link>
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
    otpSubmit() {
      this.$router.push(this.dark ? "/otp-2-dark" : "/otp-2");
    },
  },
};
</script>
