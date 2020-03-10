<template>
  <main ref="main">
    <aside class="position-fixed d-none d-md-block">
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
                href="#user-research"
                @click.stop=""
                v-scroll-to="'#user-research'"
                >User Research</a
              >
            </li>
            <li>
              <a
                href="#user-analysis"
                @click.stop=""
                v-scroll-to="'#user-analysis'"
                >User Analysis</a
              >
            </li>
            <li>
              <a
                href="#requirements-analysis"
                @click.stop=""
                v-scroll-to="'#requirements-analysis'"
                >Requirements Analysis</a
              >
            </li>
            <li>
              <a href="#prototyping" @click.stop="" v-scroll-to="'#prototyping'"
                >Prototyping</a
              >
            </li>
            <li>
              <a
                href="#app-features"
                @click.stop=""
                v-scroll-to="'#app-features'"
                >Spacefinder Features</a
              >
            </li>
            <li>
              <a
                href="#evaluation-and-testing"
                @click.stop=""
                v-scroll-to="'#evaluation-and-testing'"
                >Evaluation and Testing</a
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
      style="z-index: 100"
    >
      <Navbar />
      <div
        class="d-flex align-items-center justify-content-center large-display"
        style="flex-grow: 1"
      >
        <article class="text-center col-md-5">
          <h1 class="mb-4 main-text">
            Spacefinder
          </h1>
          <p>
            Students have a hard time finding study spaces especially during
            mid-term and exam periods when study spaces get filled.
          </p>
          <p class="mb-5 pb-3">
            To address this issue, I collaborated with 4 UX designers to create
            spacefinder — a mobile app for finding study spaces.
          </p>
          <div class="d-flex align-items-center justify-content-center">
            <a href="#our-goal" v-scroll-to="'#our-goal'"
              >Here's how we did it</a
            >
            <span class="ml-1 icon down-arrow"></span>
          </div>
        </article>
      </div>
    </section>
    <section
      id="our-goal"
      class="d-flex align-items-center justify-content-center"
    >
      <article class="col-md-7">
        <h3 class="text-center mb-5">Project Overview</h3>
        <h2>Our Goal</h2>
        <p class="m-0">
          Our goal was to ease the process of finding study spaces.
        </p>
        <p class="">
          Findings from our user research led us to desire a solution that will
          enable students:
        </p>
        <ul class="">
          <li>have access to all study spaces on campus.</li>
          <li>
            find and reserve a study room.
          </li>
          <li>
            identify the level of crowdedness of a study area.
          </li>
        </ul>
      </article>
    </section>
    <section
      id="my-role"
      class="d-flex align-items-center justify-content-center mt-5"
    >
      <article class="col-md-7">
        <h2>My Role</h2>
        <ul>
          <li>I carried out user interviews and secondary research.</li>
          <li>i actively participated in brainstorming sessions.</li>
          <li>
            I collaborated with a teammate to design a medium-fidelity prototype
            using Balsamiq.
          </li>
          <li>
            I also designed tasks used during guerilla testing of the
            medium-fidelity prototype.
          </li>
        </ul>
      </article>
    </section>
    <section
      id="the-solution"
      class="d-flex align-items-center justify-content-center mt-5"
    >
      <article class="col-md-7">
        <h2>The Solution</h2>
        <p>
          By employing design thinking, we created a mobile app to help students
          ease the process of finding study spaces.
        </p>
        <p>
          The app uses <strong>a map</strong> to suggest study spaces close to a
          student's current location or a selected address, with the aim of
          speeding up the decision making process.
        </p>
        <p>
          Students can also <strong>see all study spaces on campus</strong>, no
          longer limiting their choices to a few familiar options.
        </p>
        <p>
          With the <strong>book a room</strong> feature, students do not have to
          worry about searching for study spaces as they can book available
          study rooms in libraries on campus, and can see
          <strong>how crowded public study spaces are. </strong>
        </p>
      </article>
    </section>
    <section
      id="user-research"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <article class="col-md-7">
        <h3 class="text-center mb-5">The Process</h3>
        <img
          src="~/assets/images/the-process2.svg"
          alt="The steps of the process"
          class="mb-5 img-fluid"
        />
        <h2 class="my-5">User Research</h2>
        <h4>Assumptions</h4>
        <p class="">
          Some assumptions we had going into the project were that:
        </p>
        <ul>
          <li>Most students prefer studying in a quiet place to study.</li>
          <li>Study spaces get crowded during mid-terms and exams.</li>
        </ul>
      </article>
      <article class="col-md-7 mt-5">
        <h4>Secondary Research</h4>
        <p>
          Our assumptions were not factual, so we carried out some online
          research to gain insight into the state of study spaces in several
          Universities.
        </p>

        <p>
          While we read articles, journals etc., Reddit was most insightful and
          posts by students in University reddit channels confirmed all our
          assumptions.
        </p>
      </article>
      <article class="col-md-7 mt-5">
        <h4>Primary Research</h4>
        <p>
          Now with some context on the problem, we interviewed
          <strong>14 students</strong> at the
          <strong>University of Toronto</strong>. We were most interested in:
        </p>
        <ul>
          <li>Understanding students expectations of study spaces.</li>
          <li>Determining the effect of crowdedness on study space choices.</li>
        </ul>
      </article>
      <article class=" col-md-10 large-display mt-5">
        <div class="row card-shadow findings no-gutters justify-content-center">
          <div class="col-md-8" style="padding: 0 30px;">
            <h4>WHAT WE DISCOVERED</h4>
            <ul class="p-0 mt-5">
              <!-- <img src="~/assets/images/confused.svg" alt=""> -->

              <li class="mb-5 d-flex">
                <span
                  class="icon confused mr-4"
                  style="height:80px; width: 80px"
                ></span>
                <div>
                  <h5>DIfficulty in finding study spaces</h5>
                  <p class="m-0">
                    Students found it difficult finding spaces to study
                    especially when their preferred study spaces were occupied.
                  </p>
                </div>
              </li>
              <li class="mb-5 d-flex">
                <span
                  class="icon questions mr-4"
                  style="height:80px; width: 80px;"
                ></span>
                <div>
                  <h5>You mean there are other study spaces?</h5>
                  <p class="m-0">
                    Some students were not aware of study spaces on campus
                    outside those closest to their lecture buildings.
                  </p>
                </div>
              </li>
              <li class="mb-5 d-flex">
                <span
                  class="icon alarm mr-4"
                  style="height:80px; width: 80px"
                ></span>
                <div>
                  <h5>Time wasting</h5>
                  <p class="m-0">
                    Students felt it was an inefficient use of time looking for
                    study spaces. In some cases they would settle for a place
                    outside the campus.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
    <section
      id="user-analysis"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <article class="col-md-7">
        <h2>User Analysis</h2>
        <p>
          We created a proto-persona to guide our journey towards finding a
          user-centred solution to the problems we had identified.
        </p>
        <p>
          Using an empathy map we created Selena, allowing our research data
          guide us in identifying her needs and frustrations.
        </p>
      </article>
      <div
        class="col-md-10 large-display mt-5  p-0 user-persona justify-content-center"
      >
        <div class="row mx-0">
          <div class="col-md-5">
            <div
              class="user card-shadow d-flex flex-column align-items-center text-center py-4 px-5 mb-4 h-100"
            >
              <p
                class="m-0 font-weight-bold"
                style="font-family: Merriweather, sans-serif"
              >
                "I need to plan my time better"
              </p>
              <img
                src="https://res.cloudinary.com/drsp4xifi/image/upload/h_160/q_auto/v1583528352/persona_njakpr.jpg"
                alt=""
                height="160px"
                width="160px;"
                style="object-fit: cover"
                class="rounded-circle mt-3"
              />
              <div class="about-persona mt-4">
                <p class="m-0 font-weight-bold">Selena</p>
                <p class="m-0">University of Toronto Student</p>
                <p class="m-0">Commuter</p>
                <p class="m-0">20 yrs</p>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="needs card-shadow py-4 px-5 h-100">
              <h5>Needs</h5>
              <ul style="font-size: 16px; line-height: 2.5em">
                <li>A quiet place to study.</li>
                <li>To plan her time better.</li>
                <!-- <li></li> -->
              </ul>
              <h5 class="mt-4 pt-3">Frustrations</h5>
              <ul style="font-size: 16px; line-height: 2.5em">
                <li>Finding the perfect study space takes too long.</li>
                <li>Does not want a study place far from her faculty.</li>
                <li>Knows of only a couple of study spaces.</li>
                <!-- <li></li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="requirements-analysis"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <article class="col-md-7">
        <h2 class="mb-5">Requirements Analysis</h2>
        <h4>Ideation</h4>
        <p class="">
          We carried out a brainstorming session to generate as many ideas that
          could be possible solutions to the needs we had identified.
        </p>
        <p>
          By dot-voting, we narrowed our ideas to one main idea — "A mobile
          application that helps students find and book study spaces on campus".
        </p>
        <p>
          We also considered several other ideas as features on the application,
          such as a <em>Map</em>, for showing the location of buildings and
          <em>Crowdedness status</em>, that tells how crowded a study space is.
        </p>
      </article>
      <Carousel :images="images" class="col-md-10 large-display my-5" />
      <article class="col-md-7 mt-5">
        <h4>Design Statements</h4>
        <p>
          To guide our team's alignment towards a common understanding of the
          outcomes that were needed to meet Selena's needs we came up with 3
          design statements:
        </p>
        <ul>
          <li>
            Selena can have access to all study spaces on campus on one
            platform.
          </li>
          <li>
            Selena can find and reserve a study room with resources that match
            their desired preferences.
          </li>
          <li>
            Selena can identify the level of crowdedness of a study area in real
            time.
          </li>
        </ul>
      </article>
    </section>
    <section
      id="prototyping"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <article class="col-md-7">
        <h2 class="mb-5">Prototyping</h2>
        <p class="m-0">
          We designed prototypes for our ideas in two stages. First we created
          <strong>low-fidelity prototypes</strong> in form of paper sketches.
          Using guerrilla testing we evaluated our sketches to quickly generate
          feedback, which we integrated into our designs to create a
          <strong>medium fidelity prototype.</strong>
        </p>
      </article>
      <div class="col-md-7 my-5 pt-5">
        <figure>
          <img
            src="~/assets/images/sketches.jpg"
            alt=""
            class="img-fluid"
            style=""
          />
          <figcaption
            class="mt-3"
            style="    text-align: center;
    font-size: 16px;"
          >
            <em>Initial sketches for the spacefinder app</em>
          </figcaption>
        </figure>
      </div>

      <article class="col-md-7">
        <p>
          The second stage of prototyping involved creating a medium fidelity
          protoype using Balsamiq.
        </p>
      </article>
    </section>
    <section
      id="app-features"
      class=" px-4 pt-5 position-relative"
      style="z-index: 100"
    >
      <div
        class="large-display  flex-column align-items-center justify-content-center"
      >
        <h4 class="mt-5 text-center">Spacefinder Features</h4>
        <div class="row my-5 justify-content-center">
          <div class="col-md-5 text-center">
            <h6 class="text-center">Book a Room</h6>
            <p class="text-center">
              Users can search for and book a room based on the features and
              resources available in the room, as well as its availability.
            </p>
          </div>
          <div class="col-md-12 pt-4">
            <figure
              class="d-flex mt-4 mx-auto text-center justify-content-center"
            >
              <div class="d-flex pb-4" style="max-width: 100%; overflow-x: scroll">
                <img
                  src="~/assets/images/Libraries.png"
                  alt=""
                  style="height: 550px"
                  class="mr-2"
                />
                <img
                  src="~/assets/images/bookRoom.png"
                  alt=""
                  style="height: 550px"
                  class="mr-2"
                />
                <img
                  src="~/assets/images/bookRoom2.png"
                  alt=""
                  style="height: 550px"
                  class="mr-2"
                />
                <img
                  src="~/assets/images/booking-confirmed.png"
                  alt=""
                  style="height: 550px"
                />
              </div>
            </figure>
          </div>
        </div>
        <div class="row my-5 justify-content-center pt-5">
          <div
            class="col-md-5 d-flex flex-column justify-content-center text-center"
          >
            <!-- <div class="col-md-8 ml-auto"> -->
            <h6>Find a Building</h6>
            <p>
              Users can search for and find buildings based to their location or
              a selected address.
            </p>
            <!-- </div> -->
          </div>
          <div class="col-12">
            <figure
              class="d-flex mt-4 mx-auto text-center justify-content-center"
            >
              <div class="d-flex pb-4" style="max-width: 100%; overflow-x: scroll">
                <img
                  src="~/assets/images/map.png"
                  alt=""
                  style="height: 550px"
                  class="mr-2"
                />
                <img
                  src="~/assets/images/search-results.png"
                  alt=""
                  style="height: 550px"
                  class="mr-2"
                />
                <img
                  src="~/assets/images/search-results2.png"
                  alt=""
                  style="height: 550px"
                  class="mr-2"
                />
                <img
                  src="~/assets/images/map 2.png"
                  alt=""
                  style="height: 550px"
                />
              </div>
            </figure>
          </div>
        </div>

        <div class="row mt-5 justify-content-center pt-5">
          <div class="col-md-5 text-center">
            <h6>Live Report</h6>
            <p>
              Users can know how crowded a study space is based on reports from
              fellow students.
            </p>
          </div>
        </div>
        <div class="col-md-12">
          <figure
            class="d-flex mt-4 mx-auto text-center justify-content-center"
          >
            <div class="d-flex pb-4" style="max-width: 100%; overflow-x: scroll">
              <img
                src="~/assets/images/Libraries.png"
                alt=""
                style="height: 550px"
                class="mr-2"
              />
              <img
                src="~/assets/images/Live-reports.png"
                alt=""
                style="height: 550px"
                class="mr-2"
              />
              <img
                src="~/assets/images/Live-reports 2.png"
                alt=""
                style="height: 550px"
                class="mr-2"
              />
              <img
                src="~/assets/images/Make a report .png"
                alt=""
                style="height: 550px"
                class="mr-2"
              />
              <img
                src="~/assets/images/Select building.png"
                alt=""
                style="height: 550px"
                class="mr-2"
              />
              <img
                src="~/assets/images/Select crowdedness.png"
                alt=""
                style="height: 550px"
                class="mr-2"
              />
              <img
                src="~/assets/images/How recent.png"
                alt=""
                style="height: 550px"
                class="mr-2"
              />
              <img
                src="~/assets/images/Congrats page.png"
                alt=""
                style="height: 550px"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
    <section
      id="evaluation-and-testing"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <article class="col-md-7">
        <h2 class="mb-5">Evaluation and Testing</h2>
        <h4>Guerilla Testing and Heuristics Evaluation</h4>
        <p class="">
          We had little time available for testing, so we used guerilla testing
          methods to evaluate our designs. We engaged
          <strong>4 student participants</strong> to complete
          <strong>3 outlined tasks</strong> while observing them.
        </p>
        <p>
          Following the testing each participant filled out a short
          questionnaire with questions tailored towards gaining insight into
          their experience using the application.
        </p>
        <p>
          We also had the expertise of <strong>2 Senior UX Designers</strong> at
          our disposal, whom we asked to carry out heuristics evaluation in
          order to identify potential usability issues as well as design flaws
          in our prototype.
        </p>
      </article>
      <article class="col-md-7 mt-5">
        <h4>Findings</h4>
        <ul>
          <li>
            Participants of the guerrila testing had no issues completing the
            tasks.
          </li>
          <li>
            Results from our questionnaire showed the app was easy to use.
          </li>
          <li>
            Some screens like the "book a room" screen did not have a navigation
            bar, which could be an unexpected behavior to users, as the
            navigation bar was consistent among other pages.
          </li>
          <li>
            There was no clear distinction between buttons especially on pages
            that had a cancel button in addition to other buttons.
          </li>
        </ul>
      </article>
    </section>

    <section
      id="next-steps"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <article class="col-md-7">
        <h2 class="mb-5">Next Steps</h2>

        <p>
          With additional time, we would have gone on to :
        </p>
        <ul>
          <li>
            Integrate feedback from evaluation of the low-fidelity prototypes.
          </li>
          <li>
            Develop high fidelity prototypes using applications like figma,
            sketch.
          </li>
          <li>
            Conduct further evaluations on high fidelity prototype — usability
            testing and heuristics evaluation.
          </li>
        </ul>
      </article>
    </section>
    <section
      id="lessons-learned"
      class="d-flex flex-column align-items-center justify-content-center"
    >
      <article class="col-md-7">
        <h2 class="mb-5">Lessons Learned</h2>
        <p>
          This project introduced me to design thinking and how it can be used
          to provide user-centric solutions to problems.
        </p>

        <p>
          Here are some of my takeaways from the project:
        </p>
        <ul>
          <li>
            I learned how to conduct user interviews and connect with subject.
          </li>
          <li>
            By designing the medium fidelity prototype, I learned how to use
            Balsamiq.
          </li>
          <li>
            I learned to use guerilla testing as a method for identifying
            usability issues.
          </li>
          <li>
            I also learned the importance of documentation especially when
            working in a team, to ensure all team members are always in
            alignment.
          </li>
        </ul>
        <div class="row justify-content-between mt-5 pt-4">
          <div class="col-md-5"></div>
          <div class="col-md-5">
            <nuxt-link to="/ontario-black-history-society" class="next">
              <div
                style="font-size: 16px; line-height: 1.5em; font-weight: 300; font-family: Oswald"
                class="mb-2 text-left text-md-right"
              >
                Next Project
              </div>
              <div style="font-weight: ; line-height: 1.5em" class="text-left text-md-right">
                Redesigning the website for a charity organization
              </div>
            </nuxt-link>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import Carousel from "~/components/carousel";
