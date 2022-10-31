import React from "react";
import "../styles/contact.css";
import emailimage from "../images/emailimage.jpg";
import phoneimage from "../images/phoneimage.jpg";
import locationimage from "../images/locationimage.jpg";
import fb from "../images/fb.png";
import twit from "../images/twit.png";
import insta from "../images/insta.png";
import india from "../images/india.png";
import downmark from "../images/downmark.png";


function ContactInfo() {
    return (
        <div className="main-container">
            <div className="container-block1">
                <div className="contact-heading">Contact Information
                </div>
                <div className="email-logo">
                    <img src={emailimage} alt="email" width="50px" height="50px" />
                    <div className="email-tag">Email:
                        <div className="email-link">sunilraj@baladibuilders.com</div>
                    </div>
                </div>
                <div className="phone-logo">
                    <img src={phoneimage} alt="phone" width="50px" height="50px" />
                    <div className="phone-tag">Phone:
                        <div className="phone-no">+918792694702  | +918496894702 </div>
                    </div>
                </div>
                <div className="map-logo">
                    <img src={locationimage} alt="map" width="50px" height="50px" />
                    <div className="map-tag">Location:
                        <div className="phone-no">No-657, 3rd Stage, 3rd Block, Basaveshwara Nagar, Bangalore -560079 </div>
                    </div>
                </div>
                <div className="contact">Contact Us</div>
                <div className="social-fb">
                    <img src={fb} alt="fb" width="33px" height="33px" />
                </div>
                <div className="social-twit">
                    <img src={twit} alt="twit" width="33px" height="33px" />
                </div>
                <div className="social-insta">
                    <img src={insta} alt="insta" width="33px" height="33px" />
                </div>

            </div>

            <div className="contact-block2">
                <div className="contact-heading2">Send Us a Message</div>
                <div className="contact-line1">Full Name
                    <input type="text" placeholder="Eg. Kiran Kumar" />
                </div>
                <div className="contact-line2">Phone Number
                    <input type="text" placeholder="             Phone Number" />
                    <div className="image">
                        <img src={india} alt="img" width="22px" height="22px" />
                        <img src={downmark} alt="mark" width="12px" height="12px" />
                    </div>

                </div>
                <div className="contact-line3">Email
                    <input type="text" placeholder="Eg. kirankumar1234@gmail.com" />
                </div>
                <div className="contact-line4">Message
                    <input type="text" placeholder="Message" />
                </div>
                <div className="submit">
                    <button type="submit" width="100%">CONNECT</button>
                </div>
            </div>
        </div >
    )
}

export default ContactInfo;