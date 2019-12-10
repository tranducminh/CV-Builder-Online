import React from 'react';
import styles from './Input.scss';

const input = (props) => {

    return (
        <div className={styles.container}>
            <b className = {styles.title}>{props.title}</b>
            <input className={styles.input} placeholder={props.placeholder} name={props.name} contenteditable="true" datatype="select"/>
        </div>
    )

};

export default input;
