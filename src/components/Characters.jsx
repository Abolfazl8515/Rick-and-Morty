import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import Character from "./Character";
import SelectedCharacter from "./SelectedCharacter";
import FilterCharacters from "./FilterCharacters";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isShowSingleCharacter, setIsShowSingleCharacter] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [filterCharacters, setFilterCharacters] = useState({
    status: "",
    gender: "",
  });

  const fetchCharacters = () => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchCharacter}&status=${
          filterCharacters.status && filterCharacters.status
        }&gender=${filterCharacters.gender && filterCharacters.gender}`
      )
      .then((res) => setCharacters(res.data))
      .catch((err) => {
        console.log(err.response.data.error);
        toast.error(err.response.data.error, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  useEffect(
    () => fetchCharacters(),
    [currentPage, searchCharacter, filterCharacters]
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCharacterClick = (id) => {
    setIsShowSingleCharacter(true);
    setSelectedId(id);
  };

  return (
    <div className="w-full h-auto relative top-20 flex flex-col items-center">
      <div className="lg:w-11/12 mobile:w-full mx-auto h-auto flex mobile:flex-col-reverse lg:flex-row lg:justify-between flex-wrap">
        <div
          className={
            isShowSingleCharacter
              ? "lg:w-3/4 flex lg:justify-around mobile:mt-10 mobile:flex-col md:flex-row md:items-start mobile:items-center"
              : "lg:w-full flex lg:justify-around mobile:mt-10 mobile:flex-col md:flex-row md:items-start mobile:items-center"
          }
        >
          <div className="lg:w-1/4 mobile:w-11/12 mx-auto h-56 flex mt-2 ml-4 ">
            <FilterCharacters
              search={searchCharacter}
              setSearch={setSearchCharacter}
              filter={filterCharacters}
              setFilter={setFilterCharacters}
            />
          </div>
          <div
            className={`${
              isShowSingleCharacter
                ? "lg:w-2/3 mobile:w-4/5 h-[530px] flex flex-wrap justify-center overflow-y-auto scrollbar-hide"
                : "lg:w-2/3 mobile:w-4/5 h-[530px] flex flex-wrap justify-center overflow-y-auto scrollbar-hide"
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
      <ToastContainer />
    </div>
  );
};

export default Characters;
