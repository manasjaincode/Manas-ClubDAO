import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateData = (period) => {
  let labels = [];
  let datasets = [];

  const clubs = ["Music Club", "Art Club", "Sports Club", "Science Club", "Drama Club"];

  if (period === "lastMonth") {
    labels = ["Jan", "Feb", "Mar", "Apr"];
  } else if (period === "last6Months") {
    labels = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];
  }

  clubs.forEach((club, index) => {
    const data = [];
    labels.forEach(() => {
      const successRate = (Math.random() * (80 - 60) + 60).toFixed(2);
      data.push(successRate);
    });

    datasets.push({
      label: club,
      data,
      borderColor: `hsl(${(index * 60) % 360}, 70%, 60%)`,
      backgroundColor: `hsla(${(index * 60) % 360}, 70%, 60%, 0.2)`,
      fill: true,
      tension: 0.3,
    });
  });

  return {
    labels,
    datasets,
  };
};

const FPerformanceGraph = () => {
  const [period, setPeriod] = useState("lastMonth");
  const [chartData, setChartData] = useState(generateData("lastMonth"));

  useEffect(() => {
    setChartData(generateData(period));
  }, [period]);

  return (
    <div className="bg-gray-900 text-gray-300 p-4 sm:p-5 rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-semibold mb-3">Club Performance Over Time</h2>
      
      <div className="flex space-x-4 mb-5">
        <button
          onClick={() => setPeriod("lastMonth")}
          className={`px-4 py-2 rounded-full text-sm ${period === "lastMonth" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"} hover:bg-blue-700 transition`}
        >
          Last Month
        </button>
        <button
          onClick={() => setPeriod("last6Months")}
          className={`px-4 py-2 rounded-full text-sm ${period === "last6Months" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-300"} hover:bg-blue-700 transition`}
        >
          Last 6 Months
        </button>
      </div>

      {/* Wider Line Chart */}
      <div className="w-full h-[420px]">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: `Performance of Different Clubs - ${period === "lastMonth" ? "Last Month" : "Last 6 Months"}`,
                font: {
                  size: 16,
                },
                color: "#fff",
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}% Success Rate`,
                },
              },
              legend: {
                labels: {
                  color: "#ccc",
                },
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Months",
                  color: "#fff",
                },
                grid: {
                  color: "#444",
                },
                ticks: {
                  color: "#ccc",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Success Rate (%)",
                  color: "#fff",
                },
                min: 60,
                max: 80,
                ticks: {
                  color: "#ccc",
                  stepSize: 2,
                },
                grid: {
                  color: "#444",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default FPerformanceGraph;
