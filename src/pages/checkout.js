import React from 'react';
import CheckoutPage from 'theme/components/CheckOutPage';
import Payment from '../components/Payment';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderPaymentSection = (payButton, onPaymentSuccess) => (
    <Payment
      payButton={payButton}
      onPaymentSuccess={onPaymentSuccess}
      clearCartOnPayment
    />
  )

  componentDidMount() {
    this.setState({
      cartItems: JSON.parse(localStorage.getItem('cart')) || {},
    });
  }

  render() {
    return (
      <CheckoutPage
        cartDetails={this.state.cartItems}
        payment={this.renderPaymentSection}
      />
    );
  }
}
