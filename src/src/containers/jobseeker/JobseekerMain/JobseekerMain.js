import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from '../HomePage1/HomePage1';
import CV1 from '../CvMaker/CvMaker';
import CV2 from '../CvMaker1/CvMaker1';
import Login from './../../Login/Login';
import SignUp from './../../SignUp/SignUp';
import Profile from './../Profile/Profile';
import Menu from '../Menu/Menu';
import Footer from './../../Footer/Footer';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';

class JobseekerMain extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <React.Fragment>
                <Menu />
                <Switch>
                    <Route path='/' exact component={Homepage} />
                    <Route path='/cv1' component={CV1} />
                    <Route path='/cv2' component={CV2} />
                    <Route path={process.env.REACT_APP_PATH_LOGIN} component={Login} />
                    <Route path={process.env.REACT_APP_PATH_SIGNUP} component={SignUp} />
                    <Route path={process.env.REACT_APP_PATH_PROFILE} component={Profile} />
                    <Route component={NotFoundPage} />
                </Switch>
                {/* <Footer/> */}
                </React.Fragment>
        )
    }
}

export default JobseekerMain;