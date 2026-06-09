import "./Analytics.css";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { useEffect, useState } from "react";
import axios from "axios";

const COLORS = [
  "#FFD700",
  "#F59E0B",
];

function Analytics() {
  const [chartData, setChartData] =
    useState([]);

  const [total, setTotal] =
    useState(0);

  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8000/transactions"
      )
      .then((response) => {

        const transactions =
          response.data;

        let sendMoney = 0;

        let addMoney = 0;

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
    <div className="analytics-card">

      <div className="analytics-header">
        <h3>
          Transaction Overview
        </h3>
      </div>

      <div className="chart-wrapper">

        <ResponsiveContainer
          width="100%"
          height={250}
        >
          <PieChart>

            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
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

          <p>Total</p>

        </div>
      </div>

      <div className="category-list">

        {chartData.map(
          (item, index) => (
            <div
              className="category-item"
              key={index}
            >

              <div className="category-left">

                <span
                  className="color-dot"
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

export default Analytics;