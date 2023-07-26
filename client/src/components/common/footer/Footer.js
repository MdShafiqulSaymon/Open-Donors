import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="leftrow">
            <h1>Search Everything, Know Everything</h1>
            <span>"Everything starts from here"</span>
          </div>
          <div className="rightrow">
            <input type="text" placeholder="Search anything" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>CUET SCHOLAR</h1>
            <span>ONLINE EDUCATION & RESEARCH</span>
            <p>
              An approach to help students of CSE Dept. with all the published
              and undergrad thesis and project works
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          
          
        </div>
      </footer>
      <div className="legal">
        <p>© Copyright Chittagong University of Engineering & Technology</p>
      </div>
    </>
  );
};

export default Footer;
