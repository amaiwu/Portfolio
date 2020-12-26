<template>
  <main style="background: #f6f7f9;" class="pb-5"
  >
    <ImageModal :image="image" :small="true" :cloudinary="true"/>
    <div class="container pt-5">
      <div class="footer-bg position-fixed" style="top: 73px">ABOUT ME</div>
      <div class="row justify-content-between align-items-center">
        <section class="col-lg-5" style="background: #f6f7f9;">
          <p>
            I'm Chiamaka, an Emerging Product Designer and Software Engineer trained in identifying user needs and solving problems
through user-centred design.
          </p>
          <p>
            I'm currently studying at the University of Toronto for a Master's
            Degree in User Experience Design.
          </p>
          <p>
            When I'm not designing, I'm bringing designs to life using web
            technologies, or watching football 🙂.
          </p>
        </section>
        <figure class="col-lg-6" style="background: #f6f7f9;">
          <img
            src="https://res.cloudinary.com/drsp4xifi/image/upload/w_540/q_auto/v1583527434/my_pic_kkehwy.png"
            alt=""
            class="img-fluid w-100"
          />
          <figcaption
            class="mt-3"
            style="    text-align: center;
    font-size: 16px;"
          >
            <em style="color: #47546f; font-size: 14px"
              >The spacefinder team and me ✌🏾😉</em
            >
          </figcaption>
        </figure>
      </div>

      <div class="row" style="background: #f6f7f9;">
        <div class="col-md-12" style="background: #f6f7f9;">
          <h3 class="mt-4">Skills</h3>
        </div>
        <div class="col-md-4 col-lg-2" style="background: #f6f7f9;">
          <h4>Design</h4>
          <ul>
            <li>Prototyping</li>
            <li>Wireframing</li>
            <li>Information Architecture</li>
            <li>Storyboarding</li>
          </ul>
        </div>
        <div class="col-md-4 col-lg-2" style="background: #f6f7f9;">
          <h4>Research</h4>
          <ul>
            <li>
              User Interview
            </li>
            <li>
              Usability Testing
            </li>
            <li>
              Survey
            </li>
            <li>
              Card Sort
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-lg-2" style="background: #f6f7f9;">
          <h4>Design Tools</h4>
          <ul>
            <li>
              Balsamiq
            </li>
            <li>
              Figma
            </li>
            <li>
              Sketch
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-lg-2" style="background: #f6f7f9;">
          <h4>Programming</h4>
          <ul>
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
            <li>
              JavaScript
            </li>
            <li>
              VueJS
            </li>
          </ul>
        </div>
        <div class="col-md-4 " style="background: #f6f7f9;">
          <a
            class="view"
            target="_blank"
            href="https://res.cloudinary.com/drsp4xifi/image/upload/v1608961454/Chiamaka_s_Resume_msyghl.pdf"
            
            >View my resume</a
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ImageModal from "~/components/modal";
export default {
  layout: "main",
  head: {
    title: "About me"
  },
  data() {
    return {
      image: {
        alt: "",
        src: "",
      }
    };
  },
  methods: {
    launchModal(image) {
      this.image = image;
      $("#imageModal").modal("show");
    }
  },
  components: {
    ImageModal
  }
};
</script>

<style scoped>
main {
  min-height: calc(100vh);
}
p,
li {
  font-size: 16px;
  line-height: 180%;
}

p {
}

ul {
  list-style: none;
  padding: 0;
  line-height: 2em;
}

h4 {
  font-size: 18px;
  font-weight: 600;
}

a {
  font-size: 16px;
  line-height: 150%;
  color: #204db2;
  text-decoration: underline;
}

.footer-bg {
  font-family: "SF Pro Rounded", "Nunito", sans-serif;
  font-size: 40px;
  text-transform: uppercase;
  white-space: nowrap;
  font-weight: bold;
  color: #a3adc2;
}

main {
  padding-top: 50px;
}
@media (min-width: 576px) {
  .footer-bg {
    font-family: "SF Pro Rounded", "Nunito", sans-serif;

    font-size: 130px;
    text-transform: uppercase;
    white-space: nowrap;
    font-weight: bold;
    color: #a3adc2;
  }
  main {
    padding-top: 150px;
  }
}
</style>
