import React from 'react';
import SearchBar from './../../../components/SearchBar/SearchBar';
import Profile from './../Profile/Profile';
import CVbuild from './../CVbuild/CVbulid';
import CvMaker from './../CvMaker/CvMaker'
class Homepage extends React.Component {
    render(){
        return(
            <React.Fragment>
                <SearchBar />
                <CvMaker />
                </React.Fragment>
        )
    }
}

export default Homepage;