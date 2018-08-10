import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';

import deleteIcon from '../assets/icons/baseline-delete-24px.svg';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems: {}
        }
    }

    componentDidMount() {
        this.setState({
            appOnline: window.navigator.onLine,
            cartItems: JSON.parse(localStorage.getItem('cart')) || {}
        })
        window.addEventListener('online', this.online)
        window.addEventListener('offline', this.offline)
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
        const { cartItems } = this.state;
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
                {`Total: Rs. ${(this.getCheckoutMoney()).toFixed(2)}`}
            </div>
            <div className="col col-lg-12 col-md-12 col-sm-6">
                <GatsbyLink className="btn btn-dark" to="/checkout">Proceed to Checkout</GatsbyLink>
            </div>
        </div>
    )

    removeItemFromCart = (productId) => {
        let { cartItems } = this.state;
        delete cartItems[productId]
        localStorage.setItem('cart', JSON.stringify(cartItems))
        this.setState({
            cartItems
        })
        this.props.eventedLocalStorage()
    }

    showCartItems = () => {
        const { cartItems } = this.state;
        if (Object.keys(cartItems).length) {
            return Object.keys(cartItems).map((key) => {
                return (
                    <div key={key} className="row cart-item mb-3">
                        <div className="col col-lg-3 col-md-3 col-sm-3">
                            <img src={cartItems[key].images.length ? cartItems[key].images[0].originalSrc : require('../assets/images/default.jpeg')} alt="product-image" />
                        </div>
                        <div className="col col-lg-7 col-md-7 col-sm-7">
                            <GatsbyLink style={{ color: 'rgba(27,55,100, 1)' }} to={`/product/${key}`}>{cartItems[key].productName}</GatsbyLink>
                            <p className="mt-5" >Rs. {cartItems[key].productPrice * (cartItems[key].purchaseQuantity / 7)}</p>
                        </div>
                        <div className="col col-lg-2 col-md-2 col-sm-2">
                            <div className="container p-1 mb-2 text-center">
                                {cartItems[key].purchaseQuantity}
                            </div>
                            <div className="container p-2 text-center">
                                <ul>
                                    <li onClick={() => this.removeItemFromCart(cartItems[key].productId)}>
                                        <img className="item-count img img-fluid delete-icon" src={deleteIcon} alt="delete-icon" />
                                    </li>
                                </ul>
                            </div>
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
                    {
                        this.getCheckoutMoney() !==0 &&
                        <div className="col col-lg-3 col-md-3 col-sm-12">
                            <div className="container p-2 px-4">
                                {this.displayCheckoutInfo()}
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Cart;