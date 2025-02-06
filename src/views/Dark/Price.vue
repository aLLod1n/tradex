<template>
  <dark-layout :active="2">
    <!--====================== Pricing Start ======================-->
    <section class="pricing section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <form action="#" class="d-sm-flex mb-5 pb-4">
              <input
                type="text"
                class="form-control"
                placeholder="Search Coin"
              />
              <button class="btn btn-success ms-sm-3 mt-2 mt-sm-0 btn-md">
                Search
              </button>
            </form>
            <div
              class="d-sm-flex align-items-center justify-content-between mb-5"
            >
              <ul class="mb-3 mb-sm-0 d-flex">
                <li>
                  <a
                    href="#!"
                    class="h5 me-3 fw-semi-bold"
                    @click="activeDate = 1"
                    :class="
                      activeDate === 1 ? 'active text-primary' : 'text-white'
                    "
                    >1H</a
                  >
                </li>
                <li>
                  <a
                    href="#!"
                    class="h5 me-3 fw-semi-bold "
                    @click="activeDate = 2"
                    :class="
                      activeDate === 2 ? 'active text-primary' : 'text-white'
                    "
                    >24H</a
                  >
                </li>
                <li>
                  <a
                    href="#!"
                    class="h5 me-3 fw-semi-bold"
                    @click="activeDate = 3"
                    :class="
                      activeDate === 3 ? 'active text-primary' : 'text-white'
                    "
                    >1W</a
                  >
                </li>
                <li>
                  <a
                    href="#!"
                    class="h5 me-3 fw-semi-bold"
                    @click="activeDate = 4"
                    :class="
                      activeDate === 4 ? 'active text-primary' : 'text-white'
                    "
                    >1M</a
                  >
                </li>
                <li>
                  <a
                    href="#!"
                    class="h5 me-3 fw-semi-bold"
                    @click="activeDate = 5"
                    :class="
                      activeDate === 5 ? 'active text-primary' : 'text-white'
                    "
                    >1Y</a
                  >
                </li>
              </ul>
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link c-pointer"
                    data-bs-toggle="pill"
                    @click="activeTabs = 1"
                    :class="activeTabs === 1 && 'active'"
                  >
                    <i class="mdi mdi-view-grid"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link c-pointer"
                    data-bs-toggle="pill"
                    @click="activeTabs = 2"
                    :class="activeTabs === 2 && 'active'"
                  >
                    <i class="mdi mdi-view-sequential"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-12">
            <div class="tab-content">
              <div
                class="tab-pane fade "
                :class="activeTabs === 1 && 'show active'"
                id="grid-view"
              >
                <section class="price-grid ">
                  <div class="container">
                    <div class="row g-4">
                      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card border">
                          <div
                            class="card-header d-flex align-items-center justify-content-between border-0 pt-3 px-3 pb-0"
                          >
                            <div class="d-flex align-items-center">
                              <i class="cc BTC fs-3 me-2"></i>
                              <p class=" text-dark-400 fs-6">Bitcoin</p>
                            </div>
                            <p class="">24h</p>
                          </div>
                          <div class="card-body">
                            <h4 class="text-dark-400 fw-bold">
                              USD 62,548.2254
                            </h4>
                            <span class="text-success">+2.05%</span>
                            <btc-chart :color="'#F5921A'" />
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card border">
                          <div
                            class="card-header d-flex align-items-center justify-content-between border-0 pt-3 px-3 pb-0"
                          >
                            <div class="d-flex align-items-center">
                              <i class="cc LTC fs-3 me-2"></i>
                              <p class=" text-dark-400 fs-6">Litecoin</p>
                            </div>
                            <p class="">24h</p>
                          </div>
                          <div class="card-body pt-3 px-3">
                            <h4 class="text-dark-400 fw-bold">
                              USD 62,548.2254
                            </h4>
                            <span class="text-success">+2.05%</span>
                            <btc-chart :color="'#838383'" />
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card border">
                          <div
                            class="card-header d-flex align-items-center justify-content-between border-0 pt-3 px-3 pb-0"
                          >
                            <div class="d-flex align-items-center">
                              <i class="cc DASH fs-3 me-2"></i>
                              <p class=" text-dark-400 fs-6">Dashcoin</p>
                            </div>
                            <p class=" mb-0">24h</p>
                          </div>
                          <div class="card-body pt-3 px-3">
                            <h4 class="text-dark-400 fw-bold">
                              USD 62,548.2254
                            </h4>
                            <span class="text-success">+2.05%</span>
                            <btc-chart :color="'#1C75BC'" />
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card border">
                          <div
                            class="card-header d-flex align-items-center justify-content-between border-0 pt-3 px-3 pb-0"
                          >
                            <div class="d-flex align-items-center">
                              <i class="cc XRP fs-3 me-2"></i>
                              <p class=" text-dark-400 fs-6">Ripple</p>
                            </div>
                            <p class=" mb-0">24h</p>
                          </div>
                          <div class="card-body pt-3 px-3">
                            <h4 class="text-dark-400 fw-bold">
                              USD 62,548.2254
                            </h4>
                            <span class="text-success">+2.05%</span>
                            <btc-chart :color="'#346AA9'" />
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card border">
                          <div
                            class="card-header d-flex align-items-center justify-content-between border-0 pt-3 px-3 pb-0"
                          >
                            <div class="d-flex align-items-center">
                              <i class="cc ETH fs-3 me-2"></i>
                              <p class=" text-dark-400 fs-6">Ethereum</p>
                            </div>
                            <p class=" mb-0">24h</p>
                          </div>
                          <div class="card-body pt-3 px-3">
                            <h4 class="text-dark-400 fw-bold">
                              USD 62,548.2254
                            </h4>
                            <span class="text-success">+2.05%</span>
                            <btc-chart :color="'#2B2C2D'" />
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card border">
                          <div
                            class="card-header d-flex align-items-center justify-content-between border-0 pt-3 px-3 pb-0"
                          >
                            <div class="d-flex align-items-center">
                              <i class="cc USDT fs-3 me-2"></i>
                              <p class=" text-dark-400 fs-6">Tether</p>
                            </div>
                            <p class=" mb-0">24h</p>
                          </div>
                          <div class="card-body pt-3 px-3">
                            <h4 class="text-dark-400 fw-bold">
                              USD 62,548.2254
                            </h4>
                            <span class="text-success">+2.05%</span>
                            <btc-chart :color="'#2E9272'" />
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card border">
                          <div
                            class="card-header d-flex align-items-center justify-content-between border-0 pt-3 px-3 pb-0"
                          >
                            <div class="d-flex align-items-center">
                              <i class="cc EOS fs-3 me-2"></i>
                              <p class=" text-dark-400 fs-6">Eosio</p>
                            </div>
                            <p class=" mb-0">24h</p>
                          </div>
                          <div class="card-body pt-3 px-3">
                            <h4 class="text-dark-400 fw-bold">
                              USD 62,548.2254
                            </h4>
                            <span class="text-success">+2.05%</span>
                            <btc-chart :color="'#1E1F21'" />
                          </div>
                        </div>
                      </div>

                      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div class="card border">
                          <div
                            class="card-header d-flex align-items-center justify-content-between border-0 pt-3 px-3 pb-0"
                          >
                            <div class="d-flex align-items-center">
                              <i class="cc XTZ fs-3 me-2"></i>
                              <p class=" text-dark-400 fs-6">Tezos</p>
                            </div>
                            <p class=" mb-0">24h</p>
                          </div>
                          <div class="card-body pt-3 px-3">
                            <h4 class="text-dark-400 fw-bold">
                              USD 62,548.2254
                            </h4>
                            <span class="text-success">+2.05%</span>
                            <btc-chart :color="'#A6DF00'" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <!-- tab-pane end -->
              <div
                class="tab-pane fade"
                :class="activeTabs === 2 && 'show active'"
                id="list-view"
              >
                <div class="table-card border-0">
                  <div class="card-body p-0">
                    <table>
                      <thead>
                        <tr class="bg-dark-2">
                          <th>#</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Change</th>
                          <th>Chart</th>
                          <th>Trade</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="bg-dark-2">
                          <th scope="row" data-label="Number">
                            <span class="fw-bold">1</span>
                          </th>
                          <th data-label="Name">
                            <div class="d-flex align-items-center">
                              <span
                                class="icon d-flex align-items-center justify-content-center me-3"
                              >
                                <i class="cc BTC fs-2"></i>
                              </span>
                              <span> Bitcoin </span>
                              <span class="fw-normal ms-3">BTC</span>
                            </div>
                          </th>
                          <th data-label="Price">
                            <span> USD 680,175.06</span>
                          </th>
                          <th data-label="Change">
                            <span class="text-success">+1.13%</span>
                          </th>
                          <th data-label="Chart" id="sparkLink">
                            <table-sparkline />
                          </th>
                          <th data-label="Button">
                            <a href="#!" class="btn btn-success">Buy</a>
                          </th>
                        </tr>

                        <tr class="bg-dark-2">
                          <th scope="row" data-label="Number">
                            <span class="fw-bold">2</span>
                          </th>
                          <th data-label="Name">
                            <div class="d-flex align-items-center">
                              <span
                                class="icon d-flex align-items-center justify-content-center me-3"
                              >
                                <i class="cc ETH fs-2"></i>
                              </span>
                              <span> Ethereum </span>
                              <span class="ms-3 fw-normal"> ET</span>
                            </div>
                          </th>
                          <th data-label="Price">
                            <span> USD 680,175.06</span>
                          </th>
                          <th data-label="Change">
                            <span class="text-success">+1.13%</span>
                          </th>
                          <th data-label="Chart" id="sparkLink">
                            <table-sparkline />
                          </th>
                          <th data-label="Button">
                            <a href="#!" class="btn btn-success">Buy</a>
                          </th>
                        </tr>

                        <tr class="bg-dark-2">
                          <th scope="row" data-label="Number">
                            <span class="fw-bold">3</span>
                          </th>
                          <th data-label="Name">
                            <div class="d-flex align-items-center">
                              <span
                                class="icon d-flex align-items-center justify-content-center me-3"
                              >
                                <i class="cc BCH-alt fs-2"></i>
                              </span>
                              <span>Bitcoin Cash</span>
                              <span class="ms-3 fw-normal"> BCH</span>
                            </div>
                          </th>
                          <th data-label="Price">
                            <span> USD 680,175.06</span>
                          </th>
                          <th data-label="Change">
                            <span class="text-success">+1.13%</span>
                          </th>
                          <th data-label="Chart" id="sparkLink">
                            <table-sparkline />
                          </th>
                          <th data-label="Button">
                            <a href="#!" class="btn btn-success">Buy</a>
                          </th>
                        </tr>

                        <tr class="bg-dark-2">
                          <th scope="row" data-label="Number">
                            <span class="fw-bold">4</span>
                          </th>
                          <th data-label="Name">
                            <div class="d-flex align-items-center">
                              <span
                                class="icon d-flex align-items-center justify-content-center me-3"
                              >
                                <i class="cc LTC fs-2"></i>
                              </span>
                              <span>Litecoin </span>
                              <span class="ms-3 fw-normal"> LTC</span>
                            </div>
                          </th>
                          <th data-label="Price">
                            <span> USD 680,175.06</span>
                          </th>
                          <th data-label="Change">
                            <span class="text-danger ">+1.13%</span>
                          </th>
                          <th data-label="Chart" id="sparkLink">
                            <table-sparkline />
                          </th>
                          <th data-label="Button">
                            <a href="#!" class="btn btn-success">Buy</a>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <!-- tab-pane end -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====================== Pricing End ======================-->
  </dark-layout>
</template>
<script>
import DarkLayout from "../../components/Landing/Dark/DarkLayout";
import BtcChart from "../../components/Tradix/Charts/BtcChart.vue";
import TableSparkline from "../../components/Tradix/Charts/TableSparkline.vue";
export default {
  components: { DarkLayout, BtcChart, TableSparkline },
  data() {
    return {
      activeTabs: 1,
      activeDate: 1,
    };
  },
};
</script>
