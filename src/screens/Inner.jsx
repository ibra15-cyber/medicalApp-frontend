import Heart from "../assets/respiratory rate.svg";
import Temp from "../assets/temperature.svg";
import Heart2 from "../assets/HeartBPM.svg";
import More from "../assets/ArrowDown.svg";
import Chart from "../components/Chart";
import { useContext } from "react";
import { Store } from "../../Store";
import Loader from "../components/Loader";

function Inner() {
  const { state } = useContext(Store);

  if (state.isLoading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        width: "766px",
        height: "673px",
        backgroundColor: "white",
        marginBottom: "32px",
        borderRadius: "12px",
        marginTop: "10px",
        outline: "5px solid white",
        overflow: "hidden",
        padding: "10px",
        gap: "20px",
      }}
    >
      {/* title  */}
      <div
        style={{
          backgroundColor: "white",
          display: " flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "15px",
          // outline: "2px solid green",
        }}
      >
        <h1
          style={{
            backgroundColor: "white",
            padding: "10px",
            // width: "100px",
            font: "normal normal 800 24px/33px Manrope",
            color: "#072635",
            marginLeft: "18px",
            opacity: 1,
          }}
        >
          Diagnosis History
        </h1>
      </div>

      {/* outer div containing both top and bottom  */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          backgroundColor: "white",
          // marginBottom: "10px",
          overflow: "hidden",
          height: "auto",
          // borderRadius: "12px ",

          // width: "800px",
        }}
      >
        {/* top outer div  */}
        <div
          style={{
            width: "700px",
            backgroundColor: "#f6f7f8",
            height: "auto",
            overflow: "hidden",
            outline: "8px solid #f6f7f8",
            borderRadius: "20px 20px 12px 12px",
            padding: "5px",
            paddingTop: "10px",
          }}
        >
          <div
            style={{
              width: "inherit",
              height: "inherit",
              display: "flex",
              justifyContent: "center",
              // outline: "12px solid #f6f7f8",
            }}
          >
            <Chart />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "726px",
            height: "298px",
            backgroundColor: "white",
            justifyItems: "center",
            overflow: "visible",
            padding: "5px",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#E0F3FA",
              height: "242px",
              width: "228px",
              borderRadius: "12px",
              //   outline: "2px solid yellow",
            }}
          >
            <img
              src={Heart}
              style={{
                width: "96px",
                height: "96px",
                backgroundColor: "#E0F3FA",
                marginTop: "20px",
                padding: "16px",
              }}
            />
            <p
              style={{
                // width: "125px",
                height: "22px",
                padding: "0px 0px 16px 16px",
                backgroundColor: "#E0F3FA",
              }}
            >
              Respiratory Rate
            </p>
            <p
              style={{
                // width: "109px",
                height: "41px",
                font: "normal normal 800 30px/41px Manrope",
                color: "#072635",
                opacity: 1,
                overflow: "visible",
                padding: "0px 0px 0px 16px",
                backgroundColor: "#E0F3FA",
                marginBottom: "15px",
              }}
            >
              {/* here i used the first month but i think i should use the average  */}
              {Math.round(
                state.patientData.diagnosis_history.reduce(
                  (c, dh) => c + dh.respiratory_rate.value,
                  0
                ) / state.patientData.diagnosis_history.length
              )}{" "}
              bpm
            </p>
            <div style={{ paddingLeft: "16px", backgroundColor: "#E0F3FA" }}>
              <div
                style={{
                  padding: "0px 0px 0px 0px",
                  backgroundColor: "#E0F3FA",
                }}
              >
                <p style={{ backgroundColor: "#E0F3FA" }}>
                  {(() => {
                    const averageRespiratoryRate = Math.round(
                      state.patientData.diagnosis_history.reduce(
                        (c, dh) => c + dh.respiratory_rate.value,
                        0
                      ) / state.patientData.diagnosis_history.length
                    );

                    if (
                      averageRespiratoryRate >= 12 &&
                      averageRespiratoryRate <= 20
                    ) {
                      return "Normal";
                    } else if (averageRespiratoryRate < 12) {
                      return "Lower than average";
                    } else {
                      return "Higher than average";
                    }
                  })()}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#FFE6E9",
              height: "242px",
              width: "228px",
              borderRadius: "12px",
              //   outline: "2px solid yellow",
            }}
          >
            <img
              src={Temp}
              style={{
                width: "96px",
                height: "96px",
                backgroundColor: "#FFE6E9",
                marginTop: "20px",
                padding: "16px",
              }}
            />
            <p
              style={{
                width: "125px",
                height: "22px",
                padding: "0px 0px 16px 16px",
                backgroundColor: "#FFE6E9",
              }}
            >
              Temperature
            </p>
            <p
              style={{
                // width: "109px",
                height: "41px",
                font: "normal normal 800 30px/41px Manrope",
                color: "#072635",
                opacity: 1,
                overflow: "visible",
                padding: "0px 0px 0px 16px",
                backgroundColor: "#FFE6E9",
                marginBottom: "15px",
              }}
            >
              {state.patientData.diagnosis_history[0].temperature.value} °F
            </p>
            <div style={{ paddingLeft: "16px", backgroundColor: "#FFE6E9" }}>
              <div
                style={{
                  padding: "0px 0px 0px 0px",
                  backgroundColor: "#FFE6E9",
                }}
              >
                <p style={{ backgroundColor: "#FFE6E9" }}>
                  {" "}
                  {
                    state.patientData.diagnosis_history[0].temperature.levels
                  }{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#FFE6F1",
              height: "242px",
              width: "228px",
              borderRadius: "12px",
              //   outline: "2px solid yellow",
            }}
          >
            <img
              src={Heart2}
              style={{
                width: "96px",
                height: "96px",
                backgroundColor: "#FFE6F1",
                marginTop: "20px",
                padding: "16px",
              }}
            />
            <p
              style={{
                width: "125px",
                height: "22px",
                padding: "0px 0px 16px 16px",
                backgroundColor: "#FFE6F1",
              }}
            >
              Heart Rate
            </p>
            <p
              style={{
                // width: "109px",
                height: "41px",
                font: "normal normal 800 30px/41px Manrope",
                color: "#072635",
                opacity: 1,
                overflow: "visible",
                padding: "0px 0px 0px 16px",
                backgroundColor: "#FFE6F1",
                marginBottom: "15px",
              }}
            >
              {state.patientData.diagnosis_history[0].heart_rate.value} bpm
            </p>
            <div
              style={{
                paddingLeft: "16px",
                backgroundColor: "#FFE6F1",
                // display: "transparent",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffe6f1",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <img
                  src={More}
                  style={{ padding: "10px", backgroundColor: "#ffe6f1" }}
                />
                <div
                  style={{
                    padding: "0px 0px 0px 0px",
                    backgroundColor: "#FFE6F1",
                  }}
                >
                  <p
                    style={{
                      backgroundColor: "#FFE6F1",
                    }}
                  >
                    {state.patientData.diagnosis_history[0].heart_rate.levels}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inner;

// remove all the inside tags and check the outline; make sure you can see the outline before you proveed
