import React from 'react'
import './GoHome.css';
import { IoHome } from "react-icons/io5";

export default function GoHome() {
  return (
    <a className='go-home-container' href='/#/home'>
        <IoHome />
    </a>
  )
}
