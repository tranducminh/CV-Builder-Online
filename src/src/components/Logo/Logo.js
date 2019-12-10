import React from 'react';
import { NavLink } from 'react-router-dom';
import topcv from '../../assets/image/logo21.png';
import classes from './Logo.scss';

const logo = props => (
  <NavLink to="/">
    <div className={classes.Logo} >
      <img src={topcv} alt="" style={{ height: props.height }} />
    </div>
  </NavLink>
);

export default logo;