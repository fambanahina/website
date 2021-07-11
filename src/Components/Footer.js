import React from "react";
import {} from "react-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper wrapper">
        <hr />

        <div className="developer">
          {" "}
          &copy; {new Date().getFullYear()} Developed by
          <a href="http://ntwanano.me"> Ntwanano Rikhotso</a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
