<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-md-flex justify-content-between px-5 pt-3" :style="{color: navColor}">
      <nuxt-link to="/" exact class="navbar-brand" href="#"
        ><img src="~/assets/images/CI.svg" alt=""
      /></nuxt-link>
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
            <nuxt-link to="/" class="nav-link" href="#"
              >My Works <span class="sr-only">My works</span></nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" class="nav-link" >About me</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {
  props: ['navColor']
}
</script>

<style scoped>
nav {
    font-family: 'Oswald', sans-serif;
    background-color: #2b2d33;
    font-size: 16px;
    
}

.bg-light {
    background-color: #2b2d33 !important;
    color: white
}

nav li a {
  color: rgb(190, 190, 190) !important;
}

nav li .nuxt-link-active {
  font-weight: 600;
  position: relative;
  color: white !important
}
.nuxt-link-active::before {
  content: "";
  width: 100%;
  height: 3px;
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 4px;
}
</style>