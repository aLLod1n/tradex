<template>
  <div class="sidebar bg-primary">
    <div class="menu">
      <ul>
        <li>
          <router-link
            to="dashboard-dark"
            class="p-3 mb-1 rounded"
            data-bs-toggle="tooltip"
            data-placement="right"
            title="Home"
            :class="active === 1 && 'active'"
          >
            <span><i class="la la-igloo text-white fs-4"></i></span>
          </router-link>
        </li>
        <li>
          <router-link
            to="buy-sell-dark"
            class="@@exchange p-3 mb-1 rounded"
            data-bs-toggle="tooltip"
            data-placement="right"
            title="Exchange"
            :class="active === 2 && 'active'"
          >
            <span><i class="la la-exchange text-white fs-4"></i></span>
          </router-link>
        </li>
        <li>
          <router-link
            to="accounts-dark"
            class="@@account p-3 mb-1 rounded"
            data-bs-toggle="tooltip"
            data-placement="right"
            title="Account"
            :class="active === 3 && 'active'"
          >
            <span><i class="la la-user text-white fs-4"></i></span>
          </router-link>
        </li>
        <li>
          <router-link
            to="settings-dark"
            class="@@settings p-3 mb-1 rounded"
            data-bs-toggle="tooltip"
            data-placement="right"
            title="Setting"
            :class="active === 4 && 'active'"
          >
            <span><i class="la la-tools text-white fs-4"></i></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DarkSidebar",
  props: {
    active: Number,
  },
};
</script>
