import React, { Component } from 'react'
import CartSummary from './CartSummary'
import FormInputField from './FormInputField'
import TakeMoney from '../TakeMoney'
import _ from 'lodash';

const ContinueButton = () => (
  <footer className="form-footer clearfix">
    <button className="continue btn btn-primary btn-continue float-xs-right" name="continue" data-link-action="register-new-customer" type="submit" value="1">
      Continue
    </button>
  </footer>
)

class CheckoutInfo extends Component {
  state = {
    displayId1: true,
    displayId2: true,
    displayId3: true,
  }

  componentDidMount() {
    
    this.setState({
      isAppOnline: window.navigator.onLine,
      finalCartData: JSON.parse(localStorage.getItem('cart')),
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


  renderPersonalInfo = (displayId) => {
    const formFields = [
      {id:1,label:"Social title", type:"radio",optional:""},
      {id:2,label:"First Name", type:"text",optional:"", name:"firstname", value:"John"},
      {id:3,label:"Last Name", type:"text",optional:"", name:"lastname", value:"Doe"},
      {id:4,label:"Email", type:"email",optional:"", name:"email", value:"johndoe@example.com"},
    ]
    if(displayId) {
      return (
        <div className="tab-content">
          <div className="tab-pane active" id="checkout-guest-form">
            <form id="customer-form" className="js-customer-form">
              <section>
                {
                  _.map(formFields,field => (
                    <FormInputField
                        key={field.id}
                        label={field.label}
                        label={field.label}
                        label={field.label}
                        type={field.type}
                        optional={field.Optional}
                        name={field.name}
                        value={field.value}
                    />
                  ))
                }
                <ContinueButton />
              </section>
            </form>
          </div>
        </div>
      )
    }
  }

  renderAddressInfo = (displayId) => {
    const formFields = [
      {id:1,label:"First Name", type:"text",optional:"", name:"firstname", value:"John"},
      {id:2,label:"Last Name", type:"text",optional:"", name:"lastname", value:"Doe"},
      {id:3,label:"Company", type:"text",optional:"Optional", name:"company", value:"John Company"},
      {id:4,label:"Address", type:"text",optional:"", name:"address", value:"123, XYZ colony"},
      {id:5,label:"Address Complement", type:"text",optional:"Optional", name:"address-line2", value:"ABC"},
      {id:6,label:"City", type:"text",optional:"", name:"city", value:"Some City"},
      {id:7,label:"State", type:"select",optional:""},
      {id:8,label:"Zip Code", type:"number",optional:"", name:"zipcode", value:"12345"},
      {id:9,label:"Country", type:"select",optional:""},
      {id:10,label:"Phone", type:"number",optional:"Optional", name:"mobile", value: 1234567890},
    ]
    if(displayId) {
      return (
        <div className="js-address-form">
          <form>
            <p>
              The selected address will be used both as your personal address (for invoice) and as your delivery address.
            </p>
            <div id="delivery-address">
              <div className="js-address-form">
                <section className="form-fields">
                  {
                    _.map(formFields,field => (
                      <FormInputField
                          key={field.id}
                          label={field.label}
                          type={field.type}
                          name={field.name}
                          value={field.value}
                          optional={field.Optional}
                      />
                    ))
                  }
                </section>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }


  renderPaymentInfo = (displayId) => {
    const renderPayButton = (isOnline) => (
        <div className="ps-shown-by-js">
          <TakeMoney isOnline={isOnline} eventedLocalStorage={this.props.eventedLocalStorage}/>
        </div>
    )
    if(displayId) {
      return (
        <div>
          <div className="payment-options">
            <div id="payment-confirmation">
              { renderPayButton(this.state.isAppOnline) }
            </div>
          </div>
        </div>
      )
    }
  }

  handleDisplay = (id) => {
    this.setState((prevState)=> ({
      [`displayId${id}`]: !prevState[`displayId${id}`]
    }))
  }

  renderCheckoutInfo = (id,title,renderWhatInfo) => (
    <section className="checkout-step" >
      <div className="content">
        <h1 className="step-title h3 cursor-pointer" onClick={()=>this.handleDisplay(id)}>
          {title}
        </h1>
        {renderWhatInfo}
      </div>
      <hr />
    </section>
  )

  render() {
    
    const {
      finalCartData
    } = this.state;
    const price = _.reduce(finalCartData, (accumulator, cartData) => (accumulator + cartData.quantityToAdded * parseInt(cartData.productDetails.productPrice, 10)), 0);
    const totalItems = _.reduce(finalCartData, (accumulator, cartData) => (accumulator + cartData.quantityToAdded), 0);
    return(
      <div className="container">
        <section id="content" className="checkout-content">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="checkout-info-container">
                {this.renderCheckoutInfo(1, "Personal Information",this.renderPersonalInfo(this.state.displayId1))}
                {this.renderCheckoutInfo(2, "Addresses",this.renderAddressInfo(this.state.displayId2))}
                {this.renderCheckoutInfo(3, "Payment",this.renderPaymentInfo(this.state.displayId3))}
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <CartSummary price={price} displayInCart={false} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default CheckoutInfo
