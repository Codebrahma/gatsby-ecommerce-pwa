import React from 'react'
import Spinner from 'react-spinkit';
import ProductList from '../components/presentational/products/ProductList'
import CartContainer from '../components/presentational/CartContainer'
import { getCart, removeFromCart, updateCart  } from '../utils/shopifyUtils';
import '../components/css/cartStyle.scss'

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      
    }
  }

  componentDidMount() {
    this.setState({
      isAppOnline: window.navigator.onLine,
    })
    window.addEventListener('online', this.cameOnline);    
    window.addEventListener('offline', this.cameOffline);   
    this.fetchCartData();
  }
  
  cameOnline = () => {
    this.setState({
      isAppOnline: true,
    });
  }
  
  cameOffline = () => {
    this.setState({
      isAppOnline: false,
    })  
  }

  fetchCartData = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      cartItems
    });
  }

  saveCartUpdates = (cartData) => {
    console.log('cart data ', cartData);
  }

  render() {
    return (
      <section id="wrapper">
        <div className="container">
          <div className="row">
            <div id="content-wrapper" className="col-xs-12">
            {   
                true ? (
                  <CartContainer
                    cart={this.state.cartItems}
                    saveNewCart={this.saveCartUpdates}/>
                ) : (
                  <div className="load-center">
                    Please connect to internet the page to see your cart.
                  </div>
                )
            }

            </div>
          </div>
        </div>
      </section>
    )
  }
}
