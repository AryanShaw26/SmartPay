import "./DashboardAnalytics.css";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import axios from "axios";

const COLORS = [
  "#FFD700",
  "#F59E0B",
];

function DashboardAnalytics() {
  const [chartData, setChartData] =
    useState([]);

  const [total, setTotal] =
    useState(0);

  useEffect(() => {
    const userId =
      localStorage.getItem(
        "user_id"
      );

    axios
      .get(
        `http://127.0.0.1:8000/transactions/${userId}`
      )
      .then((response) => {
        const transactions =
          response.data;

        let addMoney = 0;
        let sendMoney = 0;

        transactions.forEach(
          (transaction) => {
            if (
              transaction.purpose ===
              "Add Money"
            ) {
              addMoney += Number(
                transaction.amount
              );
            } else {
              sendMoney += Number(
                transaction.amount
              );
            }
          }
        );

        setChartData([
          {
            name: "Add Money",
            value: addMoney,
          },
          {
            name: "Send Money",
            value: sendMoney,
          },
        ]);

        setTotal(
          addMoney + sendMoney
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="dashboard-analytics">

      <h2>
        Transaction Overview
      </h2>

      <div className="dashboard-chart">

        <ResponsiveContainer
          width="100%"
          height={220}
        >
          <PieChart>

            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
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

          </PieChart>
        </ResponsiveContainer>

        <div className="chart-total">

          <h3>
            ₹
            {total.toLocaleString(
              "en-IN"
            )}
          </h3>

          <span>Total</span>

        </div>

      </div>

      <div className="dashboard-legend">

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
                    background:
                      COLORS[index],
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

export default DashboardAnalytics;