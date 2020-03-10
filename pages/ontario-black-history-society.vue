<template>
  <main ref="main">
    <ImageModal :image="image" />
    <aside class="position-fixed d-none d-md-block" style="width: 250px">
      <nav>
        <li
          class="project-overview"
          href="#project-overview"
          data-toggle="collapse"
        >
          <span
            >Project Overview
            <span
              class="icon down-arrow-small position-relative"
              style="background-color: #2b2d33;top: 6px;"
            ></span
          ></span>
          <ul id="project-overview" class="pl-4 collapse show">
            <li>
              <a href="#our-goal" @click.stop="" v-scroll-to="'#our-goal'"
                >Our Goal</a
              >
            </li>
            <li>
              <a href="#my-role" @click.stop="" v-scroll-to="'#my-role'"
                >My Role</a
              >
            </li>
            <li>
              <a
                href="#the-solution"
                @click.stop=""
                v-scroll-to="'#the-solution'"
                >The Solution</a
              >
            </li>
          </ul>
        </li>
        <li class="the-process" href="#the-process" data-toggle="collapse">
          <span
            >The Process
            <span
              class="icon down-arrow-small position-relative"
              style="background-color: #2b2d33;top: 6px;"
            ></span
          ></span>
          <ul id="the-process" class="pl-4 collapse show">
            <li>
              <a
                style=""
                href="#discovering-the-problem"
                @click.stop=""
                v-scroll-to="'#discovering-the-problem'"
                >Discovering the Problem</a
              >
            </li>
            <li>
              <a
                href="#sketching-the-new-IA"
                @click.stop=""
                v-scroll-to="'#sketching-the-new-IA'"
                >Sketching the new IA</a
              >
            </li>
            <li>
              <a href="#prototyping" @click.stop="" v-scroll-to="'#prototyping'"
                >Prototyping</a
              >
            </li>
            <li>
              <a href="#next-steps" @click.stop="" v-scroll-to="'#next-steps'"
                >Next Steps</a
              >
            </li>
            <li>
              <a
                href="#lessons-learned"
                @click.stop=""
                v-scroll-to="'#lessons-learned'"
                >Lessons Learned</a
              >
            </li>
          </ul>
        </li>
      </nav>
    </aside>
    <section
      id="main"
      class="d-flex flex-column position-relative"
      style="z-index: 3"
    >
      <NavBar />
      <div
        class="d-flex align-items-center justify-content-center"
        style="flex-grow: 1"
      >
        <article class="text-center col-lg-8 col-xl-5 col-md-10">
          <h1 class="mb-4 main-text">
            Ontario Black History Society
          </h1>
          <p>
            OBHS is a registered Canadian charity that aims to study, preserve
            and promote the knowledge of Black History in Canada.
          </p>
          <p class="mb-5 pb-3">
            I worked with a team of UX designers to redesign the information
            architecture of their website.
          </p>
          <div class="d-flex align-items-center justify-content-center">
            <a href="#our-goal" v-scroll-to="'#our-goal'">See how we did it</a>
            <span class="ml-1 icon down-arrow"></span>
          </div>
        </article>
      </div>
    </section>
    <section
      id="our-goal"
      class="d-flex align-items-center justify-content-center"
    >
      <article class="col-md-10 col-lg-7">
        <h3 class="text-center mb-5 mb-5">Project Overview</h3>
        <h2>Our Goal</h2>
        <p class="m-0">
          Our goal was to create an information architecture that would clearly
          communicate the goals of the organization as well as lead users to the
          information they seek.
        </p>
      </article>
    </section>
    <section
      id="my-role"
      class="d-flex align-items-center justify-content-center mt-5"
    >
      <article class="col-md-10 col-lg-7">
        <h2>My Role</h2>
        <ul>
          <li>
            I analyzed the navigation, organization, labelling and search
            systems to identify usability issues.
          </li>
          <li>
            I carried out a remote card sort study to understand how users
            interpreted the navigation of the website.
          </li>
          <li>
            I collaborated with my team to propose changes to the information
            architecture based on our research findings.
          </li>
        </ul>
      </article>
    </section>
    <section
      id="the-solution"
      class="d-flex align-items-center justify-content-center mt-5"
    >
      <article class="col-md-10 col-lg-7">
        <h2>The Solution</h2>
        <p>
          We <strong>reduced the number of main menu items</strong>, from 10 to
          5, grouping related menu items together and consequently making them
          sensitive to users' scanning ability.
        </p>
        <p>
          To ensure that menu categories were clearly described, we shifted from
          the original purely topical organizational scheme to a hybrid scheme
          that was both <strong>topical and task-oriented</strong>.
        </p>
        <p>
          We also added
          <strong>breadcrumbs and secondary navigation features</strong> within
          each page to further improve the navigation experience of the website.
        </p>
      </article>
    </section>
    <section
      id="discovering-the-problem"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <article class="col-md-10 col-lg-7">
        <h3 class="text-center mb-5">The Process</h3>
        <h2 class="mb-5">Discovering the Problem</h2>
        <h4>Context Analysis</h4>
        <p class="m-0">
          To learn about the website, the organization and their goals, we
          conducted online research and stakeholder interviews.
        </p>
      </article>
      <article class="col-md-10 col-lg-7 mt-5">
        <h4>Content Analysis</h4>
        <p>
          We began this process by
          <strong>identifying the document and information formats</strong> on
          the website, which we found to be mostly text content, with a few
          images.
        </p>
        <p>
          Following this, we
          <strong>analyzed the website's information architecture</strong>,
          taking note of usability issues with the navigation, organizational,
          labelling and search systems.
        </p>
        <p>
          Finally, we carried out a <strong>content audit</strong>, scanning
          through all <strong>30 pages</strong> of the website.
        </p>
      </article>
      <article class="col-md-10 col-lg-7 mt-5">
        <h4>Usability Testing</h4>
        <p>
          To gain insight into the IA problem, we conducted usability testing
          with
          <strong>2 representative users — a student and an educator.</strong>
        </p>
        <p>
          Participants were required to complete <strong>4 tasks</strong> which
          were representative of common scenarios encountered when using the
          website.
        </p>
        <p>
          Participants were timed and observed as they attempted to complete
          each task. Afterwards they completed
          <strong>a questionnaire </strong> about their experience in carrying
          out the tasks.
        </p>
      </article>
      <article class="col-md-10 col-lg-7 mt-5">
        <h4>Card Sort Study</h4>
        <p>
          To further unearth IA issues, we used OptimalSort to carry out a
          <strong>remote card sort study</strong>, with
          <strong>9 participants</strong>.
        </p>
        <p>
          An <strong>open card sort method</strong> was chosen over a closed
          card sort as the previous usability testing we conducted had a limited
          number of participants and so, we aimed to collect as much data as
          possible.
        </p>
      </article>

      <article class=" col-lg-10 mt-5">
        <div class="row card-shadow findings no-gutters justify-content-center">
          <div class="col-lg-8" style="padding: 0 30px;">
            <h4>HERE'S WHAT WE FOUND</h4>
            <ul class="p-0 mt-5">
              <!-- <img src="~/assets/images/confused.svg" alt=""> -->

              <li class="mb-5 d-flex">
                <div class="width: 80px">
                  <span
                    class="icon navigation mr-4"
                    style="height:80px; width: 80px"
                  ></span>
                </div>

                <div>
                  <h5>Limited Navigational Structures</h5>
                  <p class="m-0">
                    The website made use of only the primary navigation, giving
                    the user no clues as to where they were on the website when
                    on inner pages.
                  </p>
                </div>
              </li>
              <li class="mb-5 d-flex">
                <div class="width: 80px">
                  <span
                    class="icon search-large mr-4"
                    style="height:80px; width: 80px;"
                  ></span>
                </div>
                <div>
                  <h5>No Search System</h5>
                  <p class="m-0">
                    There was no means of searching the website for information.
                  </p>
                </div>
              </li>
              <li class="mb-5 d-flex">
                <div class="width: 80px">
                  <span
                    class="icon hierarchy mr-4"
                    style="height:80px; width: 80px"
                  ></span>
                </div>
                <div>
                  <h5>Lack of a Visual Hierarchy</h5>
                  <p class="m-0">
                    Usability tests showed users felt the the organization of
                    information on the website was "visually unappealing" and
                    found it tedious to scan through. Our content audit also
                    revealed that 30 pages were missing H1 titles.
                  </p>
                </div>
              </li>
              <li class="mb-5 d-flex">
                <div class="width: 80px">
                  <span
                    class="icon questions mr-4"
                    style="height:80px; width: 80px;"
                  ></span>
                </div>
                <div>
                  <h5>Confusing Labels</h5>
                  <p class="m-0">
                    Participants of the usability test felt some labels were
                    difficult to understand and as a result found it difficult
                    completing certain tasks.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
    <section
      id="sketching-the-new-IA"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <article class="col-md-10 col-lg-7 ">
        <h2 class="mb-5">Sketching the new IA</h2>
        <h4>IA Schematic Diagram</h4>
        <p>
          We proposed a new global navigation that reduced the main menu items
          from ten (10) to five (5), making the menu items easily accessible to
          the scanning ability of users.
        </p>
        <p>
          We shifted from a purely topical organizational structure to a hybrid
          structure that is both topical (e.g. <em>Our Work</em> and
          <em>Black History Month</em>) and task oriented (e.g.
          <em>Support Us and Contact Us</em>) to allow for labels that were easy
          to understand.
        </p>
        <p>
          To aid navigation, we added breadcrumbs to internal pages, as well as
          a global search bar for quickly finding information.
        </p>
        <figure
          @click="
            launchModal({
              src: 'original_ia (1).png',
              alt: 'Original IA Schematic'
            })
          "
          class="clickable"
        >
          <img
            src="~/assets/images/original_ia (1).png"
            alt="Original IA Schematic"
            class="img-fluid"
          />
          <figcaption
            class="mt-3"
            style="    text-align: center;
    font-size: 16px;"
          >
            <em>Original IA Schematic</em>
          </figcaption>
        </figure>
        <figure
          @click="
            launchModal({
              src: 'ia_hor_schematic(new).png',
              alt: 'Proposed IA Schematic'
            })
          "
          class="clickable mt-5"
        >
          <img
            src="~/assets/images/ia_hor_schematic(new).png"
            alt="Proposed IA Schematic"
            class="img-fluid"
          />
          <figcaption
            class="mt-3"
            style="    text-align: center;
    font-size: 16px;"
          >
            <em>Proposed IA Schematic</em>
          </figcaption>
        </figure>
      </article>
      <article class="col-md-10 col-lg-7 mt-5">
        <h4>User Scenarios</h4>
        <p>
          Based on our research data, we created 2 user personas, a student and
          an educator.
        </p>
        <figure>
          <img
            src="~/assets/images/charlie.png"
            alt=""
            class="img-fluid mb-5"
          />
        </figure>
        <figure>
          <img src="~/assets/images/joe.png" alt="" class="img-fluid mb-5" />
        </figure>
      </article>

      <article class="col-md-10 col-lg-7 mt-5">
        <h4>Sketches</h4>
        <p>
          Using the IA schematic diagram, we proceeded to create paper sketches.
        </p>
        <img
          @click="launchModal({ src: 'sketches.png', alt: 'Initial Sketches' })"
          src="~/assets/images/sketches.png"
          alt=""
          class="img-fluid clickable"
        />
      </article>
    </section>
    <section
      id="prototyping"
      class=" py-5 position-relative"
      style="z-index: 3"
    >
      <div
        class="large-display flex-column align-items-center justify-content-center"
      >
        <div class="col-md-7 mx-auto">
          <h2 class="mt-5 text-center">Prototyping</h2>
          <p class="m-0 text-center">
            Here are some wireframes we created in Balsamiq for common user
            scenarios on the website.
          </p>
        </div>

        <div class="row no-gutters my-5 justify-content-center pt-5">
          <div class="col-md-8 col-lg-4 text-center">
            <h4>Finding an Upcoming Event</h4>
            <p style="font-size: 18px; line-height: 2em">
              Users can see on the home page upcoming events and purchase
              tickets.
            </p>
          </div>
          <div class="col-md-12">
            <figure
              class="d-flex justify-content-sm-center mt-4"
              style="max-width: 100%; overflow-x: scroll"
            >
              <img
                @click="launchModal({ src: 'Home .png', alt: 'Home Page' })"
                src="~/assets/images/Home .png"
                alt="Home page"
                class="mx-3 pb-4"
                style="height: 550px"
              />
            </figure>
          </div>
        </div>

        <div class="row no-gutters my-5 justify-content-center pt-5">
          <div class="col-md-8 col-lg-4 text-center">
            <h4>Read Historical Profiles</h4>
            <p style="font-size: 18px; line-height: 2em">
              Users can find and read information on historical profiles. With
              indexing, navigating and filtering through the profiles is easier.
            </p>
          </div>
        </div>
        <figure
          class="d-flex justify-content-lg-center mt-4 col-md-12"
          style="max-width: 100%; overflow-x: scroll"
        >
          <img
            @click="
              launchModal({ src: 'Black History Month .png', alt: 'Home Page' })
            "
            src="~/assets/images/Black History Month .png"
            alt=""
            style="height: 550px"
            class="mr-2 ml-3 clickable pb-4"
          />
          <img
            @click="
              launchModal({
                src: 'Black History Month_ Historical Profiles.png',
                alt: 'Black History Month - Profiles'
              })
            "
            src="~/assets/images/Black History Month_ Historical Profiles.png"
            alt="Black History Month - Profiles"
            style="height: 550px"
            class="mr-2 clickable pb-4"
          />
          <img
            @click="
              launchModal({
                src: 'Black History Month_ Deborah Miller Brown.png',
                alt: 'Black history month profiles - Deborah Miller Brown'
              })
            "
            src="~/assets/images/Black History Month_ Deborah Miller Brown.png"
            alt="Black history month profiles - Deborah Miller Brown"
            class="pr-3 pb-4"
            style="height: 550px"
          />
        </figure>
        <div class="row no-gutters my-5 justify-content-center pt-5">
          <div class="col-md-8 col-lg-4 text-center">
            <h4 class="text-center">Sign up for a membership</h4>
            <p style="font-size: 18px; line-height: 2em">
              Formerly a manual process where users had to call a representative
              and make payments via bank transfer, users can now sign up for a
              membership without leaving the website.
            </p>
          </div>
          <div class="col-md-12">
            <figure
              class="d-flex justify-content-lg-center mt-4"
              style="max-width: 100%; overflow-x: scroll"
            >
              <img
                @click="
                  launchModal({
                    src: 'Support Us .png',
                    alt: 'Support Us Page'
                  })
                "
                src="~/assets/images/Support Us .png"
                alt="Support Us Page"
                style="height: 550px"
                class="mr-2 ml-3 clickable pb-4"
              />
              <img
                @click="
                  launchModal({
                    src: 'Support Us_ Become a Member .png',
                    alt: 'Support Us Page - Become a member'
                  })
                "
                src="~/assets/images/Support Us_ Become a Member .png"
                alt="Support Us Page - Become a member"
                style="height: 550px"
                class="mr-2 clickable pb-4"
              />
              <img
                @click="
                  launchModal({
                    src: 'Support Us_ Become a Member Confirmation.png',
                    alt: 'Support Us Page - Become a member Confirmation'
                  })
                "
                src="~/assets/images/Support Us_ Become a Member Confirmation.png"
                alt="Support Us Page - Become a member Confirmation"
                class="pr-3 clickable pb-4"
                style="height: 550px"
              />
            </figure>
          </div>
        </div>
        <div class="row no-gutters my-5 justify-content-md-center pt-5">
          <div
            class="col-md-8 col-lg-4 d-flex flex-column justify-content-center text-center"
          >
            <!-- <div class="col-md-8 ml-auto"> -->
            <h4>Purchase an educational poster</h4>
            <p style="font-size: 18px; line-height: 2em">
              Users can support the organization by making purchases, such as an
              educational poster.
            </p>
            <!-- </div> -->
          </div>
          <div class="col-md-12">
            <figure
              class="d-flex mt-4 mx-auto text-center justify-content-center"
            >
              <div class="d-flex" style="max-width: 100%; overflow-x: scroll">
                <img
                  @click="
                    launchModal({
                      src: 'Support Us_ Shop .png',
                      alt: 'Support Us Page - Shop'
                    })
                  "
                  src="~/assets/images/Support Us_ Shop .png"
                  alt="Support Us Page - Shop"
                  style="height: 550px"
                  class="ml-3 mr-2 clickable pb-4"
                />
                <img
                  @click="
                    launchModal({
                      src: 'Support Us_ Shop - Posters.png',
                      alt: 'Support Us Page - Shop Posters'
                    })
                  "
                  src="~/assets/images/Support Us_ Shop - Posters.png"
                  alt="Support Us Page - Shop Posters"
                  class="mr-2 clickable pb-4"
                  style="height: 550px"
                />
                <img
                  @click="
                    launchModal({
                      src: 'Support Us_ Shop - Posters Purchase .png',
                      alt: 'Support Us Page - Posters purchase'
                    })
                  "
                  src="~/assets/images/Support Us_ Shop - Posters Purchase .png"
                  alt="Support Us Page - Posters purchase"
                  style="height: 550px"
                  class="mr-2 clickable pb-4"
                />

                <img
                  @click="
                    launchModal({
                      src:
                        'Support Us_ Shop - Posters Purchase Confirmation .png',
                      alt: 'Support Us Page - Posters purchase confirmation'
                    })
                  "
                  src="~/assets/images/Support Us_ Shop - Posters Purchase Confirmation .png"
                  alt="Support Us Page - Posters purchase confirmation"
                  style="height: 550px"
                  class="pr-3 clickable pb-4"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section
      id="next-steps"
      class="d-flex flex-column align-items-center justify-content-center"
      style="min-height: 80vh"
    >
      <article class="col-md-10 col-lg-7">
        <h2 class="mb-5">Next Steps</h2>

        <p>
          With additional time, we would have gone on to :
        </p>
        <ul>
          <li>
            Carry out usability tests on the proposed information architecture.
          </li>
          <li>
            Integrate feedback from the tests and develop high fidelity
            prototypes.
          </li>
        </ul>
      </article>
    </section>
    <section
      id="lessons-learned"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <article class="col-md-10 col-lg-7">
        <h2 class="mb-5">Lessons Learned</h2>
        <p>
          This project introduced a different dimension to using design
          thinking, as we had to improve on an existing solution with an
          existing user base.
        </p>

        <p>
          Some skills i learned during the process include:
        </p>
        <ul>
          <li>
            Carrying out content audits on websites.
          </li>
          <li>
            Using card sorts to gain insight into how users read and understand
            a website's information architecture.
          </li>
          <li>
           Building sitemaps and IA schematic diagrams.
          </li>
        </ul>
        <div class="d-flex justify-content-between mt-5 pt-4">
          <!-- <div class="col-md-5"></div> -->
          <div class="col-md-5">
            <nuxt-link to="/spacefinder" class="next">
              <div
                style="font-size: 16px; line-height: 1.5em; font-weight: 300; font-family: Oswald"
                class="mb-2"
              >
                Previous Project
              </div>
              <div style="font-weight: ; line-height: 1.5em" class="">
                Creating a better way of finding study spaces
              </div>
            </nuxt-link>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import NavBar from "~/components/case";
