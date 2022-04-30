import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import videom from '../videos/video-2.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={videom} autoPlay loop muted />
      <h1>FUTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;