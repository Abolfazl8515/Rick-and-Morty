import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import Character from "./Character";
import SelectedCharacter from "./SelectedCharacter";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowSingleCharacter, setIsShowSingleCharacter] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const fetchCharacters = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => setCharacters(res.data));
  };

  useEffect(() => fetchCharacters(), [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCharacterClick = (id) => {
    setIsShowSingleCharacter(true);
    setSelectedId(id);
  };

  return (
    <div className="w-full h-auto relative top-20 flex flex-col items-center">
      <div></div>
      <div className="w-11/12 mx-auto h-auto flex justify-between">
        <div
          className={`${
            isShowSingleCharacter
              ? "w-2/3 h-[530px] flex flex-wrap justify-start overflow-y-auto scrollbar-hide"
              : "w-full h-auto flex flex-wrap justify-center"
          }`}
        >
          {characters.results?.map((c) => (
            <Character
              key={c.id}
              character={c}
              hanleCharacterClick={() => handleCharacterClick(c.id)}
            />
          ))}
        </div>
        {isShowSingleCharacter && (
          <SelectedCharacter selectedCharacterId={selectedId} />
        )}
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
