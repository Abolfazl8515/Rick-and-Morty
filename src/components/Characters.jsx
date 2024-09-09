import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import Character from "./Character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => setCharacters(res.data));
  };

  useEffect(() => fetchCharacters(), [currentPage]);
  console.log(characters.results);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full h-auto relative top-20 flex flex-col items-center">
      <div></div>
      <div className="w-11/12 h-auto flex flex-wrap justify-center">
        {characters.results?.map((c) => (
          <Character c={c} />
        ))}
      </div>
      <Pagination
        totalItems={characters.info?.count}
        itemsPerPage={20}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Characters;
