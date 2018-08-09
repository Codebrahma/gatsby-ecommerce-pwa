import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.setState({
            appOnline: window.navigator.onLine
        })
        window.addEventListener('online', this.online())
        window.addEventListener('offline', this.offline())
    }

    componentWillUnmount = () => {
        window.removeEventListener('online', this.online);
        window.removeEventListener('offline', this.offline);
    }

    online = () => {
        this.setState({
            appOnline: true
        })
    }

    offline = () => {
        this.setState({
            appOnline: false
        })
    }

    getCheckoutMoney = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        let total = 0;
        if (cartItems) {
            Object.keys(cartItems).map((key) => {
                total = total + (+cartItems[key].productPrice * (cartItems[key].purchaseQuantity / 7))
            })
        }
        return total;
    }

    displayCheckoutInfo = () => (
        <div className="row">
            <div className="col col-lg-12 col-md-12 col-sm-6 p-2">
                Total: {this.getCheckoutMoney()}
            </div>
            <div className="col col-lg-12 col-md-12 col-sm-6">
                <GatsbyLink className="btn btn-dark" to="/checkout">Proceed to Checkout</GatsbyLink>
            </div>
        </div>
    )

    showCartItems = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        if (cartItems) {
            return Object.keys(cartItems).map((key) => {
                return (
                    <div key={key} className="row cart-item mb-3">
                        <div className="col col-lg-5 col-md-5 col-sm-5">
                            <img className="img img-fluid" src={cartItems[key].images.length ? cartItems[key].images[0].originalSrc : require('../assets/images/default.jpeg')} alt="product-image" />
                        </div>
                        <div className="col col-lg-7 col-md-7 col-sm-7">
                            <p>{cartItems[key].productName}</p>
                            <p><strong>Quantity : </strong>{cartItems[key].purchaseQuantity}</p>
                            <p><strong>Amount : </strong>Rs. {cartItems[key].productPrice * (cartItems[key].purchaseQuantity / 7)}</p>
                        </div>
                    </div>
                )
            })
        } else {
            return <div className="container text-center">
                Oops! No items in the cart.
                <GatsbyLink to="/">Shop items.</GatsbyLink>
                    </div>
        }
    }

    render() {
        return (
            <div className="container p-4">
                <div className="row">
                    <div className="col col-lg-9 col-md-9 col-sm-12">
                        <div className="container p-2 px-4">
                            {this.showCartItems()}
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-3 col-sm-12">
                        <div className="container p-2 px-4">
                            {this.displayCheckoutInfo()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;