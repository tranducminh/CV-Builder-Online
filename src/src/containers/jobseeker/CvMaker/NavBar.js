import React from 'react';
import Logo from '../../../components/Logo/Logo';
import styles from './NavBar.scss'
class NavBar extends React.Component {



    render() {
        return (
            <div className={styles.navbar}>
                <div className={styles.navbar_edit}>
                <form className={styles.form}>
                    <a className={`btn ${styles.btn__cancel} `}>Cancel</a>
                    <a className={`btn ${styles.btn__save} `}>Save</a>
                </form>
                </div>
            </div>
        )
    }
}
export default NavBar;