import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";

init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_ggmes7h",
        "template_i89497c",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'> Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p class='error'> Une erreur est survenue, veuillez réessayer.</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="socialnetworks-container">
        <a href="https://github.com/Tiknock">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="linkedin.com">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Name</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Send" className="btn button" />
      </form>
      <div className="form-message"></div>
    </section>
  );
};

export default ContactForm;
