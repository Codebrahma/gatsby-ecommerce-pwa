import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import CartSummary from './CartSummary'
import FormInputField from './FormInputField'
import TakeMoney from '../TakeMoney'


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
    })
    window.addEventListener('online', this.cameOnline);
    window.addEventListener('offline', this.cameOffline);
    const tesNode = ReactDOM.findDOMNode(this.refs.payment).getBoundingClientRect();
    setTimeout(() => {
      window.scrollTo(0, tesNode.y);
    }, 1000);
    
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
                  <ContinueButton />
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
                      <input id="conditions_to_approve[terms-and-conditions]" name="conditions_to_approve[terms-and-conditions]" required="" type="checkbox" value="1" className="ps-shown-by-js" />
                        <span><i className="material-icons rtl-no-flip checkbox-checked"></i></span>
                    </span>
                  </div>
                  <div className="condition-label">
                    <label className="js-terms cursor-pointer" htmlFor="conditions_to_approve[terms-and-conditions]">
                      I agree to the <a href="#" id="cta-terms-and-conditions-0">terms of service</a>.
                    </label>
                  </div>
                </li>
              </ul>
            </form>
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
              <CartSummary price="10" displayInCart={false} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default CheckoutInfo
