<template>
  <div>
    <header class="header d-flex align-items-center position-sticky bg-white">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg navbar-light px-0">
              <router-link class="navbar-brand" to="/demo"
                ><img
                  src="../assets/demo/images/logo.png"
                  loading="lazy"
                  alt="…"
                />
              </router-link>
              <b-navbar-toggle target="navbarScroll"> </b-navbar-toggle>

              <b-collapse is-nav id="navbarScroll">
                <b-navbar-nav tag="ul" class="navbar-nav mx-auto mt-2 mt-lg-0">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      :class="active === 1 && 'active'"
                      href="#home"
                      @click="active = 1"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#light"
                      :class="active === 2 && 'active'"
                      @click="active = 2"
                      >Light</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#dark"
                      :class="active === 3 && 'active'"
                      @click="active = 3"
                      >Dark</a
                    >
                  </li>
                  <li id="beacon" class="nav-item open">
                    <router-link
                      to="#!"
                      aria-label="open Beacon popover"
                      aria-expanded="false"
                      class="beacon-button nav-link"
                      >Support</router-link
                    >
                  </li>
                  <li class="nav-item d-lg-none mt-3">
                    <router-link
                      to="#!"
                      class="btn btn-outline btn-outline-primary"
                      target="_blank"
                      >Buy me</router-link
                    >
                  </li>
                </b-navbar-nav>
              </b-collapse>
              <div class="d-none d-lg-block">
                <router-link
                  to="#!"
                  class="btn btn-sm btn-outline btn-outline-primary"
                  >Buy me</router-link
                >
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!--====================== Header End ======================-->

    <!--====================== Intro Start ======================-->
    <div
      class="intro section-padding position-relative"
      id="home"
      data-scroll-index="0"
    >
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-12 col-lg-6">
            <div class="pb-4 pb-lg-0">
              <h1 class="fw-bold mb-4">
                Landing Page with <br />
                Dashboard Template <br />Dark & Light
              </h1>
              <h3 class="mb-4  pe-lg-2">
                Tradix is the complete UI of Front end and Backend. Sign in,
                Signup, Phone and ID card verification, One time password verify
                and add bank, debit card settings and profile etc pages
                included.
              </h3>
              <button class="btn btn-primary btn-md" data-scroll-nav="1">
                View Demo
              </button>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div
              id="carouselExample"
              class="carousel slide banner-slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../assets/demo/images/portfolio.png"
                    loading="lazy"
                    alt="…"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/demo/images/portfolio.png"
                    loading="lazy"
                    alt="…"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/demo/images/portfolio.png"
                    loading="lazy"
                    alt="…"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Intro End ======================-->

    <!--====================== Demo Start ======================-->
    <div class="demo section-padding" id="light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-7">
            <div class="section-heading text-center pb-5">
              <span class="">Light</span>
              <h2 class="fw-bold">Landing Page</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/" target="_blank">
                <img
                  src="../assets/demo/images/landing/home1.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/" target="_blank" class="mt-3"
                  >Homepage</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/index2" target="_blank">
                <img
                  src="../assets/demo/images/landing/home2.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/index2" target="_blank" class="mt-3"
                  >Homepage2</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/price" target="_blank">
                <img
                  src="../assets/demo/images/landing/price.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/price" target="_blank" class="mt-3"
                  >Price</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/wallet" target="_blank">
                <img
                  src="../assets/demo/images/landing/wallet.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/wallet" target="_blank" class="mt-3"
                  >Wallet</router-link
                >
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/about" target="_blank">
                <img
                  src="../assets/demo/images/landing/about.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/about" target="_blank" class="mt-3"
                  >About</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/team" target="_blank">
                <img
                  src="../assets/demo/images/landing/team.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/team" target="_blank" class="mt-3"
                  >Team</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/blog" target="_blank">
                <img
                  src="../assets/demo/images/landing/blog.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/blog" target="_blank" class="mt-3"
                  >Blog</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/blog-single" target="_blank">
                <img
                  src="../assets/demo/images/landing/blog-single.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/blog-single" target="_blank" class="mt-3"
                  >Blog Single</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/career" target="_blank">
                <img
                  src="../assets/demo/images/landing/career.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/career" target="_blank" class="mt-3"
                  >career</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/contact" target="_blank">
                <img
                  src="../assets/demo/images/landing/contact.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/contact" target="_blank" class="mt-3"
                  >contact</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/helpdesk" target="_blank">
                <img
                  src="../assets/demo/images/landing/helpdesk.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/helpdesk" target="_blank" class="mt-3"
                  >help desk</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/faq" target="_blank">
                <img
                  src="../assets/demo/images/landing/faq.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="./faq" target="_blank" class="mt-3"
                  >FAQ</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/privacy-policy" target="_blank">
                <img
                  src="../assets/demo/images/landing/privacy.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="./privacy-policy" target="_blank" class="mt-3"
                  >Privacy Policy</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/terms-condition" target="_blank">
                <img
                  src="../assets/demo/images/landing/terms.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="./terms-condition" target="_blank" class="mt-3"
                  >Terms Condition</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-7">
            <div class="section-heading text-center pb-5">
              <span class="">Light</span>
              <h2 class="fw-bold">Dashboard</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/dashboard" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dashboard.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/dashboard" target="_blank" class="mt-3"
                  >Dashboard</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/buy-sell" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/buy-sell.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/buy-sell" target="_blank" class="mt-3"
                  >Buy and Sell</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/accounts" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/accounts.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/accounts" target="_blank" class="mt-3"
                  >Accounts</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/settings" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/settings.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/settings" target="_blank" class="mt-3"
                  >Settings</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/settings-preferences" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/preferences.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/settings-preferences"
                  target="_blank"
                  class="mt-3"
                  >Preferences</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/settings-security" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/security.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/settings-security"
                  target="_blank"
                  class="mt-3"
                  >Security</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/settings-account" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/linked-account.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/settings-account" target="_blank" class="mt-3"
                  >Linked Account</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/history" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/history.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/history" target="_blank" class="mt-3"
                  >History</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/signin" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/signin.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/signin" target="_blank" class="mt-3"
                  >Signin</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/signup" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/signup.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/signup" target="_blank" class="mt-3"
                  >Signup</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/reset" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/reset.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/reset" target="_blank" class="mt-3"
                  >Reset</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/lock" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/lock.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/lock" target="_blank" class="mt-3"
                  >Locked</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/otp-1" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/otp-phone.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/otp-1" target="_blank" class="mt-3"
                  >OTP Number</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/otp-2" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/otp-code.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/otp-2" target="_blank" class="mt-3"
                  >OTP Code</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-1" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/verify-id.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/verify-step-1" target="_blank" class="mt-3"
                  >Verify ID</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-2" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/upload-id.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/verify-step-2" target="_blank" class="mt-3"
                  >Upload ID</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-3" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/id-verifing.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/verify-step-3" target="_blank" class="mt-3"
                  >ID Verifying</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-4" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/id-verified.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/verify-step-4" target="_blank" class="mt-3"
                  >ID Verified</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/add-debit-card" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/add-debit-card.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/add-debit-card" target="_blank" class="mt-3"
                  >Add Debit Card</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-6" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/success.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/verify-step-6" target="_blank" class="mt-3"
                  >Success</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-5" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/choose-account.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/verify-step-5" target="_blank" class="mt-3"
                  >Recommendation</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/add-bank-acc" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/add-bank.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/add-bank-acc" target="_blank" class="mt-3"
                  >Add Bank Account</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Demo End ======================-->

    <!--====================== Demo Start ======================-->
    <div class="demo section-padding dark" id="dark">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-7">
            <div class="section-heading text-center mb-5">
              <span class="">Dark</span>
              <h2 class="fw-bold">Landing Page</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/index-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/home1.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/index-dark" target="_blank" class="mt-3"
                  >Homepage</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/index2-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/home2.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/index2-dark" target="_blank" class="mt-3"
                  >Homepage2</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/price-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/price.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/price-dark" target="_blank" class="mt-3"
                  >Price</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/wallet-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/wallet.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/wallet-dark" target="_blank" class="mt-3"
                  >Wallet</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/about-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/about.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/about-dark" target="_blank" class="mt-3"
                  >About</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/team-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/team.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/team-dark" target="_blank" class="mt-3"
                  >Team</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/blog-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/blog.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/blog-dark" target="_blank" class="mt-3"
                  >Blog</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/blog-single-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/blog-single.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/blog-single-dark" target="_blank" class="mt-3"
                  >Blog Single</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/career-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/career.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/career-dark" target="_blank" class="mt-3"
                  >career</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/contact-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/contact.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/contact-dark" target="_blank" class="mt-3"
                  >contact</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/helpdesk-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/helpdesk.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/helpdesk-dark" target="_blank" class="mt-3"
                  >help desk</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/faq-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/faq.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/faq-dark" target="_blank" class="mt-3"
                  >FAQ</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/privacy-policy-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/privacy.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/privacy-policy-dark"
                  target="_blank"
                  class="mt-3"
                  >Privacy Policy</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/terms-condition-dark" target="_blank">
                <img
                  src="../assets/demo/images/landing/dark/terms.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/terms-condition-dark"
                  target="_blank"
                  class="mt-3"
                  >Terms Condition</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-7">
            <div class="section-heading text-center m-5">
              <span class="">Dark</span>
              <h2 class="fw-bold">Dashboard</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/dashboard-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/dashboard.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/dashboard-dark" target="_blank" class="mt-3"
                  >Dashboard</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/buy-sell-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/buy-sell.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/buy-sell-dark" target="_blank" class="mt-3"
                  >Buy and Sell</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/accounts-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/accounts.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/accounts-dark" target="_blank" class="mt-3"
                  >Team</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/settings-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/settings.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/settings-dark" target="_blank" class="mt-3"
                  >Edit Profile</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/settings-preferences-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/preferences.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/settings-preferences-dark"
                  target="_blank"
                  class="mt-3"
                  >Preferences</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/settings-security-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/security.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/settings-security-dark"
                  target="_blank"
                  class="mt-3"
                  >Security</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/settings-account-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/linked-account.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/settings-account-dark"
                  target="_blank"
                  class="mt-3"
                  >Linked Account</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/history-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/history.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/history-dark" target="_blank" class="mt-3"
                  >Team</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/signin-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/signin.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/signin-dark" target="_blank" class="mt-3"
                  >Signin</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/signup-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/signup.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/signup-dark" target="_blank" class="mt-3"
                  >Signup</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/reset-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/reset.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/reset-dark" target="_blank" class="mt-3"
                  >Reset</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/lock-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/lock.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/lock-dark" target="_blank" class="mt-3"
                  >Locked</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/otp-1-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/otp-phone.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/otp-1-dark" target="_blank" class="mt-3"
                  >OTP Number</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/otp-2-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/otp-code.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link to="/otp-2-dark" target="_blank" class="mt-3"
                  >OTP Code</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-1-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/verify-id.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/verify-step-1-dark"
                  target="_blank"
                  class="mt-3"
                  >Verify ID</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-2-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/upload-id.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/verify-step-2-dark"
                  target="_blank"
                  class="mt-3"
                  >Upload ID</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-3-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/id-verifing.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/verify-step-3-dark"
                  target="_blank"
                  class="mt-3"
                  >ID Verifying</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-4-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/id-verified.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/verify-step-4-dark"
                  target="_blank"
                  class="mt-3"
                  >ID Verified</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/add-debit-card-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/add-debit-card.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/add-debit-card-dark"
                  target="_blank"
                  class="mt-3"
                  >Add Debit Card</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-6-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/success.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/verify-step-6-dark"
                  target="_blank"
                  class="mt-3"
                  >Success</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/verify-step-5-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/choose-account.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/verify-step-5-dark"
                  target="_blank"
                  class="mt-3"
                  >Recommendation</router-link
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-5">
              <router-link to="/add-bank-acc-dark" target="_blank">
                <img
                  src="../assets/demo/images/dashboard/dark/add-bank.jpg"
                  loading="lazy"
                  alt="…"
                  class="img-fluid rounded"
                />
              </router-link>
              <div class="text-center">
                <router-link
                  to="/add-bank-acc-dark"
                  target="_blank"
                  class="mt-3"
                  >Add Bank Account</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====================== Demo End ======================-->

    <!--====================== Copyrights Start ======================-->
    <div class="copyrights py-4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-9 col-md-8">
            <p class=" mb-0 text-center text-sm-start fs-6">
              Copyright &copy;
              {{ new Date().getFullYear() }}
              <a
                href="https://themeforest.net/user/quixlab"
                target="_blank"
                class="copyright-links fw-bold"
              >
                Quixlab</a
              >
              All Rights Reserved.
            </p>
          </div>

          <div class="col-12 col-sm-3 col-md-4">
            <ul
              class="social list-group list-group-horizontal justify-content-center justify-content-sm-end mt-3 mt-sm-0"
            >
              <li class="list-group-item border-0 bg-transparent p-0">
                <router-link
                  to="https://www.facebook.com/qxlab"
                  target="_blank"
                  class="px-2"
                  ><i class="fab fa-facebook-f"></i
                ></router-link>
              </li>
              <li class="list-group-item border-0 bg-transparent p-0">
                <router-link
                  to="https://twitter.com/quixlab"
                  target="_blank"
                  class="px-2"
                  ><i class="fab fa-twitter"></i
                ></router-link>
              </li>
              <li class="list-group-item border-0 bg-transparent p-0">
                <router-link
                  to="https://www.linkedin.com"
                  target="_blank"
                  class="px-2"
                  ><i class="fab fa-linkedin-in"></i
                ></router-link>
              </li>
              <li class="list-group-item border-0 bg-transparent p-0">
                <router-link
                  to="https://www.youtube.com/channel/UChN1goECpg64jlUxSzySiNg?view_as=subscriber"
                  target="_blank"
                  class="px-2"
                  ><i class="fab fa-youtube"></i
                ></router-link>
              </li>
            </ul>
            <!-- social-icons end -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      active: 1,
    };
  },
  mounted() {
    const body = document.querySelector("body");
    body.className = "demo";
  },
};
</script>
