import { useContext } from "react";
import { Store } from "../../Store";
import Loader from "../components/Loader";

function Bottom() {
  const { state } = useContext(Store);

  if (state.isLoading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        width: "766px",
        height: "349px",
        backgroundColor: "white",
        borderRadius: "16px",
        outline: "2px solid white",
        overflow: "scroll",
      }}
    >
      {" "}
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
          Diagnosis List
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          cursor: "pointer",
        }}
      >
        <table
          style={{
            width: "726px",
            textAlign: "left",
            backgroundColor: "white",
            padding: "0px 20px",
            // overflow: "hidden",
            // overflowX: "hidden",
          }}
        >
          <thead
            style={
              {
                // height: "48px",
              }
            }
          >
            <tr
              style={{
                height: "48px",
                // backgroundColor: "white",
                // borderRadius: "18px",
              }}
            >
              <th>Problems / Diagnoses</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {state.patientData.diagnostic_list.map((dl) => (
              <tr
                key={dl._id}
                style={{ height: "48px", backgroundColor: "white" }}
              >
                <td style={{ height: "48px", backgroundColor: "white" }}>
                  {dl.name}
                </td>
                <td style={{ height: "48px", backgroundColor: "white" }}>
                  {dl.description}
                </td>
                <td style={{ height: "48px", backgroundColor: "white" }}>
                  {dl.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bottom;
