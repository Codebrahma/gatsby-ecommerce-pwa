import React, { Component } from 'react'
import CartSummary from './CartSummary'
import FormInputField from './FormInputField'

const ContinueButton = () => (
  <footer className="form-footer clearfix">
    <button className="continue btn btn-primary float-xs-right" name="continue" data-link-action="register-new-customer" type="submit" value="1">
      Continue
    </button>
  </footer>
)

class CheckoutInfo extends Component {
  state = {
    displayId1: false,
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
                  <ContinueButton />
                </section>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }

  renderShippingInfo = (displayId) => {
    if(displayId) {
      return (
        <div className="delivery-options-list">
          <form className="clearfix" id ="js-delivery">
            <div className="form-fields">
              <div className="delivery-options">
                <div className="row delivery-option">
                  <div className="col-sm-1">
                    <span className="custom-radio float-xs-left">
                      <input type="radio" name="delivery_option[18]" id="delivery_option_2" value="2," checked />
                      <span></span>
                    </span>
                  </div>
                  <label htmlFor="delivery_option_2" className="col-sm-11 delivery-option-2">
                    <div className="row">
                      <div className="col-sm-5 col-xs-12">
                        <div className="row">
                          <div className="col-xs-3">
                            <img src="" alt="X" />
                          </div>
                          <div className="col-xs-9">
                            <span className="h6 carrier-name">My carrier</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-xs-12">
                        <span className="carrier-delay">Delivery next day!</span>
                      </div>
                      <div className="col-sm-3 col-xs-12">
                        <span className="carrier-price">$0.00 tax excl.</span>
                      </div>
                    </div>
                  </label>
                  <div className="order-options">
                    <div id="delivery" className="ship-comment">
                      <label htmlFor="delivery_message">
                        If you would like to add a comment about your order, please write it in the field below.
                      </label>
                      <textarea rows="2" cols="120" id="delivery_message" name="delivery_message"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <ContinueButton />
        </div>
      )
    }
  }

  renderPaymentInfo = (displayId) => {
    if(displayId) {
      return (
        <div>
          <div className="payment-options">
            <div>
              <div id="payment-option-1-container" className="payment-option clearfix">
                <span className="custom-radio float-xs-left">
                  <input className="ps-shown-by-js " id="payment-option-1" data-module-name="ps_checkpayment" name="payment-option" type="radio" required checked />
                  <span></span>
                </span>
                <label htmlFor="payment-option-1">
                  <span>Pay Now Online</span>
                </label>
              </div>
            </div>
            <div>
              <div id="payment-option-1-container" className="payment-option clearfix">
                <span className="custom-radio float-xs-left">
                  <input className="ps-shown-by-js " id="payment-option-2" data-module-name="ps_checkpayment" name="payment-option" type="radio"  />
                  <span></span>
                </span>
                <label htmlFor="payment-option-2">
                  <span>Cash On Delivery</span>
                </label>
              </div>
            </div>
            <form id="conditions-to-approve" method="GET">
              <ul>
                <li>
                  <div className="float-xs-left">
                    <span className="custom-checkbox">
                      <input id="conditions_to_approve[terms-and-conditions]" name="conditions_to_approve[terms-and-conditions]" required="" type="checkbox" value="1" className="ps-shown-by-js" checked/>
                        <span><i className="material-icons rtl-no-flip checkbox-checked"></i></span>
                    </span>
                  </div>
                  <div className="condition-label">
                    <label className="js-terms" htmlFor="conditions_to_approve[terms-and-conditions]">
                      I agree to the <a href="#" id="cta-terms-and-conditions-0">terms of service</a> and will adhere to them unconditionally.
                    </label>
                  </div>
                </li>
              </ul>
            </form>
            <div id="payment-confirmation">
              <div className="ps-shown-by-js">
                <button type="submit" disabled="" className="btn btn-primary center-block">
                  Proceed to Pay
                </button>
              </div>
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
    <section className="checkout-step" id="checkout-personal-information-step" >
    <h1 className="step-title h3" onClick={()=>this.handleDisplay(id)}>
    <span className="step-number">{id}</span>
      {title}
    </h1>
    <div className="content">
      {renderWhatInfo}
    </div>
    <hr />
    </section>
  )

  render() {
    return(
      <div className="container">
        <section id="content" className="checkout-content">
          <div className="row">
            <div className="col-md-8 checkout-info-container">
              {this.renderCheckoutInfo(1, "Personal Information",this.renderPersonalInfo(this.state.displayId1))}
              {this.renderCheckoutInfo(2, "Addresses",this.renderAddressInfo(this.state.displayId2))}
              {this.renderCheckoutInfo(3, "Shipping Method",this.renderShippingInfo(this.state.displayId3))}
              {this.renderCheckoutInfo(4, "Payment",this.renderPaymentInfo(this.state.displayId4))}
            </div>
            <div className="col-md-4">
              <CartSummary price="10" displayInCart={false} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default CheckoutInfo
