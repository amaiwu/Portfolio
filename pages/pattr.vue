<template>
  <main>
    <ViewPDF :link="link" :img="true" :fullWidth="true" />
    <Navbar next="yours" :absolute="true"/>
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
            <div class="col-md-9">
              <h2 class="header-title">PATTR • UI/UX DESIGN</h2>
              <h1 class="header-subtitle">
                Fostering connectedness with our environment
              </h1>
              <p class="header-caption">1 week • Individual Project</p>
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

    <!-- PROJECT OVERVIEW -->
    <section class="content-wrapper light-gradient" id="overview">
      <!-- <div class="d-flex justify-content-end">
        
      </div> -->
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
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="800"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <h2 class="section-title">Brief</h2>
              <p class="section-content">
                Urban locations around us are layered with curiosities,
                challenges, and questions.
                <mark
                  >I was tasked with designing a solution that allows people
                  understand and feel connected to their environment.</mark
                >
              </p>
            </article>
            <article
              class="section mt-5"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="600"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <h2 class="section-title pt-4">The Solution</h2>
              <p class="section-content">
                <mark
                  >A mobile app that allows users document and share their
                  experiences through stories and photos.</mark
                >
                By connecting every experience to a location, we are able to
                build a database of information that enables us see places
                through multiple lenses.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- THE PROCESS: ASSUMPTIONS AND RESEARCH -->
    <section class="content-wrapper light-gradient">
      <div class="container">
        <div class="row h-100 align-items-center">
          <div class="col-md-6">
            <span
              class="section-bg-title section-bg-title__light position-relative"
              >THE<br />
              PROCESS</span
            >
          </div>
          <div class="col-md-6">
            <article
              class="section "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <h2 class="section-title">Assumptions & Research</h2>
              <p class="section-content">
                Given the short duration, the project was largely built on
                assumptions, mostly from personal experience. I however
                conducted some
                <mark
                  >secondary research on the importance of photos in
                  storytelling.</mark
                >
              </p>
            </article>
            <article
              class="section mt-5"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <h2 class="section-title">User Analysis</h2>
              <p class="section-content">
                I created empathy maps for 2 proto-personas I created based on
                my assumptions,
                <a
                  href="#!"
                  
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-html="true"
                  title="<div class='pattr-tooltip'><img src='https://res.cloudinary.com/drsp4xifi/image/upload/v1589316124/Group_140_1_xtcg46.png'/></div>"
                  class="in-page-link"
                  >John, the first time traveller</a
                >. This helped me better understand users' needs.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- THE PROCESS: IDEATION AND SKETCHING & WIREFRAMING -->
    <section class="content-wrapper light-gradient">
      <div class="container">
        <div class="row h-100 align-items-center">
          <div class="col-md-6">
            <span
              class="section-bg-title section-bg-title__light text-right position-relative"
              >THE<br />
              PROCESS</span
            >
          </div>
          <!--  -->
          <div class="col-md-6">
            <article
              class="section"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <h2 class="section-title">Ideation</h2>
              <p class="section-content">
                I proceeded to
                <a
                  href="#!"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-html="true"
                  title="<div class='pattr-tooltip'><img src='https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_600/v1589224187/pattr-ideation_g4vfve.png' /></div>"
                  class="in-page-link"
                  >brainstorm several ideas</a
                >
                on possible solutions to the identified needs, finally
                identifying 3 major tasks.
              </p>
              <li
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="800"
                data-aos-easing="zoom-in"
                data-aos-once="true"
              >
                Share a story
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="800"
                data-aos-easing="ease-in"
                data-aos-once="true"
              >
                Ask a question
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="800"
                data-aos-easing="ease-in"
                data-aos-once="true"
              >
                Share a memory
              </li>
            </article>
            <article
              class="section mt-5"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
              data-aos-once="true"
            >
              <!-- https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_600/v1589313866/Screen_Shot_2020-05-12_at_4.03.56_PM_ke2qpr.png -->
              <h2 class="section-title">Sketches & Wireframing</h2>
              <p class="section-content">
                Next, I created
                <a
                  href="#!"
                  @click="viewPDF(sketches)"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-html="true"
                  title="<div class='pattr-tooltip'><img src='https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_600/v1589313866/Screen_Shot_2020-05-12_at_4.03.56_PM_ke2qpr.png' /></div>"
                  class="in-page-link"
                  >paper sketches</a
                >
                for each task in the form of storyboards, and then proceeded to
                create
                <a
                  href="#!"
                  @click="viewPDF(wireframe)"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-html="true"
                  title="<div class='pattr-tooltip'><img src='https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_1400/v1589225352/a2.ChiamakaIwuanyanwu.test_1_r1g1sh.png' /></div>"
                  class="in-page-link"
                >
                  wireframes</a
                >
                for each task.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- APP FEATURES -->
    <div class="dark-gradient">
      <div class="container">
        <div
          class="text-center"
          style="padding: 120px 0;"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-once="true"
        >
          <span class="section-bg-title section-bg-title__dark text-center"
            >PATTR FEATURES</span
          >
        </div>
      </div>

      <section class="content-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-5 d-flex align-items-center">
              <article
                class="section"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-easing="ease-in"
                data-aos-once="true"
              >
                <h2 class="section-title">Share a story</h2>
                <p class="section-content">
                  Share your experiences about a particular place, city, country
                  through stories.
                </p>

                <a
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                  data-aos-easing="ease-in-back"
                  data-aos-once="true"
                  @click="viewPDF(tellAStory)"
                  href="#!"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-html="true"
                  title="<div class='pattr-tooltip'><img src='https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_600/v1589228135/a2.ChiamakaIwuanyanwu.ultimate_1__compressed_qpn8mv.png'/></div>"
                  class="in-page-link"
                  >See storyboard</a
                >
              </article>
            </div>
            <div class="col-md-7">
              <figure
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                data-aos-once="true"
              >
                <img
                  src="https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_1000/v1589312611/Group_131_2_dg2r3l.png"
                  alt=""
                  class="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section class="content-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-7 order-1 order-md-0">
              <figure
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                data-aos-once="true"
              >
                <img
                  src="https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_1000/v1589312160/Group_133_l9f0rl.png"
                  alt=""
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-5 d-flex align-items-center order-md-1 order-0">
              <article
                class="section"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="600"
                data-aos-easing="ease-in-back"
                data-aos-once="true"
              >
                <h2 class="section-title">Ask a question</h2>
                <p class="section-content">
                  Get answers to questions about your environment. Questions are
                  made visible to users based on their location.
                </p>
                <a
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                  data-aos-easing="ease-in-back"
                  data-aos-once="true"
                  @click="viewPDF(askAQuestion)"
                  href="#!"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-html="true"
                  :title="'<div class=\'pattr-tooltip\'><img src=\'' + askAQuestion + '\'/></div>'"
                  class="in-page-link mb-4"
                  >See storyboard to ask a question</a
                >
                <a
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                  data-aos-easing="ease-in-back"
                  data-aos-once="true"
                  @click="viewPDF(answerAQuestion)"
                  href="#!"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-html="true"
                  title="<div class='pattr-tooltip'><img src='https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_600/v1589231078/a2.ChiamakaIwuanyanwu.ultimate_1_pxc0oh_ieakl2.png'/></div>"
                  class="in-page-link"
                  >See storyboard to answer a question</a
                >
              </article>
            </div>
          </div>
        </div>
      </section>
      <section class="content-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-5 d-flex align-items-center">
              <article
                class="section"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="600"
                data-aos-easing="ease-in-back"
                data-aos-once="true"
              >
                <h2 class="section-title">Experience a place</h2>
                <p class="section-content">
                  Get unique timelines specially curated for you based on your
                  location.
                </p>
              </article>
            </div>
            <div class="col-md-7">
              <figure
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
                data-aos-once="true"
              >
                <img
                  src="https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_1000/v1589312161/Group_139_ogub3v.png"
                  alt=""
                  class="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section class="content-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-7 order-md-0 order-1">
              <figure
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-easing="ease-in"
                data-aos-once="true"
              >
                <img
                  src="https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_1000/v1589312162/Group_137_w53gfs.png"
                  alt=""
                  class="img-fluid"
                />
              </figure>
            </div>
            <div class="col-md-5 d-flex align-items-center order-md-1 order-0">
              <article class="section">
                <h2
                  class="section-title"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-back"
                  data-aos-once="true"
                >
                  Learn about a place
                </h2>
                <p class="section-content">
                  Read stories, see photos and learn facts about several places
                  around the world.
                </p>
                <a
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-back"
                  data-aos-once="true"
                  @click="viewPDF(experienceAPlace)"
                  href="#!"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-html="true"
                  title="<div class='pattr-tooltip'><img src='https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_600/v1589230179/a2.ChiamakaIwuanyanwu.ultimate_1_lid1pr_vudszi.png'/></div>"
                  class="in-page-link"
                  >See storyboard</a
                >
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- COLOR AND FONT -->
    <section
      class="content-wrapper med-gradient d-flex flex-column justify-content-center"
      style="padding: 120px 0; min-height: 100vh; height: unset"
    >
      <div class="container">
        <article class="py-5 mb-5 ">
          <h2
            class="section-bg-title"
            style="font-family: SF Pro Rounded, Nunito, sans-serif; color: #3f5050;"
          >
            COLORS
          </h2>
          <p>
            A color palette consisting of green tones reminiscent of earth's
            greenery.
          </p>
          <div class="d-flex flex-wrap">
            <span
              data-aos="fade-in"
              data-aos-duration="1000"
              :data-aos-delay="i * 100"
              data-aos-easing="ease-in-back"
              data-aos-once="true"
              class="color-item mr-4 my-3"
              v-for="(color, i) in colorPalette"
              :key="i"
              :style="{ background: color.bg }"
            >
              <span :style="{ color: color.fg }">{{ color.name }}</span>
            </span>
          </div>
        </article>
        <div class="row py-5 h-100 align-items-center mt-5">
          <div class="col-md-6 order-md-0 order-1">
            <figure>
              <img src="~/assets/images/font.svg" alt="" class="img-fluid" />
            </figure>
          </div>
          <div class="col-md-6 d-flex align-items-center order-md-1 order-0">
            <article class="section">
              <h2
                class="section-bg-title"
                style="font-family: SF Pro Rounded, Nunito, sans-serif; color: #3f5050;"
              >
                FONTS
              </h2>
              <p>SF Font Typeface in accordance with iOS Design Guide</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- NEXT STEPS AND LESSONS LEARNED -->
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
                With more time, I would carry out usability and heuristics
                testing on my solution. I would also explore the idea of
                integrating social media apps like instagram that deal with
                sharing memories.
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
                This was my first mobile app design as well as my first
                individual UX project. Throughout the process I learned best
                practices of designing mobile apps, and also became familiar
                with the iOS design style guide.
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

