import { useState } from "react";
import Fillo from "../../assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg";

function LabList({ name }) {
  const [isHovered, setIsHovered] = useState();

  const handleIsHover = () => {
    setIsHovered(true);
  };

  const HandleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      style={{ backgroundColor: "white" }}
      onMouseEnter={handleIsHover}
      onMouseLeave={HandleMouseLeave}
    >
      <div style={{ backgroundColor: isHovered ? "#F6F7F8" : "white" }}>
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isHovered ? "#F6F7F8" : "white",
            // outline: "2px solid blue",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "250px",
              height: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: isHovered ? "#F6F7F8" : "white",
            }}
          >
            <p style={{ backgroundColor: isHovered ? "#F6F7F8" : "white" }}>
              {name}
            </p>
            <img
              src={Fillo}
              style={{ backgroundColor: isHovered ? "#F6F7F8" : "white" }}
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default LabList;
