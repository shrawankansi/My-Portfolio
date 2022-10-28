import React from "react"
import logo1 from "./pic/logored1.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt='' />
          </div>
          <p>© 2022. All rights reserved by Shrawan Kansi</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
