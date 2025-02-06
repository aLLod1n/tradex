<template>
  <div>
    <dark-nav :active="active" />
    <slot />
    <setting />
    <Footer />
  </div>
</template>

<script>
import Setting from "./Setting.vue";
import DarkNav from "./DarkNav.vue";
import Footer from "../Footer.vue";
export default {
  components: { Setting, Footer, DarkNav },
  name: "DarkLayout",
  mounted() {
    const body = document.querySelector("body");
    body.setAttribute("data-bodybg", "color_1");
    body.setAttribute("data-primary-color", "color_1");
    body.className = "dark";
  },
  props: {
    active: Number,
  },
};
</script>
