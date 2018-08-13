import React from 'react'
import Link from 'gatsby-link'


const NavLink = (props) => (
  <div className="col-12">
    <Link to={`/category/${props.linkTo}`}>{props.title}</Link>
  </div>
)

const Menu = () => (
    <div id="side-bar" className="bg-white">
        <NavLink linkTo="diet-plan" title="diet plan"/>
        <NavLink linkTo="lunch" title="lunch"/>
        <NavLink linkTo="dinner" title="dinner"/>
        <NavLink linkTo="skin-and-hair-plan" title="skin and hair"/>
        <NavLink linkTo="skin-care-plan" title="skin care"/>
        <NavLink linkTo="smoothie" title="smoothies"/>
        <NavLink linkTo="others" title="other"/>
    </div>
  )
  
export default Menu
