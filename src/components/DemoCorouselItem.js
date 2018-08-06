import React from 'react'
import  Link from 'gatsby-link'
import Img from 'gatsby-image';

const DemoCorouselItem = (props) => (
  <div className="carousel-item active">
    <Link to={`product/${props.productId}`} style={{margin: "0"}}>
      <Img className="d-block w-100 demo-carousel-image" sizes={props.image} alt="home-page-item"/>
    </Link>
  </div>
)

export default DemoCorouselItem