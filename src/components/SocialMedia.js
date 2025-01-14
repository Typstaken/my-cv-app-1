import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div>
      <h2>Sosyal Medya</h2>
      <div className="social-icons">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/emir-%C3%BClker-8a208728a/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        {/* Twitter (X) */}
        <a 
          href="https://x.com/mystroby?s=11" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/emirrulkerr?igsh=N3poZWxiMzA4dGJu" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
