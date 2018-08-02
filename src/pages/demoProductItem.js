import React, {Component} from "react";
import { products } from "../utils/dummyData.js";
import _ from "lodash"
import Link from 'gatsby-link'
import './demo-products.scss';
import DemoVariantType from "../components/presentational/DemoVariantType";
import DemoVariantItem from "../components/presentational/DemoVariantItem.js";
import DemoProductFaqs from "../components/DemoProductFaqs.js";
import DemoProductSubscription from "../components/DemoProductSubscription.js";


class DemoProductItem extends Component {
  state={
    active: false,
  }
  
  renderPreferences = () => (
    <div className="demo-product-variants" >
      <DemoVariantType variantType="Preferences" />
      <ul>
        {
          _.map(products[0].preferences, (preference,index) => (
            <DemoVariantItem variantItem={preference} key={index} /> 
          ))
        }
      </ul>
    </div>
  )

  renderOptions = () => (
    <div className="demo-product-variants" >
      <DemoVariantType variantType="Options" />
      <ul>
       {
          _.map(products[0].options, (option,index) => (
            <DemoVariantItem variantItem={option} key={index} /> 
          ))
        }
      </ul>
    </div>
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
       <span id="price">Rs. {products[0].price}</span>
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
          _.map(products[0].tags, (tag,index) => (
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
        <p>
          The evolution of our food habits has caused a massive spike in lifestyle diseases. Obesity, diabetes, PCOS, fatty liver… each one can be traced to a single culprit -- excessive carbohydrate intake.
          By reducing carb intake and increasing healthy fats, the Lean Machine program trains the body to burn fats as its primary fuel source. This results in rapid, healthy weight loss, stabilisation of blood sugar levels, reversal of fatty liver, and improved energy. Not to mention glowing skin and lustrous hair!
        </p>
        <p>
          <strong>Lunch:</strong>
          A 1-week subscription provides you with 7 lunches, complete with snacks and beverages, from Monday to Sunday, with a different gourmet menu each day. 
        </p>
        <p>
          <strong>Dinner:</strong>
          A 1-week subscription provides you with 7 dinners, complete with snacks and beverages, from Monday to Sunday, with a different gourmet menu each day.
        </p>
        <p>
          <strong>Smoothies:</strong>
          The Power Smoothie is the perfect start to your day. Served with the previous day’s dinner, this breakfast replacement beverage is low-carb and high-fibre, to start your day right.
        </p>
      </div>
    </div>
  )
    
  render() {
    return (
      <div className="container">
        <div className="demo-product-item row">
          <div className="demo-product-item-image col-md-6 col-sm-12">
            <img src={products[0].image} alt={products[0].title} />
          </div>
          <div className="demo-product-item-details col-md-6 col-sm-12" >
            <h1 id="demo-product-title">{products[0].title}</h1>
            {this.renderPreferences()}
            {this.renderOptions()}
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
          <DemoProductFaqs faqs={products[0].faqs} />
        </div>
      </div>
    )
  }
}

export default DemoProductItem
