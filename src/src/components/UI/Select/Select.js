import React from 'react';
import styles from './Select.scss';

const select = (props) => {


    return (
        <div className={`col-lg-3 ${styles.container}`}>

            <select {...props.elementConfig} className={`${props.class}`} />
            <i className={`fa fa-angle-down ${styles.icon}`}></i>
            
    </div>
    )

};

export default select;
