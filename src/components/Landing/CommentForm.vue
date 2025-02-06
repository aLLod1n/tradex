<template>
  <ValidationObserver v-slot="{ passes }" tag="div">
    <form
      @submit.prevent="passes(formSubmit)"
      class="row needs-validation"
      id="comment-section"
    >
      <ValidationProvider
        rules="required"
        v-slot="{ errors }"
        name="name"
        tag="div"
        class="form-group col-12 col-md-4"
      >
        <input
          class="form-control"
          type="text"
          name="name"
          v-model="name"
          placeholder="Your Name"
          id="name"
        />
        <label class="error " for="name">{{ errors[0] }}</label>
      </ValidationProvider>
      <!-- form-field end-->
      <ValidationProvider
        rules="required|email"
        v-slot="{ errors }"
        name="email"
        tag="div"
        class="form-group col-12 col-md-4"
      >
        <input
          class="form-control"
          type="email"
          name="email"
          v-model="email"
          placeholder="Your Email"
          id="email"
        />
        <label class="error " for="email">{{ errors[0] }}</label>
      </ValidationProvider>
      <!-- form-field end-->
      <ValidationProvider
        rules="required"
        v-slot="{ errors }"
        name="phone"
        tag="div"
        class="form-group col-12 col-md-4"
      >
        <input
          class="form-control"
          type="text"
          name="phone"
          v-model="phone"
          placeholder="Your Phone"
        />
        <label class="error " for="phone">{{ errors[0] }}</label>
      </ValidationProvider>
      <!-- form-field end-->

      <ValidationProvider
        rules="required"
        v-slot="{ errors }"
        name="message"
        tag="div"
        class="form-group col-12"
      >
        <textarea
          class="form-control p-3"
          name="message"
          v-model="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <label class="error " for="message">{{ errors[0] }}</label>
      </ValidationProvider>
      <!-- form-field end-->
      <div class="col-12">
        <button type="submit" class="btn btn-primary btn-lg">
          Send Message
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "CommentForm",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      // erros: {},
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    formSubmit() {
      console.log("Submitting to server!");
      //  otp-1-dark.html
    },
  },
};
</script>
