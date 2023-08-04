import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faGooglePlus,faGithub, faLinkedin, faTwitter, faGit } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 bg-red-500 w-full py-8 text-black">
      <div className="flex flex-col items-center justify-center">
        
       
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-black border border-black rounded-full p-2 hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg"/>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black border border-black rounded-full p-2 hover:bg-black hover:text-white"
            >
              {/* <i className="fab fa-twitter text-xl"></i> */}
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black border border-black rounded-full p-2 hover:bg-black hover:text-white"
            >
              {/* <i className="fab fa-google-plus text-xl"></i> */}
              <FontAwesomeIcon icon={faGooglePlus} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black border border-black rounded-full p-2 hover:bg-black hover:text-white"
            >
              {/* <i className="fab fa-youtube text-xl"></i> */}
              <FontAwesomeIcon icon = {faGithub} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-black border border-black rounded-full p-2 hover:bg-black hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
      <h3 className="text-lg font-semibold capitalize text-center mt-5">
          Copyright by Open-Donors @2023 | All rights reserved
        </h3>
    </footer>
  );
};

export default Footer;
