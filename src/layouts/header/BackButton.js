import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

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

BackButton.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BackButtonWithRouter;