import ViewPDF from "~/components/view-pdf";
export default {
  data() {
    return {
      link: "",
      wireframe:
        "https://res.cloudinary.com/drsp4xifi/image/upload/v1589225352/a2.ChiamakaIwuanyanwu.test_1_r1g1sh.png",
      askAQuestion:
        "https://res.cloudinary.com/drsp4xifi/image/upload/v1589227646/a2.ChiamakaIwuanyanwu.ultimate_1_vuz0jx_qhynqs.png",
      tellAStory:
        "https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_6298/v1589313129/a2.ChiamakaIwuanyanwu.ultimate_1__compressed_qpn8mv_pmg6bn.png",
      experienceAPlace:
        "https://res.cloudinary.com/drsp4xifi/image/upload/v1589230179/a2.ChiamakaIwuanyanwu.ultimate_1_lid1pr_vudszi.png",
      answerAQuestion:
        "https://res.cloudinary.com/drsp4xifi/image/upload/v1589231078/a2.ChiamakaIwuanyanwu.ultimate_1_pxc0oh_ieakl2.png",
      sketches:
        "https://res.cloudinary.com/drsp4xifi/image/upload/v1589313866/Screen_Shot_2020-05-12_at_4.03.56_PM_ke2qpr.png",
      colorPalette: [
        { name: "Black", bg: "#001410", fg: "#fff" },
        { name: "Grey", bg: "#4E5654", fg: "#fff" },
        { name: "Dark Green", bg: "#044030", fg: "#fff" },
        { name: "Green", bg: "#09634B", fg: "#fff" },
        { name: "Pastel Green", bg: "#4A7368", fg: "#fff" },
        { name: "Light Pastel Green", bg: "#D4DEDA", fg: "#044030" },
        { name: "Light Green", bg: "#F0F5F3", fg: "#044030" },
        {
          name: "Gradient",
          bg: "linear-gradient(180deg, #FFFFFF 38.02%, #F0F5F3 100%)",
          fg: "#044030"
        }
      ]
    };
  },
  components: {
    ViewPDF,
    Navbar
  },
  methods: {
    viewPDF(link) {
      this.link = link;
      this.$nextTick(() => {
        $("#ViewPDF").modal("show");
      });
    }
  }
};
</script>

