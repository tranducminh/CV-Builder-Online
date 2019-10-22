import React from 'react';

import styles from './CvMaker.scss';
class CVMaker extends React.Component {
    render() {
        return (
            // <div className={`${styles.test}`} placeholder="Type something..." contenteditable="true"></div>
            <div className={`container ${styles.container}`}>
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
                            </div>
                            <div className={`${styles.CVMaker__left__info__job}`}>
                                <input className={`change ${styles.change}`} placeholder="NHẬP TIÊU ĐỀ CV" contenteditable="true" />
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
                                <p className={`${styles.changeline}`}>
                                    <b>Giới tính</b>
                                    <input className={`change ${styles.change1}`} placeholder="Nam" contenteditable="true" datatype="select" />
                                </p>
                                <p className={`${styles.changeline}`}>
                                    <b>Ngày sinh</b>
                                    <input className={`change ${styles.change1}`} placeholder="Nam" contenteditable="true" datatype="select" />
                                </p>
                                <p className={`${styles.changeline}`}>
                                    <b>Email</b>
                                    <input className={`change ${styles.change1}`} placeholder="Nam" contenteditable="true" datatype="select" />
                                </p>
                                <p className={`${styles.changeline}`}>
                                    <b>Điện thoại</b>
                                    <input className={`change ${styles.change1}`} placeholder="Nam" contenteditable="true" datatype="select" />
                                </p>
                                <p className={`${styles.changeline}`}>
                                    <b>Địa chỉ</b>
                                    <input className={`change ${styles.change1}`} placeholder="Nam" contenteditable="true" datatype="select" />
                                </p>
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
                                <input className={`change ${styles.change2}`} placeholder="Nhập kĩ năng" contenteditable="true" />
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
                                <input className={`change ${styles.change2}`} placeholder="Nhập sở thích" contenteditable="true" />
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
                                <input className={`change ${styles.change2}`} placeholder="Nhập mục tiêu nghề nghiệp" contenteditable="true" />
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
                            <div className={`${styles.CVMaker__left__info__job}`}>
                                <input className={`change ${styles.change2}`} placeholder="Nhập sở thích" contenteditable="true" />
                            </div>
                        </div>
                        <div className={`box ${styles.CVMaker__left__like}`}>
                        <div className={`icon ${styles.icon}`}>
                        <i className="fas fa-graduation-cap"></i>
                            </div>
                        
                            <div className={`nameBox ${styles.CVMaker__left__info__name}`}>
                                <span className={`${styles.line}`}></span>
                                <h3>HỌC VẤN</h3>
                            </div>
                            <div className={`${styles.CVMaker__left__info__job}`}>
                                <input className={`change ${styles.change2}`} placeholder="Nhập sở thích" contenteditable="true" />
                            </div>
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
                            <div className={`${styles.CVMaker__left__info__job}`}>
                                <input className={`change ${styles.change2}`} placeholder="Nhập sở thích" contenteditable="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CVMaker;