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
        <div className={`col-md-6 col-sm-6 col-xs-6 navitem ${activePath("men")}`}>
          <Link to="/men">Men</Link>
        </div>
        <div className={`col-md-6 col-sm-6 col-xs-6 navitem ${activePath("women")}`}>
          <Link to="/women">Women</Link>
        </div>
        <div className={`col-md-6 col-sm-6 col-xs-6 navitem ${activePath("boys")}`}>
          <Link to="/boys">boys</Link>
        </div>
        <div className={`col-md-6 col-sm-6 col-xs-6 navitem ${activePath("girls")}`}>
          <Link to="/girls">girls</Link>
        </div>
      </div>
    </div>
  )
}
export default Menu
