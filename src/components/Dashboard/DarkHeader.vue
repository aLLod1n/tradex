<template>
  <header class="header dashboard-header" :class="stickNav && 'sticky-top'">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav
            class="navbar navbar-expand-lg navbar-light p-0 justify-content-between"
          >
            <router-link class="navbar-brand" to="index-dark"
              ><img src="../../assets/images/logo.png" loading="lazy" alt="…"
            /></router-link>

            <div class="dashboard-log my-2">
              <div class="d-flex align-items-center">
                <div class="account-money me-4 d-none d-md-block">
                  <ul>
                    <li class="crypto text-primary border">
                      <span class="fw-semi-bold me-3">0.0025</span
                      ><i class="cc BTC"></i>
                    </li>
                    <li class="usd border">
                      <span class="fw-semi-bold me-3 text-gray">19.93 USD</span>
                    </li>
                  </ul>
                </div>
                <b-nav-item-dropdown
                  tag="div"
                  right
                  menu-class="mt-3"
                  toggle-class="d-flex align-items-center p-0"
                  class="profile-log"
                >
                  <template #button-content>
                    <span
                      class="thumb bg-primary rounded-circle border d-flex align-items-center justify-content-center border me-3 text-white"
                      ><i class="la la-user fs-5"></i
                    ></span>
                    <div class="d-none d-sm-block">
                      <span class="name fw-semi-bold me-3">Maria Pascle</span>
                      <span class="arrow"
                        ><i class="la la-angle-down"></i
                      ></span>
                    </div>
                  </template>

                  <router-link to="accounts-dark" class="dropdown-item">
                    <i class="la la-user"></i> Account
                  </router-link>
                  <router-link to="history-dark" class="dropdown-item">
                    <i class="la la-book"></i> History
                  </router-link>
                  <router-link to="settings-dark" class="dropdown-item">
                    <i class="la la-cog"></i> Setting
                  </router-link>
                  <router-link to="lock-dark" class="dropdown-item">
                    <i class="la la-lock"></i> Lock
                  </router-link>
                  <router-link
                    to="signin-dark"
                    class="dropdown-item logout text-danger"
                  >
                    <i class="la la-sign-out text-danger"></i> Logout
                  </router-link>
                </b-nav-item-dropdown>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "DarkHeader",
  props: {
    stickNav: Boolean,
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>
