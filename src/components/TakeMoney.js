import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import GatsbyLink from 'gatsby-link';
import { Container, Button, Text } from 'rebass';

export default class TakeMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaymentSuccess: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 1500);
    }, 500);
    window.addEventListener('online', this.online);
    window.addEventListener('offline', this.offline);
    this.setState({
      appOnline: window.navigator.onLine,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.online);
    window.removeEventListener('offline', this.offline);
  }

  online = () => {
    this.setState({
      appOnline: true,
    });
  }

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(() => {
      localStorage.setItem('cart', JSON.stringify({}));
      window.dispatchEvent(new CustomEvent('localstorage update'));
      this.setState({
        isPaymentSuccess: true,
      });
    });
  }

  offline = () => {
    this.setState({
      appOnline: false,
    });
  }

  render() {
    const { isPaymentSuccess } = this.state;
    const { appOnline } = this.state;
    const paymentContent = appOnline ? (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_rM2enW1rNROwx4ukBXGaIzhr"
        closed={this.onClosed}
      >
        <Button bg="black" px={2}>
          Proceed to Pay
        </Button>
      </StripeCheckout>
    ) : (
      <p>
Please connect Internet to proceed for payment
      </p>
    );
    return (
      <div>
        {
          isPaymentSuccess
            ? (
              <Container>
                <Text textAlign="center" my={4} color="rgb(76,175,80)" fontWeight="bold">
                  Payment Success!
                </Text>
                <GatsbyLink to="/">
                  <Button px={2}>
                    Continue Shopping
                  </Button>
                </GatsbyLink>
              </Container>
            )
            : paymentContent
        }
      </div>
    );
  }
}
