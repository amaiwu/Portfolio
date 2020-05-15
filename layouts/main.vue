<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light d-md-flex justify-content-end px-lg-5 py-3"
    >
      <!-- <nuxt-link to="/" exact class="navbar-brand" href="#"
        ><img src="~/assets/images/CI.svg" alt=""
      /></nuxt-link> -->
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
          <li class="nav-item mr-4">
            <nuxt-link to="/" exact class="nav-link" href="#"
              >Home <span class="sr-only">Home</span></nuxt-link
            >
          </li>
          <li class="nav-item mr-4">
            <nuxt-link to="/portfolio" exact class="nav-link" href="#"
              >Portfolio <span class="sr-only">Portfolio</span></nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" exact class="nav-link">About me</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<style scoped>
nav {
  background-color: #f6f7f9;
  font-size: 16px;
  position: sticky;
  top: 0;
}

.bg-light {
  background-color: #f6f7f9 !important;
}

nav li a {
  color: #47546f !important;
  font-weight: 300;
}

nav li .nuxt-link-active {
  font-weight: 600;
  position: relative;
  color: #2b2d33 !important;
}

@media (min-width: 992px) {
  .nuxt-link-active.nav-link::before {
    content: "";
    width: 100%;
    height: 3px;
    background: #2b2d33;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 4px;
  }
}
</style>
