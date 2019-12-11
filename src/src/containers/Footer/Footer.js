import React from 'react';
import Logo from '../../components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import styles from './Footer.scss';


class Footer extends React.Component{
    render() {
        return(
            <div className={`${styles.footer}`}>
                <div className={`container ${styles.container}`}>
                <div className={`${styles.footer_container}`}>
                    <div className={`${styles.box_left}`}>
                        <Logo height="2.5em"/>
                        <div>
                            <span>...Đăng tin tuyển dụng miễn phí, hiệu quả cao. Đăng tin tuyển dụng miễn phí, hiệu quả cao</span>
                        </div>
                    </div>
                    <div className={`${styles.box_content}`}>
                        <div className={`${styles.partner}`}>
                            <h5>Đối tác</h5>
                            <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>Doanh nghiệp</NavLink>
                            <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>Đoàn thể, CLB</NavLink>
                            <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>Trường Đại học</NavLink>
                            <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>Bất động sản</NavLink>
                        </div>
                        <div className={`${styles.contact_us}`}>
                            <h5>Liên hệ</h5>
                            <div>
                                <NavLink to={process.env.REACT_APP_PATH_SIGNUP}><i class="fab fa-facebook-f"></i></NavLink>
                                <NavLink to={process.env.REACT_APP_PATH_SIGNUP}><i class="fab fa-instagram"></i></NavLink>
                                <NavLink to={process.env.REACT_APP_PATH_SIGNUP}><i class="fab fa-twitter"></i></NavLink>
                                <NavLink to={process.env.REACT_APP_PATH_SIGNUP}><i class="fab fa-google-plus-g"></i></NavLink>
                            </div>
                            <span><i class="fas fa-phone-square"></i>  0999999999</span>
                            <span><i class="fas fa-map-marked-alt"></i>  số 79 Cầu Giấy Hà Nội</span>
                        </div>
                    </div>
                    <div className={`${styles.box_right}`}>
                        <h5>Bắt đầu ngay với email</h5>
                        <div>
                            <input type="text" placeholder="Nhập email" />
                            <button>Tiếp</button>
                        </div>
                    </div>
                </div>
                </div> 
                <div className={`${styles.copyright}`}>
                    <div className={`${styles.copyright_content}`}>
                        <span>© 2018 CvOnline.com. All Rights Reserved</span>
                    </div>
                    <div className={`${styles.quick_menu}`}>
                    
                        <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>Việc làm</NavLink>
                        <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>Tạo CV</NavLink>
                        <NavLink to={process.env.REACT_APP_PATH_SIGNUP} >Khám phá</NavLink>
                        <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>Công ty</NavLink>
                        <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>Tư vấn</NavLink>
                        <NavLink to={process.env.REACT_APP_PATH_SIGNUP}>Profile</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;