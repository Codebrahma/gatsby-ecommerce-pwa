import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'


const DemoProductFaqs = ({faqs}) => (
  <div className="demo-product-faq-container">
    <h3 id="faq-header">FAQ'S</h3>
    {
      _.map(faqs, (faqs,index) => (
        <div className="demo-product-faq" key={index}>
          <span id="faq-question">{faqs.question}</span>
          <span id="faq-answer">
            {faqs.answer} 
          </span>
        </div>
      ))
    }
  </div>
)

DemoProductFaqs.propTypes = {
  faqs: PropTypes.array
}

export default DemoProductFaqs