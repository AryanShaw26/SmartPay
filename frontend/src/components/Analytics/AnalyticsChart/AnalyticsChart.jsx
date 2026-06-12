import "./AnalyticsChart.css";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#FFD700",
  "#00D26A",
  "#F59E0B",
];
function AnalyticsChart({
  chartData,
  total,
}) {
  return (
    <div className="analytics-chart-card">

      <h2 className="chart-title">
        Transaction Overview
      </h2>

      <div className="chart-container">

        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <PieChart>

            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={4}
              dataKey="value"
            >
              {chartData.map(
                (entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                          COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

        <div className="chart-center">

          <h2>
            ₹
            {total.toLocaleString(
              "en-IN"
            )}
          </h2>

          <p>Total Volume</p>

        </div>

      </div>

      <div className="chart-legend">

        {chartData.map(
          (item, index) => (
            <div
              key={index}
              className="legend-item"
            >
              <div className="legend-left">

                <span
                  className="legend-dot"
                  style={{
                    backgroundColor:
                      COLORS[
                        index %
                          COLORS.length
                      ],
                  }}
                ></span>

                <span>
                  {item.name}
                </span>

              </div>

              <span>
                ₹
                {item.value.toLocaleString(
                  "en-IN"
                )}
              </span>

            </div>
          )
        )}

      </div>

    </div>
  );
}

export default AnalyticsChart;