import React from "react";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <div className="contactP">
        <img src="/images/contact.webp" alt="Contact" />
      </div>
      <div className="c-detail mb-5">
        <div>
          <h4 className="text-start mb-3 mt-0">SAY HELLo!</h4>
          <p><h6>Company-</h6> Das Foodtech Pvt Ltd</p>
          <p><h6>Email-</h6>support@pintola.in</p>
          <p><h6>Phone-</h6>91 78080 58080‬</p>
          <p><h6>Corporate Office-</h6>304-305 Ganesh Glory, Jagatpur,
            SG Highway Ahmedabad- 382481</p>
          <p><h6>Manufacturing Unit-</h6> Block No. 1234, Salal-Sonasan Road, At. Sonasan, Ta. Prantij, Dist, Himatnagar, Gujarat 383210</p>
          <p><h6>Working Days-</h6> Monday to Saturday</p>
          <p><h6>Timing-</h6>9am to 6pm</p>
          <h5>Follow Us</h5>
          <div className='d-flex gap-2'>
            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="form">
          <form>
            <p>We'd love to hear from you! Fill out our contact form to get in touch with our team.</p>
            <select className="form-select" required>
              <option value="What can we help with?" disabled   >What can we help with?</option>
              <option value="For Dealership inquiries">For dealership inquiries</option>
              <option value="For Export inquiries">For Export inquiries</option>
              <option value="Feedback">Feedback</option>
            </select>
            <div className="form-floating mb-3 mt-3">
              <input type="text" className="form-control" id="name" placeholder="Name" name="name" required/>
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input type="tel" className="form-control" id="PhoneNumber" placeholder="Phone Number" name="PhoneNumber" required/>
              <label htmlFor="PhoneNumber">Phone Number</label>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input type="text" className="form-control" id="Area" placeholder="Area/City" name="Area" required/>
              <label htmlFor="Area">Area/City</label>
            </div>
            <div className="form-floating mb-3 mt-3">
              <input type="text" className="form-control" id="Country" placeholder="Country(for export)" name="Country" required/>
              <label htmlFor="Country">Country (for export)</label>
            </div>
            <div className="form-floating">
              <textarea className="form-control" id="comment" name="text" placeholder="Message goes here" required></textarea>
              <label htmlFor="comment">Comments</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14637.008674032642!2d72.915241!3d23.487425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dc66cd0000001%3A0xabd344b9cbc5a45!2sDas%20Foodtech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1742840873615!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <p className='chatInfo'>
        <a href=""><span><i className="fa-brands fa-whatsapp"></i></span><span className='text' >&nbsp;
          chat with us</span></a>
      </p>
      <Footer/>
    </>
  );
}

export default Contact;