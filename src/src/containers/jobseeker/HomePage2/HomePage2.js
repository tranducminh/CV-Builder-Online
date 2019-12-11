import React from 'react';
import styles from './HomePage2.scss';
import img1 from '../../../assets/image/feature1.png';
import img2 from '../../../assets/image/feature2.png';
class Homepage2 extends React.Component {


    render() {
        return (
            <div className={`feature ${styles.feature}`}>
                <div className={`container ${styles.container}`}>
                    <div className={` row ${styles.row}`}>
                        <div className={styles.row1}>
                            <div className={styles.feature_info}>
                                <h2>Những mẫu thiết kế đẹp</h2>
                                <p>Bạn cần CV sáng tạo, chuyên nghiệp hay đầy màu sắc, chúng tôi sẽ giúp bạn.</p>
                            </div>
                            <div className={styles.feature_img}>
                                <img className={styles.imgHomePage} src={img1} />
                            </div>

                        </div>
                    </div>
                    <div className={`row ${styles.row}`}>
                        <div className={styles.row2}>
                        <div className={styles.feature_img}>
                                <img className={styles.imgHomePage} src={img2} />
                            </div>
                            <div className={styles.feature_info}>
                                <h2>Dễ dàng chia sẻ</h2>
                                <p>Xuất ra PDF hoặc dùng URL để gửi qua Email hay Mạng Xã Hội.</p>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage2;