import Navbar from "~/components/case";
export default {
  head: {
    title: "Spacefinder - UX Case Study"
  },
  data() {
    return {
      sections: [],
      currentId: "",
      images: [
        {
          src:
            "https://res.cloudinary.com/drsp4xifi/image/upload/h_580/q_auto/v1583528253/ideas_wwwskv.png",
          alt: "ideas",
          caption: "Ideation phase of the spacefinder project"
        },
        {
          src:
            "https://res.cloudinary.com/drsp4xifi/image/upload/h_580/q_auto/v1583528513/20191023_124806_k3snpp.jpg",
          alt: "identifying needs",
          caption: "Identifying Selena's needs"
        }
      ]
    };
  },
  components: {
    Carousel,
    Navbar
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
            refElement.position().top <= scrollPos + 200 &&
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
    }
  },
  // created() {

  // },
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
#app-features {
  background-color: #2b2d33;
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

.white-bg {
  background: white;
}

aside {
  list-style: none;
  padding: 20px;
  top: 75px;
  left: 20px;
  z-index: 0;
  opacity: 1;
  transition: opacity 0.5s;
  /* background: white; */
  /* z-index: 0; */
}

aside li {
  list-style: none;
}

img {
  z-index: 2;
}

nav li .active {
  font-weight: 600;
  transition: all 0.1s ease;
}

