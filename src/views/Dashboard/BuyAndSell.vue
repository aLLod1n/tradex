<template>
  <dashboard-layout :dark="dark" :active="2">
    <div class="pt-4 pb-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <p class="h5 text-primary fw-bold">
              Welcome Back, <span class="text-gray"> Maria Pascle</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Page Title End ======================-->

    <!--====================== Content Body Start ======================-->
    <section class="pb-5">
      <div class="container-fluid">
        <div class="row mb-5">
          <div class="col-12 col-lg-5 col-xl-5">
            <div class="card border-0 mb-4">
              <div class="card-body p-0">
                <ul class="nav nav-tabs mb-5 border-0">
                  <li class="nav-item w-50 text-center">
                    <a
                      class="nav-link border rounded fw-semi-bold p-2 mx-3 fs-5 c-pointer "
                      @click="activeTabs = 1"
                      :class="[
                        activeTabs === 1 && 'active',
                        dark && 'text-primary',
                      ]"
                      >Buy</a
                    >
                  </li>
                  <li class="nav-item w-50 text-center">
                    <a
                      class="nav-link border rounded fw-semi-bold p-2 mx-3 fs-5 c-pointer "
                      @click="activeTabs = 2"
                      :class="[
                        activeTabs === 2 && 'active',
                        dark && 'text-primary',
                      ]"
                      >Sell</a
                    >
                  </li>
                </ul>
                <div class="tab-content tab-content-default">
                  <div
                    class="tab-pane fade"
                    :class="activeTabs === 1 && 'active show'"
                    id="buy"
                    role="tabpanel"
                  >
                    <CurrencyForm2 />
                  </div>
                  <div
                    class="tab-pane fade"
                    :class="activeTabs === 2 && 'active show'"
                    id="sell"
                  >
                    <CurrencyForm2 />
                  </div>
                </div>
              </div>
            </div>
            <p class="text-gray mt-5">
              Note: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi cupiditate suscipit explicabo voluptas eos in tenetur error
              temporibus dolorum. Nulla!
            </p>
          </div>
          <div class="col-12 col-lg-7 col-xl-7">
            <div class="card border-0 ps-lg-5">
              <div class="card-body p-0">
                <div class="d-md-flex justify-content-between mb-3">
                  <div class="buyer-info d-flex mb-4 mb-md-0 align-items-start">
                    <img
                      class="me-3"
                      src="../../assets/images/profile/2.png"
                      loading="lazy"
                      alt="…"
                      width="50"
                    />
                    <div>
                      <h5 class="fw-semi-bold">Buyer</h5>
                      <p class="fw-semi-bold my-1">Michael John</p>
                      <router-link
                        to="mailto:hello@example.com"
                        class="text-primary"
                        >hello@example.com</router-link
                      >
                    </div>
                  </div>
                  <div
                    class="d-flex flex-row-reverse flex-md-row justify-content-end align-items-start"
                  >
                    <div class="text-md-end">
                      <h5 class="fw-semi-bold">Seller</h5>
                      <p class="fw-semi-bold mb-1">John Doe</p>
                      <router-link
                        to="mailto:hello@example.com"
                        class="text-primary"
                        >hello@example.com</router-link
                      >
                    </div>
                    <img
                      class="ms-md-3 me-3 me-md-0"
                      src="../../assets/images/profile/1.png"
                      loading="lazy"
                      alt="…"
                      width="50"
                    />
                  </div>
                </div>

                <div class="table-card border-0">
                  <div class="card-body p-0">
                    <table class="table">
                      <tbody>
                        <tr :class="bg" class="text-primary">
                          <td class="border-0 p-3">You are selling</td>
                          <td class="border-0 p-3">0.00254 BTC</td>
                        </tr>
                        <tr :class="bg">
                          <td class="border-0 p-3">Payment Method</td>
                          <td class="border-0 p-3">
                            Bank of America Bank ***********5245
                          </td>
                        </tr>
                        <tr :class="bg">
                          <td class="border-0 p-3">Exchange Rate</td>
                          <td class="border-0 p-3">0.00212455 BTC</td>
                        </tr>
                        <tr :class="bg">
                          <td class="border-0 p-3">Fee</td>
                          <td class="border-0 p-3">$28.00 USD</td>
                        </tr>
                        <tr :class="bg">
                          <td class="border-0 p-3">Total</td>
                          <td class="border-0 p-3">$854.00 USD</td>
                        </tr>
                        <tr :class="bg" class="fw-semi-bold">
                          <td class="text-gray border-0">Vat</td>
                          <td class="border-0 p-3">
                            <div class="text-danger">$25.00 USD</div>
                          </td>
                        </tr>
                        <tr :class="bg">
                          <td class="border-0 p-3">Sub Total</td>
                          <td class="border-0 p-3">$1232.00 USD</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-xl-6">
            <div class="card border-0">
              <div class="card-header border-bottom mb-5">
                <h2 class="h3 fw-semi-bold card-title">FAQ</h2>
              </div>
              <div class="card-body mt-2 p-0">
                <div id="accordion-faq" class="accordion">
                  <div class="card border-0 mb-4">
                    <b-accordion-header v-b-toggle="'collapseOne1'" variant="">
                      <h3
                        class="card-title h6 fw-semi-bold mb-0 collapsed c-pointer"
                      >
                        What Shipping Methods are Available?
                      </h3>
                    </b-accordion-header>
                    <b-collapse id="collapseOne1">
                      <div class="accordion-body ps-0 text-gray">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </div>
                    </b-collapse>
                  </div>
                  <div class="card border-0 mb-4">
                    <b-accordion-header variant="" v-b-toggle="'collapse2'">
                      <h3
                        class="card-title h6 fw-semi-bold mb-0 collapsed c-pointer"
                      >
                        How Long Will it Take To Get My Package?
                      </h3>
                    </b-accordion-header>
                    <b-collapse id="collapse2">
                      <div class="accordion-body ps-0 text-gray">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </div>
                    </b-collapse>
                  </div>
                  <div class="card border-0 mb-4">
                    <b-accordion-header variant="" v-b-toggle="'collapse3'">
                      <h3
                        class="card-title h6 fw-semi-bold mb-0 collapsed c-pointer"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree3"
                        aria-expanded="false"
                        aria-controls="collapseThree3"
                      >
                        How Do I Track My Order?
                      </h3>
                    </b-accordion-header>
                    <b-collapse id="collapse3">
                      <div class="accordion-body ps-0 text-gray">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </div>
                    </b-collapse>
                  </div>
                  <div class="card border-0 mb-4">
                    <b-accordion-header variant="" v-b-toggle="'collapse4'">
                      <h3
                        class="card-title h6 fw-semi-bold mb-0 collapsed c-pointer"
                      >
                        Do I Need A Account To Place Order?
                      </h3>
                    </b-accordion-header>
                    <b-collapse id="collapse4">
                      <div class="accordion-body ps-0 text-gray">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </div>
                    </b-collapse>
                  </div>
                  <div class="card border-0 mb-4">
                    <b-accordion-header variant="" v-b-toggle="'collapse5'">
                      <h3
                        class="card-title h6 fw-semi-bold mb-0 collapsed c-pointer"
                      >
                        How do I Place an Order?
                      </h3>
                    </b-accordion-header>
                    <b-collapse id="collapse5">
                      <div class="accordion-body ps-0 text-gray">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </div>
                    </b-collapse>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-6">
            <div class="video-play bg-white position-relative rounded shadow-2">
              <img
                src="../../assets/images/background/2.jpg"
                loading="lazy"
                alt="…"
                class="img-fluid rounded"
              />
              <div
                class="z-index1 d-flex align-items-center justify-content-center position-absolute w-100 h-100 top-0"
              >
                <a
                  class="venobox c-pointer bg-white rounded-circle py-4 text-center position-relative vbox-item"
                  data-autoplay="true"
                  data-vbtype="video"
                  @click="showVideo = true"
                >
                  <span><i class="fas fa-play text-primary"></i></span
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <videos v-show="showVideo" :closeFuntion="closeFuntion" />
    </section>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "../../components/Dashboard/DashboardLayout.vue";
import CurrencyForm2 from "../../components/Tradix/CurrencyForm2.vue";
import Videos from "../../components/Videos.vue";
// import BtcChart from "../../components/Tradix/Charts/BtcChart.vue";
// import TimelineChart from "../../components/Tradix/Charts/TimelineChart.vue";
// import CurrencyForm from "../../components/Tradix/CurrencyForm.vue";
export default {
  components: { DashboardLayout, CurrencyForm2, Videos },
  props: {
    dark: Boolean,
  },
  data() {
    return {
      active: "all",
      activeTabs: 1,
      bg: this.dark ? "bg-dark-2" : "",
      showVideo: false,
    };
  },
  methods: {
    closeFuntion() {
      this.showVideo = false;
    },
  },
};
</script>
