<template>
  <main class="container-fluid">
    <section class="container d-flex flex-column justify-content-between h-100">
      <section class="intro d-flex align-items-center h-100">
        <div>
          <div class="footer-bg text-center">Hi! :-)</div>

          <h1
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-easing="ease-in-back"
            data-aos-once="true"
            class="text-center mt-5"
          >
            I’m Chiamaka, a User Experience Designer and Frontend Developer
            focused on creating seemless user experiences.
          </h1>
          <div class="buttons d-flex justify-content-center mt-5">
            <nuxt-link tag="button" to="portfolio" class="mr-3"
              >Portfolio</nuxt-link
            >
            <nuxt-link tag="button" to="about">About Me</nuxt-link>
          </div>
        </div>
      </section>
      <footer class="text-center my-5 pt-5">
        <span>
          Website designed and built by me :-)
        </span>
      </footer>
    </section>
  </main>
</template>

<script>
export default {
  // layout: "main",
  head: {
    title: "Chiamaka's Portfolio"
  }
};
</script>

<style scoped>
main {
  height: 100vh;
  background: rgb(71, 84, 111);
  color: #f6f7f9;
  /* background: #f6f7f9; */
}

h1 {
  font-weight: bold;
  font-size: 50px;
  line-height: 1.2em;
}

footer {
  font-size: 12px;
  z-index: 3;
}

button {
  background: transparent;
  color: #f6f7f9;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 700;
    width: 150px;

  border: solid 3px #f6f7f9;
  padding: 5px 10px;
}

.footer-bg {
  font-family: "SF Pro Rounded";
  font-size: 40px;
  text-transform: uppercase;
  /* text-align: center; */
  white-space: nowrap;
  font-weight: bold;
  color: hsl(220 22% 38% / 1);
  /* position: absolute; */
  /* top: -60px;
  left: -40px; */
}
@media (min-width: 576px) {
  .footer-bg {
    font-size: 130px;
  }
  button {
    width: 200px;
  }
}
</style>
