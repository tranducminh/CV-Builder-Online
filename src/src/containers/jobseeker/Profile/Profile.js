import React from 'react';
import styles from './Profile.scss';
import avt from './../../../assets/image/avt.png';

class Profile extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={`profileMain ${styles.Main}`}>
                    <div className={`container ${styles.wrapper}`}>
                        <div className={styles.left}>
                            <img src={avt} alt="user"  />
                            <h4>Nguyễn Tiến Toàn</h4>
                            <p>UI Developer</p>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.info}>
                                <h3>Information</h3>
                                <div className={styles.info_data}>
                                    <div className={styles.data}>
                                        <h4>Email</h4>
                                        <p>toanleaderuet@gmail.com</p>
                                    </div>
                                    <div className={styles.data}>
                                        <h4>Phone</h4>
                                        <p>0368604656</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projects}>
                                <h3>Projects</h3>
                                <div className={styles.projects_data}>
                                    <div className={styles.data}>
                                        <h4>Recent</h4>
                                        <p>Nothing</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={styles.rfPassword}>
                                <h3>Reset Password</h3>
                                <label>Current Password</label>
                                <div className={styles.passwordForm}>
                                    <input type="password" id="password" name="_password" className={styles.password} />
                                </div>
                                <label>Password</label>
                                <div className={styles.passwordForm}>
                                    <input type="password" id="password" name="_password" className={styles.password} />
                                </div>
                                <label>Repeat Password</label>
                                <div className={styles.passwordForm}>
                                    <input type="password" id="password" name="_password" className={styles.password} />
                                </div>
                                <a >
                                    <button type="submit" >Update</button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Profile;