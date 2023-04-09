import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com';


const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const ACCOUNT_ID = process.env.ACCOUNT_ID;


emailjs.init(ACCOUNT_ID);

const Contact = () => {
  const [currentSubject, changeCurrentSubject] = useState("")
  const [subjectDropdown, changeSubjectDropdown] = useState(false)
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFormChange = (event, val, index) => {
    const { name, value } = event.target

    setFormState({
      ...formState,
      [name]: value
    })
    console.log(...formState)
  }

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


  const onClickDropdown = () => {
    changeSubjectDropdown(!subjectDropdown)
  }

  const changeSubject = (e) => {
    if (e.target.id === "1") {
      changeCurrentSubject("Question")
      changeSubjectDropdown(!subjectDropdown)
      return;
    } else if (e.target.id === "2") {
      changeCurrentSubject("Scheduling")
      changeSubjectDropdown(!subjectDropdown)
      return;
    } else if (e.target.id === "3") {
      changeCurrentSubject("Other")
      changeSubjectDropdown(!subjectDropdown)
      return;
    } 
    return;
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
        <h2 className="form-subheader">I would love to hear from you! If you would like to schedule a session you can contact me by filling out this form! I will be sure to get back to you within 3 business days.</h2>
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
          <div className="input-div last-div">
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
          <div className="subject-div">
            <textarea
              className={currentSubject === "Other" ? "active-subject subject-input" : "inActive-subject subject-input"}
              id="subject-from"
              name="subject"
              required={currentSubject === "Other" ? true : false}
              onChange={handleFormChange}
              readOnly={currentSubject === "Other" ? "" : "readonly"}
              placeholder={currentSubject}
            >
            </textarea>
            <div onClick={onClickDropdown} className={subjectDropdown ? "dropdown-subject active-dropdown" : "dropdown-subject inActive-dropdown"}>
              <h1>V</h1>
            </div>
          </div>
          <h3>Subject<span className="red-text">*</span></h3>
        </div>

        {/* Subject Dropdown */}
        <div className={subjectDropdown ? "subject-dropdown-main" : "hidden"}>
          <div className="subject-dropdown-mid">
            <div>
              <h1 onClick={changeSubject} id="1">Questions</h1>
            </div>
            <div>
              <h1 onClick={changeSubject} id="2">Scheduling</h1>
            </div>
            <div>
              <h1 onClick={changeSubject} id="3">Other</h1>
            </div>
          </div>
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
            window.location = 'mailto:zachphotozz@gmail.com';
          }}>
            <h1>zachphotozz@gmail.com</h1>
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