import ImageModal from "~/components/modal";
export default {
  head: {
    title: "OBHS - UX Case Study"
  },
  data() {
    return {
      zoom: false,
      sections: [],
      currentId: "",
      image: {
        src: "",
        alt: ""
      }
    };
  },
  components: {
    NavBar,
    ImageModal
  },
  methods: {
    handleScroll(e) {
      var scrollPos = $(document).scrollTop();
      const sideNav = this.$refs.main.querySelector("aside");

      $("aside a").each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position()) {
          if (
            refElement.position().top <= scrollPos &&
            refElement.position().top + refElement.height() > scrollPos
          ) {
            // debugger
            currLink.addClass("active");
            // const navPos = sideNav.getBoundingClientRect().top + 300;
            // const largeDisplay = $("#main");

            // if (!largeDisplay.position()) return;
            // if (
            //   largeDisplay.offset().top - $(window).scrollTop() <= navPos &&
            //   largeDisplay.offset().top -
            //     $(window).scrollTop() +
            //     largeDisplay.height() +
            //     200 >
            //     navPos
            // ) {
            //   // debugger
            //   $(".collapse").collapse("hide");
            //   setTimeout(() => {
            //     $("aside").addClass("invisible");
            //   }, 500);
            // } else {
            //   // debugger
            //   $("aside").removeClass("invisible");

            //   $(".collapse").collapse("show");
            // }
          } else {
            currLink.removeClass("active");
          }
        }
      });
    },
    launchModal(image) {
      this.image = image;
      $("#imageModal").modal("show");
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.sections = this.$refs.main.querySelectorAll("section");
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
main {
  line-height: 2em;
}
#main,
#prototyping {
  background: #332b2b;
  min-height: 100vh;
  color: white;
}

