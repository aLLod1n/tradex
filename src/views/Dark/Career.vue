<template>
  <dark-layout :active="4">
    <section class="section-padding mx-auto">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-8">
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
            <h2 class="text-dark-400 fw-semi-bold mb-1 text-center mt-5">
              We saved a seat for you
            </h2>
          </div>
        </div>
      </div>
    </section>
    <section class="career">
      <div class="container">
        <div class="row align-items-center section-padding pt-0">
          <div class="col-lg-6">
            <img
              class="img-fluid rounded"
              src="../../assets/images/about/1.jpg"
              loading="lazy"
              alt="…"
            />
          </div>
          <div class="col-lg-6">
            <div class="pt-5 pt-lg-0">
              <h4 class="text-dark-400 fw-semi-bold fs-3 mb-3">
                Working at Tradix
              </h4>
              <p class="lh-lg">
                We’ve taken a huge challenge and made it into our mission: To
                create an open financial system for the world. To achieve this,
                we are building a team of smart, creative, passionate optimists,
                the kind of people who see opportunity where others see
                roadblocks. If this sounds like you,
                <a href="#!" class="text-primary">check out our open roles.</a>
              </p>
            </div>
          </div>
        </div>
        <div class="row align-items-center section-padding pt-0">
          <div class="col-lg-6 order-lg-2">
            <img
              class="img-fluid rounded"
              src="../../assets/images/blog/1.jpg"
              loading="lazy"
              alt="…"
            />
          </div>
          <div class="col-lg-6 order-lg-1">
            <div class="pt-5 pt-lg-0">
              <h4 class="text-dark-400 fw-semi-bold fs-3 mb-3">Our values</h4>
              <p class="lh-lg">
                Our values inform our behavior and the choices we make every
                day. As a result, our culture is a model of the world we’re
                trying to build: transparent, joyful, curious, and fast-moving.
                Our values are a large part of why Tradix is a great place to
                work, and why we’ve been successful. They are much more than
                words to us (and we have the emojis to prove it).
              </p>
            </div>
          </div>
        </div>
        <div class="row align-items-center section-padding pt-0">
          <div class="col-lg-6">
            <img
              class="img-fluid rounded"
              src="../../assets/images/bg/2.jpg"
              loading="lazy"
              alt="…"
            />
          </div>
          <div class="col-lg-6">
            <div class="pt-5 pt-lg-0">
              <h4 class="text-dark-400 fw-semi-bold fs-3 mb-3">Our mission</h4>
              <p class="lh-lg">
                We think achieving our mission is the highest leverage way to
                bring about more economic freedom, innovation, efficiency, and
                equality of opportunity in the world. Each member of our
                team—every engineer, designer, kitchen team member, lawyer,
                writer, support coordinator, recruiter, and product
                manager—plays an important role in helping us achieve our
                mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding pt-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-6">
            <div class="section-heading text-center">
              <h2>Choose your team</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div id="accordion-faq" class="accordion">
              <div class="card mb-0 border-0">
                <b-card-header
                  v-b-toggle="'collapseOne1'"
                  variant=""
                  class="card-header border-0"
                >
                  <h3
                    class="h5 fw-semi-bold text-dark-400 mb-0 card-title c-pointer collapsed"
                  >
                    Business Development &amp; Sales
                  </h3>
                </b-card-header>
                <b-collapse id="collapseOne1">
                  <div class="card-body">
                    <div>
                      <h4
                        class="h6 fw-semi-bold text-dark-400 text-primary mb-2"
                      >
                        Business Development Director
                      </h4>
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div class="card mb-0 border-0">
                <b-card-header
                  header-bg-variant=""
                  v-b-toggle="'collapseTwo2'"
                  class="card-header border-0"
                >
                  <h3
                    class="h5 fw-semi-bold text-dark-400 mb-0 card-title c-pointer collapsed"
                  >
                    Engineering - Frontend
                  </h3>
                </b-card-header>
                <b-collapse id="collapseTwo2">
                  <div class="card-body">
                    <div>
                      <h4
                        class="h6 fw-semi-bold text-dark-400 text-primary mb-2"
                      >
                        Frontend Engineer, Identity
                      </h4>
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </b-collapse>
              </div>
              <div class="card mb-0 border-0">
                <b-card-header
                  header-bg-variant=""
                  v-b-toggle="'collapseThree3'"
                  class="card-header border-0"
                >
                  <h3
                    class="h5 fw-semi-bold text-dark-400 mb-0 card-title c-pointer collapsed"
                  >
                    Marketing &amp; Communications
                  </h3>
                </b-card-header>
                <b-collapse id="collapseThree3">
                  <div class="card-body">
                    <div>
                      <h4
                        class="h6 fw-semi-bold text-dark-400 text-primary mb-2"
                      >
                        Head of Product and Performance Marketing
                      </h4>
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <videos v-show="showVideo" :closeFuntion="closeFuntion" />
  </dark-layout>
</template>

<script>
import DarkLayout from "../../components/Landing/Dark/DarkLayout.vue";
import Videos from "../../components/Videos.vue";
export default {
  components: { DarkLayout, Videos },
  data() {
    return {
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
