import React from 'react'
import Link from 'gatsby-link'

const DemoMenu = (props) => {
  console.log(props.headPath);
  const activePath = (path) => {
    return (props.headPath === `/${path}`) ? "item-active" : ""
  }
    return (
      <div id="side-bar" className="bg-white">
        <div className={`col-12 ${activePath("interiors")}`}>
          <Link to="/interiors">Interest</Link>
        </div>
        <div className={`col-12 ${activePath("furnitures")}`}>
          <Link to="/furnitures">Collections</Link>
        </div>
        <div className={`col-12 ${activePath("lighting")}`}>
          <Link to="/lighting">Meal Programs</Link>
        </div>
        <div className={`col-12 ${activePath("products")}`}>
          <Link to="/products">Keto products</Link>
        </div>
        <div className={`col-12 ${activePath("blog")}`}>
          <Link to="/blog">blog</Link>
        </div>
        <div className={`col-12 ${activePath("growtv")}`}>
          <Link to="/growtv">grow tv</Link>
        </div>
      </div>
  )
}
export default DemoMenu
