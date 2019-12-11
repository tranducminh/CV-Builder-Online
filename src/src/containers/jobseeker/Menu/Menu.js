import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../components/Logo/Logo';
import styles from './Menu.scss';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
class Menu extends React.Component {
    componentDidMount() {
        this.props.getUserInfo();
        debugger;
    }
    componentDidUpdate(prevProps){
        if (this.props.isAuth && this.props.isAuth != prevProps.isAuth) {
            console.log(this.props.isAuth);
            debugger;
        }
    }
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
                                {!this.props.isAuth
                                    ? <React.Fragment>
                                        <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>
                                            <div className={`btn ${styles.btn__register} `}>Sign up</div>
                                        </NavLink>
                                        <NavLink to={process.env.REACT_APP_PATH_LOGIN}>
                                            <div className={`btn ${styles.btn__login} `}>Log in</div>
                                        </NavLink>
                                    </React.Fragment>
                                    : <React.Fragment>
                                        <div onClick = {() => this.props.signOut}>
                                            <NavLink to='/'>
                                                <div className={`btn ${styles.btn__login} `} >Sign out</div>
                                            </NavLink>
                                        </div>
                                    </React.Fragment>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    userInfo: state.auth.userInfo
})
const mapDispatchToProps = dispatch => ({
    getUserInfo: () => dispatch(actions.getUserInfo()),
    signOut: () => dispatch(actions.signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);