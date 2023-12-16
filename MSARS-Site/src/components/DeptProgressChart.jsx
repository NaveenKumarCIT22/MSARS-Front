// Import necessary libraries
import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend
);

// Sample data for 3 variables over 30 days

// LineChart component
const DeptProgressChart = () => {
  const data = {
    labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Positive",
        data: Array.from({ length: 7 }, () => Math.random() * 100),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "Neutral",
        data: Array.from({ length: 7 }, () => Math.random() * 100),
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "Negative",
        data: Array.from({ length: 7 }, () => Math.random() * 100),
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
      },
    ],
  };
  // Chart options
  const options = {
    responsive: true,
    // events: ["click"],
    // events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    // interaction: {
    //   mode: "nearest",
    // },
    plugins: {
      //   labels: {
      //     color: "white",
      //   },
      tooltip: {
        enabled: true,
        usePointStyle: true,
        titleAlign: "center",
        titleColor: "gold",
        titleSpacing: 3,
        TitleFont: {
          weight: "bold",
        },
        backgroundColor: "midnightblue",
        bodyColor: "orange",
        bodyAlign: "center",
        bodyFont: {
          weight: "italic",
        },
        callbacks: {
          labelPointStyle: function (context) {
            return {
              pointStyle: "circle",
              rotation: 0,
            };
          },
        },
      },
      title: {
        display: true,
        text: "Overview of Past 7 Days",
        fontSize: 100,
        align: "center",
        color: "white",

        font: {
          weight: "bold",
        },
        padding: 8,
        fullSize: true,
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "white",
        },
        fullSize: true,
        align: "start",
      },
    },
    scales: {
      y: {
        ticks: { color: "white", beginAtZero: true },
      },
      x: {
        ticks: { color: "white", beginAtZero: true },
      },
    },
  };
  return (
    <div
      className="progress-chart"
      style={{
        width: "90%",
        height: "90%",
        display: "flex",
        placeItems: "center",
      }}
    >
      <Line
        data={data}
        options={options}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default DeptProgressChart;
