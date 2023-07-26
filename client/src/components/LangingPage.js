import React, { useState } from 'react';
import HeroSection from './HeroSection';
import SignInSignUpButtons from './SignInSIngUpButton';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpform';

const LandingPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleButtonClick = (isSignIn) => {
    setIsSignIn(isSignIn);
  };

  return (
    <div className="blood-donation-landing-page">
      <div className="section container mx-auto py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full ">
            <HeroSection />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 flex flex-col justify-center">
            <SignInSignUpButtons
              isSignIn={isSignIn}
              handleButtonClick={handleButtonClick}
            />
            {isSignIn ? <SignInForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
