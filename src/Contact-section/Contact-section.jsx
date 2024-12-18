import React from "react";
import "./Contact-section.css";

const Contact_section = () => {
  return (
    <>
      <div className="contact-section" id="contact">
        <div className="container">
          <div className="contact-section-inner">
            <div className="contact-upper">
              <p className="contactParagraph center-text-title">Let's Talk</p>
              <h2
                className="contactHeader center-text-heading"
                id="contact-heading"
              >
                Contact Us
              </h2>
              <div className="contact-down">
                <div className="contact-down-inner">
                  <form action="">
                    <div className="form-element">
                      <div className="form-element-inner">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-element">
                      <div className="form-element-inner">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-element">
                      <div className="form-element-inner">
                        <input
                          type="tel"
                          id="phone-number"
                          name="number"
                          placeholder="Your Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-element">
                      <div className="form-element-inner">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Your Subject"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-element">
                      <div className="form-element-inner" id="msg-text">
                        <textarea
                          id="msg-text-area"
                          name="Message"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                    </div>
                  </form>
                  <a className="message-button" id="message-now" href="#">
                    Send Message
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_section;
