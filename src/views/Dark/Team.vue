<template>
  <dark-layout :active="4">
    <section class="section-padding border-bottom">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-6 text-center">
            <h2 class=" mb-2 fw-semi-bold">Want to work with us?</h2>
            <p class="mb-4">
              We're always looking to hire talented folks to join our
              ever-growing team of designers, engineers, and support staff.
            </p>
            <a href="#!" class="btn btn-primary btn-lg">View Open Position</a>
          </div>
        </div>
      </div>
    </section>
  </dark-layout>
</template>

<script>
import DarkLayout from "../../components/Landing/Dark/DarkLayout.vue";
export default {
  components: { DarkLayout },
};
</script>
