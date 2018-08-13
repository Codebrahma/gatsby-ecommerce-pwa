import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import back from '../../assets/icons/arrow-left-solid.svg';

const BackButton = (props) =>  (
    <div 
        onClick={() => props.history.goBack()} 
        style={{ cursor: "pointer", padding: '2%', marginLeft: '50%'}}
    >
      <img src={back} alt="go back" className="icon icon-mobile"/>
    </div>
  )

const BackButtonWithRouter = withRouter(BackButton);

BackButton.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default BackButtonWithRouter;
