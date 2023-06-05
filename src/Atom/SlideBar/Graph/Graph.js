import React from "react";
import { Chart } from "react-google-charts";
import style from "./Graph.module.css"

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "Result",
};

export default function Graph() {
  return (
    <Chart
    className={style.Chart}
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
  );
}
