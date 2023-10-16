import React from "react";
import FooterLogo from "../../assets/FooterLogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <div className=" h-98 text-white bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="flex text-lg py-14 justify-around">
        <div>
          <img src={FooterLogo} alt="logo" />
          <p>
            India's first platform dedicated to <br /> simplifying partner
            search
          </p>
        </div>
        <ul>
          <li>
            <b>COMPANY</b>
          </li>
          <li>About</li>
          <li>Pricing</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li>
            <b>SOLUTIONS</b>
          </li>
          <li>Search</li>
          <li>Connect</li>
          <li>Research</li>
          <li>Academy</li>
        </ul>
        <ul>
          <li>
            <b>RESOURCES</b>
          </li>
          <li>Blogs</li>
          <li>Forms</li>
        </ul>
        <ul>
          <li>
            <b>SUPPORT</b>
          </li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>
            <b>LEGAl</b>
          </li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Accessibility</li>
        </ul>
      </div>
      {/* Divider line */}
      <hr className="mx-32" />
      <div className="flex mx-32 justify-between my-14">
        <p className="text-lg">
          Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
          Maharashtra
        </p>
        <div className="flex scale-150 gap-10 mx-10">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn />
          <FaWhatsapp />
        </div>
      </div>
      <div className="bg-black h-16 text-center py-5 text-white">
        Registered trademark of India Private Limited © 2023 loerumipsum Inc.
        All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
