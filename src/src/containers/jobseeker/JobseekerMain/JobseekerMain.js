import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Homepage from '../Homepage/Homepage';
import Menu from '../Menu/Menu';
import SubMenu from '../subMenu/SubMenu'
import Footer from '../../Footer/Footer'

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
                <SubMenu />
                <Switch>
                    <Route path='/' exact component={Homepage} />
                </Switch>
                <Footer />
                </React.Fragment>
        )
    }
}

export default JobseekerMain;