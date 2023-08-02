import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/common/header/Header";
import TextInput from "../components/Inputs/TextInput";
import DivisionInput from "../components/Inputs/DivisionInput";
import DistrictInput from "../components/Inputs/DistrictInput";
import SubmitButton from "../components/Buttons/SubmitButton";
import divisiondata from "../api/divisions.json";
import districtdata from "../api/districts.json";
import PasswordInput from "../components/Inputs/PasswordInput";
const EditAccountInfo = () => {
  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastname] = useState("");
  const [divisionId, setDivisionID] = useState("");
  const [district, setDistrict] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (FirstName && LastName && divisionId && district) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [FirstName, LastName, divisionId, district]);
  const handleActiveToggle = () => {
    setIsActive(!isActive);
  };
  const handleDivisionChange = (value) => {
    setDivisionID(value);
  };
  const handleDistrictChange = (value) => {
    setDistrict(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="mb-4"></div>
      <form className="w-full pr-5 pl-5" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center px-4 py-2">
          <span className="text-lg text-black">Set Active Status</span>
          <div
            onClick={handleActiveToggle}
            className={`w-20 h-9 rounded-full p-1 ${
              isActive ? "bg-green-400" : "bg-red-400"
            }`}
          >
            <div
              className={`transform ${
                isActive ? "translate-x-9" : "translate-x-0"
              } transition-transform duration-200 ease-in-out bg-white w-8 h-7 rounded-full`}
            ></div>
            <div className="mt-2">
              {isActive ? <span className="">Active</span> : "Inactive"}
            </div>
          </div>
        </div>
        <div className="mb-4"></div>
        <div className="mb-4">
          <TextInput
            className="mb-2"
            label="First Name"
            value={FirstName}
            setValue={SetFirstName}
            placeholder="Enter First Name"
          />
        </div>
        <div className="mb-4"></div>
        <TextInput
          className="mb-2"
          label="Last Name"
          value={LastName}
          setValue={SetLastname}
          placeholder="Enter Last Name"
        />
        <div className="mb-4"></div>
        <DivisionInput
          className="mb-2"
          divisions={divisiondata}
          onChange={handleDivisionChange}
        />
        <div className="mb-4"></div>
        <DistrictInput
          className="mb-2"
          districts={districtdata}
          divisionId={divisionId}
          onChange={handleDistrictChange}
        />
        <div className="mb-4"></div>
        <PasswordInput
          label="Enter your password to update changes"
          value={password}
          setValue={setPassword}
        />
        <SubmitButton isFormValid={isFormValid} text="Update" />
      </form>
    </>
  );
};
export default EditAccountInfo;
