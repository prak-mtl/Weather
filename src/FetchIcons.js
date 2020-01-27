import React from "react";

export default function FetchIcons(icon) {
  return (
    <img src={iconMap(icon)} alt="icon" width={icon === "fog" ? "32" : "64"} />
  );
}

function iconMap(name) {
  switch (name) {
    case "clear-day":
      return require("./icons/animated/day.svg");

    case "clear-night":
      return require("./icons/animated/night.svg");

    case "partly-cloudy-day":
      return require("./icons/animated/cloudy-day-1.svg");

    case "partly-cloudy-night":
      return require("./icons/animated/cloudy-night-1.svg");

    case "cloudy":
      return require("./icons/animated/cloudy.svg");

    case "rain":
      return require("./icons/animated/rainy-7.svg");

    case "snow":
      return require("./icons/animated/snowy-5.svg");

    case "thunder":
      return require("./icons/animated/thunder.svg");

    case "wind":
      return require("./icons/animated/wind.svg");

    case "sleet":
      return require("./icons/animated/sleet.png");

    case "fog":
      return require("./icons/animated/fog.svg");

    default:
      return require("./icons/animated/weather.svg");
  }
}
