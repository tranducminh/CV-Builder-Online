import React from 'react';
import Logo from '../../../components/Logo/Logo';
import styles from './Menu.scss';
class Menu extends React.Component {
    render() {
        return (
            <div className={`container-fuild ${styles.Menu}`}>
                <nav className={`navbar-expand-md  ${styles.NavbarCustom}`}>
                <div className="container">
                    <div className="navbar-brand" href="#">
                        <Logo />
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                        <a><i className="fas fa-bars"></i></a>
                    </button>
                    <div id="navbarNavDropdown" className="navbar-collapse">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a href="" className="active">Việc làm</a></li>
                            <li className="nav-item">
                                <a>Tạo CV</a></li>
                            <li className="nav-item">
                                <a>Khám phá</a>
                            </li>
                            <li className="nav-item"><a>Công ty</a></li>
                            <li className="nav-item"><a>Tư vấn</a></li>
                            <li className="nav-item"><a>TạoCV Profile</a></li>

                            <li className="dropdown">
                                <a>
                                    <img></img>
                                </a>
                            </li>
                            <li className="nav-notification">
                                <a>
                                    <i className="fa fa-bell noti-icon"></i>
                                </a>
                            </li>
                            <li className="nav-btn">
                                <a>
                                    <span className="text-white">NHÀ TUYỂN DỤNG</span><br />
                                    <span className="text-white normal">Đăng tuyển & Tìm hồ sơ</span>
                                </a>
                            </li>

                        </ul>

                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;