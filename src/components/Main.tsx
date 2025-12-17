import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "AI Generalist";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed: 100ms per character

    return () => clearInterval(typingInterval);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530); // Blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://res.cloudinary.com/douyafnuf/image/upload/v1765986591/21EBC16D-3CA7-4BDB-B039-51827832B9EF_4_5005_c_gmx0do.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/lakshmanmandapati" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/lakshman-mandapati-679236241/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Lakshman Mandapati</h1>
          <p className="typing-text">
            {displayedText}
            <span className={`typing-cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/lakshmanmandapati" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/lakshman-mandapati-679236241/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;