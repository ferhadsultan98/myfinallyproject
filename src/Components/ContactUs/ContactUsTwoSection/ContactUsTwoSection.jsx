import React, { useEffect } from "react";
import './ContactUsTwoSection.css'
import Aos from "aos";
import "aos/dist/aos.css";

const ContactUsTwoSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 120,
      duration: 2000,
      easing: "ease",
      once: true,
    });
  }, []);
  return (
   <div className="ContactUsTwoSectionContainer" data-aos="fade-up"
   data-aos-anchor-placement="center-center">
    <h1>Feel Free to Contact with Us</h1>
    <form action="#">
    <div className="ContactUsTwoSectionTopInputs">
        <input type="text" placeholder='Name' required/>
        <input type="email" placeholder='Email' required/>
    </div>
    <div className="ContactUsTwoSectionBottomInputs">
    <input type="text" placeholder='Phone' required/>
    <input type="text" placeholder='Subject' required/>
    </div>
    <textarea name="textarea" required></textarea>
    <button type='submit'>Submit</button>
    </form>
   </div>

  
  )
}

export default ContactUsTwoSection