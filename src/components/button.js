import React from "react";

export default function ButtonCity(props) {
  return (
    <>
      <button
        onClick={props.handlerGetCity}
        className="font-mono bg-blue-500 hover:bg-blue-400 text-white font-bold mx-1 py-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        {props.city}
      </button>
    </>
  );
}
