import React from 'react'
import DemoNavbar from './demoNavbar';
import DemoNavbarMobile from './demoNavbarMobile';
import './demostyle.scss';

const DemoHeader = (props) => {
  return (
    <header id="header" className="demo-header">
      <div className="container demo-container">
        <div className="row">
          <div className="col-center col col-xs-12 col-lg-12 col-md-12">
            <DemoNavbar
              cartLength={props.cartLength}
            />
            <DemoNavbarMobile
              headPath={props.headPath}
              cartLength={props.cartLength}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default DemoHeader
