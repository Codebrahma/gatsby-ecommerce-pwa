import React from 'react'
import Link from 'gatsby-link'


const Menu = () => (
  <ul id="pt_custommenu_itemmobile" className="tree dhtml  mobilemenu nav-collapse collapse" style={{display: "block"}} >
      <li style={{display: "block"}}>
        <Link to="/men">Men</Link>
      </li>
      <li style={{display: "block"}}>
        <Link to="/women">Women</Link>
      </li>
      <li style={{display: "block"}}>
        <Link to="/furniture">Furniture</Link>
      </li>
    </ul>
)

export default Menu