#lessons-learned {
  min-height: 100vh;
}

#main h1 {
  font-size: 70px;
  font-weight: bold;
  letter-spacing: 2px;
}

img {
  z-index: 1;
}

.white-bg {
  background: white;
}

aside {
  list-style: none;
  padding: 20px;
  top: 116px;
  left: 20px;
  /* background: white; */
  z-index: 0;
}

aside li {
  list-style: none;
  line-height: 2em;
}

nav li .active {
  font-weight: 400;
  transition: all 0.2s ease;
}

aside a,
aside span {
  color: #844d4d;
  font-weight: 300;
  font-size: 16px;
  font-family: "Oswald", sans-serif;
}

h2 {
  font-size: 40px;
}
h3 {
  font-size: 20px;
}
h4 {
  font-size: 26px;
}
h5 {
  font-size: 20px;
}
h6 {
  font-size: 40px;
}

#main p {
  font-size: 24px;
}

#main a {
  font-size: 18px;
  color: white;
  text-decoration: underline;
  cursor: pointer;
}

#our-goal,
#sketching-the-new-IA,
#lessons-learned {
  padding-top: 116px;
  background: white;
}
#sketching-the-new-IA,
#prototyping,
#lessons-learned,
#the-solution,
#next-steps {
  padding-bottom: 116px;
}

