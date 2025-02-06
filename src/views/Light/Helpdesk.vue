<template>
  <light-layout :active="5">
    <!--====================== Help-desk Search Start ======================-->
    <div class="helpdesk-search section-padding bg-dark-2">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-7">
            <div class="text-center">
              <div class="section-heading">
                <p>Tradix knowledge Base</p>
                <h1 class="h2 text-dark-400 fw-semi-bold">
                  How can we help you today?
                </h1>
              </div>
              <div class="helpdesk-form">
                <form action="#" @submit.prevent="" class="d-sm-flex">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search here"
                  />
                  <button class="btn btn-primary ms-sm-3 mt-2 mt-sm-0">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Help-desk Search End ======================-->

    <!--====================== Help Category Start ======================-->
    <div class="help-category section-padding pb-0">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-4">
            <div class="mb-5 text-center">
              <i class="la la-video-camera fa-3x text-primary"></i>
              <h5 class="fw-semi-bold text-dark-400 fs-5 mt-3">Video Guide</h5>
            </div>
          </div>
          <div class="col-12 col-sm-4">
            <div class="mb-5 text-center">
              <i class="la la-support fa-3x text-primary"></i>
              <h5 class="fw-semi-bold text-dark-400 fs-5 mt-3">FAQ</h5>
            </div>
          </div>
          <div class="col-12 col-sm-4">
            <div class="mb-5 text-center">
              <i class="la la-book fa-3x text-primary"></i>
              <h5 class="fw-semi-bold text-dark-400 fs-5 mt-3">
                API for developers
              </h5>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto">
            <a
              href="#!"
              class="sub-cat bg-dark-2 mb-4 rounded text-center py-3 px-4"
            >
              <h6 class="fw-semi-bold text-dark-400 text-primary">
                Troubleshooting
              </h6></a
            >
          </div>
          <div class="col-auto">
            <a
              href="#!"
              class="sub-cat bg-dark-2 mb-4 rounded text-center py-3 px-4"
            >
              <h6 class="fw-semi-bold text-dark-400 text-primary">
                Partnership
              </h6></a
            >
          </div>
          <div class="col-auto">
            <a
              href="#!"
              class="sub-cat bg-dark-2 mb-4 rounded text-center py-3 px-4"
            >
              <h6 class="fw-semi-bold text-dark-400 text-primary">
                Getting started
              </h6></a
            >
          </div>
          <div class="col-auto">
            <a
              href="#!"
              class="sub-cat bg-dark-2 mb-4 rounded text-center py-3 px-4"
            >
              <h6 class="fw-semi-bold text-dark-400 text-primary">
                Wallets
              </h6></a
            >
          </div>
          <div class="col-auto">
            <a
              href="#!"
              class="sub-cat bg-dark-2 mb-4 rounded text-center py-3 px-4"
            >
              <h6 class="fw-semi-bold text-dark-400 text-primary">
                Healthy Tips
              </h6></a
            >
          </div>
          <div class="col-auto">
            <a
              href="#!"
              class="sub-cat bg-dark-2 mb-4 rounded text-center py-3 px-4"
            >
              <h6 class="fw-semi-bold text-dark-400 text-primary">
                Crypto-definitions
              </h6></a
            >
          </div>
        </div>
      </div>
    </div>
    <!--====================== Help Category End ======================-->

    <!--====================== Troubleshooting Start ======================-->
    <div class="troubleshooting section-padding pb-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="section-heading text-center">
              <h2>Troubleshooting</h2>
            </div>
          </div>
        </div>
        <!-- section-heading end -->
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-lg-4">
                <h5 class="border-bottom pb-3 text-dark-400 fw-semi-bold">
                  My Transaction
                </h5>
                <ul class="list-group mt-3 bg-dark-2 p-3">
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray">My transaction is stuck</a>
                  </li>
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray">The amount is too low</a>
                  </li>
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray"
                      >Sorry, payment was not received</a
                    >
                  </li>
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray"
                      >Still didn't get my refund</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col-12 col-lg-4">
                <h5 class="border-bottom pb-3 text-dark-400 fw-semi-bold">
                  My Wallet
                </h5>
                <ul class="list-group mt-3 bg-dark-2 p-3">
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray"
                      >My wallet address is recognized as invalid</a
                    >
                  </li>
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray"
                      >What does ‘Not yet redeemed?’ mean</a
                    >
                  </li>
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray"
                      >I sent my ABC coins to a non-ABC wallet</a
                    >
                  </li>
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray">ETH contract addresses</a>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-lg-4">
                <h5 class="border-bottom pb-3 text-dark-400 fw-semi-bold">
                  Other
                </h5>
                <ul class="list-group mt-3 bg-dark-2 p-3">
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray"
                      >Customer service doesn't reply</a
                    >
                  </li>
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray">The amount is too low</a>
                  </li>
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray">Can't log in</a>
                  </li>
                  <li class="list-group-item border-0 pb-1 ps-0 bg-transparent">
                    <a href="#!" class="text-gray"
                      >Can’t enable / disable 2-FA</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Troubleshooting End ======================-->

    <!--====================== Ticket Box Start ======================-->
    <div class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="bg-dark-2 text-center py-5 px-3">
              <h3 class="fw-semi-bold text-dark-400">
                Can't find what you're looking for?
              </h3>
              <p class="mt-2 mb-4">Let us help you!</p>
              <a href="#!" class="btn btn-success btn-lg">Submit Ticket</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Ticket Box End ======================-->
  </light-layout>
</template>

<script>
// import DarkLayout from "../../components/Landing/Dark/DarkLayout.vue";
import LightLayout from "../../components/Landing/Light/LightLayout.vue";
export default {
  components: { LightLayout },
};
</script>
