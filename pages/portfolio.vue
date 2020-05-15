<template>
  <main class="container-fluid">
    <section
      class="container d-flex flex-column justify-content-between h-100"
      
    >
      <div class="footer-bg position-fixed" style="top: 73px">PORTFOLIO</div>

      <div class="row">
        <div class="col-md-6 col-lg-4">
          <nuxt-link
            to="/pattr"
            class="d-block h-100"
            style="padding-bottom: 30px"
          >
            <div class="card pattr-gradient p-4 h-100 pattr">
              <figure>
                <img
                  src="https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_1440/v1589229026/Scene_1_emqhnp.webp"
                  alt=""
                  class="img-fluid"
                />
              </figure>
              <div class="card-caption">
                <p class="project-name mb-1">
                  <span style="color:#E57738">PATTR</span>
                </p>
                <p class="project-description">
                  Teaching earth through experiences
                </p>
                <div class="tags">
                  <span class="tag">UX/UI Design</span>
                  <span class="tag">Mobile</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-6 col-lg-4">
          <nuxt-link
            to="/yours"
            class="d-block h-100 pb-4"
            style="padding-bottom: 30px"
          >
            <div class="card pattr-gradient p-4 h-100 yours">
              <figure>
                <img
                  src="https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_1440/v1589470812/Scene_3_titug3.webp"
                  alt=""
                  class="img-fluid"
                />
              </figure>
              <div class="card-caption">
                <p class="project-name mb-1">
                  <span style="color:#E57738">YOURS</span>
                </p>
                <p class="project-description">
                  Sharing love through <br />
                  food
                </p>
                <div class="tags">
                  <span class="tag">UX/UI Design</span>
                  <span class="tag">Mobile</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-6 col-lg-4">
          <nuxt-link
            to="/spacefinder"
            class="d-block h-100 pb-4"
            style="padding-bottom: 30px"
          >
            <div class="card spacefinder pattr-gradient p-4 h-100">
              <figure class="pattr-gradient">
                <img
                  src="https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_1176/v1589498857/Scene_4_k6gixe.webp"
                  alt=""
                  class="img-fluid"
                />
              </figure>
              <div class="card-caption">
                <p class="project-name mb-1">
                  <span style="color:#E57738">SPACEFINDER</span>
                </p>
                <p class="project-description">
                  Finding study spaces <br />
                  easily
                </p>
                <div class="tags">
                  <span class="tag">UX Case Study</span>
                  <span class="tag">Mobile</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-6 col-lg-4">
          <nuxt-link
            to="/ontario-black-history-society"
            class="d-block h-100 pb-4"
            style="padding-bottom: 30px"
          >
            <div class="card freelancer pattr-gradient p-4 h-100">
              <figure class="pattr-gradient">
                <img
                  src="https://res.cloudinary.com/drsp4xifi/image/upload/v1589504476/Frame_2_mu1gte.webp"
                  alt=""
                  class="img-fluid"
                />
              </figure>
              <div class="card-caption">
                <p class="project-name mb-1">
                  <span style="color:#E57738">OBHS</span>
                </p>
                <p class="project-description">
                  Redesigning the IA for a charity's website
                </p>
                <div class="tags">
                  <span class="tag">IA</span>
                  <span class="tag">Web</span>
                  <span class="tag">Wireframing</span>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-6 col-lg-4">
          <a
            href="#!"
            to="/ontario-black-history-society"
            class="d-block h-100 pb-4 coming-soon"
            style="padding-bottom: 30px"
          >
            <div class="card freelancer pattr-gradient p-4 h-100 disabled">
              <figure class="pattr-gradient">
                <img
                  src="https://res.cloudinary.com/drsp4xifi/image/upload/v1589501255/Group_230_aczmra.webp"
                  alt=""
                  class="img-fluid"
                />
              </figure>
              <div class="card-caption">
                <p class="project-name mb-1">
                  <span style="color:#E57738">FREELANCER</span>
                </p>
                <p class="project-description">
                  Managing freelance <br />
                  projects
                </p>
                <div class="tags">
                  <span class="tag">UX/UI Design</span>
                  <span class="tag">Web</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <footer class="text-center my-5 pt-5">
        <span>
          Website designed and built by me :-)
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
  min-height: 100vh;
  background: #f6f7f9;
  /* background: #f6f7f9; */
}

.pattr-gradient {
  background: #f6f7f9;
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
  width: 200px;
  font-size: 20px;
  font-weight: 700;
  border: solid 3px #f6f7f9;
  padding: 5px 10px;
}

.card {
  border: none;
  border-radius: 20px;
  color: #2b2d33;
  box-shadow: 0px 1px 3px #cbcbcb;
  margin-bottom: 20px;
  transition: all 0.2s ease-in-out;
}
.card.disabled,
a.coming-soon {
  position: relative;
  pointer-events: none;
  cursor: default;
}
a.coming-soon {
}
.card.disabled:before {
  content: "";
  width: 100%;
  height: 100%;
  display: inline-block;
  background: #c2c5cc;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
  z-index: 10;
  border-radius: 20px;
}

a.coming-soon:before {
  content: "coming soon 🙂";
  position: absolute;
  bottom: 170px;
  background: #2b2d33;
  border-radius: 20px 0 0 20px;
  right: 0;
  font-size: 16px;
  color: white;
  z-index: 20;
  padding: 5px 10px;
}
.card:hover {
  box-shadow: 0px 2px 10px #e4e4e4;
}
.card img {
  transform: scale(1, 1) translateY(0px);
  transition: all 0.2s ease-in-out;
}

.card:hover img {
  transform: scale(1.16, 1.115) translateY(-10px);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.project-name {
  font-size: 16px;
  font-weight: 600;
}
.project-description {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2em;
}
figure,
img {
  border-radius: 15px;
}

.pattr figure,
.pattr img {
  background: var(--pattr-gradient);
}
.spacefinder figure,
.spacefinder img {
  background: var(--spacefinder-gradient);
}

.yours figure,
.yours img {
  background: var(--yours-gradient);
}
.freelancer figure,
.freelancer img {
  background: var(--freelancer-gradient);
}

figure {
  /* box-shadow: inset 2px -1px 4px rgba(0, 0, 0, 0.25); */
}

.footer-bg {
  font-family: "SF Pro Rounded";
  font-size: 40px;
  text-transform: uppercase;
  white-space: nowrap;
  font-weight: bold;
  color: #a3adc2;
}

.tag {
  font-size: 14px;
  background: green;
  padding: 3px 10px;
  border-radius: 20px;
  background: #eb9e75;
  /* color: white; */
}
.container {
   padding-top: 100px
  }
@media (min-width: 576px) {
  .footer-bg {
    font-family: "SF Pro Rounded";
    font-size: 130px;
    text-transform: uppercase;
    white-space: nowrap;
    font-weight: bold;
    color: #a3adc2;
  }
  .container {
   padding-top: 200px
  }
}
</style>
