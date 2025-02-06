<template>
  <dark-layout :active="1">
    <!--====================== Intro Start ======================-->
    <div class="intro2 position-relative section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8 col-xl-6">
            <div class="text-center py-4">
              <h1 class="fw-bold fw-bold text-white">
                Buy and sell cryptocurrency
              </h1>
              <p class=" lh-lg mb-5 text-gary">
                Fast and secure way to purchase or exchange 150+
                cryptocurrencies
              </p>
              <div class="intro-form position-relative mb-md-5">
                <form action="#" @submit.prevent="">
                  <div class="form-group mb-0 d-flex">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subscribe Now"
                    />
                    <button type="submit" class="bg-primary">
                      <i class="la la-arrow-right first"></i>
                      <i class="la la-arrow-right second"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Intro End ======================-->

    <!--====================== Exchange Form Start ======================-->
    <div class="exchange-form position-relative">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-7 col-lg-7">
            <div class="intro-form-exchange p-4 shadow-5 rounded bg-dark-2">
              <currency-form />
            </div>
            <!-- intro-form-exchange end -->
          </div>
        </div>
      </div>
    </div>
    <!--====================== Exchange Form End ======================-->

    <!--====================== Market Start ======================-->
    <div class="section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-8">
            <div class="section-heading text-center">
              <h2>The World's Leading Cryptocurrency Exchange</h2>
              <p>
                Trade Bitcoin, ETH, and hundreds of other cryptocurrencies in
                minutes.
              </p>
            </div>
          </div>
        </div>
        <!-- section-heading end -->
        <div class="row">
          <div class="col-12">
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
                      <th data-label="Price"><span> USD 680,175.06</span></th>
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
                      <th data-label="Price"><span> USD 680,175.06</span></th>
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
                      <th data-label="Price"><span> USD 680,175.06</span></th>
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
                      <th data-label="Price"><span> USD 680,175.06</span></th>
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
        </div>
      </div>
    </div>
    <!--====================== Market End ======================-->

    <!--====================== Info Start ======================-->
    <div class="section-padding pt-0">
      <div class="container">
        <div class="row g-4 justify-content-center">
          <div class="col-12 col-sm-6 col-md-4 col-xl-2">
            <div class="card bg-dark-2 border-0 text-center rounded py-4 px-3">
              <i class="la la-shield text-primary fs-1"></i>
              <h5 class="fw-semi-bold mt-3">Best rates on the market</h5>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-xl-2">
            <div class="card bg-dark-2 border-0 text-center rounded py-4 px-3">
              <i class="la la-cubes text-primary fs-1"></i>
              <h5 class="fw-semi-bold mt-3">Transparent 0.25% fee</h5>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-xl-2">
            <div class="card bg-dark-2 border-0 text-center rounded py-4 px-3">
              <i class="la la-clock-o text-primary fs-1"></i>
              <h5 class="fw-semi-bold mt-3">5-30 min transactions</h5>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-xl-2">
            <div class="card bg-dark-2 border-0 text-center rounded py-4 px-3">
              <i class="la la-exchange text-primary fs-1"></i>
              <h5 class="fw-semi-bold mt-3">High exchange limits</h5>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-xl-2">
            <div class="card bg-dark-2 border-0 text-center rounded py-4 px-3">
              <i class="la la-support text-primary fs-1"></i>
              <h5 class="fw-semi-bold mt-3">24/7 live chat support</h5>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-xl-2">
            <div class="card bg-dark-2 border-0 text-center rounded py-4 px-3">
              <i class="la la-support text-primary fs-1"></i>
              <h5 class="fw-semi-bold mt-3">24/7 live chat support</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Info End ======================-->

    <!--====================== Product Features Start ======================-->
    <div class="product-feature section-padding pt-0">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-12 col-lg-6 pe-lg-4">
            <div class="section-heading">
              <h2 class="text-dark-400 fw-bold">24-hour statistics</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                odit fuga nesciunt similique rerum nulla asperiores ullam
                deserunt architecto inventore.
              </p>
            </div>
            <!-- section-heading end -->
            <div class="mb-4 mb-lg-0">
              <div class="d-flex align-items-center">
                <div class="col-4 col-sm-6">
                  <div class="mb-5">
                    <h3 class="fw-semi-bold fs-5">
                      <span class="text-primary me-2"
                        ><i class="fas fa-shield-alt"></i
                      ></span>
                      27 %
                    </h3>
                    <p>New users</p>
                  </div>
                  <div class="mb-5">
                    <h3 class="fw-semi-bold fs-5">
                      <span class="text-primary me-2"
                        ><i class="fa fa-adjust"></i
                      ></span>
                      73 %
                    </h3>
                    <p>Regular users</p>
                  </div>
                </div>
                <div class="col-8 col-sm-6 ms-md-3">
                  <!-- <div id="sparkline11"></div> -->
                  <div id="pieChart">
                    <pie-chart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="row g-4">
              <div class="col-12 col-sm-6">
                <div class="border bg-dark-2 rounded text-center px-3 py-4">
                  <span
                    class="bg-primary text-white rounded d-inline-block fs-3 mt-1 py-2 px-3"
                    ><i class="la la-exchange"></i
                  ></span>
                  <h3 class="h5 fw-semi-bold my-3">1900</h3>
                  <p>Transactions made</p>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="border bg-dark-2 rounded text-center px-3 py-4">
                  <span
                    class="bg-secondary text-white rounded d-inline-block fs-3 mt-1 py-2 px-3"
                    ><i class="la la-trophy"></i
                  ></span>
                  <h3 class="h5 fw-semi-bold my-3">ETH-BTC</h3>
                  <p>Today's champion pair</p>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="border bg-dark-2 rounded text-center px-3 py-4">
                  <span
                    class="bg-success text-white rounded d-inline-block fs-3 mt-1 py-2 px-3"
                    ><i class="la la-user"></i
                  ></span>
                  <h3 class="h5 fw-semi-bold my-3">27 150</h3>
                  <p>Visits today</p>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="border bg-dark-2 rounded text-center px-3 py-4">
                  <span
                    class="bg-info text-white rounded d-inline-block fs-3 mt-1 py-2 px-3"
                    ><i class="la la-clock-o"></i
                  ></span>
                  <h3 class="h5 fw-semi-bold my-3">14.0 minutes</h3>
                  <p>Average processing time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Product Features End ======================-->

    <!--====================== New Product Start ======================-->
    <div class="new-product section-padding pt-0 border-bottom">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-7">
            <div class="section-heading text-center">
              <h2>So, What brings new product today?</h2>
            </div>
          </div>
        </div>
        <!-- section-heading end -->
        <div class="row g-4">
          <div class="col-12 col-md-6">
            <div
              class="card h-100 shadow-3 text-center pt-4 px-4 pb-5 border-0 bg-dark-2"
            >
              <img
                class="img-fluid mb-4"
                src="../../assets/images/svg/api.svg"
                loading="lazy"
                alt="…"
              />
              <div class="card-body p-0 mb-4">
                <h3 class="fw-semi-bold fs-4 mb-3">Integrate our API</h3>
                <p>
                  A white-label solution for your project, whether it is a
                  wallet, a marketplace or a service provider. Set it up to
                  accept any of 140+ cryptocurrencies listed on Tradix and get
                  revenue for each transaction made.
                </p>
              </div>
              <div class="card-footer bg-transparent border-0 p-0">
                <a href="#!" class="btn btn-success px-4">Learn more</a>
              </div>
            </div>
            <!-- card end -->
          </div>
          <div class="col-12 col-md-6">
            <div
              class="card h-100 shadow-3 text-center pt-4 px-4 pb-5 border-0 bg-dark-2"
            >
              <img
                class="img-fluid mb-4"
                src="../../assets/images/svg/affiliate.svg"
                loading="lazy"
                alt="…"
              />
              <div class="card-body p-0 mb-4">
                <h3 class="fw-semi-bold fs-4 mb-3">
                  Join our Affiliate Program
                </h3>
                <p>
                  Place an affiliate link or customizable widget on your
                  website, blog or social media profile. Get 50% of our revenue
                  from every transaction made via either of the tools used.
                </p>
              </div>
              <div class="card-footer bg-transparent border-0 p-0">
                <a
                  href="#!"
                  class="btn btn-outline btn-outline-success px-4 text-success"
                  >Become an affiliate</a
                >
              </div>
            </div>
            <!-- card end -->
          </div>
        </div>
      </div>
    </div>
    <!--====================== New Product End ======================-->

    <!--====================== Trust Start ======================-->
    <div class="trust section-padding">
      <div class="container">
        <div class="row g-4">
          <div class="col-12 col-md-4">
            <div
              class="card h-100 text-center rounded shadow-5 p-6 justify-content-center border-0 bg-dark-2"
            >
              <i class="fas fa-shield-alt text-success fs-1 "></i>
              <h3 class="fw-semi-bold fs-5 mb-3 mt-4">EASY</h3>
              <p>
                Create an account, choose your crypto, input your receiving
                address, and send your funds
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div
              class="card h-100 text-center rounded shadow-5 p-6 justify-content-center border-0 bg-dark-2"
            >
              <i class="fas fa-cubes text-success fs-1 "></i>
              <h3 class="fw-semi-bold fs-5 mb-3 mt-4">SAFE</h3>
              <p>
                As a non-custodial exchange, we don’t hold your deposits, so
                your funds are never vulnerable to hacks.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div
              class="card h-100 text-center rounded shadow-5 p-6 justify-content-center border-0 bg-dark-2"
            >
              <i class="far fa-life-ring text-success fs-1 "></i>
              <h3 class="fw-semi-bold fs-5 mb-3 mt-4">COMPETITIVE</h3>
              <p>
                Our exchange rates are updated in real time. What you see is
                what you get--with no additional fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Trust Start ======================-->

    <!--====================== Testimonial Start ======================-->
    <div class="testimonial section-padding bg-dark-200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-7">
            <div class="section-heading">
              <p>What's Say</p>
              <h2>Trusted by 2 million customers</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-xl-8">
            <div class="bg-dark-2 rounded shadow-5">
              <slider />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Testimonial End ======================-->

    <!--====================== Cta Start ======================-->
    <div class="section-padding pb-0">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-12 col-md-6 col-xl-5">
            <div class="mb-5 mb-md-0">
              <img
                class="img-fluid"
                src="../../assets/images/app2.png"
                loading="lazy"
                alt="…"
              />
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-6 offset-xl-1">
            <div class="mb-3">
              <h4 class="text-dark-400 fs-3 fw-bold mb-2">Mobile app</h4>
              <p>
                Get the best mobile app to exchange or buy crypto on the go:
              </p>
            </div>
            <ul class="check-list">
              <li>Best rates on the market</li>
              <li>High limits</li>
              <li>No verification for exchange transactions</li>
              <li>More than 150 cryptocurrencies</li>
              <li>Buy bitcoin | buy crypto with USD, EUR or GBP</li>
            </ul>
            <div class="mt-4 d-grid gap-2 d-sm-block">
              <a href="#!" class="btn btn-lg btn-success me-sm-3 rounded-pill">
                <img
                  src="../../assets/images/android.svg"
                  loading="lazy"
                  alt="…"
                />
              </a>
              <a href="#!" class="btn btn-lg btn-success rounded-pill">
                <img
                  src="../../assets/images/apple.svg"
                  loading="lazy"
                  alt="…"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Cta End ======================-->

    <!--====================== Contact End ======================-->
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
            <contact-form />
          </div>
        </div>
      </div>
    </section>
  </dark-layout>
</template>

<script>
import ContactForm from "../../components/Landing/ContactForm.vue";
import DarkLayout from "../../components/Landing/Dark/DarkLayout";
import Slider from "../../components/Landing/Slider.vue";
import PieChart from "../../components/Tradix/Charts/PieChart.vue";
import TableSparkline from "../../components/Tradix/Charts/TableSparkline.vue";
import CurrencyForm from "../../components/Tradix/CurrencyForm.vue";
export default {
  components: {
    DarkLayout,
    TableSparkline,
    Slider,
    ContactForm,
    CurrencyForm,
    PieChart,
  },
};
</script>
