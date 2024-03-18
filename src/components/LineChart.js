import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  type: "spine",

  scales: {
    x: {
      grid: {
        drawBorder: false,
        color: "#EAEEFD",
      },
      ticks: {
        display: false,
      },
      gridLines: {
        display: false,
      },
    },
    y: {
      grid: {
        drawBorder: false,
        display: false,
      },
      ticks: {
        display: false,
      },
      gridLines: {
        display: false,
      },
    },
  },

  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [
        1520, 2301, 45600, 15500, 48030, 58025, 35146, 30154, 38134, 25486,
        23410, 20043,
      ],
      borderColor: "#FF8831",
    },
    {
      label: {
        display: false,
      },
      data: [
        750, 1840, 2222, 3355, 25600, 18024, 45687, 58991, 64521, 60152, 65482,
        64203,
      ],

      borderColor: "#3D41D7",
    },
  ],
};

const App = () => {
  return <Line height={99} width={241} options={options} data={data} />;
};

export default App;
