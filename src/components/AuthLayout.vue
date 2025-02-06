<template>
  <div>
    <slot />
    <setting v-if="dark" />
  </div>
</template>
<script>
import Setting from "./Landing/Dark/Setting.vue";
export default {
  components: { Setting },
  name: "AuthLayout",
  props: {
    dark: Boolean,
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
  },
  mounted() {
    this.drakMood();
  },
  created() {
    this.drakMood();
  },
};
</script>
