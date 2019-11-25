import React from 'react';
import styles from './Cvbuild.scss';
import CVBuildBox from './CVbuildBox';
import CVpreview from '../CVpreview/CVpreview';

class CVbulid extends React.Component {
    constructor() {
        super()
        this.state = {
            data:[{
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv1_blue_new.png",
                tittle:"Mẫu CV Hiện Đại",
                displayPreview: false
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv4_black_new.png",
                tittle:"Mẫu CV Chuyên Nghiệp",
                displayPreview: false
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv7_green.png",
                tittle:"Mẫu CV Cao Cấp",
                displayPreview: false
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv5_black.png",
                tittle:"Mẫu CV Sáng Tạo",
                displayPreview: false
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv3_pink_new.png",
                tittle:"Mẫu CV Ấn Tượng",
                displayPreview: false
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv8_violet.png",
                tittle:"Mẫu CV Nổi Bật",
                displayPreview: false
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv2_black_new.png",
                tittle:"Mẫu CV Cổ Điển",
                displayPreview: false
            },
            {
                image:"https://cdn.timviecnhanh.com/asset/home/img/cv_pattern/cv2_black_new.png",
                tittle:"Mẫu CV Thanh Lịch",
                displayPreview: false
            }],
            
        }
    }
    showPreviewCV(item){
        if(!item.displayPreview){
            item.displayPreview = true
        }
        
       //this.displayPreview ? className :null
        console.log(item.displayPreview)
        console.log(item.tittle)

        
    }
    render() {
        return (
            <div className={`${styles.cv__section}`}>
                <div className={` container ${styles.inner__width}`}>
                    <h1>Danh sách mẫu CV xin việc hay nhất cho bạn</h1>
                    <div className={`${styles.boder}`}></div>
                    <div className={`${styles.cv}`}>
                        {this.state.data.map((item,key) => (
                            <div key={ key } className={`${styles.cv_box}`} onClick={()=> this.showPreviewCV(item)}>
                                <CVBuildBox img={ item.image } tittle={ item.tittle } />
                                {item.displayPreview ?
                                    <CVpreview img={ item.image} tittle={ item.tittle} />
                                    :null
                                }
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