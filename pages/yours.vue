<template>
  <main>
    <Navbar next="spacefinder" previous="pattr" :absolute="true" />
    <div class="header-wrapper">
      <header
        class="content-wrapper"
        style="padding: 120px 0"
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-back"
        data-aos-once="true"
      >
        <div class="container">
          <div
            class="row align-items-end h-100"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-back"
            data-aos-once="true"
          >
            <div class="col-md-6">
              <h2 class="header-title">YOURS • UI/UX DESIGN</h2>
              <h1 class="header-subtitle">
                Sharing love through food
              </h1>
              <p class="header-caption">
                1 week • Individual Project • Presentation
              </p>
              <a
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-easing="ease-in-back"
                data-aos-once="true"
                href="#overview"
                v-scroll-to="'#overview'"
                class="scroll-down"
                ><span class="icon down-arrow"></span
              ></a>
            </div>
          </div>
        </div>
      </header>
    </div>
    <section class="content-wrapper light-gradient" id="overview">
      <div class="container">
        <div class="row h-100 align-items-center">
          <div
            class="col-md-6"
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-easing="ease-in-back"
            data-aos-once="true"
          >
            <span
              class="section-bg-title section-bg-title__light text-right position-relative"
              >PROJECT<br />
              OVERVIEW</span
            >
          </div>
          <div class="col-md-6">
            <article
              class="section"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <p class="section-content">
                <b><em>Yours</em></b> was a school project for a UI design
                course. In the next section is a keynote presentation that shows
                the problem I identified, my solution, as well as my process.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section
      class="content-wrapper dark-gradient"
      style="padding: 120px 0;min-height: 100vh; height: unset"
    >
      <!-- <div>
            <li>Click or tap on the presentation frame</li>
            <li>Use the left and right arrow keys</li>
            <li>Hover on the black panel to the left of the presentation to see all slides</li>
        </div> -->
      <div
        class="container d-flex flex-column justify-content-center"
        style="height: 100vh"
      >
        <div class="text-center">
          <span
            class="section-bg-title section-bg-title__light text-right position-relative"
            >PRESENTATION
          </span>
        </div>

        <div class="iframe-wrapper">
          <div class="text-right mb-3">
            <a
              href="#!"
              data-toggle="tooltip"
              data-placement="bottom"
              data-html="true"
              :title="iframeTips"
              class="in-page-link d-inline-block"
              >Tips for navigating the presentation?</a
            >
          </div>

          <iframe
            src="https://tender-darwin-3c1dd0.netlify.app/assets/player/keynotedhtmlplayer#0"
            allowfullscreen="true"
            frameborder="0"
            height="100%"
            width="100%"
          ></iframe>
        </div>
      </div>
    </section>
    <section class="content-wrapper light-gradient">
      <div class="container">
        <div class="row h-100 align-items-center">
          <div class="col-md-6">
            <article
              class="section"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <h2 class="section-title">Next Steps</h2>
              <p class="section-content">
                With more time, I would carry out
                <mark>usability testing and heuristics evaluation</mark>. I
                would also conduct some <mark>research</mark> on the
                possibilities of integrating with food app platforms.
              </p>
            </article>
          </div>
          <div class="col-md-6">
            <article
              class="section"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <h2 class="section-title">Lessons Learned</h2>
              <p class="section-content">
                I learned a lot about user onboarding and it's role in setting
                the tone for users' experience of a product. I also learned best
                UI design practices for mobile apps.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Navbar from "~/components/case";

export default {
  data() {
    return {
      iframeTips: `<div class="yours-tooltip">
      <li class="tip"><span>Click or tap on the presentation frame</span></li>
            <li class="tip"><span>Use the left and right arrow keys</span></li>
            <li class="tip">
            <span><span>Hover on the black panel to the left of the presentation to see all slides</span>
            <img src='https://res.cloudinary.com/drsp4xifi/image/upload/v1589492218/gif_zwr41z.gif' height="250px"/>
            
            </span>
            
            </li>
            </div>
`
    };
  },
  components: {
    Navbar
  }
};
</script>

