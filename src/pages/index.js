import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios'
import './style.scss'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img alt="" src="//cdn.shopify.com/s/files/1/1104/4168/files/Homepage_Tree_Wool.gif?v=1520026237" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 content">
              <h2 className="t-second-header">We’re Branching Out</h2>
              <p className="t-content-blurb">Once you’ve created the world’s most comfortable shoe, where do you go? Right back into nature. Lo and behold, with the help of our planet’s incredible 
              we’re delivering the same comfort you’ve come to love in a soft, silky-smooth new material: Tree.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-12">
                  <img src="//cdn.allbirds.com/image/fetch/q_auto,f_auto/q_auto,f_auto/https://cdn.shopify.com/s/files/1/1104/4168/files/Homepage_grid_wool.png%3Fv%3D1528390826" />
                </div>
                <div className="col-md-6 col-lg-6 hidden-sm">
                  <img src="//cdn.allbirds.com/image/fetch/q_auto,f_auto/q_auto,f_auto/https://cdn.shopify.com/s/files/1/1104/4168/files/pink-wool.jpg%3Fv%3D1520020037" />
                </div>
                <div className="col-md-6 col-lg-6 hidden-sm">
                  <img src="//cdn.allbirds.com/image/fetch/q_auto,f_auto/q_auto,f_auto/https://cdn.shopify.com/s/files/1/1104/4168/files/pink-wool.jpg%3Fv%3D1520020037" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-md-6 col-lg-6 hidden-sm">
                  <img src="//cdn.allbirds.com/image/fetch/q_auto,f_auto/q_auto,f_auto/https://cdn.shopify.com/s/files/1/1104/4168/files/Homepage_Pulp.gif%3Fv%3D1520959769" />
                </div>
                <div className="col-md-6 col-lg-6 hidden-sm">
                  <img src="//cdn.allbirds.com/image/fetch/q_auto,f_auto/q_auto,f_auto/https://cdn.shopify.com/s/files/1/1104/4168/files/Homepage_Grid_Small_Skipper.jpg%3Fv%3D1520025795" />
                </div>
                <div className="col-xs-12 col-md-12 col-lg-12">
                  <img src="//cdn.allbirds.com/image/fetch/q_auto,f_auto/q_auto,f_auto/https://cdn.shopify.com/s/files/1/1104/4168/files/Homepage_grid_tree.png%3Fv%3D1528390845" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
