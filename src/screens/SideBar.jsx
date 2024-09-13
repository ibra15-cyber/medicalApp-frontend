import { useContext, useEffect, useReducer } from "react";
import Search from "../assets/search_FILL0_wght300_GRAD0_opsz24.svg";

// import { data } from "../data";
import Profile from "./ui/Profile";
import axios from "axios";
import Loader from "../components/Loader";
import { Store } from "../../Store";

// const initialState = {
//   patients: [],
//   loading: true,
//   error: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_PATIENTS_DATA":
//       return {
//         ...state,
//         loading: true,
//       };

//     case "FETCH_SUCCESS":
//       return {
//         ...state,
//         patients: action.payload,
//         loading: false,
//       };

//     case "FETCH_FAILURE":
//       return {
//         ...state,
//         error: action.payload,
//         loading: false,
//       };

//     default:
//       return {
//         ...state,
//       };
//   }
// };
function SideBar() {
  const { state, dispatch } = useContext(Store);

  const fetchPatients = async () => {
    const backendAPI = import.meta.env.VITE_API_URL || "http://localhost:4000";
    try {
      dispatch({ type: "FETCH_PATIENT_DATA" }); // Set loading to true before fetching

      const response = await axios.get(
        `${backendAPI}/api/patients/66e35d7b315df0a96ed08f24/`
      );

      localStorage.setItem("patientData", JSON.stringify(response.data));
      const { data } = await axios.get(`${backendAPI}/api/patients/`);
      localStorage.setItem("patientsData", JSON.stringify(data));

      console.log(response.data);

      console.log(data);

      dispatch({ type: "FETCH_PATIENTS_SUCCESS", payload: data }); // Set loading to true before fetching
      dispatch({ type: "FETCH_PATIENT_SUCCESS", payload: response.data }); // Set loading to true before fetching
    } catch (e) {
      console.log(e);
      dispatch({ type: "FETCH_FAILURE", payload: e }); // Set loading to true before fetching
    }
  };

  // Handle selecting a patient (retrieving from localStorage)
  const handlePatientData = (patientId) => {
    dispatch({ type: "FETCH_PATIENT_DATA" }); // Set loading to true before fetching
    const selectedPatient = state.patientsData.find(
      (patient) => patient._id === patientId
    );
    if (selectedPatient) {
      localStorage.setItem("patientData", JSON.stringify(selectedPatient));
      dispatch({ type: "FETCH_PATIENT_SUCCESS", payload: selectedPatient }); // Dispatch data to the store
    } else {
      console.error("Patient not found in local storage");
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

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
          {state.isLoading ? (
            <Loader />
          ) : (
            state.patientsData.map((patient) => (
              <Profile
                key={patient._id}
                image={patient.profile_picture}
                name={patient.name}
                age={patient.age}
                sex={patient.gender}
                handlePatientData={() => handlePatientData(patient._id)}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default SideBar;
