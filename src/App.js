import './App.css';
import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import SocialMedia from './components/SocialMedia'; // Sosyal Medya Bileşeni

function App() {
  return (
    <div>
      <PersonalInfo />
      <Education />
      <Experience />
      <Skills />
      <Hobbies />
      <SocialMedia /> {/* Sosyal Medya Bölümü */}
    </div>
  );
}

export default App;
