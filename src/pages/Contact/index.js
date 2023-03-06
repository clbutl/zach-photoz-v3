import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFormChange = (event, val, index) => {
    const { name, value } = event.target
    console.log(name + ": ", value)

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const SERVICE_ID = process.env.SERVICE_ID;
  const TEMPLATE_ID = process.env.TEMPLATE_ID;
  const ACCOUNT_ID = process.env.ACCOUNT_ID;
  const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, ACCOUNT_ID)
      .then((result) => {
        console.log(result)
        // window.location.reload()
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <motion.div 
      className="main-contact-div"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}  
    >
      {/* Contact ME Form */}
      <form 
        onSubmit={sendEmail}
      >
        <h1 className="form-header">Contact</h1>
        {/* First and Last */}
        <div className="form-div first-last-div">
          {/* First Name */}
          <div className="input-div">
            <input
              id="first-name-from"
              name="firstName"
              required={true}
              onChange={handleFormChange}
            />
            <h3>First Name<span className="red-text">*</span></h3>
          </div>
          {/* Last Name */}
          <div className="input-div">
            <input
              id="last-name-from"
              name="lastName"
              onChange={handleFormChange}
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
            type='email'
            onChange={handleFormChange}
          />
          <h3>Email<span className="red-text">*</span></h3>
        </div>
        {/* Subject */}
        <div className="form-div input-div">
          <input
            id="subject-from"
            name="subject"
            required={true}
            onChange={handleFormChange}
          />
          <h3>Subject<span className="red-text">*</span></h3>
        </div>
        {/* Message */}
        <div className="form-div input-div">
          <textarea
            id="message-from"
            name="message"
            required={true}
            onChange={handleFormChange}
            type='text'
          >
            </textarea>
          <h3>Message<span className="red-text">*</span></h3>
        </div>
        <div className="submit-div">
          <motion.button
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: .9 }} 
            type="submit"
          >
              Submit
          </motion.button>
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
    </motion.div>
  )
}

export default Contact;