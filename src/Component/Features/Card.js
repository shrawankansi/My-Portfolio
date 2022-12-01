import React from 'react'
// import data from 'FeaturesApi.js'

const Card = (props) => {
  return (
    <>
        <div className="box card-f btn_shadow">
                        <img src={props.image} alt="" />
                        <h2>{props.title}</h2>
                        <p>{props.desc}</p>

                        <a href='/'>
                            <i className='fas fa-arrow-right'></i>
                        </a>
                    </div>
    </>
  )
}

export default Card