import React from "react"
import Footer from "./Footer"

function AboutUs(){
    return(
        <>
        <div className="aboutText">
            <h3>Our Mission & Vision</h3>
            <p>To serve more than 100 million people with the healthy, delicious and ready-to-eat food products.</p>
            <p>To achieve continuous business growth together with our stakeholders including farmers, exporters and distributors.</p>
            <p>We strive to be the best company in India for peanut butter and related products. We endeavor to achieve this goal by providing competitive products in all means.</p>
        </div>
        <div className="aboutImage">
            <img src="/images/aboutbanner1.webp"/>
            <img src="/images/aboutbanner2.webp"/>
        </div>
        <Footer/>
        <p className='chatInfo'>
        <a href=""><span><i className="fa-brands fa-whatsapp"></i></span><span className='text' >&nbsp;
          chat with us</span></a>
      </p>

        </>
    )
}

export default AboutUs