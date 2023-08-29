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

          <a href = "https://www.linkedin.com/in/jean-pierre-ciotta-530349225/" >
                    <LinkedInIcon />
          </a>
          <a href = "https://github.com/Jean-PierreCio" >
          <GitHubIcon />
          </a>
            
            <EmailIcon />
            
        </div>
        <p> &copy; 2023 jpciotta.tech</p>
    </div>
  )
}

export default Footer
