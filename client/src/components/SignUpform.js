import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import { Link } from "react-router-dom";
import PasswordInput from "./Inputs/PasswordInput";
import BloodGroupInput from "./Inputs/BloodGroupInput";
import PhoneNumberInput from "./Inputs/PhoneNumberInput";
import EmailInput from "./Inputs/EmailInput";
import DobInput from "./Inputs/DateOfBirthInput";
import SubmitButton from "./Buttons/SubmitButton";
import { CSSTransition } from "react-transition-group";
import "../styles/animation.css";
const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      email &&
      password &&
      confirmPassword &&
      password.length >= 9 &&
      password === confirmPassword
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password, confirmPassword]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      confirmPassword,
    };
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    if (data != null) {
      console.log(data);
      return navigate("/completereg", { state: data });
    }
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
            <h2 className="text-xl mb-4">Sign Up</h2>
            <EmailInput
              label="Email"
              placeholder="Email"
              name="Email"
              value={email}
              setValue={setEmail}
            />
            <PasswordInput
              label="Password"
              value={password}
              setValue={setPassword}
              placeholder="Password"
            />
            <PasswordInput
              label="Confirm Password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              placeholder="Confirm Password"
              otherValue={password}
            />
            <div className="flex items-center justify-between mb-4">
              <SubmitButton
                isFormValid={isFormValid}
                text="Sign Up!"
                onSubmit={handleSubmit}
              />
              <a href="#" className="text-blue-600 hover:text-blue-400">
                <Link to="/signin">Already have an account? Sign In</Link>
              </a>
            </div>
          </form>
          <div></div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default SignUpForm;
