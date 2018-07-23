import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => {
  console.log(props.headPath);
  const activePath = (path) => {
    return (props.headPath === `/${path}`) ? "nav-clicked" : ""
  }
    return (
    <div className="container navdropdown">
      <div
        id="pt_custommenu_itemmobile"
        className="smallmenu row"
      >
        <div className={`col-md-12 col-sm-12 col-xs-12 navitem ${activePath("interiors")}`}>
          <Link to="/interiors">Interiors</Link>
        </div>
        <div className={`col-md-12 col-sm-12 col-xs-12 navitem ${activePath("furnitures")}`}>
          <Link to="/furnitures">Furnitures</Link>
        </div>
        <div className={`col-md-12 col-sm-12 col-xs-12 navitem ${activePath("lighting")}`}>
          <Link to="/lighting">Lighting</Link>
        </div>
      </div>
    </div>
  )
}
export default Menu