aside a,
aside span {
  color: #4d5b84;
  font-weight: 300;
  font-size: 16px;
  font-family: "Oswald", sans-serif;
}

.user-persona .user,
.needs,
.desires {
  background: #f6f7f9;

  font-weight: 300;
  letter-spacing: 0.5px;
  font-size: 18px;
}

.about-persona {
  line-height: 1.5em;
  font-weight: 400;
  /* font-size: 16px; */
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
#user-analysis,
#prototyping,
#next-steps {
  padding-top: 116px;
  background: white;
}
#the-solution,
#user-analysis,
#prototyping,
#next-steps,
#lessons-learned,
#app-features {
  padding-bottom: 116px;
}

#user-research,
#requirements-analysis,
#evaluation-and-testing,
#lessons-learned {
  background: #f6f7f9;
  padding: 116px 0;
}

#lessons-learned {
  background: #2b2d33;
  color: white;
}

.findings {
  background: #2b2d33;
  color: white;
  border-radius: 4px;
  padding-top: 70px;
  padding-bottom: 70px;
  line-height: 1.2em;
}

/* .the-process:hover ul {
  display: block !important;
}
*/
.the-process,
.project-overview {
  cursor: default;
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

#main .down-arrow {
  animation: bounce 1s infinite alternate;
  -webkit-animation: bounce 1s infinite alternate;
}

.next {
  color: #66b1e8;
  text-decoration: none;
}
.next:hover {
  color: rgb(122, 199, 255);
  text-decoration: none;
}

aside.invisible {
  opacity: 0;
  transition: opacity 1s;
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
@media (min-width: 1200px) {
  #main {
    background-image: url("~assets/images/spacefinder-big.png");
    background-repeat: no-repeat;
    background-position: -25vw;
    background-size: 60%;
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
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}
</style>
