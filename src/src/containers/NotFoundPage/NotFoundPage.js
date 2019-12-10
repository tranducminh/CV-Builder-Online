import React, { Component } from 'react';
import styles from './NotFoundPage.scss';

export default class NotFoundPage extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    404 Page Not Found
                </div>
            </div>
        )
    }
}
