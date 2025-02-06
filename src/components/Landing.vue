<template>
  <div>
    <Nav />
    <slot />
    <setting v-if="dark" />
    <Footer />
  </div>
</template>

<script>
import Footer from "./Landing/Footer.vue";
import Nav from "./Landing/Nav.vue";
import Setting from "./Setting.vue";
export default {
  components: { Nav, Footer, Setting },
  name: "Landing",
  props: {
    dark: Boolean,
  },
  mounted() {
    const body = document.querySelector("body");
    if (this.dark) {
      body.setAttribute("data-bodybg", "color_1");
      body.setAttribute("data-primary-color", "color_1");
      body.className = "dark";
    } else {
      body.className = "light";
    }
  },
};
</script>
