import React from 'react'
import styles from './CVpreview.scss'

class CVpreview extends React.Component{
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.cv_preview}>
                    <a className={styles.cvpreview_exit}><i class="fas fa-times"></i></a>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <img src="https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv2_black_new.png"></img>
                        </div>
                        <div className={styles.right}>
                            <h5>Mẫu CV Hiện Đại</h5>
                            <span>Thay đổi màu:</span>
                            <a className={styles.cv_color} style={{ backgroundColor: "rgb(20, 141, 95)"}}></a>
                            <a className={styles.cv_color} style={{ backgroundColor: "rgb(61, 134, 177)"}}></a>
                            <a className={styles.cv_color} style={{ backgroundColor: "rgb(168, 117, 41)"}}></a>
                            <a className={styles.cv_color} style={{ backgroundColor: "rgb(208, 211, 45)"}}></a>
                            <button>DÙNG MẪU NÀY</button>
                            <a className={styles.cv_like}>Thêm vào mục yêu thích</a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CVpreview;