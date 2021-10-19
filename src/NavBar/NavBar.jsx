import React, { useState, useRef, useEffect } from "react";
import "./style.css";
export default function NavBar() {
  const [isToggle, setToggle] = useState(false);
  const navHeight = useRef(false);
  useEffect(() => {
  }, [isToggle])
  function toggle() {
    setToggle((prev) => {
      return !prev;
    });
  }
  useEffect(() => {
        if(isToggle){
            navHeight.current.style.maxHeight='300px'
        }
        else{
            navHeight.current.style.maxHeight='0' 
        }
  }, [isToggle])
  return (
    <>
      <section className="section">
        <header>
          <img src="https://react-projects-11-navbar.netlify.app/static/media/logo.2bb7da65.svg" alt="" />  
          <button onClick={toggle} className='toggle-btn'>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="2em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
          </button>
        </header>
        <nav ref={navHeight}>
          <ul className='links-container'>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>
          <ul className='social-media-links'>
              <li>
                  <a href="https://www.facebook.com/"><i className='fab fa-facebook'></i></a>
              </li>
              <li>
                  <a href="https://twitter.com/"><i className='fab fa-twitter'></i></a>
              </li>
              <li>
                  <a href="https://www.youtube.com/"><i className='fab fa-youtube'></i></a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/"><i className='fab fa-linkedin'></i></a>
              </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
