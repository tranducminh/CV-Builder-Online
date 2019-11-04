import React from 'react'
import Logo from '../../components/Logo/Logo'
import styles from './Footer.scss'


class Footer extends React.Component{
    render() {
        return(
            <div className={`${styles.footer}`}>a1aaaaa
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
                            <a>Doanh nghiệp</a>
                            <a>Đoàn thể, CLB</a>
                            <a>Trường Đại học</a>
                            <a>Bất động sản</a>
                        </div>
                        <div className={`${styles.contact_us}`}>
                            <h5>Liên hệ</h5>
                            <div>
                                <a><i class="fab fa-facebook-f"></i></a>
                                <a><i class="fab fa-instagram"></i></a>
                                <a><i class="fab fa-twitter"></i></a>
                                <a><i class="fab fa-google-plus-g"></i></a>
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
                        <a>Việc làm</a>
                        <a>Tạo CV</a>
                        <a>Khám phá</a>
                        <a>Công ty</a>
                        <a>Tư vấn</a>
                        <a>Profile</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;