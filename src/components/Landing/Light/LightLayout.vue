<template>
  <div>
    <light-nav :active="active" />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from "../Footer.vue";
import LightNav from "../Light/LightNav.vue";
export default {
  components: { Footer, LightNav },
  name: "LightLayout",
  mounted() {
    const body = document.querySelector("body");
    body.className = "light";
  },
  props: {
    active: Number,
  },
};
</script>
