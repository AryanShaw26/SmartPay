import "./Analytics.css";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { analyticsData } from "../../../data/analyticsData";

const COLORS = [
  "#FFD700",
  "#F59E0B",
  "#10B981",
  "#3B82F6",
  "#EF4444",
];

function Analytics() {
  return (
    <div className="analytics-card">
      <div className="analytics-header">
        <h3>Monthly Spending</h3>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={analyticsData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
            >
              {analyticsData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="chart-center">
          <h2>₹12.6K</h2>
          <p>Total</p>
        </div>
      </div>

      <div className="category-list">
        {analyticsData.map((item, index) => (
          <div className="category-item" key={index}>
            <div className="category-left">
              <span
                className="color-dot"
                style={{
                  backgroundColor:
                    COLORS[index % COLORS.length],
                }}
              ></span>

              <span>{item.name}</span>
            </div>

            <span>{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;