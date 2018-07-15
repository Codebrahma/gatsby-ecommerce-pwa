import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <ul
    id="pt_custommenu_itemmobile"
    className="tree dhtml  mobilemenu nav-collapse collapse"
  >
    <li>
      <Link to="/men">Men</Link>
    </li>
    <li>
      <Link to="/women">Women</Link>
    </li>
    <li>
      <Link to="/boys">boys</Link>
    </li>
    <li>
      <Link to="/girls">girls</Link>
    </li>
  </ul>
)

export default Menu
