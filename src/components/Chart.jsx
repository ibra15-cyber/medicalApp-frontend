import Expand from "../assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg";

// Custom tick component to adjust text size
const CustomAxisTick = ({ x, y, payload }) => (
  <text x={x} y={y} dy={16} textAnchor="middle" fill="#666" fontSize={11}>
    {payload.value}
  </text>
);

import UpArrow from "../assets/ArrowUp.svg"; // Add the path to your up arrow image
import DownArrow from "../assets/ArrowDown.svg"; // Add the path to your down arrow image

const CustomLegend = () => {
  const { state } = useContext(Store);

  if (state.isLoading) {
    <Loader />;
  }

  return (
    <div style={{ textAlign: "right", marginLeft: "20px" }}>
      <div style={{ font: "bold 12px Manrope", color: "#072635" }}>
        {/* control this width to make it stable  */}
        <div style={{ alignItems: "center", gap: "4px", maxWidth: "200px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#E66FD2", // Diastolic line color
                borderRadius: "50%",
              }}
            ></div>
            <div>Systolic</div>
          </div>

          <div
            style={{
              textAlign: "left",
              font: "normal normal bold 22px/30px Manrope",
            }}
          >
            {Math.round(
              state.patientData.diagnosis_history.reduce(
                (c, dh) => dh.blood_pressure.systolic.value + c,
                0
              ) / state.patientData.diagnosis_history.length
            )}{" "}
          </div>

          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <img src={DownArrow} alt="Down Arrow" width={10} height={5} />
            <p>
              {" "}
              {(() => {
                const averageSystolicRate = Math.round(
                  state.patientData.diagnosis_history.reduce(
                    (c, dh) => dh.blood_pressure.systolic.value + c,
                    0
                  ) / state.patientData.diagnosis_history.length
                );

                if (averageSystolicRate < 120) {
                  return "Normal";
                } else {
                  return "Higher than average";
                }
              })()}
            </p>
          </span>
        </div>

        <hr style={{ borderTop: "1px solid #ddd", margin: "8px 0" }} />

        <div style={{ alignItems: "center", gap: "4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: "#8C6FE6", // Diastolic line color
                borderRadius: "50%",
              }}
            ></div>
            <div>Diastolic</div>
          </div>

          <div
            style={{
              textAlign: "left",
              font: "normal normal bold 22px/30px Manrope",
            }}
          >
            {Math.round(
              state.patientData.diagnosis_history.reduce(
                (c, dh) => dh.blood_pressure.diastolic.value + c,
                0
              ) / state.patientData.diagnosis_history.length
            )}{" "}
          </div>

          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <img src={DownArrow} alt="Down Arrow" width={10} height={5} />
            <p>
              {(() => {
                const averageDiastolicRate = Math.round(
                  state.patientData.diagnosis_history.reduce(
                    (c, dh) => dh.blood_pressure.diastolic.value + c,
                    0
                  ) / state.patientData.diagnosis_history.length
                );

                if (averageDiastolicRate < 80) {
                  return "Normal";
                } else {
                  return "Higher than average";
                }
              })()}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../data";
import { useContext } from "react";
import { Store } from "../../Store";
import Loader from "./Loader";

function Chart() {
  const { state } = useContext(Store);

  if (state.isLoading) {
    <Loader />;
  }
  const monthAbbreviations = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec",
  };

  // iterating a list of objects to create an object containing list of objects
  const chartData = state.patientData.diagnosis_history.map((dh) => ({
    name: `${monthAbbreviations[dh.month]}. ${dh.year}`, // Convert month to short form
    Systolic: dh.blood_pressure.systolic.value,
    Diastolic: dh.blood_pressure.diastolic.value,
  }));

  return (
    <div
      style={{
        backgroundColor: "#f6f7f8",
        // padding: "20px",
        borderRadius: "8px",
        width: "inherit",
        justifyContent: "center",
        alignItems: "center",
        // outline: "5px solid #f6f7f8 ",
        paddingTop: "10px",
      }}
    >
      <ResponsiveContainer height={280}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "inhefrit",
            borderRadius: "50px",
            backgroundColor: "#f6f7f8",
          }}
        >
          <h3
            style={{
              textAlign: "left",
              marginLeft: "30px",
              font: "normal normal bold 18px/24px Manrope",
              letterSpacing: "0px",
              color: "#072635",
              textTransform: "capitalize",
              opacity: 1,
            }}
          >
            Blood Pressure
          </h3>
          <div style={{ display: "flex" }}>
            <select
              style={{
                display: "flex",
                border: "0px solid white",
                marginRight: "50px",
                // marginRight: "20px",
              }}
            >
              <option
                style={{
                  textAlign: "right",
                  font: "normal normal normal 14px/19px Manrope",
                  color: "#072635",
                  opacity: 1,
                }}
              >
                Last 6 months
              </option>
              <option
                style={{
                  textAlign: "right",
                  font: "normal normal normal 14px/19px Manrope",
                  color: "#072635",
                  opacity: 1,
                }}
              >
                Total Months
              </option>
            </select>
            <div style={{ paddingRight: "140px" }}></div>
          </div>
        </div>
        <LineChart
          data={chartData}
          options
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          style={{ backgroundColor: "#F4F0FE", paddingLeft: "-50px" }} // Added background color here
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} />
          <YAxis
            domain={[60, 180]}
            // tick={{ fontSize: 12, fill: "#666" }}
            tickCount={0} // Adjust number of ticks
            ticks={[60, 80, 100, 120, 140, 160, 180]} // Set custom tick values
          />
          <Tooltip />
          <Legend
            layout="vertical"
            verticalAlign="top"
            align="right"
            iconType="circle"
            content={CustomLegend}
            wrapperStyle={{
              padding: "20px",
              fontSize: "12px",
            }}
          />
          <Line
            type="monotone"
            dataKey="Systolic"
            stroke="#E66FD2"
            strokeWidth={2}
            activeDot={{ r: 8 }}
            dot={{ fill: "#E66FD2" }} // Fill the circular marks
          />
          <Line
            type="monotone"
            dataKey="Diastolic"
            stroke="#8C6FE6"
            strokeWidth={2}
            activeDot={{ r: 8 }}
            dot={{ fill: "#8C6FE6" }} // Fill the circular marks
          />
        </LineChart>
      </ResponsiveContainer>

      <div>
        <p style={{ width: "14px", height: "14px", color: "red" }}></p>
      </div>
    </div>
  );
}

export default Chart;