<style>


 .tooltip-inner {
  width: 600px !important;
  max-width: 600px;
  padding: 0
}

.pattr-tooltip {
  background-color: #d3e4e0 !important;
  padding: 5px;
  border-radius: 4px;
  /* width: 100% !important; */
}

.tooltip.show {
  opacity: 1;
}

.pattr-tooltip img {
  display: block;
  background: #d3e4e0;
  height: auto;
  width: 100%;
}
</style>
<style scoped>
:root {
  --main-color: #11624b;
}
p,
h1,
h2,
h3,
h4,
h5,
h6,
div,
section,
main,
header,
span,
article {
  font-family: "Nunito", sans-serif;
}
main > * {
  font-weight: 400;
  font-size: 16px;
}
main {
  background-image: url("~assets/images/pattr-bg.svg");
  background-repeat: repeat;
  /* background-size: cover; */
  /* height: 100vh; */
  /* overflow-y: scroll; */
}
.content-wrapper,
header {
  min-height: 100vh;
}
.header-wrapper {
  background-image: url("https://res.cloudinary.com/drsp4xifi/image/upload/c_scale,w_1440/v1589229026/Scene_1_emqhnp.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  /* margin-top: 100vh; */
}

h1 {
  font-weight: 700;
  line-height: 100%;
}

.light-gradient {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%),
    #ecf8f5f6;
}
header {
  background: linear-gradient(
    180deg,
    #3f5050 0%,
    rgba(63, 80, 80, 0.9) 54.69%,
    #3f5050 95.31%
  );
}

