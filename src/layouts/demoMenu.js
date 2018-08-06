import React from 'react'
import Link from 'gatsby-link'


const NavLink = (props) => (
  <div className="col-12">
    <Link onClick={props.toggleSidebar} to={`/category/${props.linkTo}`}>{props.title}</Link>
  </div>
)

const DemoMenu = (props) => (
    <div id="side-bar" className="bg-white">
        <NavLink linkTo="diet-plan" title="diet plan" {...props}/>
        <NavLink linkTo="lunch" title="lunch" {...props}/>
        <NavLink linkTo="dinner" title="dinner" {...props}/>
        <NavLink linkTo="skin-and-hair-plan" title="skin and hair" {...props}/>
        <NavLink linkTo="skin-care-plan" title="skin care" {...props}/>
        <NavLink linkTo="smoothie" title="smoothies" {...props}/>
        <NavLink linkTo="others" title="other" {...props}/>
    </div>
  )
  
export default DemoMenu
