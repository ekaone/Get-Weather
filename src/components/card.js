import React from "react";
import flagId from "../images/flag-my.svg";

export default function card(props) {
  const {
    name,
    weatherMain,
    weatherDescription,
    flag,
    pressure,
    humidity
  } = props;

  return (
    <>
      <div className="md:flex bg-gray-300 rounded-lg p-6">
        <img
          className="h-16 w-16 md:h-32 md:w-32 mx-auto md:mx-0 md:mr-6"
          src={flag}
        />
        <div className="text-center md:text-left">
          <h2 className="text-lg">{name}</h2>
          <div className="text-purple-500">
            {weatherMain}, {weatherDescription}
          </div>
          <div className="text-gray-600">Pressure {pressure}</div>
          <div className="text-gray-600">Humidity {humidity}</div>
        </div>
      </div>
    </>
  );
}
