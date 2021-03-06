import Teambg from "../assets/img/Teamlanding.svg";
import Team1 from "../assets/img/team1.jpg";
import "../assets/css/Team.css";
import { Link } from "react-router-dom";

const TeamLanding = () => {
  return (
    <>
      <div className="bg-white">
        <div data-aos="fade-down" className="text-center pb-10">
          <div
            data-aos="fade-up"
            className="text-yellow-500 font-bold text-xl md:text-2xl"
          >
            Our Team
          </div>
          <div className="font-bold text-2xl md:text-4xl">Meet Our Team</div>
        </div>
        <div className="bg-indigo-900 bg-teams">
          <section class="text-yellow-400 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <div data-aos="fade-down" className="flex justify-center">
                  <div>
                    <img
                      className="mb-10 rounded-full bg-yellow-500 h-40 w-40 "
                      src={Team1}
                      alt=""
                    />
                  </div>
                </div>
                <div data-aos="fade-up">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block w-8 h-8 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed text-lg md:text-2xl">
                    Kualitas menjadi fokus utama TBS. Kami siap untuk terus
                    berinovasi dan berkolaborasi memberikan alat panen terbaik
                    bagi konsumen
                  </p>
                  <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
                  <h2 class="font-bold title-font tracking-wider text-xl">
                    Imanuel Belly
                  </h2>
                </div>
                {/* <p class="">Senior Product Designer</p> */}
              </div>
              <div className="flex justify-center text-center pt-20">
                <Link to="/team">
                  <div
                    data-aos="fade-down"
                    className="text-lg md:text-3xl py-3 w-40 md:w-64 bg-yellow-400 text-black"
                  >
                    See More
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TeamLanding;
