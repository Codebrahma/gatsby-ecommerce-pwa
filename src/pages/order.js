import React, { Component } from 'react'
import CheckoutInfo from '../components/presentational/CheckoutInfo'

class Checkout extends Component {
  render() {
    return (
      <section id="wrapper">
        <CheckoutInfo 
          eventedLocalStorage={this.props.eventedLocalStorage}
        />
      </section>
    )
  }
}

export default Checkout
