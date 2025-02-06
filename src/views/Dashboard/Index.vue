<template>
  <dashboard-layout :dark="dark" :active="1">
    <toster />
    <!--====================== Header End ======================-->
    <!--====================== Page Title Start ======================-->
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
        <div class="row g-4 mb-4">
          <div class="col-12 col-lg-4 col-xl-3">
            <div class="card border-0">
              <div class="card-header border-0 py-0">
                <h2 class="h3 fw-semi-bold card-title">Your Portfolio</h2>
              </div>
              <div class="card-body p-0">
                <div class="text-center py-5">
                  <h3 class="fw-semi-bold mb-1">$63411.00</h3>
                  <h4 class="h6 fw-semi-bold text-dark-400">Total Balance</h4>
                </div>
                <ul class="list-unstyled">
                  <li
                    class="d-flex justify-content-between align-items-center p-3 mb-3 rounded-5"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <div class="d-flex align-items-center">
                      <i class="cc BTC me-3 fs-3"></i>
                      <h5 class="h6 fw-semi-bold">Bitcoin</h5>
                    </div>
                    <div class="text-end">
                      <h5 class="h6 fw-semi-bold mb-2">0.000242 BTC</h5>
                      <span class="text-gray">0.125 USD</span>
                    </div>
                  </li>
                  <li
                    class="d-flex justify-content-between align-items-center p-3 mb-3 rounded-5"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <div class="d-flex align-items-center">
                      <i class="cc LTC me-3 fs-3"></i>
                      <h5 class="h6 fw-semi-bold">Litecoin</h5>
                    </div>
                    <div class="text-end">
                      <h5 class="h6 fw-semi-bold mb-2">0.000242 LTC</h5>
                      <span class="text-gray">0.125 USD</span>
                    </div>
                  </li>
                  <li
                    class="d-flex justify-content-between align-items-center p-3 mb-3 rounded-5"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <div class="d-flex align-items-center">
                      <i class="cc XRP me-3 fs-3"></i>
                      <h5 class="h6 fw-semi-bold">Ripple</h5>
                    </div>
                    <div class="text-end">
                      <h5 class="h6 fw-semi-bold mb-2">0.000242 XRP</h5>
                      <span class="text-gray">0.125 USD</span>
                    </div>
                  </li>
                  <li
                    class="d-flex justify-content-between align-items-center p-3 mb-3 rounded-5"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <div class="d-flex align-items-center">
                      <i class="cc DASH me-3 fs-3"></i>
                      <h5 class="h6 fw-semi-bold">Dash</h5>
                    </div>
                    <div class="text-end">
                      <h5 class="h6 fw-semi-bold mb-2">0.000242 XRP</h5>
                      <span class="text-gray">0.125 USD</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-8 col-xl-6">
            <div class="px-xl-5">
              <div
                class="card border-0 d-flex justify-content-between py-0 flex-column flex-sm-row border-0 mb-4"
              >
                <div>
                  <h3 class="fw-semi-bold mb-2">254856 <span>USD</span></h3>
                  <p class=" text-success">125648 <span>USD (20%)</span></p>
                </div>
                <div class="duration-option mt-3">
                  <a
                    id="all"
                    class="c-pointer"
                    @click="active = 'all'"
                    :class="active === 'all' && 'active'"
                    >ALL</a
                  >
                  <a
                    id="one_month"
                    class="c-pointer"
                    @click="active = '1m'"
                    :class="active === '1m' && 'active'"
                    >1M</a
                  >
                  <a
                    id="six_months"
                    class="c-pointer"
                    @click="active = '6m'"
                    :class="active === '6m' && 'active'"
                    >6M</a
                  >
                  <a
                    id="one_year"
                    class="c-pointer"
                    @click="active = '1y'"
                    :class="active === '1y' && 'active'"
                    >1Y</a
                  >
                  <a
                    id="ytd"
                    class="c-pointer"
                    @click="active = 'ytm'"
                    :class="active === 'ytm' && 'active'"
                    >YTD</a
                  >
                </div>
              </div>
              <!-- <div id="timeline-chart"></div> -->
              <timeline-chart />
              <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
                <div class="col">
                  <div
                    class="card border-0  rounded-5 p-3 mb-3"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <p class="text-gray mb-1">24hr Volume</p>
                    <h5 class="h6 fw-semi-bold">$1236548.325</h5>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="card border-0  rounded-5 p-3 mb-3"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <p class="text-gray mb-1">Market Cap</p>
                    <h5 class="h6 fw-semi-bold">19B USD</h5>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="card border-0  rounded-5 p-3 mb-3"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <p class="text-gray mb-1">Circulating Supply</p>
                    <h5 class="h6 fw-semi-bold">29.4M BTC</h5>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="card border-0  rounded-5 p-3 mb-3"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <p class="text-gray mb-1">All Time High</p>
                    <h5 class="h6 fw-semi-bold">19.783.06 USD</h5>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="card border-0  rounded-5 p-3 mb-3"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <p class="text-gray mb-1">Typical hold time</p>
                    <h5 class="h6 fw-semi-bold">88 days</h5>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="card border-0  rounded-5 p-3 mb-3"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <p class="text-gray mb-1">Trading activity</p>
                    <h5 class="h6 fw-semi-bold">70% buy</h5>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="card border-0  rounded-5 p-3 mb-3"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <p class="text-gray mb-1">Popularity</p>
                    <h5 class="h6 fw-semi-bold">#1 most held</h5>
                  </div>
                </div>
                <div class="col">
                  <div
                    class="card border-0  rounded-5 p-3 mb-3"
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                  >
                    <p class="text-gray mb-1">Popularity</p>
                    <h5 class="h6 fw-semi-bold">#1 most held</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-3">
            <div class="card border-0">
              <div class="card-header border-0 py-0">
                <h2 class="h3 fw-semi-bold card-title mb-4">Follow</h2>
              </div>
              <div class="card-body p-0">
                <ul>
                  <li
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                    class=" rounded-5 mb-3 p-3 py-md-0"
                  >
                    <div
                      class="d-flex justify-content-between align-items-center flex-column flex-md-row"
                    >
                      <div class="widget-stat">
                        <div>
                          <span><i class="cc BTC fs-4"></i></span>
                          <h6
                            class="fw-semi-bold d-inline-block ms-2 mb-3 text-gray"
                          >
                            Bitcoin <span>(24h)</span>
                          </h6>
                        </div>
                        <h5 class="fw-semi-bold d-flex">
                          USD 1254.36
                          <span
                            class="badge bg-success ms-2 px-1 d-flex align-items-cente2"
                            >+ 06%</span
                          >
                        </h5>
                      </div>
                      <!-- <div id="btcChart"></div> -->
                      <btc-chart :color="'#F5921A'" />
                    </div>
                  </li>
                  <li
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                    class=" rounded-5 mb-3 p-3 py-md-0"
                  >
                    <div
                      class="d-flex justify-content-between align-items-center flex-column flex-md-row"
                    >
                      <div class="widget-stat">
                        <div>
                          <span><i class="cc ETH fs-4"></i></span>
                          <h6
                            class="fw-semi-bold d-inline-block ms-2 mb-3 text-gray"
                          >
                            Ethereum <span>(24h)</span>
                          </h6>
                        </div>
                        <h5 class="fw-semi-bold d-flex">
                          USD 1254.36
                          <span
                            class="badge bg-danger ms-2 px-1 d-flex align-items-cente"
                            >- 06%</span
                          >
                        </h5>
                      </div>
                      <btc-chart :color="'#838383'" />
                    </div>
                  </li>
                  <li
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                    class=" rounded-5 mb-3 p-3 py-md-0"
                  >
                    <div
                      class="d-flex justify-content-between align-items-center flex-column flex-md-row"
                    >
                      <div class="widget-stat">
                        <div>
                          <span><i class="cc LTC fs-4"></i></span>
                          <h6
                            class="fw-semi-bold d-inline-block ms-2 mb-3 text-gray"
                          >
                            Litecoin <span>(24h)</span>
                          </h6>
                        </div>
                        <h5 class="fw-semi-bold d-flex">
                          USD 1254.36
                          <span
                            class="badge bg-primary ms-2 px-1 d-flex align-items-cente2"
                          >
                            06%</span
                          >
                        </h5>
                      </div>
                      <btc-chart :color="'#1C75BC'" />
                    </div>
                  </li>
                  <li
                    :class="dark ? 'bg-dark-2' : 'bg-light-200'"
                    class=" rounded-5 mb-3 p-3 py-md-0"
                  >
                    <div
                      class="d-flex justify-content-between align-items-center flex-column flex-md-row"
                    >
                      <div class="widget-stat">
                        <div>
                          <span><i class="cc XRP fs-4"></i></span>
                          <h6
                            class="fw-semi-bold d-inline-block ms-2 mb-3 text-gray"
                          >
                            Ripple <span>(24h)</span>
                          </h6>
                        </div>
                        <h5 class="fw-semi-bold d-flex">
                          USD 1254.36
                          <span
                            class="badge bg-danger ms-2 px-1 d-flex align-items-cente"
                            >- 06%</span
                          >
                        </h5>
                      </div>
                      <btc-chart :color="'#346AA9'" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-12 col-xl-3">
            <div class="card border-0">
              <div class="card-header border-0 py-0">
                <h2 class="h3 fw-semi-bold card-title mb-4">Exchange</h2>
              </div>
              <div class="card-body p-0">
                <currency-form />
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-9">
            <div
              class="table-card border-0 rounded-default px-xl-5 box-shadow transaction-table"
            >
              <div class="card-header bg-transparent border-0 p-0">
                <h2 class="h3 fw-semi-bold card-title mb-5">
                  Recent Activities
                </h2>
              </div>
              <div class="card-body p-0">
                <table>
                  <tbody>
                    <tr :class="dark ? 'bg-dark-2' : 'text-gray bg-light-200'">
                      <th data-label="Arrow Icon">
                        <i
                          class="la la-arrow-down fa-md rounded-circle text-white bg-danger"
                        ></i>
                      </th>
                      <th data-label="Badge">
                        <span
                          class="badge inline-flex align-items-center bg-danger text-white"
                          >sold</span
                        >
                      </th>
                      <th data-label="Icon">
                        <div class="d-flex align-items-center">
                          <span
                            class="icon d-flex align-items-center justify-content-center me-1"
                          >
                            <i class="cc BTC"></i>
                          </span>
                          <span class="text-capitalize fw-semi-bold">btc</span>
                        </div>
                      </th>
                      <th data-label="Card">
                        <span class="fw-semi-bold"
                          >Using - Bank *******5264</span
                        >
                      </th>
                      <th data-label="Amout BTC">
                        <span class="text-danger fw-semi-bold"
                          >-0.000242 BTC</span
                        >
                      </th>
                      <th data-label="Amout USD">
                        <span class="fw-semi-bold">-0.125 USD</span>
                      </th>
                    </tr>
                    <tr :class="dark ? 'bg-dark-2' : 'text-gray bg-light-200'">
                      <th scope="row" data-label="Arrow Icon">
                        <i
                          class="la la-arrow-up fa-md rounded-circle text-white bg-success"
                        ></i>
                      </th>
                      <th data-label="Badge">
                        <span
                          class="badge inline-flex align-items-center bg-success text-white"
                          >Buy</span
                        >
                      </th>
                      <th data-label="Icon">
                        <div class="d-flex align-items-center">
                          <span
                            class="icon d-flex align-items-center justify-content-center me-1"
                          >
                            <i class="cc LTC"></i>
                          </span>
                          <span class="text-capitalize fw-semi-bold">LTC</span>
                        </div>
                      </th>
                      <th data-label="Card">
                        <span class="fw-semi-bold"
                          >Using - Bank *******5264</span
                        >
                      </th>
                      <th data-label="Amout BTC">
                        <span class="text-success fw-semi-bold"
                          >-0.000242 BTC</span
                        >
                      </th>
                      <th data-label="Amout USD">
                        <span class="fw-semi-bold">-0.125 USD</span>
                      </th>
                    </tr>
                    <tr :class="dark ? 'bg-dark-2' : 'text-gray bg-light-200'">
                      <th scope="row" data-label="Arrow Icon">
                        <i
                          class="la la-arrow-down fa-md rounded-circle text-white bg-danger"
                        ></i>
                      </th>
                      <th data-label="Badge">
                        <span
                          class="badge inline-flex align-items-center bg-danger text-white"
                          >sold</span
                        >
                      </th>
                      <th data-label="Icon">
                        <div class="d-flex align-items-center">
                          <span
                            class="icon d-flex align-items-center justify-content-center me-1"
                          >
                            <i class="cc XRP"></i>
                          </span>
                          <span class="text-capitalize fw-semi-bold">XRP</span>
                        </div>
                      </th>
                      <th data-label="Card">
                        <span class="fw-semi-bold"
                          >Using - Bank *******5264</span
                        >
                      </th>
                      <th data-label="Amout BTC">
                        <span class="text-danger fw-semi-bold"
                          >-0.000242 BTC</span
                        >
                      </th>
                      <th data-label="Amout USD">
                        <span class="fw-semi-bold">-0.125 USD</span>
                      </th>
                    </tr>
                    <tr :class="dark ? 'bg-dark-2' : 'text-gray bg-light-200'">
                      <th scope="row" data-label="Acount">
                        <i
                          class="la la-arrow-up fa-md rounded-circle text-white bg-success"
                        ></i>
                      </th>
                      <th data-label="Badge">
                        <span
                          class="badge inline-flex align-items-center bg-success text-white"
                          >Buy</span
                        >
                      </th>
                      <th data-label="Icon">
                        <div class="d-flex align-items-center">
                          <span
                            class="icon d-flex align-items-center justify-content-center me-1"
                          >
                            <i class="cc DASH"></i>
                          </span>
                          <span class="text-capitalize fw-semi-bold">DASH</span>
                        </div>
                      </th>
                      <th data-label="Card">
                        <span class="fw-semi-bold"
                          >Using - Bank *******5264</span
                        >
                      </th>
                      <th data-label="Amout BTC">
                        <span class="text-success fw-semi-bold"
                          >-0.000242 BTC</span
                        >
                      </th>
                      <th data-label="Amout USD">
                        <span class="fw-semi-bold">-0.125 USD</span>
                      </th>
                    </tr>
                    <tr :class="dark ? 'bg-dark-2' : 'text-gray bg-light-200'">
                      <th scope="row" data-label="Acount">
                        <i
                          class="la la-arrow-up fa-md rounded-circle text-white bg-danger"
                        ></i>
                      </th>
                      <th data-label="Badge">
                        <span
                          class="badge inline-flex align-items-center bg-danger text-white"
                          >sold</span
                        >
                      </th>
                      <th data-label="Icon">
                        <div class="d-flex align-items-center">
                          <span
                            class="icon d-flex align-items-center justify-content-center me-1"
                          >
                            <i class="cc BTC"></i>
                          </span>
                          <span class="text-capitalize fw-semi-bold">btc</span>
                        </div>
                      </th>
                      <th data-label="Card">
                        <span class="fw-semi-bold"
                          >Using - Bank *******5264</span
                        >
                      </th>
                      <th data-label="Amout BTC">
                        <span class="text-danger fw-semi-bold"
                          >-0.000242 BTC</span
                        >
                      </th>
                      <th data-label="Amout USD">
                        <span class="fw-semi-bold">-0.125 USD</span>
                      </th>
                    </tr>
                  </tbody>
                </table>
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
import Toster from "../../components/Dashboard/Toster.vue";
import BtcChart from "../../components/Tradix/Charts/BtcChart.vue";
import TimelineChart from "../../components/Tradix/Charts/TimelineChart.vue";
import CurrencyForm from "../../components/Tradix/CurrencyForm2.vue";
export default {
  components: {
    DashboardLayout,
    CurrencyForm,
    BtcChart,
    TimelineChart,
    Toster,
  },
  props: {
    dark: Boolean,
  },
  data() {
    return {
      active: "all",
    };
  },
};
</script>
