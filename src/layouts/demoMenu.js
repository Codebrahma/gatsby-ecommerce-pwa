import React from 'react'
import Link from 'gatsby-link'

const DemoMenu = (props) => {
  const activePath = (path) => {
    return (props.headPath === `/${path}`) ? "item-active" : ""
  }
  
  return (
    <div id="side-bar" className="bg-white">
      <div className={`col-12 ${activePath("furnitures")}`}>
        <Link onClick={props.toggleSidebar} to='/category/diet-plan'>Weight Loss</Link>
      </div>
      <div className={`col-12 ${activePath("lighting")}`}>
        <Link onClick={props.toggleSidebar} to="/category/breakfast">Breakfast</Link>
      </div>
      <div className={`col-12 ${activePath("products")}`}>
        <Link onClick={props.toggleSidebar} to="/category/lunch">Lunch</Link>
      </div>
      <div className={`col-12 ${activePath("blog")}`}>
        <Link onClick={props.toggleSidebar} to="/category/dinner">Dinner</Link>
      </div>
      <div className={`col-12 ${activePath("growtv")}`}>
        <Link onClick={props.toggleSidebar} to="/category/skin-and-hair-plan">Skin and Hair</Link>
      </div>
      <div className={`col-12 ${activePath("furnitures")}`}>
        <Link onClick={props.toggleSidebar} to="/category/skin-care-plan">Skin Care</Link>
      </div>
      <div className={`col-12 ${activePath("furnitures")}`}>
        <Link onClick={props.toggleSidebar} to="/category/smoothie">Smoothies</Link>
      </div>
      <div className={`col-12 ${activePath("furnitures")}`}>
        <Link onClick={props.toggleSidebar} to="/category/others">Other</Link>
      </div>
    </div>
  )
}
export default DemoMenu
