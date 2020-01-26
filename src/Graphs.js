import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Graphs(props) {
  const today = props.graphData.data.slice(0, 24);
  const tomorrow = props.graphData.data.slice(25, 49);

  var todayArr = today.map(item =>
    props.scale === "°F"
      ? item.temperature
      : Number(props.convertTemp(item.temperature))
  );
  var tomorrowArr = tomorrow.map(item =>
    props.scale === "°F"
      ? item.temperature
      : Number(props.convertTemp(item.temperature))
  );

  const options = {
    chart: {
      type: "spline"
    },
    title: {
      text: "Weather comparison of two days"
    },
    subtitle: {
      text: "Yesterday v/s Today"
    },
    xAxis: {
      title: {
        text: "Hours"
      },
      categories: [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00"
      ]
    },
    yAxis: {
      title: {
        text: `Temperature (${props.scale})`
      },
      labels: {
        formatter: function() {
          return this.value + "°";
        }
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: "#666666",
          lineWidth: 1
        },
        states: {
          hover: {
            lineWidth: 4
          }
        }
      }
    },
    series: [
      {
        name: "Today",
        marker: {
          symbol: "square"
        },
        data: todayArr
      },
      {
        name: "Tomorrow",
        marker: {
          symbol: "diamond"
        },
        data: tomorrowArr
      }
    ]
  };
  return (
    <div className="w-75 mx-auto my-5">
    <h5>Comparison graph</h5>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
