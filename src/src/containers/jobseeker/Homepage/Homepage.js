import React from 'react';
import SearchBar from './../../../components/SearchBar/SearchBar';
import Profile from './../Profile/Profile';
import CVbuild from './../CVbuild/CVbulid'
class Homepage extends React.Component {
    render(){
        return(
            <React.Fragment>
                <SearchBar />
                <CVbuild />
                </React.Fragment>
        )
    }
}

export default Homepage;