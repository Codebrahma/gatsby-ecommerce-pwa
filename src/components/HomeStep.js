import React from 'react';

const HomeStep = props => (
  <div className="demo-each-step col-lg-3 col-md-6 cols-sm-6 cols-xs-12">
    <img src={props.image} alt="step" />
    <span>
      {props.stepTitle}
    </span>
    <p>
      {props.stepDescription}
    </p>
  </div>
);

export default HomeStep;
