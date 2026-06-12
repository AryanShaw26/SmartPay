import "./DashboardAnalytics.css";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import axios from "axios";

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

        let receivedMoney = 0;

        transactions.forEach(
          (transaction) => {
            if (
              transaction.purpose ===
              "Add Money"
            ) {
              addMoney += Number(
                transaction.amount
              );
            }

            else if (
              transaction.purpose ===
              "Received Money"
            ) {
              receivedMoney += Number(
                transaction.amount
              );
            }

            else {
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
            name: "Received Money",
            value: receivedMoney,
          },

          {
            name: "Send Money",
            value: sendMoney,
          },
        ]);

        setTotal(
          addMoney +
            receivedMoney +
            sendMoney
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const COLORS = [
    "#FFD700",
    "#00D26A",
    "#F59E0B",
  ];

  return (
    <div className="dashboard-analytics-card">
      <h2>
        Transaction Overview
      </h2>

      {total === 0 ? (
        <div className="empty-chart">
          No Transactions Yet
        </div>
      ) : (
        <>
          <ResponsiveContainer
            width="100%"
            height={250}
          >
            <PieChart>
              <Pie
                data={chartData.filter(
                  (item) =>
                    item.value > 0
                )}
                dataKey="value"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
              >
                {chartData
                  .filter(
                    (item) =>
                      item.value > 0
                  )
                  .map(
                    (
                      entry,
                      index
                    ) => (
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

          <div className="dashboard-total">
            <h3>
              ₹
              {total.toLocaleString(
                "en-IN"
              )}
            </h3>

            <p>Total</p>
          </div>

          <div className="dashboard-chart-legend">
            <div className="legend-item">
              <span className="dot add-money"></span>

              <span>
                Add Money
              </span>

              <strong>
                ₹
                {chartData[0]?.value.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>

            <div className="legend-item">
              <span className="dot received-money"></span>

              <span>
                Received Money
              </span>

              <strong>
                ₹
                {chartData[1]?.value.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>

            <div className="legend-item">
              <span className="dot send-money"></span>

              <span>
                Send Money
              </span>

              <strong>
                ₹
                {chartData[2]?.value.toLocaleString(
                  "en-IN"
                )}
              </strong>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DashboardAnalytics;