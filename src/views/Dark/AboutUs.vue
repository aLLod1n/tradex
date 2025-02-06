<template>
  <dark-layout :active="4">
    <section class="section-padding">
      <div class="container">
        <div class="row align-items-center section-padding pt-0">
          <div class="col-12 col-lg-6">
            <div class="mb-3 mb-lg-0">
              <img
                src="../../assets/images/about/1.jpg"
                loading="lazy"
                alt="…"
                class="img-fluid rounded"
              />
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <h4 class="fs-4 fw-semi-bold mb-2">In Brief</h4>
            <p class=" mb-3">
              Founded in January of 2020, Tradix is a digital currency wallet
              and platform where merchantsand consumers can transact with new
              digital currencies like bitcoin, ethereum, and litecoin. We're
              based in San Francisco, California.
            </p>
            <p>
              Bitcoin is the world's most widely used alternative currency with
              a total market cap of over $100 billion. The bitcoin network is
              made up of thousands of computers run by individuals all over the
              world.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="d-sm-flex align-items-start section-padding pt-0">
              <img
                src="../../assets/images/avatar/6.jpg"
                loading="lazy"
                alt="…"
                class="img-fluid rounded-circle mb-3 mb-sm-0 me-4"
              />
              <div>
                <h4 class="fs-4 fw-semi-bold mb-2">Eric Benz</h4>
                <span>CEO of Tradix</span>
                <p class=" mt-2">
                  John Abraham has over 10 years of experience working in and
                  around Financial Technology. He has delivered innovative SaaS
                  systems for some of today's biggest institutions around
                  payments, identity, and banking infrastructure. John Abraham
                  has been involved in a number of blockchain and fintech
                  businesses both as an investor, board director, and founder.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-12 col-lg-6 order-lg-2">
            <div class="mb-3 mb-lg-0">
              <img
                src="../../assets/images/about/1.jpg"
                loading="lazy"
                alt="…"
                class="img-fluid rounded"
              />
            </div>
          </div>
          <div class="col-12 col-lg-6 order-lg-1">
            <h4 class="fs-4 fw-semi-bold mb-2">Working at Tradix</h4>
            <p class=" mb-3">
              Digital currencies are changing how we use and think about money.
              Tradix, the most trusted company in the space, is looking for you
              to join our rapidly growing team.
            </p>
            <a href="#!" class="btn btn-primary btn-md">Read more</a>
          </div>
        </div>
      </div>
    </section>
  </dark-layout>
</template>

<script>
import DarkLayout from "../../components/Landing/Dark/DarkLayout.vue";
export default {
  components: { DarkLayout },
};
</script>
