import React from 'react';

const SignInSignUpButtons = ({ isSignIn, handleButtonClick }) => {
  return (
    <>
    <div className="button-group flex flex-row items-center justify-evenly bg-white py-2 rounded-full ">
      <button
        className={`relative inline-flex items-center justify-center px-4 py-2 border-0 rounded-md bg-slate-400 text-black ${
          isSignIn ? 'shadow-md bg-white' : 'shadow'} border-t-4 border-l-4 border-transparent hover:border-blue-400`}
        onClick={() => handleButtonClick(true)}
      >
        Sign In
      </button>

      <button
        className={`relative inline-flex items-center justify-center px-4 py-2 border-0 rounded-md bg-slate-400 text-black ${
          !isSignIn ? 'shadow-md bg-white' : 'shadow'} border-t-4 border-l-4 border-transparent hover:border-blue-400 ` }
        onClick={() => handleButtonClick(false)}
      >
        Sign Up
      </button>
      
    </div>
    </>
  );
};

export default SignInSignUpButtons;
// relative inline-flex items-center justify-center px-4 py-2 border-0 rounded-md bg-white text-black ${
//   isClicked ? 'shadow-md' : 'shadow'
// `mb-2 py-2 px-4 rounded ${
//   isSignIn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
// }
// `relative inline-flex items-center justify-center px-4 py-2 border-0 rounded-md bg-white text-black ${
//   isSignIn ? 'shadow-md' : 'shadow'} border-t-4 border-l-4 border-transparent hover:border-gray-400`