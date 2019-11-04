import React from 'react';

import topcv from '../../assets/image/logo21.png';
import classes from './Logo.scss';

const logo = props => (
  <div className={classes.Logo} >
    <img src={topcv} alt="" style={{ height: props.height }}/>
  </div>
);

export default logo;