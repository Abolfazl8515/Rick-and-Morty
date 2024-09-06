import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="w-full h-screen bg-[url('assets/image-asset.jpeg')] fixed top-0 left-0 blur-md bg-center bg-cover bg-no-repeat"></div>
      <div className="w-full h-16 fixed backdrop-blur-2xl top-0 bg-white opacity-5 z-10"></div>
      <header className="w-full h-16 fixed backdrop-blur-2xl top-0 z-10">
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
      <main>
        <Outlet />
      </main>
      <footer className="relative">this is footer section</footer>
    </>
  );
};

export default Layout;
