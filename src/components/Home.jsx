import headerImage from "../assets/rick_morty_PNG20.png";
import rickImage from "../assets/rick.jpg";
import mortyImage from "../assets/morty.png";
import rickAnimation from "../lotties/rickAnimation.json";
import Lottie from "lottie-react";

const Home = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[url('assets/image-asset.jpeg')] fixed top-0 left-0 blur-md bg-center bg-cover bg-no-repeat"></div>
      <div className="w-full h-screen relative">
        <div className="xl:w-3/5 lg:w-4/5 w-5/6 h-screen flex mt-24 mobile:flex-col-reverse sm:flex-row items-center justify-center mx-auto">
          <div className="mobile:w-full md:w-1/2 flex items-start justify-center flex-col">
            <h1 className="text-5xl md:text-7xl text-gray-700 font-extrabold">
              Rick and Morty animation
            </h1>
            <button className="w-52 md:w-48 h-14 md:h-16 mt-4 text-center text-white text-2xl font-bold hover:bg-orange-600 transition-all duration-300 bg-orange-700 rounded-3xl">
              let`s go!
            </button>
          </div>
          <div className="w-60 flex items-center justify-center">
            <img
              src={headerImage}
              width={700}
              height={700}
              alt="header image"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex items-center justify-start flex-col relative top-24">
        <section className="w-11/12 h-auto p-5 rounded-xl shadow-lg shadow-orange-900 bg-orange-700">
          <div className="w-full flex mobile:flex-col-reverse mobile:items-center sm:flex-row sm:justify-around">
            <div className="sm:w-1/2 mobile:w-full">
              <h2 className="text-white font-extrabold text-2xl mobile:my-4 sm:my-0">
                Who is Rick Sunchez?
              </h2>
              <p>
                Mortimer "Morty" Smith Sr. of the Prime Universe/Cronenberged
                Dimension is the titular central protagonist of Rick and Morty.
                He is the adoptive grandson of Rick and is often forced to tag
                along on his various misadventures. Morty attends Harry Herpson
                High School along with his sister, Summer. At the beginning of
                the series, Morty was shown to be an incredibly anxious and
                submissive teenage boy. However, after going on many so-called
                adventures with Rick, Morty has seemingly become more confident
                and his own person, independent from Rick, rather than a mere
                sidekick.
              </p>
            </div>
            <div>
              <img
                className="rounded-2xl"
                src={rickImage}
                width={300}
                height={300}
                alt="Rick sanchez image"
              />
            </div>
          </div>
        </section>
        <section className="w-11/12 h-auto p-5 rounded-xl shadow-lg shadow-orange-900 bg-orange-700 mt-5">
          <div className="w-full flex mobile:flex-col-reverse mobile:items-center sm:flex-row sm:justify-around">
            <div className="sm:w-1/2 mobile:w-full">
              <h2 className="text-white font-extrabold text-2xl mobile:my-4 sm:my-0">
                Who is Morty Smith ?
              </h2>
              <p>
                Rick Sanchez of Dimension C-137, commonly referred to as Rick
                C-137, is the titular main protagonist of Rick and Morty. He is
                a megagenius scientist whose alcoholism and reckless, nihilistic
                behavior are sources of concern for his "daughter's" family, as
                well as the safety of their son, Morty. Upon the series'
                inception, Rick's mysterious origins and mental health were
                large sources of speculation. As time has gone on, more has been
                revealed about his character; his backstory explaining much of
                his behaviour. At the same time, Rick has continuously committed
                more heinous acts, certifying him as the series' anti-hero,
                bordering on antagonist.
              </p>
            </div>
            <div>
              <img
                className="rounded-2xl"
                src={mortyImage}
                width={300}
                height={300}
                alt="Rick sanchez image"
              />
            </div>
          </div>
        </section>

        <section className="xl:w-4/5 w-5/6 h-auto flex mt-24 mobile:flex-col-reverse sm:flex-row items-center justify-center mx-auto">
          <div className="xl:w-1/2 mobile:w-full flex justify-center items-start flex-col">
            <h3 className="mobile:text-4xl lg:text-7xl text-gray-700 font-extrabold">
              Explore all Characters just by clicking the below button
            </h3>
            <button className="w-52 md:w-48 h-14 md:h-16 mt-4 text-center text-white text-2xl font-bold hover:bg-orange-600 transition-all duration-300 bg-orange-700 rounded-3xl">
              Explore
            </button>
          </div>
          <div>
            <Lottie animationData={rickAnimation} loop={true} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
