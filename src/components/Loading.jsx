import Lottie from "lottie-react";
import loadingAnimation from "../lotties/loadingAnimation.json";

const Loading = () => {
  return (
    <div className="w-64 h-28 flex flex-col items-center">
      <Lottie animationData={loadingAnimation} loop={true} />
      <button
        type="button"
        className="w-4/5 h-11 bg-primary flex justify-around items-center p-4 rounded-lg"
        disabled
      >
        <svg
          version="1.1"
          id="L9"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 0 0"
          xmlSpace="preserve"
          className="w-16 h-16"
        >
          <path
            fill="#fff"
            d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <p className="text-lg text-white">Loading...</p>
      </button>
    </div>
  );
};

export default Loading;
