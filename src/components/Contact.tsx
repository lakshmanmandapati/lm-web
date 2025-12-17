import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <button className="contact-button">Contact</button>
          <h1 className="contact-heading">Lets get in touch!</h1>
          <p className="contact-text">
            DM on <a href="https://x.com/lakshmandotenv" target="_blank" rel="noopener noreferrer" className="x-link">X</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;