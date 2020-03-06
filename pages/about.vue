<template>
  <main style="background: #f6f7f9" class="pb-5">
    <ImageModal :image="image" :small="true" />
    <div class="container pt-5">
      <div class="row justify-content-between align-items-center">
        <section class="col-md-5">
          <p>
            I'm Chiamaka, a User Experience Designer and Frontend Developer
            based in Toronto, Canada.
          </p>
          <p>
            I'm currently studying at the University of Toronto for a Master's
            Degree in User Experience Design.
          </p>
          <p>
            When I'm not designing, I work as a frontend developer for a
            software development company, where I majorly focus on bringing UI
            designs to life using web technologies.
          </p>
          <p>
            With my knowledge of designing and building user experiences, I hope
            to bridge the gap between design and software development.
          </p>
        </section>
        <figure class="col-md-6">
          <img src="https://res.cloudinary.com/drsp4xifi/image/upload/w_540/q_auto/v1583527434/my_pic_kkehwy.png" alt="" class="img-fluid" />
          <figcaption
            class="mt-3"
            style="    text-align: center;
    font-size: 16px;"
          >
            <em style="color: #47546f; font-size: 14px">That's me with the peace sign and the Spacefinder team</em>
          </figcaption>
        </figure>
      </div>
      <h3 class="mt-4">Skills</h3>
      <div class="row">
        <div class="col-md-2">
          <h4>Design</h4>
          <ul>
            <li>Prototyping</li>
            <li>Wireframing</li>
            <li>Information Architecture</li>
            <li>Storyboarding</li>
          </ul>
        </div>
        <div class="col-md-2">
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
        <div class="col-md-2">
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
        <div class="col-md-2">
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
        <div class="col-md-4 ">
          <a
            class="view"
            href="#"
            @click="launchModal({ src: 'resume.png', alt: 'My resume' })"
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
  data() {
    return {
      image: {
        alt: "",
        src: ""
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
    font-family: "Merriweather", serif;
    font-size: 16px;
    line-height: 150%;
    color: #204db2;
    text-decoration: underline;

}
</style>
