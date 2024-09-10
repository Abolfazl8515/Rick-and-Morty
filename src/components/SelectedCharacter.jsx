import { useEffect, useState } from "react";
import axios from "axios";

const SelectedCharacter = ({ selectedCharacterId }) => {
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [characterEpisodes, setCharacterEpisodes] = useState([]);

  const fetchSelectedCharacter = async () => {
    const characterRequest = await axios.get(
      `https://rickandmortyapi.com/api/character/${selectedCharacterId}`
    );
    const res = await characterRequest.data;
    const episodesIds = res.episode?.map((episode) =>
      episode.split("/").at(-1)
    );
    const episodeRequest = await axios.get(
      `https://rickandmortyapi.com/api/episode/${episodesIds}`
    );
    const episodeRes = await episodeRequest.data;
    console.log(characterEpisodes);

    setSelectedCharacter(res);
    setCharacterEpisodes(Array.isArray(episodeRes) ? episodeRes : [episodeRes]);
  };

  useEffect(() => {
    if (selectedCharacterId) fetchSelectedCharacter();
  }, [selectedCharacterId]);
  return (
    <div className="w-1/3 flex flex-col">
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
        <p className="w-1/2 text-xl border-b-2 border-primary">
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
        <h4 className="w-1/2 font-bold text-xl text-primary  border-t-2 border-primary">
          List of Episodes
        </h4>
        <div className="w-1/2 h-28 overflow-y-auto scrollbar flex flex-col mt-2">
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
