import { useContext, useEffect, useState } from "react";
import Search from "../assets/search_FILL0_wght300_GRAD0_opsz24.svg";

// import { data } from "../data";
import Profile from "./ui/Profile";
import { Store } from "../../Store";
import axios from "axios";
import Loader from "../components/Loader";
import { patientData } from "../components/data";

function 1sidebar() {
  const {
    state, //tapping directly in the LS
    dispatch,
  } = useContext(Store);
  const [patientsData, setPatientData] = useState();
  // const [error, setError] = useState(); // console.log("PLSD", typeof PsData_LS);
  // console.log("PatientData", typeof patientsData);

  // Fetch single patient by ID

  // const handlePatientData = () => {
  //   patientsData.map((prev) =>
  //     prev._id === patientsData._id ? fetchPatient() : null
  //   );
  // };

  // const fetchPatient = async () => {
  //   dispatch({ type: "SET_LOADING_ON" });
  //   try {
  //     const { data } = await axios.get(
  //       `/api/patients/66df540a2870a9f19e8f3ea4`
  //     );
  //     localStorage.setItem("patientData", JSON.stringify(data));
  //     dispatch({ type: "SET_PATIENT_DATA", payload: data }); // Dispatch data to the store
  //     dispatch({ type: "SET_LOADING_OFF" });
  //   } catch (e) {
  //     console.log(e);
  //     dispatch({ type: "SET_LOADING_OFF" }); // Set loading to true before fetching
  //   }
  // };

  // only required to populate the SideBar
  // const fetchPatients = async () => {
  //   // dispatch({ type: "SET_LOADING_ON" }); // Set loading to true before fetching
  //   try {
  //     const { data } = await axios.get(`/api/patients/`);
  //     localStorage.setItem("patientsData", JSON.stringify(data)); // Save data to localStorage
  //     dispatch({ type: "SET_PATIENTS_DATA", payload: data }); //saving to context
  //     dispatch({ type: "SET_LOADING_OFF" }); // Set loading to true before fetching
  //   } catch (e) {
  //     console.log(e);
  //     setError("Failed to fetch patients");
  //     dispatch({ type: "SET_LOADING_OFF" }); // Set loading to true before fetching
  //   }
  // };

  const fetchPatients = async () => {
    dispatch({ type: "SET_LOADING_ON" }); // Set loading to true before fetching
    const { data } = await axios.get("/api/patients/");
    setPatientData(data);
    dispatch({ type: "SET_LOADING_OFF" }); // Set loading to true before fetching
  };

  // Handle selecting a patient
  // const handlePatientData = (patientId) => {
  //   fetchPatient(patientId);
  // };

  // Handle selecting a patient (retrieving from localStorage)
  const handlePatientData = (patientId) => {
    dispatch({ type: "SET_LOADING_ON" }); // Set loading to true before fetching
    const selectedPatient = patientData.find(
      (patient) => patient._id === patientId
    );
    if (selectedPatient) {
      localStorage.setItem("patientData", JSON.stringify(selectedPatient));
      dispatch({ type: "SET_PATIENT_DATA", payload: selectedPatient }); // Dispatch data to the store
      dispatch({ type: "SET_LOADING_OFF" }); // Set loading to true before fetching
    } else {
      console.error("Patient not found in local storage");
    }
  };

  useEffect(() => {
    // fetchPatient();

    fetchPatients();
  }, []);

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // if (state.patientsData.length === 0) {
  //   return <div>No patients found.</div>;
  // }

  // if (state.isLoading) {
  //   return <Loader />;
  // }

  return (
    <>
      {/* sidebar outer div starts  */}
      <div
        style={{
          width: "367px",
          height: "1054px",
          backgroundColor: "white",
          borderRadius: "18px",
          //   outline: "2px solid black",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          overflow: "scroll",
          scrollbarWidth: "thin",
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
              width: "100px",
              font: "normal normal 800 24px/33px Manrope",
              color: "#072635",
              marginLeft: "18px",
              opacity: 1,
            }}
          >
            Patients
          </h1>

          <img
            src={Search}
            style={{
              backgroundColor: "white",
              //   padding: "10px",
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              width: "18px",
              height: "18px",
              marginRight: "18px",
            }}
          />
        </div>

        {/* images profile outer div for all profile  */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "inherit",
            backgroundColor: "red",
            justifyContent: "center",
            // outline: "2px solid green",
            // overflow: "visible",
          }}
        >
          {/* complete profile line div  */}

          {/* {state.patientsData.map((patient) => (
            <Profile
              key={patient._id}
              image={patient.profile_picture}
              name={patient.name}
              age={patient.age}
              sex={patient.gender}
              // handlePatientData={handlePatientData}
              handlePatientData={() => handlePatientData(patient._id)}
            />
            // <Profile
            //   key={_id}
            //   image={profile_picture}
            //   name={name}
            //   age={age}
            //   sex={gender}
            //   // handlePatientData={handlePatientData}
            //   handlePatientData={() => handlePatientData(patient._id)}
            // />
          ))} */}

          {patientsData.map((patient) => (
            <Profile
              key={patient._id}
              image={patient.profile_picture}
              name={patient.name}
              age={patient.age}
              sex={patient.gender}
              handlePatientData={() => handlePatientData(patient._id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;

{
  /* <div
style={{
  width: "inherit", //   height: "48px",
  backgroundColor: "white",
  paddingBottom: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  //   overflow: "hidden",
  outline: "2px solid blue",
}}
>
<img
  src={Layer8}
  style={{
    backgroundColor: "white",
    width: "48px",
    height: "48px",
  }}
/>
<div style={{ backgroundColor: "white" }}>
  <p
    style={{
      backgroundColor: "white",
      color: "#072635",
      font: "normal normal bold 14px/19px Manrope",
      opacity: 1,
    }}
  >
    Emily Williams
  </p>
  <p
    style={{
      backgroundColor: "white",
      font: "normal normal normal 14px/19px Manrope",
      color: "#707070",
      opacity: 1,
    }}
  >
    Female, 18
  </p>
</div>
<div style={{ backgroundColor: "white", position: "relative" }}>
  <img
    src={MoreHz}
    style={{
      backgroundColor: "white",
      //   marginRight: "30px",
      position: "absolute",
      //   marginRight: "-30px",
    }}
  />
</div>
</div> */
}
