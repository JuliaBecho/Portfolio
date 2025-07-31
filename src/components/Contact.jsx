import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILSERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId,  form.current, {
        publicKey: publicKey ,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
         title: "Mensage was sent!",
         icon: "success",
         draggable: true
});
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "Something went wrong!",
         
});
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};