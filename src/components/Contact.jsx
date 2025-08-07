import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import axios from 'axios';
import './Contact.css'; // CSS separado

export const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    try {
      const response = await axios.post(
        "https://formsubmit.co/bc26973229b7dfcf8e67770facc8cd41",
        formData,
        {
          headers: { 'Content-type': 'multipart/form-data' }
        }
      );

      Swal.fire({
        title: "Message was sent!",
        icon: "success",
        draggable: true
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in <span>Touch</span></h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> juliabecho@gmail.com</p>
          <p><strong>Phone:</strong> +1 (778) 246-5707</p>
          <p><strong>Location:</strong> Vancouver, BC, Canada</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitch"></i></a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h3>Send a Message</h3>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
