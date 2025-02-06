<template>
  <ValidationObserver v-slot="{ passes }" tag="div">
    <form
      class="row g-3 needs-validation"
      novalidate
      @submit.prevent="passes(formSubmit)"
    >
      <div class="input-group-form mt-0">
        <label class="me-sm-2">Currency</label>
        <div class="invalid-feedback">This field is required.</div>
        <div class="input-group d-flex">
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="currency"
            tag="div"
            class="w-50"
          >
            <select name="currency" v-model="currency" class="form-select">
              <option value="1">Bitcoin</option>
              <option value="2">Litecoin</option>
            </select>
            <label class="error" for="currency">{{ errors[0] }}</label>
          </ValidationProvider>
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="usd_amount"
            tag="div"
            class="w-50"
          >
            <input
              type="text"
              name="usd_amount"
              v-model="usd_amount"
              class="form-control"
              placeholder="125.00 USD"
            />
            <label class="error" for="currency">{{ errors[0] }}</label>
          </ValidationProvider>
        </div>
      </div>
      <div class="input-group-form mt-0">
        <label class="me-sm-2">Payment Method</label>
        <div class="invalid-feedback">This field is required.</div>
        <div class="input-group">
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="currency_1"
            v-model="currency_1"
            tag="div"
            class="w-50"
          >
            <select
              name="currency_1"
              v-model="currency_1"
              class="form-select"
              aria-placeholder="Bitconin"
            >
              <option value="3" selected>Bitcoin</option>
              <option value="4">Litecoin</option>
            </select>
            <label class="error" for="currency_1">{{ errors[0] }}</label>
          </ValidationProvider>
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="usd_amount_1"
            v-model="usd_amount_1"
            tag="div"
            class="w-50"
          >
            <input
              type="text"
              name="usd_amount_1"
              v-model="usd_amount_1"
              class="form-control"
              placeholder="125.00 USD"
            />
            <label class="error" for="usd_amount_1">{{ errors[0] }}</label>
          </ValidationProvider>
        </div>
      </div>
      <div class="input-group-form mt-0">
        <label class="me-sm-2">Enter your amount</label>
        <div class="invalid-feedback">This field is required.</div>
        <div class="input-group">
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="currency_amount_2"
            v-model="currency_amount_2"
            tag="div"
            class="w-50"
          >
            <input
              type="text"
              name="currency_amount_2"
              v-model="currency_amount_2"
              class="form-control"
              placeholder="0.0214 BTC"
            />
            <label class="error" for="usd_amount_1">{{ errors[0] }}</label>
          </ValidationProvider>
          <ValidationProvider
            rules="required"
            v-slot="{ errors }"
            name="usd_amount_2"
            v-model="usd_amount_2"
            tag="div"
            class="w-50"
          >
            <input
              type="text"
              name="usd_amount_2"
              v-model="usd_amount_2"
              class="form-control"
              placeholder="125.00 USD"
            />
            <label class="error" for="usd_amount_2">{{ errors[0] }}</label>
          </ValidationProvider>
        </div>
        <div
          class="d-flex justify-content-between mt-0 align-items-center mt-3"
        >
          <p class=" mb-0">Monthly Limit</p>
          <span class="mb-0 text-dark-400 fs-6 fw-semi-bold"
            >$49750 remaining</span
          >
        </div>
      </div>
      <div class="mt-0">
        <button
          type="submit"
          name="submit"
          class="btn btn-success w-100 text-white"
        >
          Exchange
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "CurrencyForm",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      // erros: {},
      currency: 1,
      currency_1: 3,
      method: "",
      currency_amount: "",
      currency_amount_2: "",
      usd_amount: "",
      usd_amount_1: "",
      usd_amount_2: "",
      submitted: false,
    };
  },
  methods: {
    formSubmit() {
      console.log("Submitting to server!");
    },
  },
};
</script>
