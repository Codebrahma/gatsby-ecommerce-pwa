import React from 'react'
import Spinner from 'react-spinkit';
import ProductList from '../components/presentational/products/ProductList'
import CartContainer from '../components/presentational/CartContainer'
import { getCart, removeFromCart, updateCart  } from '../utils/shopifyUtils';
import '../components/css/cartStyle.scss'

export default class Cart extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.setState({
      isAppOnline: window.navigator.onLine,
    })
    window.addEventListener('online', this.cameOnline);    
    window.addEventListener('offline', this.cameOffline);   
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

  render() {
    return (
      <section id="wrapper">
        <div className="container">
          <div className="row">
            <div id="content-wrapper" className="col-xs-12">
            {   
                true ? (
                  <CartContainer 
                    eventedLocalStorage={this.props.eventedLocalStorage}
                  />
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
