import React, {Component} from "react";
import { products } from "../utils/dummyData.js";
import './grow-products.scss';
import _ from "lodash"

const preferences = ["veg", "non-veg"]
const options = ["lunch only", "lunch and dinner", "dinner only", "lunch+dinner+smoothie"]
const tags = ["Keto/LCHF Friendly", "Increased Energy", "Better Sleep", "Reduce Fatty Liver", "Youthful Skin"]

class GrowProductItem extends Component {
  state={
    active: false,
  }
    
  renderPreferences = () => (
    <div className="grow-product-variants" >
      <span id="variant-title">Preference</span>
      <ul>
      {
        _.map(preferences,(preference,index) => (
          <li key={index} >{preference}</li>
        ))
      }
      </ul>
    </div>
  )

  renderOptions = () => (
    <div className="grow-product-variants">
      <span id="variant-title">Options</span>
      <ul>
      {
        _.map(options,(option,index) => (
          <li key={index}>{option}</li>
        ))
      }
      </ul>
    </div>
  )

  renderTags = () => (
    <div className="grow-product-tags">
      <ul>
        {
          _.map(tags,(tag,index) => (
            <li key={index} >{tag}</li>
          ))
        }
      </ul>
    </div>
  )
    
  render() {
    return (
      <div className="container">
        <div className="grow-product-item row">
          <div className="grow-product-item-image col-md-6 col-sm-12">
            <img src={products[0].image} alt={products[0].title} />
          </div>
          <div className="grow-product-item-details col-md-6 col-sm-12" >
            <h1 id="grow-product-title">{products[0].title}</h1>
            {this.renderPreferences()}
            {this.renderOptions()}
            <div>
              <input type="number" step="7" min="0" />
              <span>Rs. {products[0].price}</span>
              <span>ADD TO CART</span>
              <span>BUY NOW</span>
            </div>
            <ul id="social-share">
              <li>FB</li>
              <li>Twitter</li>
            </ul>
            <span id="behind-science">
              <i className="fas fa-download"></i>
              Read the science behind the program
            </span>
            {this.renderTags()}
          </div>  
        </div>
      </div>
    )
  }
}

export default GrowProductItem
