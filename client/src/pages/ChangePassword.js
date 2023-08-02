import React, { useEffect, useState } from "react";
import PasswordInput from "../components/Inputs/PasswordInput";
import Header from "../components/common/header/Header";
import SubmitButton from "../components/Buttons/SubmitButton";
const ChangePassword = ()=>{
    const [oldpassword, setOldPassword] = useState('')
    const [newpassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
      };
      useEffect (()=>{
        if(oldpassword && newpassword && confirmPassword){
            setIsFormValid(true)
        }
        else{
            setIsFormValid(false);
        }
      }, [oldpassword, newpassword, confirmPassword])
    return(
        <>
      <Header />
      <div className="mb-4"></div>
      <form className="w-full pr-5 pl-5" onSubmit={handleSubmit}>

        <div className="mb-4"></div>
        <PasswordInput
          label="Enter old password"
          value={oldpassword}
          setValue={setOldPassword}
        />
        <div className="mb-4"></div>
        <PasswordInput
          label="Enter new password"
          value={newpassword}
          setValue={setNewPassword}
        />
        <div className="mb-4"></div>
        <PasswordInput
          label="Confirm new password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          otherValue={newpassword}
        />
        <SubmitButton isFormValid={isFormValid} text="Change Password" />
      </form>
    </>
    )

}
export default ChangePassword;