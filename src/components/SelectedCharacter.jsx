import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedCharacter } from "../features/selectedCharacterInfoSlice/selectedCharacterInfoSlice";
import { fetchEpisodes } from "../features/characterEpisodesInfoSlice/characterEpisodesInfoSlice";

const SelectedCharacter = () => {
  const selectedCharacterId = useSelector((state) => state.selectedId);
  const selectedCharacter = useSelector(
    (state) => state.selectedCharacterInfo.characterData
  );
  const characterEpisodes = useSelector(
    (state) => state.characterEpisodesInfo.episodesData
  );
  const dispath = useDispatch();

  useEffect(() => {
    if (selectedCharacterId) {
      dispath(fetchSelectedCharacter());
      dispath(fetchEpisodes());
    }
  }, [selectedCharacterId]);
  return (
    <div className="lg:w-1/4 mobile:w-2/3 flex mobile:mx-auto flex-col md:mt-10">
      <div>
        <img
          className="rounded-lg"
          src={selectedCharacter.image}
          alt="character image"
        />
      </div>
      <div className="w-full flex flex-col">
        <h3 className="font-extrabold text-2xl text-primary">
          {selectedCharacter.name}
        </h3>
        <p className="full text-xl border-b-2 border-primary">
          {selectedCharacter.species} - {selectedCharacter.gender}
        </p>
        <div className="w-full flex items-center my-2">
          <span
            className={`w-2 h-2 ${
              selectedCharacter.status === "Alive"
                ? "bg-green-700"
                : selectedCharacter.status === "unknown"
                ? "bg-slate-500"
                : "bg-red-700"
            }  rounded-full mr-2 block`}
          ></span>
          <p>{selectedCharacter.status}</p>
        </div>
        <h4 className="full font-bold text-xl text-primary  border-t-2 border-primary">
          List of Episodes
        </h4>
        <div className="w-full h-28 overflow-y-auto scrollbar flex flex-col mt-2">
          {characterEpisodes?.map((ep) => (
            <div
              key={ep.id}
              className="w-11/12 h-auto bg-primary flex flex-col items-start justify-center px-2 rounded-lg mt-3"
            >
              <h5 className="text-white">
                {ep.name} - {ep.episode}
              </h5>
              <p className="text-white">{ep.air_date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedCharacter;
