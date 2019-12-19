import React from 'react';
import styles from './Title.scss';

const title = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <i className={props.icon}></i>
            </div>
            <div className={styles.title}>
                <div className={styles.line}></div>
                <h3 className = {styles.name}>{props.title}</h3>
            </div>
        </div>
    )
}

export default title;