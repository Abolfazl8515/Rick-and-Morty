import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="characters" element={<CharactersPage />} />
      </Route>
    </Routes>
  );
};

export default App;
