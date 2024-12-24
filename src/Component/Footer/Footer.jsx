import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <>
 


<footer className="footer">
      <div className="footer-content">
        <div className="footer-block col-lg-3 col-mg-3">
          <h3>About Us</h3>
          <p>We are passionate gamers dedicated to providing the best gaming experience.</p>
        </div>

        <div className="footer-block col-lg-3 col-mg-3">
          <h3>Game & Event</h3>
          <p>Uppcoming Event</p>
          <p>Live Streaming</p>
          <p>Game Fest 2024</p>
          <p>Pixel Party</p>
        </div>

        <div className="footer-block col-lg-3 col-mg-3">
        <h3>Terms & Policies</h3>
        <p>Policies</p>
        <p>Terms of Use</p>
        <p>Support</p>
        <p>Privacy</p>
        </div>
        
        <div className="footer-block col-lg-3 col-mg-3">
        <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/choudhary.harsh09/" className="icon-link">
              <BsInstagram size={40}/>
            </a>
            <a href="#!" className="icon-link">
              <FiTwitter size={40}/>
            </a>
            <a href="#!" className="icon-link">
              <FaFacebookF size={40}/>
            </a>
            <a href="https://www.linkedin.com/in/harshkc305/" className="icon-link">
              <FaLinkedin size={40}/>
            </a>
            
          </div>
          <form>
    <div class="form-group sub-form">
    <input type="email" name="email" placeholder="Subscribe Me" className="form-control footer-control" />
      <div class="input-group-append">
      <button type="button" class="btn btn-primary footer-btn">Subscribe</button>
      </div>
    </div>
  </form>
        </div>
      </div>
      <div className="footer-bottom">
        
        <p>&copy; 2024 Harsh Choudhary. All rights reserved.</p>
      </div>
    </footer>

    

    </>
  );
}
