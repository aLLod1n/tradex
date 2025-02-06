<template>
  <ValidationObserver v-slot="{ passes }">
    <form @submit.prevent="passes(formSubmit)" class="contact_validate row">
      <div class="col-12 col-md-6">
        <ValidationProvider
          tag="div"
          rules="required"
          v-slot="{ errors }"
          class="form-group"
        >
          <label for="contactName">
            Full name
          </label>
          <input
            type="text"
            class="form-control"
            id="contactName"
            placeholder="Full name"
            name="firstname"
            v-model="firstname"
          />
          <label id="contactName-error" class="error" for="contactName">{{
            errors[0]
          }}</label>
        </ValidationProvider>
      </div>
      <div class="col-12 col-md-6">
        <ValidationProvider
          tag="div"
          rules="required|email"
          v-slot="{ errors }"
          class="form-group"
        >
          <label for="contactEmail">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            name="email"
            placeholder="hello@domain.com"
            v-model="email"
          />
          <label id="contactName-error" class="error" for="contactName">{{
            errors[0]
          }}</label>
        </ValidationProvider>
      </div>

      <div class="col-12">
        <ValidationProvider
          tag="div"
          rules="required"
          v-slot="{ errors }"
          class="form-group"
        >
          <textarea
            class="form-control p-3"
            name="message"
            v-model="message"
            rows="5"
            placeholder="Tell us what we can help you with!"
          ></textarea>
          <label id="contactName-error" class="error" for="contactName">{{
            errors[0]
          }}</label>
        </ValidationProvider>
      </div>

      <div>
        <button type="submit" class="btn btn-primary btn-md">
          Send message
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  name: "ContactForm",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      // erros: {},
      firstname: "",
      message: "",
      email: "",
    };
  },
  methods: {
    formSubmit() {
      console.log("Submitting to server!");
    },
  },
};
</script>
