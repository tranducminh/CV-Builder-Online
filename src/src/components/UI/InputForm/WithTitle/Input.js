import React from 'react';
import styles from './Input.scss';

const input = (props) => {

    return (
        <div className={styles.container}>
            <b className = {styles.title}>{props.title}</b>
            <input type = {props.type} className={styles.input} onChange={props.changed} placeholder={props.placeholder} name={props.name} />
        </div>
    )

};

export default input;
