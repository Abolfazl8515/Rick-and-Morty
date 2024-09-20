import { useDispatch, useSelector } from "react-redux";
import {
  filterCharacterGender,
  filterCharacterStatus,
} from "../features/filterCharactersSlice/filterCharactersSlice";
import { searchCharacter } from "../features/searchCharacterSlice/searchCharacterSlice";

const FilterCharacters = () => {
  const search = useSelector((state) => state.searchCharacter);
  const filter = useSelector((state) => state.searchCharacter);
  const dispath = useDispatch();
  const handleChange = (e, filterName) => {
    if (e.target.value === "default") {
      if (filterName === "status") {
        dispath(filterCharacterStatus({ value: "" }));
      } else {
        dispath(filterCharacterGender({ value: "" }));
      }
    } else {
      if (filterName === "status") {
        dispath(filterCharacterStatus({ value: e.target.value }));
      } else {
        dispath(filterCharacterGender({ value: e.target.value }));
      }
    }
  };

  return (
    <div className="w-full lg:min-w-96 h-full flex flex-col items-center bg-primary rounded-lg">
      <div className="w-full h-1/3 flex items-center">
        <input
          type="text"
          className="w-11/12 mx-auto bg-transparent border-b border-b-white outline-none focus:outline-none text-white mobile:text-lg lg:text-lg"
          placeholder="Search characters..."
          value={search}
          onChange={(e) => dispath(searchCharacter(e.target.value))}
        />
      </div>
      <div className="w-full flex flex-col">
        <select
          onChange={(e) => handleChange(e, "status")}
          value={filter.status}
          className="w-11/12 mx-auto h-14 mt-2 bg-transparent rounded-xl border border-white text-white lg:text-base mobile:text-lg text-center"
        >
          <option value="default" className="bg-primary text-white">
            Filter base on status
          </option>
          <option value="alive" className="bg-primary text-white">
            Alive
          </option>
          <option value="dead" className="bg-primary text-white">
            Dead
          </option>
          <option value="unknown" className="bg-primary text-white">
            unknown
          </option>
        </select>
        <select
          value={filter.gender}
          onChange={(e) => handleChange(e, "gender")}
          className="w-11/12 mx-auto h-14 mt-2 bg-transparent rounded-xl border border-white text-white lg:text-base mobile:text-lg text-center"
        >
          <option value="default" className="bg-primary text-white">
            Filter base on gender
          </option>
          <option value="male" className="bg-primary text-white">
            Male
          </option>
          <option value="female" className="bg-primary text-white">
            Female
          </option>
          <option value="genderless " className="bg-primary text-white">
            Genderless
          </option>
          <option value="unknown " className="bg-primary text-white">
            unknown
          </option>
        </select>
      </div>
    </div>
  );
};

export default FilterCharacters;
