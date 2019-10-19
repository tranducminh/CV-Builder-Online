import React from 'react';
import styles from './Button.scss';

const Button = (props) => {
    return (
        <div className={styles.container}>

            <div {...props.elementConfig} className={`search`}>
                <i className={`fa fa-search ${styles.icon}`}></i>
                <span>Tìm</span>
            </div>

        </div>
    )

};

export default Button;
