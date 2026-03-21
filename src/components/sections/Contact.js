import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get in Touch" />

        <div className="row">
          <div className="col-md-12">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Let's talk about everything!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Send me an{" "}
                  <a href="mailto:lwinkyawkyaw857@example.com">email</a>. 👋
                </p>
                <h3>Address!</h3>
                <p>
                  No 51, 135 street, Tamwe Township, Yangon.
                </p>
                <p>
                   lwinkyawkyaw857@gmail.com
                </p>
                <p>
                   Ph: <a href="tel:+959798330049">+95 9798330049</a>
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
