import "./App.css";

const App = () => {
  return (
    <div>
      <div className="w-full h-screen bg-[url('assets/rickandmorty.jpg')] bg-center bg-cover bg-no-repeat">
        <header className="w-full h-20">
          <nav className="w-full h-full">
            <ul className="w-full h-full flex items-center justify-center">
              <li className="w-64 md:w-40 h-12 shadow flex items-center justify-center mx-4 rounded-3xl text-2xl transition-all duration-200 cursor-pointer bg-orange-400 hover:text-white">
                Home
              </li>
              <li className="w-64 md:w-40 h-12 shadow flex items-center justify-center mx-4 rounded-3xl text-2xl transition-all duration-200 cursor-pointer bg-orange-400 hover:text-white">
                About
              </li>
              <li className="w-64 md:w-40 h-12 shadow flex items-center justify-center mx-4 rounded-3xl text-2xl transition-all duration-200 cursor-pointer bg-orange-400 hover:text-white">
                Characters
              </li>
            </ul>
          </nav>
        </header>
        <div className="w-1/2 md:w-1/3 h-96 mx-auto flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl text-gray-700 font-extrabold">
            Rick and Morty animation
          </h1>
          <button className="w-54 md:w-48 h-12 md:h-16 mt-4 text-center text-white text-2xl font-bold hover:bg-orange-600 transition-all duration-300 bg-orange-700 rounded-3xl">
            let`s go!
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
