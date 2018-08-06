import React from 'react'
import  Link from 'gatsby-link'

const DemoCorouselItem = (props) => (
  <div className={`carousel-item active`}>
    <Link to={`product/${props.productId}`} >
      <img className="d-block w-100" src={props.image} alt="home-page-item"/>
    </Link>
  </div>
)

export default DemoCorouselItem