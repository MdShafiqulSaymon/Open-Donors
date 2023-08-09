import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import TextInput from "../components/Inputs/TextInput";
import ImageInput from "../components/Inputs/ImageInput";
import PhoneNumberInput from "../components/Inputs/PhoneNumberInput";
import BloodGroupInput from "../components/Inputs/BloodGroupInput";
import AgeInput from "../components/Inputs/AgeInput";
import DivisionInput from "../components/Inputs/DivisionInput";
import SubmitButton from "../components/Buttons/SubmitButton";
import divisiondata from "../api/divisions.json";
import districtdata from "../api/districts.json";
import DistrictInput from "../components/Inputs/DistrictInput";
import { CSSTransition } from "react-transition-group";
import filterJSON from "../components/FilterJSON";
import "../styles/animation.css";

const CompleteReg = () => {
  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastname] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState(0);
  const [blood, setBlood] = useState("");
  const [divisionId, setDivisionID] = useState("");
  const [district, setDistrict] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [imageBase64, setImageBase64] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = margeData();
    try {
      const request = await fetch(
        "https://open-donors.onrender.com/completereg",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        }
      );
      if (request.status === 400) {
        alert("Email or Phone Number Already Exist!");
      } else if (request.status === 200) {
        alert("Registration Successfull !!!");
        navigate("/signin");
      }
      const response = await request.json();
    } catch {
      console.error("Error:");
    }
  };
  const handleDivisionChange = (value) => {
    setDivisionID(value);
  };
  const handleDistrictChange = (value) => {
    setDistrict(value);
  };
  const handleAgeChange = (newAge) => {
    setAge(newAge);
  };

  useEffect(() => {
    if (
      FirstName &&
      LastName &&
      dob &&
      phone &&
      age &&
      age >= 18 &&
      blood &&
      divisionId &&
      district
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [FirstName, LastName, dob, age, blood, divisionId, district]);

  // Marging data which get from signUp form and CompleteReg data
  const location = useLocation();
  const margeData = () => {
    const signUpdata = location.state
      ? location.state
      : {
          email: "user@gmail.com",
          password: "asdfghjkl3#",
          confirmPassword: "asdfghjkl3#",
        };
    const finalUserData = {
      email: signUpdata.email,
      password: signUpdata.password,
      confirmPassword: signUpdata.confirmPassword,
      FirstName,
      LastName,
      phone,
      dob,
      age,
      blood,
      divisionId,
      district,
      activeStatus: false,
      imageBase64,
    };
    return finalUserData;
  };
  return (
    <div
      className="flex flex-col min-h-screen p-10 bg-center bg-cover bg-black bg-opacity-50"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/CompleteRegBG.jpg), linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
      }}
    >
      <CSSTransition
        in={true}
        appear={true}
        timeout={1000}
        classNames="swipeDown"
      >
        <div className="m-auto md:w-1/2 lg:w-1/3 flex justify-center items-center bg-white bg-opacity-50 p-5 rounded-lg backdrop-blur-md">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <ImageInput className="mb-2" />
            </div>
            <TextInput
              className="mb-2"
              label="First Name"
              value={FirstName}
              setValue={SetFirstName}
              placeholder="Enter First Name"
            />
            <TextInput
              className="mb-2"
              label="Last Name"
              value={LastName}
              setValue={SetLastname}
              placeholder="Enter Last Name"
            />
            <PhoneNumberInput phone={phone} setPhone={setPhone} />
            <AgeInput
              className="mb-2"
              dob={dob}
              setDob={setDob}
              age={age}
              setAge={setAge}
              handleAgeChange={handleAgeChange}
            />
            <BloodGroupInput
              className="mb-2"
              blood={blood}
              setBlood={setBlood}
            />
            <DivisionInput
              className="mb-2"
              divisions={divisiondata}
              onChange={handleDivisionChange}
            />
            <DistrictInput
              className="mb-2"
              districts={districtdata}
              divisionId={divisionId}
              onChange={handleDistrictChange}
            />
            <SubmitButton
              isFormValid={isFormValid}
              text="Complete Registration"
            />
          </form>
        </div>
      </CSSTransition>
    </div>
  );
};
export default CompleteReg;
