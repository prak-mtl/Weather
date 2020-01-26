import React from "react";
import { Table } from "reactstrap";
import moment from "moment";
import FetchIcons from "./FetchIcons";

export default function WeeklyTable(props) {
  let subset = props.weeklyData.data.slice(0, 7);
  return (
    <div className="w-75 mt-5 pt-4 pb-2 mx-auto">
      <h5>Weekly weather</h5>
      <Table hover striped responsive dark={props.theme === "dark" ? true : false}>
        <thead>
          <tr>
            <th></th>
            {subset.map((item, index) => (
              <th key={index}>
                <h5>{moment(item.time).format("ddd")}</h5>
                <p>
                  {moment(item.time).format("DD") +
                    "/" +
                    moment(item.time).format("MMM")}
                </p>
                <small>
                  {item.summary}
                  <span className="w-50">{FetchIcons(item.icon)}</span>
                </small>
                <h4>
                  {props.scale === "°F"
                    ? item.temperature.toFixed(2)
                    : props.convertTemp(item.temperature.toFixed(2))}
                  {props.scale}
                </h4>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Feels like</th>
            {subset.map((item, index) => (
              <td key={index}>
                {props.scale === "°F"
                  ? item.apparentTemperature.toFixed(2)
                  : props.convertTemp(item.apparentTemperature.toFixed(2))}
                {props.scale}
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row">Humidity</th>
            {subset.map((item, index) => (
              <td key={index}>{item.humidity.toFixed(2)}</td>
            ))}
          </tr>
          <tr>
            <th scope="row">Wind (km/h)</th>
            {subset.map((item, index) => (
              <td key={index}>
                {item.windSpeed}
                <img
                  src={require("./icons/animated/weather_sagittarius.svg")}
                  alt="wind icon"
                />
              </td>
            ))}
          </tr>
          <tr>
            <th scope="row">Pressure</th>
            {subset.map((item, index) => (
              <td key={index}>{item.pressure} mb</td>
            ))}
          </tr>
          <tr>
            <th scope="row">Dew Point</th>
            {subset.map((item, index) => (
              <td key={index}>{item.dewPoint}</td>
            ))}
          </tr>
          <tr>
            <th scope="row">visibility</th>
            {subset.map((item, index) => (
              <td key={index}>{item.visibility} mi</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
