import React from 'react';
import styles from './HomePage1.scss'
import Logo from '../../../components/Logo/Logo';
import Slideshow from './Slideshow';
class Homepage1 extends React.Component {
        

    render() {
        return (
            <div className={styles.hero}>
                <div className={styles.header}>
                    <div className={`container ${styles.container}`}>
                        <div className={`row ${styles.row}`}>
                            <div className="col-sm-12">
                                <div className="float-left">
                                    <Logo height="3em" width="160px" href="/" id="logo" />
                                </div>
                                <div className={`float-right ${styles.float__right} `}>
                                    <a href="/register" className={`btn ${styles.btn__register} `}>Sign up</a>
                                    <a href="/login" className={`btn ${styles.btn__login} `}>Log in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



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
            </div>
        )
    }
}

export default Homepage1;