import React from 'react';
import styles from './HomePage1.scss'
import Logo from '../../../components/Logo/Logo';
import Slideshow from './Slideshow';
import HomePage2 from '../HomePage2/HomePage2';
class Homepage1 extends React.Component {
        

    render() {
        return (
            <div className={styles.hero}>
                {/* <Menu /> */}
                <div className="container">
                    <div  className={`row ${styles.row}`}>
                        <div className="col-md-12">
                            <h1>Tạo nên một hình ảnh chuyên nghiệp. </h1>
                            <h1>Ấn tượng với nhà tuyển dụng.</h1>
                            <p>Xây dựng một sơ yếu lý lịch đẹp trong vài phút để có được công việc mơ ước của bạn.</p>
                            <form >
                                <button type="submit" className={`btn ${styles.btn__build} `}>Tạo Hồ Sơ     </button>
                            </form>
                        </div>
                    </div>
                </div>            
                <Slideshow />
                <HomePage2 />
            </div>
        )
    }
}

export default Homepage1;