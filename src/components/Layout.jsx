import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const navbarTexts = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "About", url: "about" },
    { id: 3, text: "Characters", url: "characters" },
  ];
  const activeClass = ({ isActive }) =>
    isActive
      ? "w-full h-full flex items-center justify-center text-white"
      : "w-full h-full flex items-center justify-center";

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="w-full h-screen bg-[url('assets/image-asset.jpeg')] fixed top-0 left-0 blur-md bg-center bg-cover bg-no-repeat"></div>
      <div className="w-full h-16 fixed backdrop-blur-2xl top-0 bg-white opacity-5 z-10"></div>
      <header className="w-full h-16 fixed backdrop-blur-2xl top-0 z-10">
        <nav className="w-full h-full">
          <ul className="w-full h-full flex items-center justify-center">
            {navbarTexts.map((item) => (
              <li
                key={item.id}
                className="w-64 md:w-40 h-12 max-[640px]:w-44 max-[640px]:mx-2 max-[640px]:text-lg flex items-center justify-center mx-4 rounded-3xl text-2xl transition-all duration-200 cursor-pointer bg-orange-400 hover:text-white"
              >
                <NavLink to={item.url} className={activeClass}>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="mb-16">
        <Outlet />
      </main>
      <footer className="relative mt-auto">this is footer section</footer>
    </div>
  );
};

export default Layout;
