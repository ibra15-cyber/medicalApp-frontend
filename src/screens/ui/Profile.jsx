import { useState } from "react";
import HoriEll from "../../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";

function Profile({ image, name, sex, age, handlePatientData }) {
  const [isHovered, setIsHovered] = useState();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    // <a key={image} href="#" style={{ textDecoration: "none" }}>
    <div
      style={{ color: "white" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handlePatientData}
    >
      <div
        style={{
          width: "inherit",
          height: "48px",
          backgroundColor: isHovered ? "#D8FCF7" : "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "32px",
          paddingTop: "40px",
          opacity: 1,
        }}
      >
        {/* image and text div  */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: isHovered ? "#D8FCF7" : "white",
          }}
        >
          {/* image div  */}
          <div style={{ backgroundColor: isHovered ? "#D8FCF7" : "white" }}>
            <img
              src={image}
              style={{
                backgroundColor: isHovered ? "#D8FCF7" : "white",
                width: "48px",
                height: "48px",
                marginRight: "10px",
                marginLeft: "20px",
              }}
            />
          </div>
          {/* p div  */}
          <div>
            <p
              style={{
                backgroundColor: isHovered ? "#D8FCF7" : "white",
                color: "#072635",
                font: "normal normal bold 14px/19px Manrope",
                opacity: 1,
              }}
            >
              {name}
            </p>
            <p
              style={{
                backgroundColor: isHovered ? "#D8FCF7" : "white",
                font: "normal normal normal 14px/19px Manrope",
                color: "#707070",
                opacity: 1,
              }}
            >
              {sex}, {age}
            </p>
          </div>
        </div>

        {/* ellipse div  */}
        <div style={{ backgroundColor: "white" }}>
          <img
            src={HoriEll}
            style={{ backgroundColor: "white", marginLeft: "-60px" }}
          />
        </div>
      </div>
    </div>
    // </a>
  );
}

export default Profile;
