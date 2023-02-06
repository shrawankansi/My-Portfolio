import React, {useState} from 'react'
import "./Header.css";
import logo from "./pic/logored1.png";


const Header = () => {
// when scroll header at top
    window.addEventListener("scroll",function() {
      const Header = document.querySelector(".header")
      Header.classList.toggle("active", window.scrollY > 100)
    })
    // toggle menu
    const[Mobile, setMobile] = useState(false)
    
  return (
    <>
        <header className='header'>
            <div className="container d_flex">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className='navlink'>
                    
                    <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}  onClick={()=> setMobile(false)}>
                        <li><a href="home">Home</a></li>
                        <li><a href="features">features</a></li>
                        <li><a href="portfolio">portfolio</a></li>
                        <li><a href="resume">resume</a></li>
                        {/* <li><a href="clients">clients</a></li> */}
                        <li><a href="blog">blog</a></li>
                        <li><a href="contact">contact</a></li>
                        
                      
                    </ul>

                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        { Mobile ?  <i className='fas fa-times close home-btn'></i> :  <i className='fas fa-bars open'></i>

                        }
                         </button>
                </div>

            </div>
        </header>

    
     </>
  )
}

export default Header