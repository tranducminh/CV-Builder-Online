import React from 'react';
import Education from '../Test/Education';
import Experience from './../Test/Experience';
import Input from '../../../components/UI/Input/Input';
import InputWithTitle from '../../../components/UI/InputForm/WithTitle/Input';
import styles from './CvMaker.scss';
class CVMaker extends React.Component {



    render() {
        return (
            <div className={`  ${styles.container}`}>
                <div className={`row ${styles.CvMaker}`}>
                    <div className={`${styles.CvMaker__left}`}>
                        <div className={`${styles.CVMaker__left__avatar}`}>
                            <img src="https://cdn.timviecnhanh.com/asset/home/img/small-avatar1.png" />
                            <div className={`${styles.btnChange}`}>
                                <i className="fa fa-camera"></i>
                                Chọn ảnh
                        </div>
                        </div>
                        <div className={`box ${styles.CVMaker__left__user}`}>

                            <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                                <span className={`${styles.line}`}></span>
                                <h3>Nguyễn Tiến Toàn</h3>
                                {/* <Input placeholder="Nguyễn Tiến Toàn" /> */}
                            </div>
                            <div className={`${styles.CVMaker__left__info__job}`}>
                                <Input placeholder="NHẬP TIÊU ĐỀ CV" />
                            </div>

                        </div>
                        <div className={`box ${styles.CVMaker__left__info}`}>
                            <div className={`icon ${styles.icon}`}>
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                                <span className={`${styles.line}`}></span>
                                <h3>THÔNG TIN</h3>
                            </div>
                            <div className={`${styles.CVMaker__left__info__job}`}>
                                <InputWithTitle title="Giới tính" placeholder="Nam" />
                                <InputWithTitle title="Ngày sinh" placeholder="16-07-1999" />
                                <InputWithTitle title="Email" placeholder="toanleaderuet@gmail.com" />
                                <InputWithTitle title="Điện thoại" placeholder="0368604656" />
                                <InputWithTitle title="Địa chỉ" placeholder="63/1/33 Trần Quốc Vượng" />
                            </div>
                        </div>
                        <div className={`box ${styles.CVMaker__left__skill}`}>
                            <div className={`icon ${styles.icon}`}>
                                <i className="fas fa-chart-bar"></i>
                            </div>
                            <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                                <span className={`${styles.line}`}></span>
                                <h3>KĨ NĂNG</h3>
                            </div>
                            <div className={`${styles.CVMaker__left__info__job}`}>
                                <Input placeholder="Nhập kĩ năng" />
                            </div>
                        </div>
                        <div className={`box ${styles.CVMaker__left__like}`}>
                            <div className={`icon ${styles.icon}`}>
                                <i className="fas fa-heart"></i>
                            </div>

                            <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                                <span className={`${styles.line}`}></span>
                                <h3>SỞ THÍCH</h3>
                            </div>
                            <div className={`${styles.CVMaker__left__info__job}`}>
                                <Input placeholder="Nhập sở thích" />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.CvMaker__right}`}>
                        <div className={`box ${styles.CVMaker__left__like}`}>
                            <div className={`icon ${styles.icon}`}>
                                <i className="fas fa-folder-open"></i>
                            </div>

                            <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                                <span className={`${styles.line}`}></span>
                                <h3>MỤC TIÊU</h3>
                            </div>
                            <div className={`${styles.CVMaker__left__info__job}`}>
                                <Input placeholder="Nhập mục tiêu nghề nghiệp" />
                            </div>
                        </div>
                        <div className={`box ${styles.CVMaker__left__like}`}>
                            <div className={`icon ${styles.icon}`}>
                                <i className="fas fa-briefcase"></i>
                            </div>

                            <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                                <span className={`${styles.line}`}></span>
                                <h3>KINH NGHIỆM</h3>
                            </div>
                            <Experience name="" />
                        </div>
                        <div className={`box ${styles.CVMaker__left__like}`}>
                            <div className={`icon ${styles.icon}`}>
                                <i className="fas fa-graduation-cap"></i>
                            </div>

                            <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                                <span className={`${styles.line}`}></span>
                                <h3>HỌC VẤN</h3>
                            </div>
                            <Education />
                        </div>
                        <div className={`box ${styles.CVMaker__left__like}`}>
                            <div className={`icon ${styles.icon}`}>
                                <i className="fas fa-laptop"></i>
                            </div>

                            <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                                <span className={`${styles.line}`}></span>
                                <h3>TIN HỌC</h3>
                            </div>
                            <div className={`${styles.CVMaker__left__info__job}`}>
                                <input className={`change ${styles.change2}`} placeholder="Nhập sở thích" contenteditable="true" />
                            </div>
                        </div>

                        <div className={`box ${styles.CVMaker__left__like}`}>
                            <div className={`icon ${styles.icon}`}>
                                <i className="fas fa-headphones-alt"></i>
                            </div>

                            <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                                <span className={`${styles.line}`}></span>
                                <h3>TIẾNG ANH</h3>
                            </div>
                            {/* <div className={`${styles.CVMaker__left__info__job}`} >
                                <input  type="text" 
                                        name="name"
                                className={`change ${styles.change2}`} placeholder="Nhập sở thích" contenteditable="true" />
                            </div> */}
                            <Education />
                        </div>
                    </div>
                </div>
                {/* <div className={styles.sideBar}>
                    <div className={styles.sideBar__templates}>
                        <h3>TemPlates</h3>
                        <div className={styles.templates_list}>
                            <div className={styles.templates_item}>
                                <div className={styles.template}>
                                    <img className={styles.tempalte_img} src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv2_black_new.png" height="160px" />
                                </div>
                            </div>
                            <div className={styles.templates_item}>
                                <div className={styles.template}>
                                    <img className={styles.tempalte_img} src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv6_black.png" height="160px" />
                                </div>
                            </div>
                            <div className={styles.templates_item}>
                                <div className={styles.template}>
                                    <img className={styles.tempalte_img} src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv8_violet.png" height="160px" />
                                </div>
                            </div>
                            <div className={styles.templates_item}>
                                <div className={styles.template}>
                                    <img className={styles.tempalte_img} src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv2_black_new.png" height="160px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div> */}
            </div>
        )
    }
}

export default CVMaker;