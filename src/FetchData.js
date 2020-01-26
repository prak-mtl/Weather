import React, { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import ToggleTempScale from "./ToggleTempScale";
import DailyBar from "./DailyBar";
import WeeklyTable from "./WeeklyTable";
import Graphs from "./Graphs";
import ToggleLang from "./ToggleLang";
import FetchIcons from "./FetchIcons";
import Clouds from "./Clouds";
import cityDat from "./data.json";
import { DisplayFlex, CurrentDiv, PrimaryButton } from "./styles";


export default function FetchData(props) {
  const [scale, setScale] = useState("°F");
  const [lang, setLang] = useState("en");
  const [isLoading, setLoading] = useState(true);
  const [cityData, setCityData] = useState(); //when api calls use cityDat and comment the imported json
  const [selectedCity, setSelectedCity] = useState("dubai");
  const [searchedCity, setSearchedCity] = useState("dubai");
  const [latitude, setLatitude] = useState(25.2048);
  const [longitude, setLongitude] = useState(55.2708);

  const url = `//maps.darksky.net/@temperature,${latitude},${longitude},7?marker=${latitude},${longitude}&amp;linkto=maps`;

  useEffect(() => {
    fetch(
      `https://api.darksky.net/forecast/7151753a1d1bd8cea23a38bd3b3e10ca/${latitude},${longitude}?lang=${lang}`
    )
      .then(res => res.json())
      .then(
        result => {
          setCityData(result);
          setLoading(false);
        },
        error => {
          setLoading(true);
          console.log(error);
        }
      );
  }, [latitude, longitude, lang, isLoading]);

  function selectCity(city) {
    setSelectedCity(city);
    getCoordinates(city);
  }

  function getCoordinates(city) {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoibWFrc2hlZXJhbiIsImEiOiJjanhqam42Y3cwMmNpM3hxZTBveG13MHVuIn0.sQ9RIZIO_FiWdFiAaEPBZg&limit=1`
    )
      .then(res => res.json())
      .then(result => {
        setSearchedCity(result.query[0]);
        setLatitude(result.features[0].center[0]);
        setLongitude(result.features[0].center[1]);
      });
  }

  const toggleScale = () => {
    if (scale === "°C") {
      setScale("°F");
    } else {
      setScale("°C");
    }
  };

  const toggleLang = value => {
    if (value !== "en") {
      setLang("de");
    } else {
      setLang("en");
    }
  };

  function convertTemp(value) {
    // Set the value for Celsius
    return (((value - 32) * 5) / 9).toFixed(2);
  }

  if (!isLoading) {
    return <p>Loading....</p>;
  } else
    return (
      <div>
        {/* Searchy city */}
        <DisplayFlex className="w-75 mx-auto">
          <div className="w-100 mt-2 mb-4 d-flex">
            <p className="mt-2">City</p>
            <input
              type="text"
              name="city"
              id="autocomplete"
              value={selectedCity}
              className="w-75 p-1 mx-3"
              onChange={event => setSelectedCity(event.target.value)}
            />
            <PrimaryButton
              width={7}
              onClick={() => getCoordinates(selectedCity)}
            >
              Search
            </PrimaryButton>
          </div>

          <ToggleTheme theme={props.theme} toggleTheme={props.toggleTheme} />
          <ToggleTempScale scale={scale} toggleScale={toggleScale} />
          <ToggleLang lang={lang} setLang={toggleLang} />
        </DisplayFlex>

        {/* Quick Buttons */}
        <div className="w-75 mx-auto d-flex justify-content-between my-4">
          <PrimaryButton
            onClick={() => selectCity("dubai")}
            color={selectedCity === "dubai" ? "primary" : "secondary"}
          >
            Dubai
          </PrimaryButton>
          <PrimaryButton
            onClick={() => selectCity("vienna")}
            color={selectedCity === "vienna" ? "primary" : "secondary"}
          >
            Vienna
          </PrimaryButton>
          <PrimaryButton
            width={8}
            onClick={() => selectCity("new york")}
            color={selectedCity === "new york" ? "primary" : "secondary"}
          >
            New York
          </PrimaryButton>
          <PrimaryButton
            onClick={() => selectCity("london")}
            color={selectedCity === "london" ? "primary" : "secondary"}
          >
            London
          </PrimaryButton>
          <PrimaryButton
            onClick={() => selectCity("mumbai")}
            color={selectedCity === "mumbai" ? "primary" : "secondary"}
          >
            Mumbai
          </PrimaryButton>
          <PrimaryButton
            onClick={() => selectCity("paris")}
            color={selectedCity === "paris" ? "primary" : "secondary"}
          >
            Paris
          </PrimaryButton>
          <PrimaryButton
            onClick={() => selectCity("delhi")}
            color={selectedCity === "delhi" ? "primary" : "secondary"}
          >
            Delhi
          </PrimaryButton>
        </div>

        {/* Current weather */}
        <div className="d-flex justify-content-center backgroundColor-primary text-white py-2">
          <div className="d-flex mx-3">
            <h6>Wind:</h6>
            <p>
              {cityDat.currently.windSpeed}mph{" "}
              <img
                src={require("./icons/animated/weather_sagittarius.svg")}
                alt="wind icon"
              />
            </p>
          </div>
          <div className="d-flex mx-3">
            <h6>Humidity:</h6>
            <p>{cityDat.currently.humidity}%</p>
          </div>
          <div className="d-flex mx-3">
            <h6>Dew Pt:</h6>
            <p>{cityDat.currently.dewPoint}°</p>
          </div>
          <div className="d-flex mx-3">
            <h6>UV Index:</h6>
            <p>{cityDat.currently.uvIndex}</p>
          </div>
          <div className="d-flex mx-3">
            <h6>Visibility:</h6>
            <p>{cityDat.currently.visibility}+ mi</p>
          </div>
          <div className="d-flex mx-3">
            <h6>Pressure:</h6>
            <p>{cityDat.currently.pressure} mb</p>
          </div>
        </div>

        <CurrentDiv theme={props.theme}>
          <h2>
            {FetchIcons(cityDat.currently.icon)}
            {scale === "°F"
              ? cityDat.currently.temperature
              : convertTemp(cityDat.currently.temperature)}
            {scale} {cityDat.currently.summary}
          </h2>
          <div className="d-inline-flex">
            <h6 className="mx-2">
              Feels Liks:{" "}
              {scale === "°F"
                ? cityDat.currently.temperature
                : convertTemp(cityDat.currently.apparentTemperature)}
              {scale}
            </h6>
            <h6 className="mx-2">
              Cloud cover: {cityDat.currently.cloudCover}
            </h6>
            <h6 className="mx-2">Timezone: {cityDat.timezone}</h6>
          </div>
          <h3>{cityDat.hourly.summary}</h3>
          <h4 style={{ textTransform: "capitalize" }}>{searchedCity}</h4>

          <Clouds />
        </CurrentDiv>

        {/* Today's bar */}
        <div className="w-75 mx-auto">
          <DailyBar
            hourlyData={cityDat.hourly}
            convertTemp={convertTemp}
            scale={scale}
          />
        </div>

        {/* Weekly table */}
        <div
          className={
            props.theme === "light" ? "bg-white" : "backgroundColor-primary"
          }
        >
          <WeeklyTable
            weeklyData={cityDat.hourly}
            theme={props.theme}
            convertTemp={convertTemp}
            scale={scale}
          />
        </div>

        <div>
          <Graphs
            graphData={cityDat.hourly}
            convertTemp={convertTemp}
            scale={scale}
          />
        </div>

        <iframe
          title="world-map"
          id="embedded-map"
          height="700px"
          width="100%"
          // bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":0}'
          // bis_id="fr_7xba10p7l84ph6xhjksmve"
          // bis_depth="0"
          // bis_chainid="1"
          src={url}
        ></iframe>
      </div>
    );
}
