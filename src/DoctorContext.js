import React, { createContext, useState, useContext } from "react";

const DoctorContext = createContext();

export const useDoctor = () => {
  return useContext(DoctorContext);
};

export const DoctorProvider = ({ children }) => {
  const [doctor, setDoctor] = useState(null);

  const setDoctorData = (data) => {
    setDoctor(data);
  };

  return (
    <DoctorContext.Provider value={{ doctor, setDoctorData }}>
      {children}
    </DoctorContext.Provider>
  );
};
