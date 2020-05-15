<template>
  <div :class="{ 'absolute-header': absolute }">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light d-md-flex justify-content-between px-lg-5 pt-3"
      :style="{ color: navColor }"
    >
      <nuxt-link
        to="/portfolio"
        exact
        class="nav-link"
        href="#"
        >Back to portfolio</nuxt-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" style="flex-grow: 0" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item mr-4" v-if="previous">
            <nuxt-link :to="previous" class="nav-link" href="#">
              <span class="icon down-arrow left"></span>
              <span class="pr-2">Previous</span>
              <span class="sr-only">Previous</span></nuxt-link
            >
          </li>
          <li class="nav-item" v-if="next">
            <nuxt-link :to="next" class="nav-link">
              <span class="pl-2">Next</span>
              <span class="icon down-arrow right"></span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["navColor", "next", "previous", "absolute"]
};
</script>

<style scoped>
nav {
  background-color: #2b2d33;
  font-size: 16px;
}

.bg-light {
  background-color: transparent !important;
  color: white;
}

nav li a {
  color: rgb(216, 216, 216) !important;
  /* font-weight: 300; */
}

nav li .nuxt-link-active {
  font-weight: 600;
  position: relative;
  color: white !important;
}

.navbar-brand {
  font-size: 16px;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.absolute-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}

.down-arrow.right {
  transform: rotate(270deg);
}
.down-arrow.left {
  transform: rotate(90deg);
}

.nav-link {
  color: rgba(255,255,255,0.4);
  border-radius: 20px;
  padding: 5px 15px;
  background: #00000087;
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: 600;
  transform: all 0.2s ease-in-out

}

nav:hover .nav-link, nav:hover .navbar-brand {
  color: white !important;
}

@media (min-width: 992px) {
  .nuxt-link-active.nav-link::before {
    content: "";
    width: 100%;
    height: 3px;
    background: white;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 4px;
  }
}
</style>
