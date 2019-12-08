import React from 'react';
import Logo from '../../../components/Logo/Logo';
import styles from './TopBar.scss'
class TopBar extends React.Component {



    render() {
        return (
            <div className={styles.topbar}>
                <a className={styles.topbar_logo} href="/cv/">
                <Logo  height ="2em"/>
                </a>
                <ul className={styles.topbar_menu}>
                    <li className={`fas fa-file-alt ${styles.topbar_select}`}>
                        <a href="/cv/">My resumes</a>
                    </li>
                </ul>

                <ul className={styles.topbar_right}>
                    <li className={`fas fa-cog ${styles.topbar_setting}`}>
                        <a href="#">Account</a>
                    </li>
                    <li className={`fas fa-sign-out-alt ${styles.topbar_logout}`}>
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        )
    }
}
export default TopBar;