<style>
.yours-tooltip li.tip,
.yours-tooltipp.tip {
  text-align: left;
  color: hsl(22, 71%, 7%);
  
}
.yours-tooltip {
  width: 100% !important;
  border-radius: 4px;
  background-color: #e4d9d3 !important;
}

.tooltip.show {
  opacity: 1;
}

.yours-tooltip  img {
  display: block;
  background: #d3e4e0;
  height: auto;
  width: 100%;
}

.yours-tooltip li.tip {
  list-style: none;
  position: relative;
  display: flex;
  margin-bottom: 5px;
  /* background: #d7e6e2; */
  border-radius: 20px;
  text-transform: lowercase;
}

.yours-tooltip li.tip::before {
  content: "✓";
  font-weight: bold;
  display: inline-flex;
  /* align-items: center; */
  justify-content: center;
  color: rgb(185, 129, 92);
  font-size: 14px;
  border-radius: 100%;
  /* background: rgb(185, 129, 92); */
  flex-basis: 30px;
  /* height: 20px; */
  margin-right: 5px;
}

.yours-tooltip li:last-child {
  flex-grow: 1;
}

.yours-tooltip li {
  /* display: flex; */
}
</style>

<style scoped>
/* .bg {
  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 0%, #ffffff 100%),
    hsla(22, 46%, 95%, 0.965);
} */
.iframe-wrapper {
  border-radius: 4px;
  /* box-shadow: 0px 0px 31px hsl(22 21% 42% / 1); */
  height: 70%;
  width: 100%;
  margin: auto;
}

iframe {
  border-radius: 4px;
}

.content-wrapper,
header {
  min-height: 100vh;
}
.content-wrapper {
  height: 100vh;
}
a.in-page-link {
  color: hsl(22, 11%, 66%);
}

/* a.in-page-link::before {
  background-color: hsl(22, 16%, 63%);
} */
.header-wrapper {
  background-image: url("https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_1440/v1589470812/Scene_3_titug3.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  /* margin-top: 100vh; */
}

header {
  background: linear-gradient(
    180deg,
    hsl(22, 12%, 28%) 0%,
    hsla(22, 12%, 28%, 0.9) 54.69%,
    hsl(22, 57%, 20%) 95.31%
  );
}
.container {
  height: 100%;
}
header {
  height: 100vh;
}
.header-caption {
  color: white;
}

.dark-gradient {
  background: linear-gradient(
    180deg,
    hsl(22, 12%, 28%) 0%,
    hsla(22, 12%, 28%, 0.96) 54.69%,
    hsl(22, 12%, 28%) 95.31%
  );
}

.dark-gradient .section-title {
  color: hsl(22, 33%, 99%);
}
.dark-gradient .section-content {
  color: #ffffff;
}
.light-gradient .section-title {
  color: hsl(22, 70%, 23%);
}
.light-gradient .section-content {
  color: hsl(22, 71%, 7%);
}

.light-gradient {
  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 0%, #ffffff 100%),
    hsla(22, 46%, 95%, 0.965);
}

.header-title,
.header-subtitle {
  color: hsl(22, 27%, 85%);
}

.section-bg-title {
  font-family: "SF Pro Rounded", "Nunito", sans-serif;
  color: #647777;
  font-size: 40px;
  font-weight: bold;
  line-height: 88.9%;
}

.section-bg-title__light {
  color: hsla(22, 70%, 24%, 0.15);
}
.section-bg-title__dark {
  color: rgb(22, 119, 119);
}

.icon.down-arrow {
  background-color: hsl(22, 70%, 23%);
  animation: bounce 1s infinite alternate;
  -webkit-animation: bounce 1s infinite alternate;
}
.scroll-down {
  width: 30px;
  border-radius: 100%;
  height: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: hsl(22, 27%, 85%);
}

@media (min-width: 576px) {
  h1 {
    font-size: 80px;
  }
  .section-bg-title {
    font-size: 110px;
    line-height: 88.9%;
  }
  .large-font {
    font-size: 110px;
  }
  .section-title {
    font-size: 50px;
  }
  .header-title {
    font-size: 2rem;
  }
  main > * {
    font-size: 20px;
  }
}
</style>
