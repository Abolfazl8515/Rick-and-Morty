import { useSelector } from "react-redux";

const Character = ({ character, hanleCharacterClick }) => {
  const selectedId = useSelector((state) => state.selectedId);
  return (
    <div
      className="mobile:w-4/5 md:w-64 h-24 relative group flex justify-between items-center bg-orange-700 cursor-pointer rounded-xl m-2"
      onClick={hanleCharacterClick}
    >
      <div
        className={`w-full h-full absolute top-0 left-0 bg-gray-500 opacity-75 transition-all ${
          selectedId === character.id ? "flex" : "group-hover:flex hidden"
        } justify-center items-center rounded-lg z-20`}
      >
        {selectedId === character.id ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-9 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-9 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        )}
      </div>
      <div className="w-1/3 h-full">
        <img
          src={character.image}
          className="w-full h-full rounded-l-xl rounded-bl-lg"
          alt="character image"
        />
      </div>
      <div className="w-2/3 h-full ml-2 flex flex-col">
        <div className="w-full h-auto">
          <h3 className="text-lg text-white overflow-hidden whitespace-nowrap text-ellipsis">
            {character.name}
          </h3>
        </div>
        <div className="w-full my-2">
          <p className="overflow-hidden whitespace-nowrap text-ellipsis">
            {character.species} - {character.gender}
          </p>
        </div>
        <div className="w-full flex items-center">
          <span
            className={`w-2 h-2 ${
              character.status === "Alive"
                ? "bg-green-700"
                : character.status === "unknown"
                ? "bg-slate-500"
                : "bg-red-700"
            }  rounded-full mr-2 block`}
          ></span>
          <p className="overflow-hidden whitespace-nowrap text-ellipsis">
            {character.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Character;
