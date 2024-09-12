import Logo from "../assets/TestLogo.svg";
import Home from "../assets/home_FILL0_wght300_GRAD0_opsz24.svg";
import Group from "../assets/group_FILL0_wght300_GRAD0_opsz24.svg";
import Calender from "../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import Message from "../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import CreditCard from "../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import SeniorWoman from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import Setting from "../assets/settings_FILL0_wght300_GRAD0_opsz24.svg";
import VeritcalElip from "../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "18px",
        borderRadius: "70px",
        backgroundColor: "white",
        overflow: "visible",
        alignItems: "center",
        paddingRight: "20px",
        width: "1564px",
        // outline: "2px solid black",
      }}
    >
      <div
        style={{
          marginLeft: "20px",
          backgroundColor: "white",
          width: "211px",
          height: "48px",
        }}
      >
        <img src={Logo} style={{ backgroundColor: "white" }} />
      </div>

      {/* middle  */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          gap: "4px",
          // width: "663px",
        }}
      >
        <div className="child_div_header">
          <a
            style={{
              display: "flex",
              // justifyContent: "space-between",
              justifyItems: "center",
              textDecoration: "none",
              width: "88px",
              height: "19px",
            }}
            href="#"
          >
            <div style={{ marginRight: "10px", backgroundColor: "white" }}>
              <img
                src={Home}
                style={{
                  width: "16px",
                  height: "17px",
                  backgroundColor: "white",
                }}
              />
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "63px",
                height: "19px",
                color: "#072635",
                opacity: 1,
                font: "normal normal bold 14/px/19px Manrope",
              }}
            >
              Overview
            </div>
          </a>
        </div>
        <div
          className="child_div_header"
          style={{ backgroundColor: "#01F0D0", borderRadius: "70px" }}
        >
          <a
            style={{
              display: "flex",
              justifyItems: "center",
              textDecoration: "none",
              width: "88px",
              height: "19px",
              backgroundColor: "#01F0D0",
            }}
            href="#"
          >
            <div style={{ marginRight: "10px", backgroundColor: "#01F0D0" }}>
              <img
                src={Group}
                style={{
                  width: "16px",
                  height: "17px",
                  backgroundColor: "#01F0D0",
                }}
              />
            </div>
            <div
              style={{
                width: "63px",
                height: "19px",
                color: "#072635",
                opacity: 1,
                font: "normal normal bold 14/px/19px Manrope",
                backgroundColor: "#01F0D0",
              }}
            >
              Patients
            </div>
          </a>
        </div>

        <div className="child_div_header">
          <a
            style={{
              display: "flex",
              justifyItems: "center",
              textDecoration: "none",
              width: "88px",
              height: "19px",
            }}
            href="#"
          >
            <div style={{ marginRight: "10px" }}>
              <img src={Calender} style={{ width: "16px", height: "17px" }} />
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "63px",
                height: "19px",
                color: "#072635",
                opacity: 1,
                font: "normal normal bold 14/px/19px Manrope",
              }}
            >
              Schedule
            </div>
          </a>
        </div>

        <div className="child_div_header">
          <a
            style={{
              display: "flex",
              justifyItems: "center",
              textDecoration: "none",
              width: "88px",
              height: "19px",
            }}
            href="#"
          >
            <div style={{ marginRight: "10px" }}>
              <img src={Message} style={{ width: "16px", height: "17px" }} />
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "63px",
                height: "19px",
                color: "#072635",
                opacity: 1,
                font: "normal normal bold 14/px/19px Manrope",
              }}
            >
              Message
            </div>
          </a>
        </div>

        <div className="child_div_header">
          <a
            style={{
              display: "flex",
              justifyItems: "center",
              textDecoration: "none",
              width: "88px",
              height: "19px",
            }}
            href="#"
          >
            <div style={{ marginRight: "10px" }}>
              <img src={CreditCard} style={{ width: "16px", height: "17px" }} />
            </div>
            <div
              style={{
                backgroundColor: "white",
                width: "63px",
                height: "19px",
                color: "#072635",
                opacity: 1,
                font: "normal normal bold 14/px/19px Manrope",
              }}
            >
              Transaction
            </div>
          </a>
        </div>
      </div>

      {/* user profile  */}
      <div
        style={{
          // width: "244px",
          height: "44px",
          opacity: 1,
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {/* <img /> */}
        <div>
          <div
            style={{
              width: "44px",
              height: "44px",
              backgroundColor: "white",
              overflow: "hidden",
            }}
          >
            <img src={SeniorWoman} style={{ backgroundColor: "white" }} />
          </div>
        </div>

        {/* the text  */}
        <div style={{ marginLeft: "15px" }}>
          <p
            style={{
              color: "#072635",
              backgroundColor: "white",
              font: "normal normal bold 14px/19px Manrope",
            }}
          >
            Dr. Jose Simmons
          </p>
          <p
            style={{
              backgroundColor: "white",
              color: "#707070",
            }}
          >
            General Practitioner
          </p>
        </div>

        <div
          style={{
            height: "1px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "black",
              width: "1px",
              marginLeft: "10px",
              height: "40px",
            }}
          ></span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            marginLeft: "10px",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "19px",
              backgroundColor: "white",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              // marginLeft: "10px",
              // marginRight: "10px",
            }}
          >
            <img src={Setting} style={{ backgroundColor: "white" }} />
          </div>
          <div
            style={{
              width: "20px",
              backgroundColor: "white",
              marginLeft: "10px",
              paddingRight: "20px",
            }}
          >
            <img src={VeritcalElip} style={{ backgroundColor: "white" }} />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
