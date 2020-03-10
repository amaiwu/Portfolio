<template>
  <main class="container-fluid">
    <section class="wrapper">
      <section
        class="intro"
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-back"
        data-aos-once="true"
      >
        <p class="main-text">
          I’m Chiamaka, a User Experience Designer and Frontend Developer
          focused on creating seemless user experiences.
        </p>
      </section>
      <section class="selected-works">
        <h1
          class="mb-5"
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-delay="500"
          data-aos-easing="ease-in"
          data-aos-once="true"
        >
          SOME PROJECTS I'VE WORKED ON
        </h1>
        <div class="row justify-content-between mb-5">
          <div
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-easing="ease-in"
            data-aos-once="true"
            class="col-md-5 d-flex flex-column justify-content-center order-md-0 order-1"
          >
            <div class="tags">Spacefinder • UX Case Study</div>
            <p class="project-title">
              Creating a way for finding study spaces
            </p>
            <nuxt-link to="/spacefinder" class="project-link">Read</nuxt-link>
          </div>
          <div class="col-md-7 order-0 order-md-1">
            <figure>
              <img
                src="~/assets/images/spacefinder.png"
                alt=""
                class="h-100 w-100"
                style="object-fit: cover"
              />
            </figure>
          </div>
        </div>
        <div class="row justify-content-between mb-5">
          <div
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-easing="ease-in"
            data-aos-once="true"
            class="col-md-5 d-flex flex-column justify-content-center order-md-0 order-1"
          >
            <div class="tags">OBHS • UX Case Study</div>
            <p class="project-title">
              Redesigning the information architecture of a charity's website
            </p>
            <nuxt-link to="/ontario-black-history-society" class="project-link"
              >Read</nuxt-link
            >
          </div>
          <div class="col-md-7 order-0 order-md-1">
            <figure>
              <img
                src="~/assets/images/obhs.png"
                alt=""
                class="h-100 w-100"
                style="object-fit: cover"
              />
            </figure>
          </div>
        </div>
        <!-- <div
          class="row justify-content-between mb-5"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-once="true"
        >
          <div
            class="col-md-4 d-flex flex-column justify-content-center order-md-0 order-1"
          >
            <div class="tags">Freelancer • UI Design</div>
            <p class="project-title">
              Designing a dashboard for freelancers
            </p>
            <a href="#" class="project-link">Read</a>
          </div>
          <div class="col-md-7 order-0 order-md-1">
            <figure></figure>
          </div>
        </div>
        <div
          class="row justify-content-between"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-once="true"
        >
          <div
            class="col-md-4 d-flex flex-column justify-content-center order-md-0 order-1"
          >
            <div class="tags">Scribble • Frontend Development</div>
            <p class="project-title">
              Creating a web app for making notes
            </p>
            <a href="#" class="project-link">Read</a>
          </div>
          <div class="col-md-7 order-0 order-md-1">
            <figure></figure>
          </div>
        </div> -->
      </section>
      <footer class="text-center mt-5 pt-5">
        <span>
          Website designed and created by me
        </span>
      </footer>
    </section>
  </main>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  layout: "main",
  head: {
    title: "Chiamaka's Portfolio"
  },
  components: {
    Logo
  }
};
</script>

<style scoped>
main {
  /* height: 100vh; */
  background: #f6f7f9;
}

figure {
  height: 290px;
  background: #2b2d33;
  background-blend-mode: darken;
  border-radius: 0px;
  width: 100%;
}

p,
h1,
a {
  letter-spacing: 0.4px;
}
section.wrapper {
  background: #f6f7f9;
  width: 100%;
  max-width: 1014px;
  padding: 30px;
  margin: auto;
}

section.intro {
  height: 70vh;
  /* background: green; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro {
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 150%;
  color: #2b2d33;
}

h1 {
  font-family: "Merriweather", serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: #47546f;
}

.tags {
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  color: #47546f;
}

p.project-title {
  font-weight: bold;
  font-size: 22px;
  line-height: 150%;
  color: #2b2d33;
  margin-top: 10px;
}

.project-link {
  font-family: "Merriweather", serif;
  font-size: 16px;
  line-height: 150%;
  color: #204db2;
  text-decoration: underline;
}

footer {
  font-size: 12px;
  color: #47546f;
}

@media (max-width: 600px) {
  p.main-text {
    font-size: 24px;
    line-height: 150%;
  }

  .project-title {
    letter-spacing: unset;
  }
}
</style>
