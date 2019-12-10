import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../components/Logo/Logo';
import styles from './Menu.scss';
class Menu extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={`container ${styles.container}`}>
                    <div className={`row ${styles.row}`}>
                        <div className="col-sm-12">
                            <div className="float-left">
                                <Logo height="3em" width="160px" id="logo" />
                            </div>
                            <div className={`float-right ${styles.float__right} `}>
                                <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>
                                    <div className={`btn ${styles.btn__register} `}>Sign up</div>
                                </NavLink>
                                <NavLink to={process.env.REACT_APP_PATH_LOGIN}>
                                    <div className={`btn ${styles.btn__login} `}>Log in</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;