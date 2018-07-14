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
      <Link to="/kids">Kids</Link>
    </li>
  </ul>
)

export default Menu
