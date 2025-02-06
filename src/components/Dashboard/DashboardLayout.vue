<template>
  <div>
    <dark-side-bar v-if="dark" :active="active" />
    <light-side-bar v-else :active="active" />
    <div class="right-content">
      <dark-header v-if="dark" :stickNav="stickNav" />
      <light-header v-else :stickNav="stickNav" />
      <!-- Content -->
      <slot />
      <!-- Setting -->
      <setting v-if="dark" />

      <!-- Footer -->
      <div class="copyrights bg-light-200 border-gray-light py-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-9 col-md-8">
              <p class=" mb-0 text-center text-sm-start text-gray fs-6">
                © Copyright {{ new Date().getFullYear() }}
                <a
                  href="https://themeforest.net/item/tradix-cryptocurrency-exchange-html-template/24924541"
                  target="_blank"
                  class="copyright-links fw-bold text-gray ms-1 text-hover-primary"
                >
                  Tradix
                </a>
                I All Rights Reserved.
              </p>
            </div>
            <div class="col-12 col-sm-3 col-md-4">
              <ul
                class="social list-group list-group-horizontal justify-content-center justify-content-sm-end mt-3 mt-sm-0"
              >
                <li class="list-group-item border-0 bg-transparent p-0">
                  <a
                    href="https://www.facebook.com/qxlab"
                    target="_blank"
                    class="px-2 text-gray"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                </li>
                <li class="list-group-item border-0 bg-transparent p-0">
                  <a
                    href="https://twitter.com/quixlab"
                    target="_blank"
                    class="px-2 text-gray"
                    ><i class="fab fa-twitter"></i
                  ></a>
                </li>
                <li class="list-group-item border-0 bg-transparent p-0">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    class="px-2 text-gray"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                </li>
                <li class="list-group-item border-0 bg-transparent p-0">
                  <a
                    href="https://www.youtube.com/channel/UChN1goECpg64jlUxSzySiNg?view_as=subscriber"
                    target="_blank"
                    class="px-2 text-gray"
                    ><i class="fab fa-youtube"></i
                  ></a>
                </li>
              </ul>
              <!-- social-icons end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Setting from "../Landing/Dark/Setting.vue";
import DarkHeader from "./DarkHeader.vue";
import DarkSideBar from "./DarkSideBar.vue";
import LightHeader from "./LightHeader.vue";
import LightSideBar from "./LightSideBar.vue";
export default {
  components: { DarkSideBar, DarkHeader, Setting, LightSideBar, LightHeader },
  props: {
    dark: Boolean,
    active: Number,
  },
  data() {
    return {
      stickNav: false,
    };
  },
  methods: {
    drakMood() {
      const body = document.querySelector("body");
      if (this.dark) {
        body.setAttribute("data-bodybg", "color_1");
        body.setAttribute("data-primary-color", "color_1");
        body.className = "dark";
      }
      console.log(this.dark);
    },
    scrolling() {
      if (window.scrollY > 50) {
        this.stickNav = true;
      } else {
        this.stickNav = false;
      }
    },
  },
  mounted() {
    this.drakMood();
  },
  created() {
    this.drakMood();
    window.addEventListener("scroll", this.scrolling);
  },
};
</script>
