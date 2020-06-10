import React, { useState, useEffect } from "react";

import flagDefault from "../images/flag-id.svg";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ButtonCity from "../components/button";
import Card from "../components/card";
import { Cities } from "../components/cities";

function Weather() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleGetCity = cityName => {
    // const API_KEY = "a2ee8a5d1126c3c56900dd030534e9e0";
    const API_KEY = process.env.WEATHER_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => error);
  };

  const ShowCity = () => {
    if (data.length !== 0) {
      return (
        <Card
          name={data.name}
          weatherMain={data.weather[0].main}
          weatherDescription={data.weather[0].description}
          pressure={data.main.pressure}
          humidity={data.main.humidity}
          flag={
            data.length === 0
              ? flagDefault
              : Cities.find(f => (f.name === data.name ? f.flag : null)).flag
          }
        />
      );
    } else {
      return "Select City";
    }
  };

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Weather"
      />
      <div className="flex flex-col">
        <div>
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-red-900 text-pink-700">
            <ButtonCity
              handlerGetCity={() => handleGetCity("Jakarta")}
              city="Jakarta"
            />
            <ButtonCity
              handlerGetCity={() => handleGetCity("London")}
              city="London"
            />
            <ButtonCity
              handlerGetCity={() => handleGetCity("Malaysia")}
              city="Malaysia"
            />
          </blockquote>
        </div>
        <div className="text-gray-700 text-center px-4 py-2 m-2">
          <ShowCity />
          <br />
          <pre>
            {JSON.stringify(
              data.length === 0
                ? "Click city name"
                : data.weather[0].description,
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </Layout>
  );
}

export default Weather;
