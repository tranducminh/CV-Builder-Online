import React from 'react'
import { Slide } from 'react-slideshow-image'
import img1 from './../../../assets/image/cv1.png'
import img2 from './../../../assets/image/cv2.png'
import img3 from './../../../assets/image/cv3.png'
import styles from './Slide.scss';


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
class Slideshow extends React.Component {
    render(){
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}
}

export default Slideshow;