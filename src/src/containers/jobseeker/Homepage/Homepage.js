import React from 'react';
import styles from './Homepage.scss';
import SearchBar from './../../../components/SearchBar/SearchBar';
import Profile from './../Profile/Profile';
import CVbuild from './../CVbuild/CVbulid';
import CvMaker from './../CvMaker/CvMaker';
// import Test from './../Test/Test';
import TopBar from './../CvMaker/TopBar'
import NavBar from './../CvMaker/NavBar'
import CvMaker1 from './../CvMaker1/CvMaker1'
import HomePage1 from './../HomePage1/HomePage1'
import HomePage2 from './../HomePage2/HomePage2'
class Homepage extends React.Component {

    render(){
        return(
            <React.Fragment>
                {/* <HomePage1 /> */}
                <div className={styles.header}>
                    <TopBar />
                    <NavBar /> 
                </div>
                <CvMaker1 />
                <CvMaker />

                </React.Fragment>
        )
    }
}

export default Homepage;