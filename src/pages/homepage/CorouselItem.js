import React from 'react'
import  Link from 'gatsby-link'
import Img from 'gatsby-image';

const CorouselItem = (props) => (
    <Link to={`product/${props.productId}`} style={{margin: "0"}}>
      <Img className="d-block w-100 demo-carousel-image" sizes={props.image} alt="home-page-item"/>
    </Link>
)

export default CorouselItem