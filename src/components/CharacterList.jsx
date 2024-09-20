import { useEffect } from "react";
import Pagination from "./Pagination";
import Character from "./Character";
import SelectedCharacter from "./SelectedCharacter";
import FilterCharacters from "./FilterCharacters";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../features/charactersSlice/charactersSlice";
import { isShow } from "../features/isShowSingleCharacterSlice/isShowSingleCharacterSlice";
import { select } from "../features/selectedIdSlice/selectedIdSlice";
import Loading from "./Loading";

const CharacterList = () => {
  const characters = useSelector((state) => state.characters);
  const currentPage = useSelector((state) => state.currentPage);
  const isShowSingleCharacter = useSelector(
    (state) => state.isShowSingleCharacter
  );
  const searchCharacter = useSelector((state) => state.searchCharacter);
  const filterCharacters = useSelector((state) => state.filterCharacters);
  const selectedId = useSelector((state) => state.selectedId);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchCharacters());
  }, [currentPage, searchCharacter, filterCharacters]);

  const handleCharacterClick = (id) => {
    if (selectedId === id) {
      dispath(isShow(false));
      dispath(select(null));
    } else {
      dispath(isShow(true));
      dispath(select(id));
    }
  };

  return (
    <div className="w-full h-auto mt-16 flex flex-col items-center">
      <div className="lg:w-11/12 mobile:w-full mx-auto h-auto flex mobile:flex-col-reverse lg:flex-row lg:justify-between flex-wrap">
        <div
          className={
            isShowSingleCharacter
              ? "lg:w-3/4 flex lg:justify-around mobile:mt-10 mobile:flex-col md:flex-row md:items-start mobile:items-center"
              : "lg:w-full flex lg:justify-around mobile:mt-10 mobile:flex-col md:flex-row md:items-start mobile:items-center"
          }
        >
          <div className="lg:w-2/6 mobile:w-11/12 mx-auto h-56 flex mt-2 ">
            <FilterCharacters />
          </div>
          <div className="lg:w-2/3 mobile:w-4/5 lg:min-w-[530px] h-[530px] flex flex-wrap justify-center overflow-y-auto scrollbar-hide">
            {characters.loading ? (
              <Loading />
            ) : (
              characters.charactersData?.results?.map((c) => (
                <Character
                  key={c.id}
                  character={c}
                  hanleCharacterClick={() => handleCharacterClick(c.id)}
                />
              ))
            )}
          </div>
        </div>
        {isShowSingleCharacter && <SelectedCharacter />}
      </div>
      <Pagination />
      <ToastContainer />
    </div>
  );
};

export default CharacterList;
