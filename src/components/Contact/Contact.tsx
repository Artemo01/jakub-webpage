import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (userEmail !== '' && userMessage !== '') {
      setIsValid(false);
      emailjs
        .sendForm(
          'service_63bq8eq',
          'template_qig5ii1',
          form.current,
          'V1fMqq_Dvcn7Zlxus'
        )
        .then(
          (result) => {
            console.log(result.text);
            setUserName('');
            setUserEmail('');
            setUserMessage('');
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className="contact-wrapper">
      <h2 className="contact-header">Contact</h2>
      <div className="contact-container">
        <form className="contact-form" ref={form}>
          <label>Name</label>
          <input
            type="text"
            name="to_name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label>Email *</label>
          <input
            type="email"
            name="from_name"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
          <label>Message *</label>
          <textarea
            name="message"
            value={userMessage}
            onChange={(e) => {
              setUserMessage(e.target.value);
            }}
          />
          <button className="contact-submit" onClick={sendEmail}>
            Send
          </button>
          {isValid && (
            <p className="error-message">
              Incorrect information. Please fill email and message fields
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
