import React from 'react';
// eslint-disable-next-line import/no-unresolved
import CheckoutPage from 'theme/components/CheckoutPage';
import Payment from '../components/Payment';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.setState({
      cartItems: JSON.parse(localStorage.getItem('cart')) || {},
    });
  }

  renderPaymentSection = (payButton, onPaymentSuccess) => (
    <Payment
      payButton={payButton}
      onPaymentSuccess={onPaymentSuccess}
      clearCartOnPayment
    />
  )

  render() {
    const { cartItems } = this.state;
    return (
      <CheckoutPage
        cartDetails={cartItems}
        payment={this.renderPaymentSection}
      />
    );
  }
}
