<template>
  <dashboard-layout :dark="dark">
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
    <div class="pb-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div
              class="table-card border-0 rounded-default box-shadow transaction-table"
            >
              <div class="card-header bg-transparent border-0 p-0">
                <h2 class="h3 fw-semi-bold card-title mb-5">
                  Transaction History
                </h2>
              </div>
              <div class="card-body p-0">
                <table>
                  <tbody>
                    <tr :class="bg">
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
                    <tr :class="bg">
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
                    <tr :class="bg">
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
                    <tr :class="bg">
                      <th scope="row" data-label="Account">
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
                    <tr :class="bg">
                      <th scope="row" data-label="Account">
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
                    <tr :class="bg">
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
                    <tr :class="bg">
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
                    <tr :class="bg">
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
                    <tr :class="bg">
                      <th scope="row" data-label="Account">
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
                    <tr :class="bg">
                      <th scope="row" data-label="Account">
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
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "../../components/Dashboard/DashboardLayout.vue";
export default {
  components: { DashboardLayout },
  props: { dark: Boolean },
  data() {
    return {
      bg: this.dark ? "bg-dark-2" : "",
    };
  },
};
</script>
