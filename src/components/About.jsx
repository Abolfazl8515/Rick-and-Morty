import aboutImage from "../assets/aboutImage.jpg";

const About = () => {
  return (
    <section className="w-11/12 h-auto mx-auto p-5 rounded-xl shadow-lg shadow-orange-900 bg-orange-700 relative top-24">
      <div className="w-full flex mobile:flex-col-reverse mobile:items-center lg:flex-row lg:justify-around">
        <div className="lg:w-1/2 mobile:w-full">
          <h2 className="text-white font-extrabold text-2xl mobile:my-4 lg:my-0">
            What is Rick and Morty?
          </h2>
          <p>
            Rick and Morty is an adult animated science fiction sitcom that
            follows the misadventures of Rick Sanchez, a cynical, alcoholic
            genius scientist, and his naive, but good-hearted grandson, Morty
            Smith. Together, they travel across the multiverse in Rick's flying
            car, encountering bizarre alien species, dangerous interdimensional
            threats, and the occasional existential crisis. Known for its dark
            humor, philosophical themes, and mind-bending plot twists, Rick and
            Morty has become a cult classic, praised for its sharp writing,
            clever animation, and unforgettable characters.
          </p>
        </div>
        <div>
          <img
            className="rounded-2xl"
            src={aboutImage}
            alt="about page image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
