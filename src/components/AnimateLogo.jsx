import React from 'react'
import Lottie from 'react-lottie'
import animateData  from "/src/assets/motion.json"
import  './passPage.css'

const AnimateLogo = () => {
    const defaultOptions = {
        loop: true,  // Animation will loop
        autoplay: true,  // Animation will play automatically
        animationData: animateData,  // The animation JSON data
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',  // Adjust animation fit
        },
      };
  return (
    <div className='lottie-container'>
    <Lottie options={defaultOptions} height={400} width={400} />
    
  </div>
  )
}

export default AnimateLogo