import React, {Component} from "react";
import PropTypes from 'prop-types';
import { products } from "../utils/dummyData.js";
import _ from "lodash"
import Link from 'gatsby-link'
import './demo-products.scss';
import DemoProductFaqs from "../components/DemoProductFaqs.js";
import DemoProductSubscription from "../components/DemoProductSubscription.js";
import DemoProductVariants from "../components/DemoProductVariants.js";


class DemoProductItem extends Component {
  state={
    active: false,
  }
  
  renderVariants = () => (
       _.map(Object.keys(this.props.product.variants), (variant,index) => (
        <DemoProductVariants key={index} variantType={variant} variantItems={this.props.product.variants[variant]} />
      ))
    )

  renderProductActions = () => (
    <div className="demo-product-actions">
     <div id="action-input">
       <div id="quantity">
         <button className="btn btn-light minus-btn">
           <i className="fas fa-minus"></i>
         </button>
         <input type="number" step="7" min="0" />
         <button className="btn btn-light plus-btn">
           <i className="fas fa-plus"></i>
         </button>
       </div>      
       <span id="price">Rs. {this.props.product.price}</span>
      </div>
      <div id="action-button">
        <button className="btn btn-dark">add to cart</button>
        <button className="btn btn-dark">buy now</button>
      </div>
    </div>
  )

  renderSocialIcons = () => (
    <div id="social-icons">
      <ul>
        <li>
          <Link to="/demoProductItem"><i className="fab fa-facebook-f"></i></Link>
        </li>
        <li>
          <Link to="/demoProductItem"><i className="fab fa-twitter"></i></Link>
        </li>
      </ul>
    </div>
  )

  renderTags = () => (
    <div className="demo-product-tags">
      <ul>
        {
          _.map(this.props.product.tags, (tag,index) => (
            <li key={index} >
              <Link to="/demoProductItem" activeClassName="active-item">{tag}</Link>  
            </li>
          ))
        }
      </ul>
    </div>
  )

  //Description will get replaced by props
  renderDescription = () => (
    <div className="demo-product-description"> 
      <div className="title">
        <span>Description</span>
      </div>
      <div className="demo-product-details">
        {this.props.product.description}
      </div>
    </div>
  )
    
  render() {
    return (
      <div className="container">
        <div className="demo-product-item row">
          <div className="demo-product-item-image col-md-6 col-sm-12">
            <img src={this.props.product.image} alt={this.props.product.title} />
          </div>
          <div className="demo-product-item-details col-md-6 col-sm-12" >
            <h1 id="demo-product-title">{this.props.product.title}</h1>
            {this.renderVariants()}
            {this.renderProductActions()}
            {this.renderSocialIcons()}
            <span id="behind-science">
              <i className="fas fa-download"></i>
              Read the science behind the program
            </span>
            {this.renderTags()}
          </div>  
        </div>
        <div className="container">
          {this.renderDescription()}
        </div>
        <div className="container">
          <DemoProductSubscription />
        </div>
        <div className="container">
          <DemoProductFaqs faqs={this.props.product.faqs} />
        </div>
      </div>
    )
  }
}

DemoProductItem.propTypes = {
  product: PropTypes.object.isRequired,
}

DemoProductItem.defaultProps = {
  product: products[0]
}

export default DemoProductItem
