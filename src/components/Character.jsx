const Character = ({ c }) => {
  return (
    <div
      key={c.id}
      className="w-64 h-24 flex justify-between items-center bg-orange-700 cursor-pointer rounded-xl m-2"
    >
      <div className="w-1/3 h-full">
        <img
          src={c.image}
          className="w-full h-full rounded-l-xl rounded-bl-lg"
          alt="character image"
        />
      </div>
      <div className="w-2/3 h-full ml-2 flex flex-col">
        <div className="w-full h-auto">
          <h3 className="text-lg text-white overflow-hidden whitespace-nowrap text-ellipsis">
            {c.name}
          </h3>
        </div>
        <div className="w-full my-2">
          <p className="overflow-hidden whitespace-nowrap text-ellipsis">
            {c.species} - {c.gender}
          </p>
        </div>
        <div className="w-full flex items-center">
          <span
            className={`w-2 h-2 ${
              c.status === "Alive"
                ? "bg-green-700"
                : c.status === "unknown"
                ? "bg-slate-500"
                : "bg-red-700"
            }  rounded-full mr-2 block`}
          ></span>
          <p className="overflow-hidden whitespace-nowrap text-ellipsis">
            {c.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Character;
