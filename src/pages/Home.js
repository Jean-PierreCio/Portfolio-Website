import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className= "home">
        <div className = "about">
            <h2>Hi, My Name iss Jean-Pierre Ciotta</h2>
            <div className="prompt">
                <p> A software developer with curiosity and pasion!</p>
                <LinkedInIcon />
                <EmailIcon />
                <GitHubIcon />
            </div>
        </div>
        <div className= "skills">
        <h1>Skills</h1>
        <ol className="list">
            <li className="item">
                <h2>Languages</h2>
                <span>
                    C, Java
                </span>
            </li>
            <li className="item">
                <h2>Personal</h2>
                <span>
                    Soccer, gym
                </span>
            </li>
        </ol>
        </div>
    </div>
  );
}

export default Home;
