<template>
  <dashboard-layout :dark="dark">
    <section class="authentication">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-8 col-xl-5">
            <div class="card border">
              <div class="card-body">
                <h2 class="card-title">Upload your ID card</h2>
                <p>
                  (Driving License or Government ID card) Uploading your ID
                  helps as ensure the safety and security of your founds
                </p>
                <form @submit.prevent="onsubmit" class="text-start">
                  <div class="form-group">
                    <div class="d-sm-flex justify-content-between">
                      <label class="mb-3 mb-sm-0">Upload Front ID </label>
                      <label class="text-gray">Maximum file size is 2mb</label>
                    </div>
                    <div
                      class="file-upload-wrapper position-relative form-control"
                      data-text="front.jpg"
                    >
                      <input
                        name="file-upload-field"
                        type="file"
                        class="file-upload-field"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="d-sm-flex justify-content-between">
                      <label class="mb-3 mb-sm-0">Upload Front ID </label>
                      <label class="text-gray">Maximum file size is 2mb</label>
                    </div>
                    <div
                      class="file-upload-wrapper position-relative form-control"
                      data-text="back.jpg"
                    >
                      <input
                        name="file-upload-field"
                        type="file"
                        class="file-upload-field"
                        required=""
                      />
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
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
      this.$router.push(this.dark ? "/verify-step-3-dark" : "/verify-step-3");
    },
  },
};
</script>
