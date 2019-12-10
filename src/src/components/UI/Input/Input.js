import React from 'react';
import styles from './Input.scss';

const input = (props) => {


  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder={props.placeholder} name={props.name} contenteditable="true" />
    </div>
  )

};

export default input;
