import React, { useRef } from "react";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
init(process.env.ID);

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_7ne0dsa",
        "template_xsf3enb",
        form.current,
        "VEagWGptRPGpeEltt"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = " <p class = 'succes'> Message envoyé </p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            " <p class = 'error'> Une erreur s'est produite veuillez réessayer </p>";
          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2000);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
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
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
