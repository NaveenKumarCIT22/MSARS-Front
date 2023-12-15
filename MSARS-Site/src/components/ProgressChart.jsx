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
const ProgressChart = () => {
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
    plugins: {
      responsive: true,
      title: {
        display: true,
        text: "Overview of Past 30 Days",
        fontSize: 100,
        align: "center",
        font: {
          weight: "bold",
        },
        padding: 8,
        fullSize: true,
      },
      legend: {
        display: true,
        position: "right",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="progress-chart" style={{ width: "70%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ProgressChart;
