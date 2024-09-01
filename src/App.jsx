import "./App.css";
import headerImage from "./assets/rick_morty_PNG20.png";

const App = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[url('assets/image-asset.jpeg')] fixed top-0 left-0 blur-md bg-center bg-cover bg-no-repeat"></div>
      <div className="w-full h-screen relative">
        <header className="w-full h-20">
          <nav className="w-full h-full">
            <ul className="w-full h-full flex items-center justify-center">
              <li className="w-64 md:w-40 h-12 max-[640px]:w-44 max-[640px]:mx-2 max-[640px]:text-lg flex items-center justify-center mx-4 rounded-3xl text-2xl transition-all duration-200 cursor-pointer bg-orange-400 hover:text-white">
                Home
              </li>
              <li className="w-64 md:w-40 h-12 max-[640px]:w-44 max-[640px]:mx-2 max-[640px]:text-lg flex items-center justify-center mx-4 rounded-3xl text-2xl transition-all duration-200 cursor-pointer bg-orange-400 hover:text-white">
                About
              </li>
              <li className="w-64 md:w-40 h-12 max-[640px]:w-44 max-[640px]:mx-2 max-[640px]:text-lg flex items-center justify-center mx-4 rounded-3xl text-2xl transition-all duration-200 cursor-pointer bg-orange-400 hover:text-white">
                Characters
              </li>
            </ul>
          </nav>
        </header>
        <div className="w-3/5 h-2/3 flex mobile:flex-col-reverse sm:flex-row items-center justify-center mx-auto">
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
    </div>
  );
};

export default App;
