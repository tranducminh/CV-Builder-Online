import React from 'react';
import styles from './HomePage1.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../../components/Logo/Logo';
import Slideshow from './Slideshow';
import Footer from './../../Footer/Footer'
import HomePage2 from '../HomePage2/HomePage2';
class Homepage1 extends React.Component {


    render() {
        return (
            <div>
                <div className={styles.hero}>
                    {/* <Menu /> */}
                    <div className="container">
                        <div className={`row ${styles.row}`}>
                            <div className="col-md-12">
                                <h1>Tạo nên một hình ảnh chuyên nghiệp. </h1><br />
                                <h1>Ấn tượng với nhà tuyển dụng.</h1>
                                <p>Xây dựng một sơ yếu lý lịch đẹp trong vài phút để có được công việc mơ ước của bạn.</p>
                                <form >
                                    <button type="submit" className={`btn ${styles.btn__build} `}>
                                        <NavLink to={process.env.REACT_APP_PATH_CVCHOOSE}>
                                            Tạo Hồ Sơ
                                        </NavLink>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Slideshow />

                </div>
                <HomePage2 />
                <Footer />
            </div>

        )
    }
}

export default Homepage1;