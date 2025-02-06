<template>
  <header class="header bg-white" :class="stickNav && 'sticky-top'">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- <div class="navigation navigation-2"> -->
          <div class="navigation">
            <nav class="navbar navbar-expand-lg navbar-light">
              <router-link class="navbar-brand" to="/demo"
                ><img
                  src="../../../assets/images/logo.png"
                  loading="lazy"
                  alt="…"
                />
              </router-link>
              <b-navbar-toggle target="navbarScroll"> </b-navbar-toggle>
              <b-collapse is-nav class="justify-content-end" id="navbarScroll">
                <b-navbar-nav tag="ul">
                  <b-nav-item-dropdown
                    class="tradix_dropdown"
                    text="Home"
                    tag="li"
                    :toggle-class="active === 1 && 'active'"
                  >
                    <router-link class="dropdown-item" to="/"
                      >Home 1</router-link
                    >
                    <router-link class="dropdown-item" to="/index2"
                      >Home 2</router-link
                    >
                  </b-nav-item-dropdown>
                  <li class="nav-item">
                    <router-link
                      class="@@price nav-link"
                      to="/price"
                      :class="active === 2 && 'active'"
                      >Price</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      class="@@wallet nav-link"
                      to="/wallet"
                      :class="active === 3 && 'active'"
                      >Wallet</router-link
                    >
                  </li>
                  <b-nav-item-dropdown
                    class="tradix_dropdown"
                    text="Company"
                    tag="li"
                    :toggle-class="active === 4 && 'active'"
                  >
                    <router-link class="dropdown-item" to="/about"
                      >About us</router-link
                    >
                    <router-link class="dropdown-item" to="/team"
                      >Team</router-link
                    >
                    <router-link class="dropdown-item" to="/blog"
                      >Blog</router-link
                    >
                    <router-link class="dropdown-item" to="/blog-single"
                      >Blog-single</router-link
                    >
                    <router-link class="dropdown-item" to="/career"
                      >Career</router-link
                    >
                  </b-nav-item-dropdown>
                  <b-nav-item-dropdown
                    class="tradix_dropdown"
                    text="Support"
                    tag="li"
                    :toggle-class="active === 5 && 'active'"
                  >
                    <router-link class="dropdown-item" to="/contact"
                      >Contact us</router-link
                    >
                    <router-link class="dropdown-item" to="/helpdesk"
                      >Help Desk</router-link
                    >
                    <router-link class="dropdown-item" to="/faq"
                      >FAQ</router-link
                    >
                  </b-nav-item-dropdown>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/dashboard"
                      >Dashboard</router-link
                    >
                  </li>
                  <li class="nav-item mt-3 mt-lg-0">
                    <router-link
                      class="nav-link btn btn-primary btn-sm text-white"
                      to="/signin"
                      >Sign in</router-link
                    >
                  </li>
                </b-navbar-nav>
              </b-collapse>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "LightNav",
  props: {
    active: Number,
  },
  data() {
    return {
      stickNav: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.scrolling);
  },
  methods: {
    scrolling() {
      if (window.scrollY > 50) {
        this.stickNav = true;
      } else {
        this.stickNav = false;
      }
    },
  },
};
</script>
