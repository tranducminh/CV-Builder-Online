import React from 'react';
import styles from './Input.scss';

const input = (props) => {


  return (
    <div className={` col-lg-6 ${styles.container}`}>
      <i className={`fas fa-search ${styles.icon}`}></i>
      <input {...props.elementConfig} className={` ${props.class} `}/>
    </div>
  )

};

export default input;
