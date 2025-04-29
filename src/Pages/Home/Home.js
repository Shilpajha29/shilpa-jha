import React from 'react';
import './Home.css';
import MaleDeveloper from '../../Assests/MaleDeveloper.gif';

export default function Home() {
  return (
    <div className='home-container'>
      <div className='header-text'>  
        <h1>Welcome to my portfolio!</h1>
        <p>This is Shilpa Jha, an aspiring <u>software engineer</u>.</p>
      </div>
      <div className='header-buttons'>
        <a className='btn btn-white' href='/about'>
          <p className='btn-text'>Know more about me!</p>
        </a>
        <a className='btn btn-transparent' href='/reesume'>
          <p className='btn-text'>View my Resume</p>
        </a>
      </div>
      <div className='header-image'>
        <img src={MaleDeveloper} alt='Placeholder' />
      </div>
    </div>
  )
}
