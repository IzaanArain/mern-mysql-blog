import React from "react";
import BlogLogo from "../../assets/img/blog_logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <img src={BlogLogo} alt="" />
        <span>Made with <b>React.js</b>.</span>
      </footer>
    </>
  );
};

export default Footer;
