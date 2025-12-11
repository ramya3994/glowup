import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Tooltip,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function WinCharts({ wins }) {
  if (!wins || wins.length === 0) {
    return null; // no charts if no data
  }

  // Category counts
  const categoryCounts = wins.reduce((acc, w) => {
    const key = w.category && w.category.trim() ? w.category : "General";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const categoryLabels = Object.keys(categoryCounts);
  const categoryData = Object.values(categoryCounts);

  // Mood average by date
  const moodByDate = wins.reduce((acc, w) => {
    if (!w.date || w.mood == null) return acc;
    if (!acc[w.date]) acc[w.date] = { total: 0, count: 0 };
    acc[w.date].total += w.mood;
    acc[w.date].count += 1;
    return acc;
  }, {});

  const dateLabels = Object.keys(moodByDate);
  const moodData = dateLabels.map(
    (d) => moodByDate[d].total / moodByDate[d].count
  );

  const categoryChartData = {
    labels: categoryLabels,
    datasets: [
      {
        label: "Wins",
        data: categoryData,
      },
    ],
  };

  const moodChartData = {
    labels: dateLabels,
    datasets: [
      {
        label: "Average Mood",
        data: moodData,
      },
    ],
  };

  return (
    <div className="charts">
      <div className="chart-card">
        <h3>Wins by Category</h3>
        <Pie data={categoryChartData} />
      </div>
      <div className="chart-card">
        <h3>Average Mood by Date</h3>
        <Bar data={moodChartData} />
      </div>
    </div>
  );
}
