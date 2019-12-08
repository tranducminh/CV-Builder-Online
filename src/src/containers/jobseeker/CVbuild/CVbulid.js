import React from 'react';
import styles from './Cvbuild.scss';
class CVbulid extends React.Component {
    render() {
        return (
            <div className={`${styles.cv__section}`}>
                <div className={` container ${styles.inner__width}`}>
                    <h1>Danh sách mẫu CV xin việc hay nhất cho bạn</h1>
                    <div className={`${styles.boder}`}></div>
                    <div className={`row ${styles.cv}`}>
                        <div className={`col-sm-4 ${styles.cv__flex}`}>
                            <a className="image">
                                <img src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv1_blue_new.png" />
                            </a>
                            <div className={`${styles.cvTitle}`}>
                                <h2>Mẫu CV Hiện Đại</h2>
                            </div>
                        </div>
                        <div className={` col-sm-4 ${styles.cv__flex}`}>
                            <a className="image">
                                <img src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv4_black_new.png" />
                            </a>
                            <div className={`${styles.cvTitle}`}>
                                <h2>Mẫu CV Chuyên Nghiệp</h2>
                            </div>
                        </div>
                        <div className={` col-sm-4 ${styles.cv__flex}`}>
                            <a className="image">
                                <img src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv7_green.png" />
                            </a>
                            <div className={`${styles.cvTitle}`}>
                                <h2>Mẫu CV Cao Cấp</h2>
                            </div>
                        </div>
                        <div className={`col-sm-4 ${styles.cv__flex}`}>
                            <a className="image">
                                <img src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv5_black.png" />
                            </a>
                            <div className={`${styles.cvTitle}`}>
                                <h2>Mẫu CV Sáng Tạo</h2>
                            </div>
                        </div>
                        <div className={`col-sm-4 ${styles.cv__flex}`}>
                            <a className="image">
                                <img src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv3_pink_new.png" />
                            </a>
                            <div className={`${styles.cvTitle}`}>
                                <h2>Mẫu CV Ấn Tượng</h2>
                            </div>
                        </div>
                        <div className={`col-sm-4 ${styles.cv__flex}`}>
                            <a className="image">
                                <img src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv8_violet.png" />
                            </a>
                            <div className={`${styles.cvTitle}`}>
                                <h2>Mẫu CV Nổi Bật</h2>
                            </div>
                        </div>
                        <div className={`col-sm-4 ${styles.cv__flex}`}>
                            <a className="image">
                                <img src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv6_black.png" />
                            </a>
                            <div className={`${styles.cvTitle}`}>
                                <h2>Mẫu CV Tiêu Chuẩn</h2>
                            </div>
                        </div>
                        <div className={`col-sm-4 ${styles.cv__flex}`}>
                            <a className="image">
                                <img src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv2_black_new.png" />
                            </a>
                            <div className={`${styles.cvTitle}`}>
                                <h2>Mẫu CV Cổ Điển</h2>
                            </div>
                        </div>
                        {/* <div className={`col-lg-3 col-md-5 ${styles.cv__flex}`}>
                            <a className="image">
                                <img src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv2_black_new.png" />
                            </a>
                            <div className={`${styles.cvTitle}`}>
                                <h2>Mẫu CV Thanh Lịch</h2>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default CVbulid;