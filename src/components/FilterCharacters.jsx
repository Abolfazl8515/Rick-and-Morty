const FilterCharacters = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div className="w-full h-full flex flex-col items-center bg-primary rounded-lg">
      <div className="w-full h-1/3 flex items-center">
        <input
          type="text"
          className="w-11/12 mx-auto bg-transparent border-b border-b-white outline-none focus:outline-none text-white mobile:text-lg lg:text-lg"
          placeholder="Search characters..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full flex flex-col">
        <select
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, status: e.target.value }))
          }
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
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, gender: e.target.value }))
          }
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
