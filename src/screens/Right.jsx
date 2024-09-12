import Birth from "../assets/BirthIcon.svg";
import FemaleIcon from "../assets/FemaleIcon.svg";
import PhoneIcon from "../assets/PhoneIcon.svg";
import InsIcon from "../assets/InsuranceIcon.svg";
import { useContext } from "react";
import { Store } from "../../Store";
import Loader from "../components/Loader";

function Right() {
  const { state } = useContext(Store);

  if (state.isLoading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        width: "367px",
        height: "740px",
        backgroundColor: "white",
        // marginLeft: "26px",
        marginBottom: "18px",
        borderRadius: "16px",
        outline: "2px solid white",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <img
          style={{
            width: "200px",
            height: "200px",
            marginBottom: "24px",
            backgroundColor: "white",
            marginTop: "32px",
          }}
          src={state.patientData.profile_picture}
        />
        <p
          style={{
            color: "#072635",
            opacity: 1,
            font: "normal normal 800 24px/33px Manrope",
            backgroundColor: "white",
            // marginBottom: "32px",
            paddingBottom: "32px",
          }}
        >
          {state.patientData.name}{" "}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          // width: "166px",
          paddingLeft: "32px",
        }}
      >
        <img
          src={Birth}
          style={{
            width: "42px",
            height: "42px",
            backgroundColor: "white",
            paddingRight: "18px",
          }}
        />
        <div style={{ backgroundColor: "white" }}>
          <p
            style={{
              backgroundColor: "white",
              color: "#07635",
              font: "normal normal medium 14px/19px Manrope",
            }}
          >
            Date Of Birth
          </p>
          <p
            style={{
              backgroundColor: "white",
              color: "#07635",
              font: "normal normal bold 14px/19px Manrope",
              paddingBottom: "24px",
            }}
          >
            {new Date(state.patientData.date_of_birth).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}{" "}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          // width: "166px",
          paddingLeft: "32px",
        }}
      >
        <img
          src={FemaleIcon}
          style={{
            width: "42px",
            height: "42px",
            backgroundColor: "white",
            paddingRight: "18px",
          }}
        />
        <div style={{ backgroundColor: "white" }}>
          <p
            style={{
              backgroundColor: "white",
              color: "#07635",
              font: "normal normal medium 14px/19px Manrope",
            }}
          >
            Gender{" "}
          </p>
          <p
            style={{
              backgroundColor: "white",
              color: "#07635",
              font: "normal normal bold 14px/19px Manrope",
              paddingBottom: "18px",
            }}
          >
            {state.patientData.gender}{" "}
          </p>
        </div>
      </div>{" "}
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          // width: "166px",
          paddingLeft: "32px",
        }}
      >
        <img
          src={PhoneIcon}
          style={{
            width: "42px",
            height: "42px",
            backgroundColor: "white",
            paddingRight: "18px",
          }}
        />
        <div style={{ backgroundColor: "white" }}>
          <p
            style={{
              backgroundColor: "white",
              color: "#07635",
              font: "normal normal medium 14px/19px Manrope",
            }}
          >
            Contact Info.
          </p>
          <p
            style={{
              backgroundColor: "white",
              color: "#07635",
              font: "normal normal bold 14px/19px Manrope",
              paddingBottom: "24px",
            }}
          >
            {state.patientData.phone_number}{" "}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          // width: "166px",
          paddingLeft: "32px",
        }}
      >
        <img
          src={PhoneIcon}
          style={{
            width: "42px",
            height: "42px",
            backgroundColor: "white",
            paddingRight: "18px",
          }}
        />
        <div style={{ backgroundColor: "white" }}>
          <p
            style={{
              backgroundColor: "white",
              color: "#07635",
              font: "normal normal medium 14px/19px Manrope",
            }}
          >
            Emergency Contacts
          </p>
          <p
            style={{
              backgroundColor: "white",
              color: "#07635",
              font: "normal normal bold 14px/19px Manrope",
              paddingBottom: "18px",
            }}
          >
            {state.patientData.emergency_contact}{" "}
          </p>
        </div>
      </div>{" "}
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          // width: "166px",
          paddingLeft: "32px",
        }}
      >
        <img
          src={InsIcon}
          style={{
            width: "42px",
            height: "42px",
            backgroundColor: "white",
            paddingRight: "18px",
          }}
        />
        <div style={{ backgroundColor: "white" }}>
          <p
            style={{
              backgroundColor: "white",
              color: "#07635",
              font: "normal normal medium 14px/19px Manrope",
            }}
          >
            Insurance Provider{" "}
          </p>
          <p
            style={{
              backgroundColor: "white",
              color: "#07635",
              font: "normal normal bold 14px/19px Manrope",
              paddingBottom: "24px",
            }}
          >
            {state.patientData.insurance_type}{" "}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          marginTop: "30px",
        }}
      >
        <button
          style={{
            // width: "220px",
            // height: "41px",
            backgroundColor: "#01F0D0",
            borderRadius: "18px",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            padding: " 11px 40px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <p
            style={{
              // width: "140px",
              backgroundColor: "#01F0D0",
              borderRadius: "18px",
              font: "normal normal bold 14px/19px Manrope",
              // marginBottom: "20px",
            }}
          >
            Show All Information
          </p>
        </button>
      </div>
    </div>
  );
}

export default Right;
