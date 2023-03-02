import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

const Contact = () => {


  return (
    <div className="main-contact-div">
      {/* Contact ME Form */}
      <form>
        <h1 className="form-header">Contact</h1>
        {/* First and Last */}
        <div className="form-div first-last-div">
          {/* First Name */}
          <div className="input-div">
            <input
              id="first-name-from"
              name="firstName"
              required={true}
            />
            <h3>First Name<span className="red-text">*</span></h3>
          </div>
          {/* Last Name */}
          <div className="input-div">
            <input
              id="last-name-from"
              name="lastName"
            />
            <h3>Last Name</h3>
          </div>
        </div>
        {/* Email */}
        <div className="form-div input-div">
          <input
            id="email-from"
            name="email"
            required={true}
          />
          <h3>Email<span className="red-text">*</span></h3>
        </div>
        {/* Subject */}
        <div className="form-div input-div">
          <input
            id="subject-from"
            name="subject"
            required={true}
          />
          <h3>Subject<span className="red-text">*</span></h3>
        </div>
        {/* Message */}
        <div className="form-div input-div">
          <input
            id="message-from"
            name="message"
            required={true}
          />
          <h3>Message<span className="red-text">*</span></h3>
        </div>
        <div className="submit-div">
          <button type="submit">Submit</button>
        </div>
        <div className="contact-bottom-links">
          <Link className="contact-links" target='_blank' onClick={() => {
            window.location = 'mailto:cannonlbutler@gmail.com';
          }}>
            <h1>cannonlbutler@gmail.com</h1>
          </Link>
          <Link className="contact-links" target='_blank' onClick={() => {
            window.open('https://www.instagram.com/zach__photoz/', '_blank')
          }}>
            <h1>@zach__photoz</h1>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Contact;