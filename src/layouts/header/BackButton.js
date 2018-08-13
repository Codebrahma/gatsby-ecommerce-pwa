import React from 'react';
import { withRouter } from 'react-router';

import back from '../../assets/icons/arrow-left-solid.svg';

const BackButton = props => (
  <div
    onClick={() => props.history.goBack()}
    style={{ marginRight: '10px', cursor: 'pointer' }}
  >
    <img src={back} alt="go back" className="icon icon-mobile" />
  </div>
);

const BackButtonWithRouter = withRouter(BackButton);

export default BackButtonWithRouter;
