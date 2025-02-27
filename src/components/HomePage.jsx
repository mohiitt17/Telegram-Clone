import React, { useState } from 'react';
import SlideBar from './SlideBar';
import Main from './Main';
import style from "./style.module.css";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = !isDarkMode ? '#212529' : '#f8f9fa';
  };

  return (
    <div className={`d-flex h-100 ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
     <SlideBar toggleDarkMode ={toggleDarkMode} isDarkMode ={isDarkMode} />
    <Main  isDarkMode ={isDarkMode} />
   </div>
  );
};

export default HomePage;