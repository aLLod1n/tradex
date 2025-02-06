<template>
  <light-layout :active="5">
    <section class="contact-form section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-7">
            <div class="section-heading text-center">
              <p>Ask Question</p>
              <h2>Let us hear from you directly!</h2>
              <!-- <h2>Let us hear from you directly!</h2> -->
              <!-- <p>We always want to hear from you! Let us know how we can best help you and we'll do our very best.</p> -->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 mb-4 mb-md-0">
            <h5 class="fw-semi-bold text-dark-400 mb-3 fs-5">Address</h5>
            <ul>
              <li class="d-flex align-items-center py-3 fw-medium text-gray">
                <i class="fas fa-map-marker-alt fa-lg text-primary me-3"></i>
                California, USA
              </li>
              <li class="d-flex align-items-center py-3">
                <i class="fas fa-phone-alt fa-lg text-primary me-3"></i
                ><a class="fw-medium text-gray" href="tel:(+880) 1243 665566"
                  >(+880) 1243 665566</a
                >
              </li>
              <li class="d-flex align-items-center py-3">
                <i class="fas fa-envelope fa-lg text-primary me-3"></i
                ><a class="fw-medium text-gray" href="mailto:hello@example.com"
                  >hello@example.com</a
                >
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-8">
            <!-- <contact-form /> -->
            <contact-form />
          </div>
        </div>
      </div>
    </section>
  </light-layout>
</template>

<script>
import ContactForm from "../../components/Landing/ContactForm.vue";
// import DarkLayout from "../../components/Landing/Dark/DarkLayout.vue";
import LightLayout from "../../components/Landing/Light/LightLayout.vue";
export default {
  components: { ContactForm, LightLayout },
};
</script>
