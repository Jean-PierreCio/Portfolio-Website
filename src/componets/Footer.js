import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from  "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia"> 
            <LinkedInIcon />
            <GitHubIcon />
            <EmailIcon />
            <InstagramIcon />
        </div>
        <p> &copy; 2023 jpciotta.tech</p>
    </div>
  )
}

export default Footer
