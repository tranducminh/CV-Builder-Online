import React from 'react';
import styles from './SubMenu.scss';
class SubMenu extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={`container-fuild ${styles.SubMenu} `}>
                    <nav className={`navbar-expand-md ${styles.NavbarCustom}`}>
                        <div className="container">
                            <div className="navbar-header">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#subMenu" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
                                    <a href="#"><i class="fas fa-bars"></i></a>
                                </button>
                            </div>
                            <div id="subMenu" className="navbar-collapse">
                                <ul className="navbar-nav ">
                                    <li className="nav-item">
                                        <a className="active">Tìm việc làm</a></li>
                                    <li className="nav-item">
                                        <a>Việc làm top công ty</a></li>
                                    <li className="nav-item">
                                        <a>Việc làm phù hợp</a>
                                    </li>
                                    <li className="nav-item"><a>Việc làm đã lưu</a></li>
                                    <li className="nav-item"><a>Việc là, đã ứng tuyển</a></li>
                                    {/* <li className="nav-item"><a>Cài đặt gợi ý việc làm</a></li> */}

                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default SubMenu;