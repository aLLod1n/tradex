<template>
  <dashboard-layout :active="active" :dark="dark">
    <div class="pt-4 pb-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <p class="h5 text-primary fw-bold">
              Welcome Back, <span class="text-gray"> Maria Pascle</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-5 settings">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-4 col-xl-3">
            <div class="card border-0">
              <div class="card-header border-bottom mb-4 p-0 pb-3">
                <h3 class="fw-semi-bold card-title">Settings</h3>
              </div>
              <div class="card-body p-0">
                <ul class="settings-sidebar">
                  <li class="nav-item mb-3">
                    <router-link
                      :to="dark ? '/settings-dark' : '/settings'"
                      class="nav-link text-dark-400"
                      :class="active_ === 1 && 'active'"
                    >
                      <i class="la la-user me-2 fs-5"></i
                      ><span class="fw-semi-bold">Edit Profile</span>
                    </router-link>
                  </li>
                  <li class="nav-item mb-3">
                    <router-link
                      :to="
                        dark
                          ? '/settings-preferences-dark'
                          : '/settings-preferences'
                      "
                      class="active-preferences nav-link text-dark-400"
                      :class="active_ === 2 && 'active'"
                    >
                      <i class="la la-cog me-2 fs-5"></i
                      ><span class="fw-semi-bold">Preferences</span>
                    </router-link>
                  </li>
                  <li class="nav-item mb-3">
                    <router-link
                      :to="
                        dark ? '/settings-security-dark' : '/settings-security'
                      "
                      class="active-security nav-link text-dark-400"
                      :class="active_ === 3 && 'active'"
                    >
                      <i class="la la-lock me-2 fs-5"></i
                      ><span class="fw-semi-bold">Security</span>
                    </router-link>
                  </li>
                  <li class="nav-item mb-3">
                    <router-link
                      :to="
                        dark ? '/settings-account-dark' : '/settings-account'
                      "
                      class="active-account nav-link text-dark-400"
                      :class="active_ === 4 && 'active'"
                    >
                      <i class="la la-university me-2 fs-5"></i
                      ><span class="fw-semi-bold">Linked Account</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-8 col-xl-9">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "./DashboardLayout.vue";
export default {
  components: { DashboardLayout },
  name: "SettingLayout",
  props: {
    active: Number,
    dark: Boolean,
    active_: Number,
  },
};
</script>
