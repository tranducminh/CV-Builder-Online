import React from 'react';
import styles from './Cvbuild.scss';
import CVBuildBox from './CVbuildBox'

class CVbulid extends React.Component {
    constructor() {
        super()
        this.state = {
            data:[{
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv1_blue_new.png",
                tittle:"Mẫu CV Hiện Đại"
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv4_black_new.png",
                tittle:"Mẫu CV Chuyên Nghiệp"
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv7_green.png",
                tittle:"Mẫu CV Cao Cấp"
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv5_black.png",
                tittle:"Mẫu CV Sáng Tạo"
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv3_pink_new.png",
                tittle:"Mẫu CV Ấn Tượng"
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv8_violet.png",
                tittle:"Mẫu CV Nổi Bật"
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv2_black_new.png",
                tittle:"Mẫu CV Cổ Điển"
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv2_black_new.png",
                tittle:"Mẫu CV Thanh Lịch"
            }]
        }
    }
    render() {
        return (
            <div className={`${styles.cv__section}`}>
                <div className={` container ${styles.inner__width}`}>
                    <h1>Danh sách mẫu CV xin việc hay nhất cho bạn</h1>
                    <div className={`${styles.boder}`}></div>
                    <div className={`${styles.cv}`}>
                        {this.state.data.map((item,key) => (
                            <div key={ key } className={`${styles.cv_box}`}>
                                <CVBuildBox img={ item.image } tittle={ item.tittle } />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CVbulid;