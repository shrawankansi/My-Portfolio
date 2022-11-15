import React from 'react'
import "./Home.css"
import hero from "./black404.png"

import skill1 from "./photoshop.png"
import skill2 from "./react.png"
import skill3 from "./tailwind.png"

import { Typewriter} from 'react-simple-typewriter'


const Home = () => {
  return (
    <>
        <section className='hero' id='home'>
            <div className='container f_flex top'>
                <div className='left top'>
                    <h3>WELCOME TO MY PORTFOLIO</h3>
                    <h1>
                        Hi, i'm <br /><span>Shrawan Kansi</span>
                    </h1>
                    <h2> 
                        a    
                        <span>
                         < Typewriter words={['Frontend Developer', 'UI/UX Designer', 'Bloger', 'Programer']}  loop   cursor cursorStyle='|' typeSpeed={70}  deleteSpeed={50} delaySpeed={1000} />
                        
                       
                      
                    
                     </span>
                    </h2>

                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser. I design and code beautifully simple things, and i love what i do.</p>

                    <div className="hero_btn d_flex">
                        <div className="col_1">
                            <h4>FIND WITH ME</h4>
                            <div className="button">
                                <button className='btn_shadow'>
                                    <i className='fab fa-facebook-f'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <i className='fab fa-instagram'></i>
                                </button>
                                <button className='btn_shadow'>
                                    <i className='fab fa-linkedin-in'></i>
                                </button>
                            </div>
                        </div>
                        <div className='col_1'>
                            <h4>BEST SKILL ON </h4>
                            <button className='btn_shadow'>
                                <img src={skill1} alt="" />
                            </button>
                            <button className='btn_shadow'>
                                <img src={skill2} alt="" />
                            </button>
                            <button className='btn_shadow'>
                                <img src={skill3} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className="right_img">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home