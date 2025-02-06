<template>
  <dark-layout :active="1">
    <!--====================== Intro Start ======================-->
    <section class="border-bottom section-padding hidden">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-12 col-lg-6 mb-5 mb-lg-0">
            <h1 class="fw-bold mb-3 text-dark-400">
              Trade with <strong class="text-primary">Tradix</strong>. <br />
              Buy and sell cryptocurrency
            </h1>
            <p class="mb-4 h4">
              Fast and secure way to purchase or exchange 150+ cryptocurrencies
            </p>
            <div class="d-grid gap-2 d-sm-block intro-btn mb-4 mb-lg-0">
              <button class="btn btn-primary me-sm-4" type="button">
                Get Started
              </button>
              <button class="btn btn-outline text-primary" type="button">
                Browse Now
              </button>
            </div>
            <!-- intro-content end -->
          </div>
          <div class="col-12 col-lg-5 offset-lg-1">
            <div class="intro-form-exchange p-4 shadow-5 rounded bg-dark-2">
              <currency-form />
            </div>
            <!-- intro-form-exchange end -->
          </div>
        </div>
      </div>
    </section>
    <!--====================== Intro End ======================-->

    <!--====================== Price Start ======================-->
    <section class="price-grid section-padding hidden">
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
                <h4 class="text-dark-400 fw-bold">USD 62,548.2254</h4>
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
                <h4 class="text-dark-400 fw-bold">USD 62,548.2254</h4>
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
                <h4 class="text-dark-400 fw-bold">USD 62,548.2254</h4>
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
                <h4 class="text-dark-400 fw-bold">USD 62,548.2254</h4>
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
                <h4 class="text-dark-400 fw-bold">USD 62,548.2254</h4>
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
                <h4 class="text-dark-400 fw-bold">USD 62,548.2254</h4>
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
                <h4 class="text-dark-400 fw-bold">USD 62,548.2254</h4>
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
                <h4 class="text-dark-400 fw-bold">USD 62,548.2254</h4>
                <span class="text-success">+2.05%</span>
                <btc-chart :color="'#A6DF00'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====================== Price End ======================-->

    <!--====================== Get start Start ======================-->
    <section class="section-padding bg-dark-2 hidden">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading text-center mb-5">
              <h2>Get started in a few minutes</h2>
            </div>
          </div>
        </div>
        <div class="row g-5">
          <div class="col-12 col-md-4">
            <div class="text-center">
              <span class="text-primary fa-3x"
                ><i class="la la-user-plus"></i
              ></span>
              <h3 class="h4 fw-semi-bold mt-3 text-dark-400">
                Create an account
              </h3>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-center">
              <span class="text-primary fa-3x"><i class="la la-bank"></i></span>
              <h3 class="h4 fw-semi-bold mt-3 text-dark-400">
                Link your bank account
              </h3>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-center">
              <span class="text-primary fa-3x"
                ><i class="la la-exchange"></i
              ></span>
              <h3 class="h4 fw-semi-bold mt-3 text-dark-400">
                Start buying & selling
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====================== Get start End ======================-->

    <!--====================== Portfolio Start ======================-->
    <section class="portfolio section-padding hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-7">
            <div class="section-heading text-center">
              <h2>Create your cryptocurrency portfolio today</h2>
              <p class="">
                Tradix has a variety of features that make it the best place to
                start trading
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center justify-content-between">
          <div class="col-12 col-lg-6 col-xl-7">
            <div class="row g-5 g-lg-4">
              <div class="col-12 col-xl-6">
                <div class="d-flex">
                  <span
                    class="port-icon bg-dark-2 d-flex align-items-center justify-content-center rounded-circle fs-2 me-4"
                    ><i class="la la-bar-chart"></i
                  ></span>
                  <div>
                    <h3 class="fw-semi-bold text-dark-400 fs-4 mb-2">
                      Manage your portfolio
                    </h3>
                    <p class="">
                      Buy and sell popular digital currencies, keep track of
                      them in the one place.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-xl-6">
                <div class="d-flex">
                  <span
                    class="port-icon bg-dark-2 d-flex align-items-center justify-content-center rounded-circle fs-2 me-4"
                  >
                    <i class="la la-calendar-check-o"></i
                  ></span>
                  <div>
                    <h3 class="fw-semi-bold text-dark-400 fs-4 mb-2">
                      Recurring buys
                    </h3>
                    <p class="">
                      Invest in cryptocurrency slowly over time by scheduling
                      buys daily, weekly, or monthly.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-xl-6">
                <div class="d-flex">
                  <span
                    class="port-icon bg-dark-2 d-flex align-items-center justify-content-center rounded-circle fs-2 me-4"
                  >
                    <i class="la la-lock"></i
                  ></span>
                  <div>
                    <h3 class="fw-semi-bold text-dark-400 fs-4 mb-2">
                      Vault protection
                    </h3>
                    <p class="">
                      For added security, store your funds in a vault with time
                      delayed withdrawals.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-xl-6">
                <div class="d-flex">
                  <span
                    class="port-icon bg-dark-2 d-flex align-items-center justify-content-center rounded-circle fs-2 me-4"
                  >
                    <i class="la la-mobile"></i
                  ></span>
                  <div>
                    <h3 class="fw-semi-bold text-dark-400 fs-4 mb-2">
                      Mobile apps
                    </h3>
                    <p class="">
                      Stay on top of the markets with the Tradix app for
                      <router-link to="#!" class="text-primary"
                        >Android</router-link
                      >
                      or
                      <router-link to="#!" class="text-primary">iOS</router-link
                      >.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 col-xl-5 mt-5 mt-lg-0">
            <img
              src="../../assets/images/portfolio.png"
              loading="lazy"
              alt="…"
              class="img-fluid rounded shadow-7"
            />
          </div>
        </div>
      </div>
    </section>
    <!--====================== Portfolio End ======================-->

    <!--====================== Trade App Start ======================-->
    <section class="trade-app section-padding pt-0 hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="section-heading text-center">
              <h2>Trade. Anywhere</h2>
              <p>
                All of our products are ready to go, easy to use and offer great
                value to any kind of business.
              </p>
            </div>
          </div>
        </div>
        <div class="row g-4 section-padding pt-0">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-3 p-4 bg-dark-2">
              <div class="card-body p-0">
                <span class="text-primary mb-3 fa-3x"
                  ><i class="la la-mobile"></i
                ></span>
                <h3 class="fw-semi-bold text-dark-400 card-title mb-3 fs-5">
                  Mobile
                </h3>
                <p class=" mb-4">
                  All the power of Tradix's cryptocurrency exchange, in the palm
                  of your hand. Download theTradix mobile crypto trading app
                  today
                </p>
              </div>
              <div class="card-footer p-0 bg-transparent border-0">
                <router-link
                  to="#!"
                  class="d-flex align-items-center text-primary fw-semi-bold"
                >
                  Know More <i class="la la-arrow-right ms-3"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-3 p-4 bg-dark-2">
              <div class="card-body p-0">
                <span class="text-primary mb-3 fa-3x"
                  ><i class="la la-desktop"></i
                ></span>
                <h3 class="fw-semi-bold text-dark-400 card-title mb-3 fs-5">
                  Desktop
                </h3>
                <p class=" mb-4">
                  Powerful crypto trading platform for those who mean business.
                  The Tradix crypto trading experience, tailor-made for your
                  Windows or MacOS device.
                </p>
              </div>
              <div class="card-footer p-0 bg-transparent border-0">
                <router-link
                  to="#!"
                  class="d-flex align-items-center text-primary fw-semi-bold"
                >
                  Know More <i class="la la-arrow-right ms-3"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-3 p-4 bg-dark-2">
              <div class="card-body p-0">
                <span class="text-primary mb-3 fa-3x"
                  ><i class="la la-connectdevelop"></i
                ></span>
                <h3 class="fw-semi-bold text-dark-400 card-title mb-3 fs-5">
                  API
                </h3>
                <p class=" mb-4">
                  The Tradix API is designed to provide an easy and efficient
                  way to integrate your trading application into our platform.
                </p>
              </div>
              <div class="card-footer bg-transparent border-0">
                <router-link
                  to="#!"
                  class="d-flex align-items-center text-primary fw-semi-bold"
                >
                  Know More <i class="la la-arrow-right ms-3"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="section-heading text-center">
              <h4 class="fs-4 fw-semi-bold text-dark-400">
                Trusted by Our <strong>Partners & Investors</strong>
              </h4>
            </div>

            <div class="row justify-content-between">
              <client-slider />
              <!-- client-slide end -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====================== Trade App End ======================-->

    <!--====================== Testimonial Start ======================-->
    <section class="testimonial section-padding bg-dark-2 hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-6">
            <div class="section-heading text-center">
              <h2>What our customer says</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-xl-10">
            <div class="bg-dark-2 rounded shadow-5">
              <slider />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====================== Testimonial End ======================-->

    <!--====================== Promo Start ======================-->
    <section class="promo section-padding bg-dark-2 border-bottom hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-8">
            <div class="section-heading text-center">
              <h2>The most trusted cryptocurrency platform</h2>
              <p class="">
                Here are a few reasons why you should choose Tradix
              </p>
            </div>
          </div>
        </div>
        <div class="row g-4 align-items-center">
          <div class="col-12 col-md-4">
            <div class="text-center">
              <div
                class="promo-content-img bg-dark-2 d-flex align-items-center justify-content-center p-3 mx-auto my-4"
              >
                <img
                  class="img-fluid"
                  src="../../assets/images/svg/protect.svg"
                  loading="lazy"
                  alt="…"
                />
              </div>
              <h3 class="text-dark-400 fs-4 fw-semi-bold mb-3">
                Secure storage
              </h3>
              <p class="">
                We store the vast majority of the digital assets in secure
                offline storage.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-center">
              <div
                class="promo-content-img bg-dark-2 d-flex align-items-center justify-content-center p-3 mx-auto my-4"
              >
                <img
                  class="img-fluid"
                  src="../../assets/images/svg/cyber.svg"
                  loading="lazy"
                  alt="…"
                />
              </div>
              <h3 class="text-dark-400 fs-4 fw-semi-bold mb-3">
                Protected by insurance
              </h3>
              <p class="">
                Cryptocurrency stored on our servers is covered by our insurance
                policy.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-center">
              <div
                class="promo-content-img bg-dark-2 d-flex align-items-center justify-content-center p-3 mx-auto my-4"
              >
                <img
                  class="img-fluid"
                  src="../../assets/images/svg/finance.svg"
                  loading="lazy"
                  alt="…"
                />
              </div>
              <h3 class="text-dark-400 fs-4 fw-semi-bold mb-3">
                Industry best practices
              </h3>
              <p class="">
                Tradix supports a variety of the most popular digital
                currencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====================== Promo End ======================-->

    <!--====================== Cta Start ======================-->
    <section class="section-padding border-bottom hidden">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-12 col-md-6 col-xl-7">
            <h2 class="fw-bold mb-4">
              The secure app to store crypto yourself
            </h2>
            <ul class="check-list">
              <li>All your digital assets in one place</li>
              <li>Use Decentralized Apps</li>
              <li>Pay friends, not addresses</li>
            </ul>
            <div class="mt-4 d-grid gap-2 d-sm-block">
              <router-link
                to="#!"
                class="btn btn-lg btn-primary me-sm-2 rounded-pill"
              >
                <img
                  src="../../assets/images/android.svg"
                  loading="lazy"
                  alt="…"
                />
              </router-link>
              <router-link to="#!" class="btn btn-lg btn-primary rounded-pill">
                <img
                  src="../../assets/images/apple.svg"
                  loading="lazy"
                  alt="…"
                />
              </router-link>
            </div>
          </div>
          <div class="col-12 col-md-6 col-xl-5">
            <div class="mt-5 mt-md-0">
              <img
                class="img-fluid"
                src="../../assets/images/app.png"
                loading="lazy"
                alt="…"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--====================== Cta End ======================-->

    <!--====================== Blog Start ======================-->
    <section class="blog section-padding border-bottom hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-6">
            <div class="section-heading text-center">
              <h2>Blog</h2>
              <p class="">Our Latest blog</p>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col">
            <div class="card h-100 shadow-2 border-0 bg-dark-2">
              <img
                class="img-fluid card-img-top rounded-0"
                src="../../assets/images/blog/1.jpg"
                loading="lazy"
                alt="…"
              />
              <div class="card-body  p-4">
                <router-link to="blog-single-dark">
                  <h3 class="fw-semi-bold text-dark-400 card-title fs-5 mb-3">
                    How to securely store your HD wallet seeds?
                  </h3>
                </router-link>
                <p class="text-gray card-text">
                  Cras chinwag brown bread Eaton cracking goal so I said a load
                  of old tosh baking cakes.!
                </p>
              </div>
              <div class="card-footer bg-transparent border-0 pt-0 pb-4 px-4">
                <ul class="d-flex justify-content-between">
                  <router-link to="#!" class=" text-gray"
                    ><img
                      src="../../assets/images/avatar/5.jpg"
                      loading="lazy"
                      alt="…"
                      class="rounded-circle me-2"
                    />
                    Admin</router-link
                  >
                  <router-link to="#!" class="text-gray fs-6"
                    ><i class="la la-calendar"></i> 31 July, 2019</router-link
                  >
                </ul>
              </div>
            </div>
          </div>
          <!-- card end -->
          <div class="col">
            <div class="card h-100 shadow-2 border-0 bg-dark-2">
              <img
                class="img-fluid card-img-top rounded-0"
                src="../../assets/images/blog/2.jpg"
                loading="lazy"
                alt="…"
              />
              <div class="card-body  p-4">
                <router-link to="blog-single-dark">
                  <h3 class="fw-semi-bold text-dark-400 card-title fs-5 mb-3">
                    How to securely store your HD wallet seeds?
                  </h3>
                </router-link>
                <p class="text-gray card-text">
                  Cras chinwag brown bread Eaton cracking goal so I said a load
                  of old tosh baking cakes.!
                </p>
              </div>
              <div class="card-footer bg-transparent border-0 pt-0 pb-4 px-4">
                <ul class="d-flex justify-content-between">
                  <router-link to="#!" class=" text-gray"
                    ><img
                      src="../../assets/images/avatar/6.jpg"
                      loading="lazy"
                      alt="…"
                      class="rounded-circle me-2"
                    />
                    Admin</router-link
                  >
                  <router-link to="#!" class="text-gray fs-6"
                    ><i class="la la-calendar"></i> 31 July, 2019</router-link
                  >
                </ul>
              </div>
            </div>
          </div>
          <!-- card end -->
          <div class="col">
            <div class="card h-100 shadow-2 border-0 bg-dark-2">
              <img
                class="img-fluid card-img-top rounded-0"
                src="../../assets/images/blog/3.jpg"
                loading="lazy"
                alt="…"
              />
              <div class="card-body  p-4">
                <router-link to="blog-single-dark">
                  <h3 class="fw-semi-bold text-dark-400 card-title fs-5 mb-3">
                    How to securely store your HD wallet seeds?
                  </h3>
                </router-link>
                <p class="text-gray card-text">
                  Cras chinwag brown bread Eaton cracking goal so I said a load
                  of old tosh baking cakes.!
                </p>
              </div>
              <div class="card-footer bg-transparent border-0 pt-0 pb-4 px-4">
                <ul class="d-flex justify-content-between">
                  <router-link to="#!" class=" text-gray"
                    ><img
                      src="../../assets/images/avatar/7.jpg"
                      loading="lazy"
                      alt="…"
                      class="rounded-circle me-2"
                    />
                    Admin</router-link
                  >
                  <router-link to="#!" class="text-gray fs-6"
                    ><i class="la la-calendar"></i> 31 July, 2019</router-link
                  >
                </ul>
              </div>
            </div>
          </div>
          <!-- card end -->
        </div>
      </div>
    </section>
    <!--====================== Blog End ======================-->

    <!--====================== Get touch Start ======================-->
    <section class="get-touch section-padding hidden">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-6">
            <div class="section-heading text-center">
              <h2>Get in touch. Stay in touch.</h2>
            </div>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-12 col-md-6">
            <div class="card flex-row shadow-2 bg-dark-2 rounded border-0 p-4">
              <span class="text-primary me-3"
                ><i class="fas fa-shield-alt fa-2x"></i
              ></span>
              <div class="card-body p-0">
                <h3 class="fw-semi-bold text-dark-400 fs-5 mb-2">
                  24 / 7 Support
                </h3>
                <p class="">
                  Got a problem? Just get in touch. Our support team is
                  available 24/7.
                </p>
              </div>
            </div>
            <!-- card end -->
          </div>
          <div class="col-12 col-md-6">
            <div class="card flex-row shadow-2 bg-dark-2 rounded border-0 p-4">
              <span class="text-primary me-3"
                ><i class="fas fa-cubes fa-2x"></i
              ></span>
              <div class="card-body p-0">
                <h3 class="fw-semi-bold text-dark-400 fs-5 mb-2">
                  Tradix Blog
                </h3>
                <p class="">
                  News and updates from the world’s leading cryptocurrency
                  exchange.
                </p>
              </div>
            </div>
            <!-- card end -->
          </div>
          <div class="col-12 col-md-6">
            <div class="card flex-row shadow-2 bg-dark-2 rounded border-0 p-4">
              <span class="text-primary me-3"
                ><i class="fas fa-certificate fa-2x"></i
              ></span>
              <div class="card-body p-0">
                <h3 class="fw-semi-bold text-dark-400 fs-5 mb-2">Careers</h3>
                <p class="">
                  Help build the future of technology. Start your new career at
                  Tradix.
                </p>
              </div>
            </div>
            <!-- card end -->
          </div>
          <div class="col-12 col-md-6">
            <div class="card flex-row shadow-2 bg-dark-2 rounded border-0 p-4">
              <span class="text-primary me-3"
                ><i class="far fa-life-ring fa-2x"></i
              ></span>
              <div class="card-body p-0">
                <h3 class="fw-semi-bold text-dark-400 fs-5 mb-2">Community</h3>
                <p class="">
                  Tradix is global. Join the discussion in our worldwide
                  communities.
                </p>
              </div>
            </div>
            <!-- card end -->
          </div>
        </div>
      </div>
    </section>
    <!--====================== Get touch End ======================-->
  </dark-layout>
</template>

<script>
import ClientSlider from "../../components/Landing/ClientSlider.vue";
import DarkLayout from "../../components/Landing/Dark/DarkLayout.vue";
import Slider from "../../components/Landing/Slider.vue";
import BtcChart from "../../components/Tradix/Charts/BtcChart.vue";
import CurrencyForm from "../../components/Tradix/CurrencyForm.vue";

export default {
  components: { DarkLayout, BtcChart, Slider, ClientSlider, CurrencyForm },
};
</script>
