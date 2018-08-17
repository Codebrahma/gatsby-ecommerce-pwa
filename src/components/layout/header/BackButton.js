import React from 'react';

import back from '../../../assets/icons/arrow-left-solid.svg';

const BackButton = () => (
  <div
    onClick={() => window.history.back()}
    style={{ cursor: 'pointer', padding: '2%', marginLeft: '50%' }}
  >
    <img src={back} alt="go back" className="icon icon-mobile" />
  </div>
);


export default BackButton;
