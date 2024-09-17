import React, { useState } from "react";
import DiseaseList from "./DiseaseList";
import DepressionForm from "./DepressionForm";
import DiabetesForm from "./DiabetesForm";
import { diseases } from "../../Utils/constant";
import Hyper from "./Hyper";
<<<<<<< HEAD
import Adhd from "./Adhd";
=======
import { useSelector } from "react-redux";
import LoginSimmer from "../ShimmerPage/LoginSimmer";
>>>>>>> 728980c6ac8366c150f6cee16f509eb3c2e62936
const Services = () => {
  
  const [disease_no, setDisease_No] = useState(0);

  const handleClick = (index) => {
    setDisease_No(index);
  };

  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
if(isLoggedIn===false) return(<LoginSimmer />)

  return (
    <div className=" body-bg pt-32 px-20 flex justify-between pb-20">
      {/* <DiseaseList /> */}
      <div className=" w-1/4 bg-white px-5 py-10 rounded-md">
        <ul>
          {diseases.map((disease, index) => (
            <li
              key={index}
              className="mb-4 border border-black text-center px-5 py-2 rounded-md cursor-pointer"
              onClick={() => handleClick(index)}
            >
              {disease}
            </li>
          ))}
        </ul>
      </div>
      {disease_no === 0 && <DepressionForm />}
      {disease_no === 1 && <DiabetesForm />}
      {disease_no === 2 && <Hyper />}
      {disease_no === 3 && <Adhd />}
    </div>
  );
};

export default Services;
