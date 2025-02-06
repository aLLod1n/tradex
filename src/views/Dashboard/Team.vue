<template>
  <dashboard-layout :dark="dark" :active="3">
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
          <div class="row mb-5">
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="card border-0">
                <div class="card-body px-0">
                  <div class="d-flex align-items-start border-bottom border-gray-light pb-3 mb-3">
                    <img class="rounded-circle me-3" src="../../assets/images/profile/2.png" width="60" height="60"
                      loading="lazy" alt="…">
                    <div>
                      <span class="text-gray">Hello</span>
                      <h2 class="h5 fw-semi-bold mb-2">Maria Pascle</h2>
                      <a href="tel:+12355547" class="mb-1 fs-6 text-gray"><i class="fas fa-phone-alt me-2 text-primary fa-xs"></i> +1 235 5547</a><br>
                      <a href="mailto:hello@example.com" class="mb-1 fs-6 text-gray"><i class="fa fa-envelope me-2 text-primary"></i>hello@example.com</a>
                    </div>
                  </div>

                  <ul>
                    <li class="mb-1">
                      <h3 class="h6 fw-semi-bold me-4 d-inline-block">Address</h3>
                      <span class="text-muted">House 14, Road 9, Gulshan, Dhaka</span>
                    </li>
                    <li class="mb-1">
                      <h3 class="h6 fw-semi-bold me-4 d-inline-block">Total Log</h3>
                      <span class="text-gray">103 Time (Today 5 Times)</span>
                    </li>
                    <li class="mb-1">
                      <h3 class="h6 fw-semi-bold text-danger me-4 d-inline-block">Last Log</h3>
                      <span class="text-danger">3 February, 2019, 10:00 PM</span>
                    </li>
                  </ul>
                  <div class="social--icons">
                    <a class="facebook text-center" href="javascript:void(0)">
                      <span><i class="fab fa-facebook-f"></i></span>
                    </a>
                    <a class="twitter text-center" href="javascript:void(0)">
                      <span><i class="fab fa-twitter"></i></span>
                    </a>
                    <a class="youtube text-center" href="javascript:void(0)">
                      <span><i class="fab fa-youtube"></i></span>
                    </a>
                    <a class="googlePlus text-center" href="javascript:void(0)">
                      <span><i class="fab fa-google"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-0">
                <div class="card-header border-bottom mb-3 p-0 pb-3">
                  <h3 class="fw-semi-bold card-title">Wallet</h3>
                </div>
                <div class="card-body">
                  <div class="mb-4">
                    <p class="text-gray mb-1">Available BTC</p>
                    <h3 class="fw-semi-bold">0.0230145 BTC</h3>
                  </div>

                  <div class="d-flex justify-content-between mb-4">
                    <div>
                      <p class="text-gray mb-1">Buy this month</p>
                      <h5 class="fw-semi-bold">3.0215485 BTC</h5>
                    </div>
                    <div>
                      <p class="text-gray mb-1">Sell this month</p>
                      <h5 class="fw-semi-bold">3.0215485 BTC</h5>
                    </div>
                  </div>
                  <div class="btn-group mb-3 mt-2 w-100 flex-wrap">
                    <button class="btn btn-primary m-2">Sell</button>
                    <button class="btn btn-success m-2">Buy</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="card border-0">
                <div class="card-header border-bottom mb-3 p-0 pb-3">
                  <h3 class="fw-semi-bold card-title">Withdraw</h3>
                </div>
                <div class="card-body">
                  <form action="#" @submit.prevent="">
                    <div class="form-group">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend d-flex">
                          <label class="input-group-text border-0 bg-light-200"><i class="far fa-money-bill-alt text-dark-400"></i></label>
                        </div>
                        <input type="text" class="form-control" placeholder="5000 USD">
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend d-flex">
                          <label class="input-group-text border-0 bg-light-200"><i class="fas fa-university text-dark-400"></i></label>
                        </div>
                        <select class="form-select border-end-0">
                          <option>Bank of America ********45845</option>
                          <option>Master Card ***********5458</option>
                        </select>
                      </div>
                    </div>
                    <button class="btn btn-primary btn-block w-100">Withdraw Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="table-card border-0 rounded-default box-shadow transaction-table">
                <div class="card-header bg-transparent border-0 p-0">
                  <h2 class="h3 fw-semi-bold card-title mb-5">All Activities </h2>
                </div>
                <div class="card-body p-0">
                  <table>
                    <tbody>
                      <tr :class="bg">
                        <th data-label="Arrow Icon"><i
                            class="la la-arrow-down fa-md rounded-circle text-white bg-danger"></i></th>
                        <th data-label="Badge"><span
                            class="badge inline-flex align-items-center bg-danger text-white">sold</span></th>
                        <th data-label="Icon">
                          <div class="d-flex align-items-center">
                            <span class="icon d-flex align-items-center justify-content-center me-1">
                              <i class="cc BTC"></i>
                            </span>
                            <span class="text-capitalize fw-semi-bold">btc</span>
                          </div>
                        </th>
                        <th data-label="Card"><span class="fw-semi-bold">Using - Bank *******5264</span></th>
                        <th data-label="Amout BTC"><span class="text-danger fw-semi-bold">-0.000242 BTC</span></th>
                        <th data-label="Amout USD"><span class="fw-semi-bold">-0.125 USD</span></th>
                      </tr>
                      <tr :class="bg">
                        <th scope="row" data-label="Arrow Icon"><i
                            class="la la-arrow-up fa-md rounded-circle text-white bg-success"></i></th>
                        <th data-label="Badge"><span
                            class="badge inline-flex align-items-center bg-success text-white">Buy</span></th>
                        <th data-label="Icon">
                          <div class="d-flex align-items-center">
                            <span class="icon d-flex align-items-center justify-content-center me-1">
                              <i class="cc LTC"></i>
                            </span>
                            <span class="text-capitalize fw-semi-bold">LTC</span>
                          </div>
                        </th>
                        <th data-label="Card"><span class="fw-semi-bold">Using - Bank *******5264</span></th>
                        <th data-label="Amout BTC"><span class="text-success fw-semi-bold">-0.000242 BTC</span></th>
                        <th data-label="Amout USD"><span class="fw-semi-bold">-0.125 USD</span></th>
                      </tr>
                      <tr :class="bg">
                        <th scope="row" data-label="Arrow Icon"><i
                            class="la la-arrow-down fa-md rounded-circle text-white bg-danger"></i></th>
                        <th data-label="Badge"><span
                            class="badge inline-flex align-items-center bg-danger text-white">sold</span></th>
                        <th data-label="Icon">
                          <div class="d-flex align-items-center">
                            <span class="icon d-flex align-items-center justify-content-center me-1">
                              <i class="cc XRP"></i>
                            </span>
                            <span class="text-capitalize fw-semi-bold">XRP</span>
                          </div>
                        </th>
                        <th data-label="Card"><span class="fw-semi-bold">Using - Bank *******5264</span></th>
                        <th data-label="Amout BTC"><span class="text-danger fw-semi-bold">-0.000242 BTC</span></th>
                        <th data-label="Amout USD"><span class="fw-semi-bold">-0.125 USD</span></th>
                      </tr>
                      <tr :class="bg">
                        <th scope="row" data-label="Acount"><i
                            class="la la-arrow-up fa-md rounded-circle text-white bg-success"></i></th>
                        <th data-label="Badge"><span
                            class="badge inline-flex align-items-center bg-success text-white">Buy</span></th>
                        <th data-label="Icon">
                          <div class="d-flex align-items-center">
                            <span class="icon d-flex align-items-center justify-content-center me-1">
                              <i class="cc DASH"></i>
                            </span>
                            <span class="text-capitalize fw-semi-bold">DASH</span>
                          </div>
                        </th>
                        <th data-label="Card"><span class="fw-semi-bold">Using - Bank *******5264</span></th>
                        <th data-label="Amout BTC"><span class="text-success fw-semi-bold">-0.000242 BTC</span></th>
                        <th data-label="Amout USD"><span class="fw-semi-bold">-0.125 USD</span></th>
                      </tr>
                      <tr :class="bg">
                        <th scope="row" data-label="Acount"><i
                            class="la la-arrow-up fa-md rounded-circle text-white bg-danger"></i></th>
                        <th data-label="Badge"><span
                            class="badge inline-flex align-items-center bg-danger text-white">sold</span></th>
                        <th data-label="Icon">
                          <div class="d-flex align-items-center">
                            <span class="icon d-flex align-items-center justify-content-center me-1">
                              <i class="cc BTC"></i>
                            </span>
                            <span class="text-capitalize fw-semi-bold">btc</span>
                          </div>
                        </th>
                        <th data-label="Card"><span class="fw-semi-bold">Using - Bank *******5264</span></th>
                        <th data-label="Amout BTC"><span class="text-danger fw-semi-bold">-0.000242 BTC</span></th>
                        <th data-label="Amout USD"><span class="fw-semi-bold">-0.125 USD</span></th>
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
// import BtcChart from "../../components/Tradix/Charts/BtcChart.vue";
// import TimelineChart from "../../components/Tradix/Charts/TimelineChart.vue";
// import CurrencyForm from "../../components/Tradix/CurrencyForm2.vue";
export default {
  components: { DashboardLayout, },
  props: {
    dark: Boolean,
  },
  data() {
    return {
      active: "all",
      bg:this.dark ? 'text-white bg-dark-2':'text-gray bg-light-200'
    };
  },
};
</script>
