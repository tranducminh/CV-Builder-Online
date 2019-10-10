import React from 'react';

import topcv from '../../assets/image/logo.png';
import classes from './Logo.scss';

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={topcv} alt="TopCV" />
  </div>
);

export default logo;