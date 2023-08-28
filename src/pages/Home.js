import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className= "home">
        <div className = "about">
            <h2>Ciao, My Name is Jean-Pierre Ciotta</h2>
            <div className="prompt">
                <p> A software developer with curiosity and passion!</p>
                <a href = "https://www.linkedin.com/in/jean-pierre-ciotta-530349225/" >
                    <LinkedInIcon />
                </a>

                <a href = "https://github.com/Jean-PierreCio" >
                    <GitHubIcon />
                </a>
                <EmailIcon />
             
            </div>
        </div>
        <div className= "skills">
        <h1>Skills</h1>
        <ol className="list">
            <li className="item">
                <h2>Languages</h2>
                <span>
                    <p>Strong: C, Java, Python </p>
                    <p>Basic: SQL, C++, JavaScript, Swift, R, HTML, React</p>
                </span>
            </li>
            <li className="item">
                <h2>Design</h2>
                <span>
                    <p>OnShape, Solid Works, and Simplify 3D </p>
                </span>
            </li>
            <li className="item">
                <h2>Personal</h2>
                <span>
                    Soccer(Calcio), Gym, Sailing, Biking, Rowing
                </span>
            </li>
        </ol>
        </div>
    </div>
  );
}

export default Home;
