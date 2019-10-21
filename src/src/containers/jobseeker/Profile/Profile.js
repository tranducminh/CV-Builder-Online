import React from 'react';
import styles from './Profile.scss';

class Profile extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={`profileMain ${styles.Main}`}>
                    <div className={`container ${styles.Container}`}>
                        <div className={`row`}>
                            <div className={`col-md-8`}>
                                <div className="Cover">
                                    <img className="img-responsive" src="https://www.topcv.vn/images/profile_default_cover.jpg" />
                                </div>
                                <div className="profileBg">
                                    <div className="profile-Header">
                                        <div className={`col-sm-5 ${styles.profile__img}`}>
                                            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" />
                                            <div className="edit__btn">Edit Profile</div>
                                        </div>
                                        <div className={`col-sm-7 ${styles.profile__name}`}>
                                            <div><h4>Nguyễn Tiến Toàn</h4></div>
                                            <div><h5>Hà Nội</h5></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="profileInfo"></div>
                                <div className={` About `}>
                                    <div className="AboutInfo">
                                        <h5>About</h5>
                                        <div className="About__info">
                                            <p>Student</p>
                                            <p>Single</p>
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Profile;