<template>
  <div class="color-switcher" :class="active && 'show'">
    <a
      class="color-switcher-trigger"
      href="javascript:void(0)"
      @click="active = !active"
    >
      <span><i class="fa fa-cog fa-spin"></i></span>
    </a>
    <div class="color-switcher-inner">
      <div class="admin-settings">
        <div class="opt-background mb-3">
          <p class=" mb-2">Font Family</p>
          <div class="select">
            <select
              class="form-select"
              name="theme_font"
              id="theme_font"
              @change="(e) => changeFont(e.target.value)"
            >
              <option value="nunito">Nunito</option>
              <option value="opensans">Open Sans</option>
            </select>
          </div>
        </div>
        <div>
          <p class=" mb-2">Primary Color</p>
          <div class="opt-nav-header-color">
            <span
              v-for="color in colors"
              :key="color"
              @click="changePrimaryColor(color)"
            >
              <input
                type="radio"
                name="navigation_header"
                :value="color"
                class="filled-in chk-col-primary"
                :id="`nav_header_${color}`"
              />
              <label :for="`nav_header_${color}`"></label>
            </span>
          </div>
        </div>
        <div class="opt-header-color">
          <p class=" mb-2">Background Color</p>
          <div>
            <span
              v-for="color in colors"
              :key="color"
              @click="changeHeaderColor(color)"
            >
              <input
                type="radio"
                name="header_bg"
                :value="color"
                class="filled-in chk-col-primary"
                :id="`header_${color}`"
              />
              <label :for="`header_${color}`"></label>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      active: false,
      body: document.querySelector("body"),
      colors: ["color_1", "color_2", "color_3", "color_4", "color_5"],
    };
  },
  methods: {
    changePrimaryColor(value) {
      this.body.setAttribute("data-primary-color", value);
    },
    changeHeaderColor(value) {
      this.body.setAttribute("data-bodybg", value);
    },
    changeFont(value) {
      this.body.setAttribute("data-font", value);
    },
  },
};
</script>