#discovering-the-problem,
#defining-the-requirements,
#next-steps {
  background: #f9f6f6;
  padding: 116px 0;
}

.findings {
  background: #332b2b;
  color: white;
  border-radius: 4px;
  padding-top: 70px;
  padding-bottom: 70px;
  line-height: 1.2em;
}
/* bf6568 */

#lessons-learned {
  background: #332b2b;
  color: white;
}

.next {
  color: hsla(358, 40%, 74%, 1);
  text-decoration: none;
}
.next:hover {
  color: rgb(231, 192, 194);
  text-decoration: none;
}
.font-weight-bold {
}

.findings h4 {
  font-size: 20px;
}

.findings ul {
  font-size: 16px;
  list-style: none;
}

.card-shadow {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

.clickable {
  cursor: pointer;
}

#main .down-arrow {
  animation: bounce 1s infinite alternate;
  -webkit-animation: bounce 1s infinite alternate;
}

@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-5px);
  }
}
@-webkit-keyframes bounce {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-5px);
  }
}

@media (min-width: 768px) {
  .col-md-7 {
    -ms-flex: 0 0 52.333333%;
    flex: 0 0 52.333333%;
    max-width: 52.333333%;
  }
}
.zoom-in {
  transform: scale(1.24455) translate(-225.846px, 56.9633px);
  width: 461.84px;
  height: 332.65px;
  cursor: zoom-out;
  z-index: 900;
  position: absolute;
}

@media (min-width: 1200px) {
  #main {
    background-image: url("~assets/images/obhs.png");
    background-repeat: no-repeat;
    background-position: -35vw;
    background-size: 70%;
  }
}

@media (max-width: 600px) {
  #main h1.main-text {
    font-size: 40px;
    line-height: 120%;
  }

  #main p {
    font-size: 20px;
    line-height: 180%;
  }
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 2px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #f6f7f933;
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
</style>
