import React from 'react'
import  Link from 'gatsby-link'
import Img from 'gatsby-image';

const DemoCorouselItem = (props) => (
  <div className={`carousel-item active`}>
    <Link to={`product/${props.productId}`} >
      <Img className="d-block w-100" sizes={props.image} alt="home-page-item"/>
    </Link>
  </div>
)

export default DemoCorouselItem