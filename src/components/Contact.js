
import { Container, Row, Col } from "react-bootstrap";
import anime from "../assets/img/animate.json";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Lottie from "lottie-react";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mfvwje8', 
    'template_4qjxlzr', 
    form.current, 
    'eN3_U30L8bmidOnQu')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent");
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <Lottie  animationData={anime} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name" placeholder="First Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="last_name" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" placeholder="E-mail" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone_no" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message"></textarea>
                      <button type="submit" value ="Send">Submit</button>
                    </Col>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}