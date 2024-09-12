import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Inner from "./Inner";
import Bottom from "./Bottom";
import Right from "./Right";
import Final from "./Final";

function Dashboard() {
  return (
    <>
      <div style={{ width: "1600px", height: "1195px" }}>
        <div
          style={{
            width: "inherit",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Navbar />
          <div
            style={{ display: "flex", justifyContent: "center", gap: "30px" }}
          >
            <SideBar />

            <div>
              <Inner />

              <Bottom />
            </div>
            <div>
              <Right />
              <Final />
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