.dark-gradient {
  background: linear-gradient(
    180deg,
    #3f5050 0%,
    rgba(63, 80, 80, 0.96) 54.69%,
    #3f5050 95.31%
  );
}

.med-gradient {
  background: rgba(100, 119, 119, 0.98);
  /* color: #647777; */
}

.dark-gradient .section-title {
  color: #fdfefe;
}
.dark-gradient .section-content {
  color: #ffffff;
}
.light-gradient .section-title {
  color: #11624b;
}
.light-gradient .section-content {
  color: #051e17;
}

header {
  height: 100vh;
}
.header-caption {
  color: white;
}
.header-title,
.header-subtitle {
  color: #cee3de;
}

.section-title {
  font-weight: 800;
  font-size: 30px;
}

.section-bg-title {
  font-family: "SF Pro Rounded","Nunito", sans-serif;
  color: #647777;
  font-size: 60px;
  font-weight: bold;
  line-height: 88.9%;
}

.section-bg-title__light {
  color: rgb(18, 104, 80, 0.15);
}
.section-bg-title__dark {
  color: #647777;
}
.header-title {
  font-size: 18px;
}

.color-item {
  width: 100px;
  height: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 100%;
  font-size: 14px;
  line-height: 1.2em;
  font-weight: 600;
  box-shadow: 0px 2px 20px #303e3e65;
}

.container {
  height: 100%;
}

.content-wrapper {
  height: 100vh;
}
.dark-gradient a.in-page-link {
  color: #9fb2b2;
}
.dark-gradient a.in-page-link::before {
  background-color: #90adaf;
}

a.in-page-link::before {
  background-color: #d3e4e0;
}

li {
  list-style: none;
  position: relative;
  margin-bottom: 5px;
  background: #d7e6e2;
  border-radius: 20px;
  text-transform: lowercase;
}

li::before {
  content: "✓";
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #11624b;
  font-size: 14px;
  border-radius: 100%;
  background: #d7e6e2;
  width: 40px;
  margin-right: 5px;
}

.icon.down-arrow {
  background-color: #11624b;
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
  background: #cee3de;
}
/* MEDIA QUERIES */
/* --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px; */

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
