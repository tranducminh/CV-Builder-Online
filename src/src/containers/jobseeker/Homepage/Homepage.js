import React from 'react';
import SearchBar from './../../../components/SearchBar/SearchBar';
import Profile from './../Profile/Profile';
import CVbuild from './../CVbuild/CVbulid';
import CvMaker from './../CvMaker/CvMaker';
import Test from './../Test/Test';
import CvMaker1 from './../CvMaker1/CvMaker1'
import HomePage1 from './../HomePage1/HomePage1'
class Homepage extends React.Component {

    render(){
        return(
            <React.Fragment>
                {/* <SearchBar /> */}
                {/* <Test /> */}
               
                <HomePage1 />
                </React.Fragment>
        )
    }
}

export default Homepage;