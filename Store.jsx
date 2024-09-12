import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  patientData: localStorage.getItem("patientData")
    ? JSON.parse(localStorage.getItem("patientData"))
    : {},

  patientsData: localStorage.getItem("patientsData")
    ? JSON.parse(localStorage.getItem("patientsData"))
    : [],
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PATIENT_DATA":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_PATIENT_SUCCESS":
      return {
        ...state,
        patientData: action.payload,
        isLoading: false,
      };
    case "FETCH_PATIENTS_SUCCESS":
      return {
        ...state,
        patientsData: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { cart, cartItems } = state;
  const value = { state, dispatch }; //saving the values in a const called value
  return <Store.Provider value={value}>{children}</Store.Provider>; //this fn whereever called will have our values from the store
}
