import React from "react";
import { ProgressBar } from "./styles";

export default function DailyBar(props) {
  let subset = props.hourlyData.data.slice(0, 24);
  return (
    <div className="mt-5">
      <h5>Daily bar</h5>
      <ProgressBar
        value={getCurrentHour() + 0.5}
        loaded={getColor()}
        max={24}
      />
      <div className="d-flex justify-content-between">
        {subset.map((item, index) => (
          <div key={index} className="">
            <p>{index < 10 ? "0" + index : index}:00</p>
            <small>
              {props.scale === "°F"
                ? item.temperature.toFixed(2)
                : props.convertTemp(item.temperature.toFixed(2))}
              {props.scale}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

function getCurrentHour() {
  const currentHours = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  return currentHours + currentMinutes / 60;
}

function getColor() {
  const currentHour = getCurrentHour();
console.log(currentHour)
  if (currentHour) {
    if (currentHour <= 4) return "#131948";
    else if (currentHour > 4 && currentHour <= 8) return "#545454";
    else if (currentHour > 8 && currentHour <= 12) return "#86b3f1";
    else if (currentHour > 12 && currentHour <= 16) return "#ffcb6c";
    else if (currentHour > 16 && currentHour <= 20) return "#131948";
  }
}