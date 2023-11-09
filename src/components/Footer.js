import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import maps from '../images/maps-icon.png';
import mail from '../images/mail-icon.png';
import phone from '../images/phone-icon.png';

export const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ijo0aiq',
        'template_c76btxq',
        form.current,
        'tkRS7dk8U931q0msI'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer>
      <form ref={form} onSubmit={sendEmail}>
        <legend>Contacto</legend>
        <label htmlFor="name" className="hide">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nombre"
          required
          autoComplete="off"
        />

        <label htmlFor="email" className="hide">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
          autoComplete="off"
        />

        <label htmlFor="tel" className="hide">
          Teléfono
        </label>
        <input
          id="tel"
          type="tel"
          name="tel"
          placeholder="Teléfono"
          required
          autoComplete="off"
        />

        <label htmlFor="message" className="hide">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Mensaje"
          autoComplete="off"
        />

        {/* <input id="checkbox" type="checkbox" required />
        <label htmlFor="checkbox">
          Antes de enviar su solicitud, lea y acepte nuestra información básica
          sobre protección de datos, contenida en nuestra políticas de
          privacidad.
        </label>
  */}
        <button type="submit">ENVIAR</button>
      </form>
      <ul id="data">
        <li className="contactli">
          <img className="icon" src={maps} alt="maps icon"></img>
          <a href="https://maps.app.goo.gl/Za6RUbLAScvuhtsK9">
            Calle Miguel Moya,7, 29017, Málaga
          </a>
        </li>
        <li className="contactli">
          <img className="icon" src={mail} alt="mail icon"></img>
          <a href="mailto:comercial@moya7.es">comercial@moya7.es</a>
        </li>
        <li className="contactli">
          <img className="icon" src={phone} alt="phone icon"></img>
          <a href="tel:+34646423260">+34 646 42 32 60</a>
        </li>
      </ul>
    </footer>
  );
};
