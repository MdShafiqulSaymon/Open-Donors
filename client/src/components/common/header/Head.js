import React from "react"
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
        <div className='logo'>
          <h1>Open Donors</h1>
          <span>ONLINE-BASED OPEN BLOOD DONATION PLATFORM</span>
        </div>
          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className="fab fa-github icon"></i>
            <i className="fas fa-envelope icon"></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head;
